import { supabase } from './supabase';

// Types for blog data
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  read_time: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  category_name: string;
  category_slug: string;
  category_color: string;
  category_icon: string;
  author_name: string;
  author_email: string;
  author_bio: string;
  author_title: string;
  author_avatar: string;
  tags: { name: string; slug: string }[];
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  post_count?: number;
}

// Fetch all published blog posts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error fetching blog post:', error);
    return null;
  }
}

// Fetch a single blog post by ID (for backward compatibility)
export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('id', parseInt(id))
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching blog post by ID:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error fetching blog post by ID:', error);
    return null;
  }
}

// Fetch blog categories with post counts
export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  try {
    // First get categories
    const { data: categories, error: catError } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (catError) {
      console.error('Error fetching blog categories:', catError);
      return [];
    }

    // Then get post counts for each category
    const categoriesWithCounts = await Promise.all(
      (categories || []).map(async (category) => {
        const { count } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact', head: true })
          .eq('category_id', category.id)
          .eq('status', 'published');

        return {
          ...category,
          post_count: count || 0
        };
      })
    );

    return categoriesWithCounts;
  } catch (error) {
    console.error('Unexpected error fetching blog categories:', error);
    return [];
  }
}

// Fetch featured blog posts
export async function fetchFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('status', 'published')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching featured blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching featured blog posts:', error);
    return [];
  }
}

// Record blog post view (analytics)
export async function recordBlogView(postId: number): Promise<void> {
  try {
    await supabase
      .from('blog_post_views')
      .insert([
        {
          post_id: postId,
          ip_address: null, // You can get this from request if needed
          user_agent: navigator.userAgent
        }
      ]);
  } catch (error) {
    console.error('Error recording blog view:', error);
  }
}

// Subscribe to newsletter
export async function subscribeToNewsletter(email: string, name?: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          name: name || null
        }
      ]);

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return { success: false, error: 'Email already subscribed to newsletter' };
      }
      console.error('Error subscribing to newsletter:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error subscribing to newsletter:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}