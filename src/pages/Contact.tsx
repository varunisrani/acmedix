
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Acmedix Pharma LLP",
        "ACME HOUSE, Zion-Z1, Nr. Avalon Hotel,",
        "Ramdas Road, Off Sindhu Bhavan Road,",
        "Bodakdev, Ahmedabad - 380054"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Office: +91-XXX-XXX-XXXX",
        "Sales: +91-XXX-XXX-XXXY",
        "Export: +91-XXX-XXX-XXXZ"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "General: info@acmedixpharma.com",
        "Sales: sales@acmedixpharma.com",
        "Careers: careers@acmedixpharma.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-white/90">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Get in touch with us for all your pharmaceutical needs
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help with any questions about our products, services, or partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="card-pharmaceutical p-6 text-center group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <info.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="card-pharmaceutical p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="export">Export Business</option>
                    <option value="careers">Career Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <Button className="btn-primary px-8 py-3 w-full sm:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Find <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit our headquarters in Ahmedabad, India
            </p>
          </div>

          <div className="card-pharmaceutical p-8 text-center">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold text-foreground">Interactive Map</p>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Acmedix Pharma LLP</h3>
              <p className="text-muted-foreground text-lg">
                ACME HOUSE, Zion-Z1, Nr. Avalon Hotel, Ramdas Road, Off Sindhu Bhavan Road, Bodakdev, Ahmedabad - 380054
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
