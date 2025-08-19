import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Heart, Beaker, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, fetchBlogCategories, subscribeToNewsletter, BlogPost, BlogCategory } from '@/lib/blogService';

// Icon mapping for categories
const iconMap: { [key: string]: any } = {
  'Heart': Heart,
  'Beaker': Beaker,
  'Shield': Shield,
  'TrendingUp': TrendingUp
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    setLoading(true);
    try {
      const [posts, cats] = await Promise.all([
        fetchBlogPosts(),
        fetchBlogCategories()
      ]);
      
      setBlogPosts(posts);
      
      // Add "All Posts" category
      const allCategory: BlogCategory = {
        id: 0,
        name: 'All Posts',
        slug: 'all',
        description: 'All blog posts',
        color: 'bg-primary',
        icon: 'TrendingUp',
        post_count: posts.length
      };
      
      setCategories([allCategory, ...cats]);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    const result = await subscribeToNewsletter(newsletterEmail);
    
    if (result.success) {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } else {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category_slug === selectedCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-primary via-primary-hover to-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthcare <span className="text-white/90">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Stay updated with the latest developments in pharmaceutical research, chronic care innovations, and healthcare insights from our experts
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                className={`${selectedCategory === category.slug ? 'btn-primary' : 'hover:bg-primary/10'} transition-colors`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name} ({category.post_count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Featured <span className="gradient-text">Blog</span>
              </h2>
              <p className="text-xl text-muted-foreground">Our latest insights and research developments</p>
            </div>

            <div className="card-pharmaceutical overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img 
                    src={featuredPost.featured_image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${featuredPost.category_color} text-white text-sm font-semibold rounded-full`}>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-2 ${featuredPost.category_color} rounded-lg`}>
                      {iconMap[featuredPost.category_icon] && 
                        React.createElement(iconMap[featuredPost.category_icon], { className: "h-5 w-5 text-white" })
                      }
                    </div>
                    <span className="text-primary font-semibold">{featuredPost.category_name}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author_name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.published_at).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.read_time} min read</span>
                      </div>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button className="btn-primary group">
                      Read Full Blog
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Blog Posts */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground">Explore our pharmaceutical expertise and industry insights</p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card-pharmaceutical overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <div 
                    className="card-pharmaceutical overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    style={{ 
                      animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${post.category_color} text-white text-xs font-semibold rounded-full`}>
                          {post.category_name}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 ${post.category_color} rounded-lg`}>
                          {iconMap[post.category_icon] && 
                            React.createElement(iconMap[post.category_icon], { className: "h-4 w-4 text-white" })
                          }
                        </div>
                        <span className="text-primary font-medium text-sm">{post.category_name}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author_name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.read_time} min read</span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary-hover">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Beaker className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No Blog Posts Yet</h3>
              <p className="text-muted-foreground mb-6">
                We're working on publishing our latest pharmaceutical research and insights.
              </p>
              <Link to="/rnd">
                <Button className="btn-primary">
                  Explore Our R&D
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Healthcare Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest pharmaceutical research, industry trends, and healthcare innovations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                type="submit"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3"
                disabled={newsletterStatus === 'success'}
              >
                {newsletterStatus === 'success' ? '✓ Subscribed!' : 'Subscribe'}
              </Button>
            </form>
            
            {newsletterStatus === 'error' && (
              <p className="text-red-200 mt-4 text-center">
                Error subscribing. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;