
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Heart, Trophy, Upload, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and comprehensive wellness programs for all employees"
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning and development programs with clear career advancement paths"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive and inclusive environment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Life at <span className="text-white/90">Acmedix</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Join our mission to make quality healthcare accessible to everyone
          </p>
        </div>
      </section>

      {/* Life at Acmedix Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Why Choose <span className="gradient-text">Acmedix?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At Acmedix, we believe that our people are our greatest asset. We foster an environment 
              where innovation thrives, careers flourish, and every team member contributes to our 
              mission of providing affordable, quality healthcare solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="card-pharmaceutical p-8 text-center group"
                  style={{ 
                    opacity: 1,
                    transform: 'translateY(0)',
                    animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="card-pharmaceutical p-12 text-center">
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-8">
                <Upload className="h-12 w-12 text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Drop Your <span className="gradient-text">Resume</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to make a difference in healthcare? Submit your resume and join our 
                dynamic team of professionals dedicated to improving lives through affordable medicine.
              </p>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 mb-8 hover:border-primary/50 transition-colors duration-300 cursor-pointer group">
                <div className="text-center">
                  <Upload className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Click to upload or drag and drop
                  </h3>
                  <p className="text-muted-foreground">
                    PDF, DOC, or DOCX files up to 10MB
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary px-8 py-3">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Resume
                </Button>
                <Button variant="outline" className="btn-secondary px-8 py-3">
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HR team is here to help you with any questions about career opportunities at Acmedix
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-pharmaceutical p-8 text-center group">
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send your queries directly to our HR team</p>
              <a href="mailto:careers@acmedixpharma.com" className="text-primary font-medium hover:underline">
                careers@acmedixpharma.com
              </a>
            </div>

            <div className="card-pharmaceutical p-8 text-center group">
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our HR representatives</p>
              <a href="tel:+91-XXX-XXX-XXXX" className="text-primary font-medium hover:underline">
                +91-XXX-XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
