import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Heart, Beaker, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Diabetes Care: Latest Advances in Anti-Diabetic Formulations",
      excerpt: "Discover how innovative drug delivery systems are transforming diabetes management with enhanced bioavailability and patient compliance.",
      content: "Diabetes affects millions globally, and the pharmaceutical industry continues to innovate in developing more effective treatments. At Acmedix, our research focuses on creating advanced anti-diabetic formulations that offer superior bioavailability and improved patient outcomes. Our latest developments in sustained-release technologies have shown promising results in clinical trials, offering patients better glucose control with fewer daily doses. This breakthrough represents a significant step forward in making diabetes management more convenient and effective for patients worldwide.",
      category: "Anti-Diabetic",
      date: "December 15, 2024",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
      featured: true,
      icon: Heart,
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "The Future of Cardiac Care: Novel Drug Delivery Systems for Heart Health",
      excerpt: "Exploring breakthrough technologies in cardiovascular medicine that promise better therapeutic outcomes and reduced side effects.",
      content: "Cardiovascular diseases remain a leading cause of mortality worldwide. Our R&D team has been working tirelessly to develop novel drug delivery systems that can precisely target cardiac tissues while minimizing systemic side effects. Through our innovative liposomal delivery platforms and nanotechnology applications, we've achieved remarkable improvements in drug efficacy. These advances not only enhance therapeutic outcomes but also significantly reduce the dosing frequency, improving patient compliance and quality of life. Our commitment to cardiac care excellence continues to drive innovation in this critical therapeutic area.",
      category: "Cardiac Care",
      date: "December 10, 2024",
      readTime: "4 min read",
      author: "Dr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=400&fit=crop",
      featured: false,
      icon: Beaker,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Neurotherapy Breakthroughs: Advancing Treatment for Neurological Disorders",
      excerpt: "How cutting-edge research in neurological treatments is opening new possibilities for patients with complex neurological conditions.",
      content: "Neurological disorders present unique challenges in drug development due to the blood-brain barrier and complex pathophysiology. Our specialized neurotherapy research division has made significant strides in developing innovative formulations that can effectively cross the blood-brain barrier and deliver therapeutic agents directly to neural tissues. Through our advanced targeting systems and sustained-release technologies, we're able to provide more consistent therapeutic levels while reducing the frequency of administration. This research represents hope for millions of patients suffering from neurological conditions, offering improved symptom management and enhanced quality of life.",
      category: "Neurotherapy",
      date: "December 5, 2024",
      readTime: "6 min read",
      author: "Dr. Anil Mehta",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      featured: false,
      icon: Shield,
      color: "bg-green-500"
    }
  ];

  const categories = [
    { name: "All Posts", count: 3, active: true }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? 'btn-primary' : 'hover:bg-primary/10'} transition-colors`}
              >
                {category.name} ({category.count})
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
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${featuredPost.color} text-white text-sm font-semibold rounded-full`}>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-2 ${featuredPost.color} rounded-lg`}>
                      <featuredPost.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-primary font-semibold">{featuredPost.category}</span>
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
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`}>
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

          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <div 
                  className="card-pharmaceutical overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{ 
                    animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${post.color} text-white text-xs font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 ${post.color} rounded-lg`}>
                      <post.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-primary font-medium text-sm">{post.category}</span>
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
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-hover">
                      Read Blog
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;