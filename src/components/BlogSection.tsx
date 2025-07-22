import { Calendar, Clock, User, ArrowRight, Heart, Beaker, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Revolutionizing Diabetes Care: Latest Advances in Anti-Diabetic Formulations",
      excerpt: "Discover how innovative drug delivery systems are transforming diabetes management with enhanced bioavailability.",
      category: "Anti-Diabetic",
      date: "December 15, 2024",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=300&fit=crop",
      icon: Heart,
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "The Future of Cardiac Care: Novel Drug Delivery Systems",
      excerpt: "Exploring breakthrough technologies in cardiovascular medicine that promise better therapeutic outcomes.",
      category: "Cardiac Care",
      date: "December 10, 2024",
      readTime: "4 min read",
      author: "Dr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=300&fit=crop",
      icon: Beaker,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Neurotherapy Breakthroughs: Advancing Neurological Treatments",
      excerpt: "How cutting-edge research in neurological treatments is opening new possibilities for patients.",
      category: "Neurotherapy",
      date: "December 5, 2024",
      readTime: "6 min read",
      author: "Dr. Anil Mehta",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
      icon: Shield,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Healthcare <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay updated with the latest developments in pharmaceutical research, chronic care innovations, and healthcare insights from our experts
          </p>
          <Link to="/blog">
            <Button className="btn-primary">
              View All Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div 
                className="card-pharmaceutical overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${post.color} text-white text-xs font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-2 ${post.color} rounded-lg`}>
                      <post.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="text-primary hover:text-primary-hover transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Explore more insights on pharmaceutical innovations and healthcare trends
          </p>
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read More Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;