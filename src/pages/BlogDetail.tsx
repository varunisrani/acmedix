import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Beaker, Shield, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchBlogPostBySlug, recordBlogView, BlogPost } from '@/lib/blogService';

// Icon mapping for categories
const iconMap: { [key: string]: any } = {
  'Heart': Heart,
  'Beaker': Beaker,
  'Shield': Shield
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      loadBlogPost(slug);
    }
  }, [slug]);

  const loadBlogPost = async (postSlug: string) => {
    setLoading(true);
    try {
      const post = await fetchBlogPostBySlug(postSlug);
      if (post) {
        setBlog(post);
        // Record the view
        recordBlogView(post.id);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <div className="h-8 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (notFound || !blog) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="btn-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Image Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={blog.featured_image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className={`inline-flex items-center px-4 py-2 ${blog.category_color} rounded-full mb-4`}>
              {iconMap[blog.category_icon] && 
                React.createElement(iconMap[blog.category_icon], { className: "h-5 w-5 mr-2" })
              }
              <span className="font-semibold">{blog.category_name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Blog Meta Information */}
          <div className="card-pharmaceutical p-8 mb-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{blog.author_name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(blog.published_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{blog.read_time} min read</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags && blog.tags.map((tag) => (
                <span 
                  key={tag.slug}
                  className="flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-lg text-muted-foreground italic">
                {blog.excerpt}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="card-pharmaceutical p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Author Bio */}
          <div className="card-pharmaceutical p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">About the Author</h3>
                <h4 className="text-lg font-semibold text-primary mb-2">{blog.author_name}</h4>
                {blog.author_title && (
                  <p className="text-sm text-muted-foreground font-medium mb-2">{blog.author_title}</p>
                )}
                <p className="text-muted-foreground leading-relaxed">{blog.author_bio}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Our Research?
            </h3>
            <p className="text-muted-foreground mb-6">
              Learn more about our pharmaceutical innovations and how we're making healthcare accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="btn-primary">
                  Explore Our R&D
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;