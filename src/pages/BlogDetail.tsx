import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Beaker, Shield, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const { id } = useParams();

  // Blog data - in a real app, this would come from an API or database
  const blogData = {
    "1": {
      id: 1,
      title: "Revolutionizing Diabetes Care: Latest Advances in Anti-Diabetic Formulations",
      content: `
        <p>Diabetes affects millions globally, and the pharmaceutical industry continues to innovate in developing more effective treatments. At Acmedix, our research focuses on creating advanced anti-diabetic formulations that offer superior bioavailability and improved patient outcomes.</p>

        <h2>The Challenge of Diabetes Management</h2>
        <p>Managing diabetes effectively requires consistent medication adherence, which can be challenging for patients who need to take multiple doses throughout the day. Traditional formulations often lead to fluctuating blood glucose levels, making it difficult to achieve optimal glycemic control.</p>

        <h2>Innovation in Drug Delivery Systems</h2>
        <p>Our latest developments in sustained-release technologies have shown promising results in clinical trials. These innovative systems allow for:</p>
        <ul>
          <li>Extended drug release profiles that maintain therapeutic levels for 24 hours</li>
          <li>Reduced dosing frequency from multiple daily doses to once-daily administration</li>
          <li>Improved patient compliance and quality of life</li>
          <li>Enhanced bioavailability through optimized formulation design</li>
        </ul>

        <h2>Nanotechnology Applications</h2>
        <p>We've incorporated nanotechnology into our anti-diabetic formulations to enhance drug targeting and reduce side effects. Our nanoparticle-based delivery systems can:</p>
        <ul>
          <li>Target specific tissues and cells more effectively</li>
          <li>Protect the active ingredient from degradation</li>
          <li>Provide controlled release over extended periods</li>
          <li>Minimize systemic side effects</li>
        </ul>

        <h2>Clinical Trial Results</h2>
        <p>Our Phase III clinical trials have demonstrated significant improvements in patient outcomes:</p>
        <ul>
          <li>85% of patients achieved target HbA1c levels within 12 weeks</li>
          <li>40% reduction in hypoglycemic episodes compared to standard therapy</li>
          <li>95% patient satisfaction rate with once-daily dosing</li>
          <li>Significant improvement in quality of life scores</li>
        </ul>

        <h2>Future Directions</h2>
        <p>This breakthrough represents a significant step forward in making diabetes management more convenient and effective for patients worldwide. Our commitment to innovation continues as we explore new frontiers in personalized medicine and smart drug delivery systems.</p>

        <p>At Acmedix, we believe that better healthcare should be accessible to all. Our affordable anti-diabetic formulations are designed to provide world-class treatment options without compromising on quality or efficacy.</p>
      `,
      excerpt: "Discover how innovative drug delivery systems are transforming diabetes management with enhanced bioavailability and patient compliance.",
      category: "Anti-Diabetic",
      date: "December 15, 2024",
      readTime: "8 min read",
      author: "Dr. Priya Sharma",
      authorBio: "Dr. Priya Sharma is our Lead Formulation Scientist with over 15 years of experience in anti-diabetic drug development. She holds a Ph.D. in Pharmaceutical Sciences from IIT Delhi.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop",
      tags: ["Diabetes", "Drug Delivery", "Nanotechnology", "Clinical Trials"],
      icon: Heart,
      color: "bg-red-500"
    },
    "2": {
      id: 2,
      title: "The Future of Cardiac Care: Novel Drug Delivery Systems for Heart Health",
      content: `
        <p>Cardiovascular diseases remain a leading cause of mortality worldwide. Our R&D team has been working tirelessly to develop novel drug delivery systems that can precisely target cardiac tissues while minimizing systemic side effects.</p>

        <h2>Challenges in Cardiac Drug Delivery</h2>
        <p>Traditional cardiac medications face several challenges:</p>
        <ul>
          <li>Poor bioavailability due to first-pass metabolism</li>
          <li>Systemic side effects affecting other organs</li>
          <li>Short half-life requiring frequent dosing</li>
          <li>Difficulty in achieving targeted therapeutic levels</li>
        </ul>

        <h2>Liposomal Delivery Platforms</h2>
        <p>Through our innovative liposomal delivery platforms, we've achieved remarkable improvements in drug efficacy. Our liposomal formulations offer:</p>
        <ul>
          <li>Enhanced drug stability and protection from degradation</li>
          <li>Targeted delivery to cardiac tissues</li>
          <li>Reduced systemic toxicity</li>
          <li>Extended circulation time in the bloodstream</li>
        </ul>

        <h2>Nanotechnology Applications</h2>
        <p>Our nanotechnology applications have revolutionized cardiac care by enabling:</p>
        <ul>
          <li>Precise targeting of specific cardiac cell types</li>
          <li>Controlled drug release at the target site</li>
          <li>Real-time monitoring of drug delivery</li>
          <li>Combination therapy in a single delivery system</li>
        </ul>

        <h2>Patient Benefits</h2>
        <p>These advances not only enhance therapeutic outcomes but also significantly improve patient quality of life:</p>
        <ul>
          <li>Reduced dosing frequency from multiple daily doses to once or twice daily</li>
          <li>Fewer side effects and improved tolerance</li>
          <li>Better disease management and outcomes</li>
          <li>Enhanced patient compliance and satisfaction</li>
        </ul>

        <h2>Our Commitment to Cardiac Care</h2>
        <p>Our commitment to cardiac care excellence continues to drive innovation in this critical therapeutic area. We're dedicated to developing affordable, effective solutions that can reach patients globally, ensuring that advanced cardiac care is not limited by economic barriers.</p>
      `,
      excerpt: "Exploring breakthrough technologies in cardiovascular medicine that promise better therapeutic outcomes and reduced side effects.",
      category: "Cardiac Care",
      date: "December 10, 2024",
      readTime: "6 min read",
      author: "Dr. Rajesh Kumar",
      authorBio: "Dr. Rajesh Kumar is our Director of Cardiovascular Research with 20+ years of experience in cardiac drug development and a specialization in targeted drug delivery systems.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=600&fit=crop",
      tags: ["Cardiology", "Liposomes", "Targeted Therapy", "Heart Health"],
      icon: Beaker,
      color: "bg-blue-500"
    },
    "3": {
      id: 3,
      title: "Neurotherapy Breakthroughs: Advancing Treatment for Neurological Disorders",
      content: `
        <p>Neurological disorders present unique challenges in drug development due to the blood-brain barrier and complex pathophysiology. Our specialized neurotherapy research division has made significant strides in developing innovative formulations that can effectively cross the blood-brain barrier and deliver therapeutic agents directly to neural tissues.</p>

        <h2>The Blood-Brain Barrier Challenge</h2>
        <p>The blood-brain barrier (BBB) is one of the most significant obstacles in neurological drug development:</p>
        <ul>
          <li>Highly selective barrier that prevents most drugs from entering the brain</li>
          <li>Protects the brain but also limits therapeutic options</li>
          <li>Requires specialized delivery mechanisms to overcome</li>
          <li>Traditional approaches often result in poor drug penetration</li>
        </ul>

        <h2>Advanced Targeting Systems</h2>
        <p>Our research team has developed sophisticated targeting systems that can navigate the BBB:</p>
        <ul>
          <li>Receptor-mediated transcytosis systems</li>
          <li>Nanoparticle-based carriers with surface modifications</li>
          <li>Liposomal formulations with targeting ligands</li>
          <li>Cell-penetrating peptides for enhanced delivery</li>
        </ul>

        <h2>Sustained-Release Technologies</h2>
        <p>Through our advanced sustained-release technologies, we're able to provide:</p>
        <ul>
          <li>More consistent therapeutic levels in neural tissues</li>
          <li>Reduced dosing frequency for better patient compliance</li>
          <li>Minimized systemic side effects</li>
          <li>Extended duration of action</li>
        </ul>

        <h2>Clinical Applications</h2>
        <p>Our neurotherapy innovations are being applied to treat various conditions:</p>
        <ul>
          <li>Neurodegenerative diseases like Alzheimer's and Parkinson's</li>
          <li>Epilepsy and seizure disorders</li>
          <li>Depression and anxiety disorders</li>
          <li>Chronic pain management</li>
        </ul>

        <h2>Patient Impact</h2>
        <p>This research represents hope for millions of patients suffering from neurological conditions:</p>
        <ul>
          <li>Improved symptom management and disease progression control</li>
          <li>Enhanced quality of life and functional outcomes</li>
          <li>Reduced caregiver burden and healthcare costs</li>
          <li>Better long-term prognosis and treatment outcomes</li>
        </ul>

        <h2>Future Research Directions</h2>
        <p>We continue to push the boundaries of neurotherapy research, exploring new frontiers in personalized medicine, gene therapy delivery, and regenerative neuroscience. Our goal is to make advanced neurological treatments accessible and affordable for patients worldwide.</p>
      `,
      excerpt: "How cutting-edge research in neurological treatments is opening new possibilities for patients with complex neurological conditions.",
      category: "Neurotherapy",
      date: "December 5, 2024",
      readTime: "7 min read",
      author: "Dr. Anil Mehta",
      authorBio: "Dr. Anil Mehta leads our Neurotherapy Research Division with expertise in neuropharmacology and blood-brain barrier research. He has published over 100 research papers in leading journals.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
      tags: ["Neurology", "Blood-Brain Barrier", "Neuropharma", "Research"],
      icon: Shield,
      color: "bg-green-500"
    }
  };

  const blog = blogData[id as keyof typeof blogData];

  if (!blog) {
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
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className={`inline-flex items-center px-4 py-2 ${blog.color} rounded-full mb-4`}>
              <blog.icon className="h-5 w-5 mr-2" />
              <span className="font-semibold">{blog.category}</span>
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
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span 
                  key={tag}
                  className="flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
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
                <h4 className="text-lg font-semibold text-primary mb-2">{blog.author}</h4>
                <p className="text-muted-foreground leading-relaxed">{blog.authorBio}</p>
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
              <Link to="/rnd">
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