
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Prepare data for Supabase
    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject,
      company: formData.company || null,
      message: formData.message
    };

    // Submit to Supabase
    console.log('Attempting to submit:', submissionData);
    const result = await submitContactForm(submissionData);
    console.log('Submission result:', result);

    if (result.success) {
      // Success
      setSubmitStatus('success');
      setStatusMessage('Thank you for your message! We will get back to you soon.');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        company: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } else {
      // Error
      setSubmitStatus('error');
      setStatusMessage('There was an error sending your message. Please try again or contact us directly.');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }

    setIsSubmitting(false);
  };
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
        "Main Office: +91 7948907524"
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

      {/* Contact Information Section - Compact Row Based */}
      <section className="py-12 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help with any questions about our products and services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="card-pharmaceutical p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Visit Us */}
                <div className="relative group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide">Visit Us</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Acmedix Pharma LLP</span><br/>
                        ACME HOUSE, Zion-Z1<br/>
                        Nr. Avalon Hotel<br/>
                        Bodakdev, Ahmedabad - 380054
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call Us */}
                <div className="relative group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Main Office</span><br/>
                        +91 7948907524
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Us */}
                <div className="relative group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide">Email Us</h3>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">General:</span><br/>
                          <a href="mailto:info@acmedixpharma.com" className="hover:text-primary transition-colors">info@acmedixpharma.com</a>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Sales:</span> <a href="mailto:sales@acmedixpharma.com" className="hover:text-primary transition-colors">sales@acmedixpharma.com</a>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Careers:</span> <a href="mailto:careers@acmedixpharma.com" className="hover:text-primary transition-colors">careers@acmedixpharma.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="relative group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide">Business Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><span className="font-medium">Mon-Fri:</span> 9:00 AM - 6:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> <span className="text-red-500">Closed</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
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
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Export Business">Export Business</option>
                    <option value="Career Opportunity">Career Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <Button 
                    type="submit" 
                    className="btn-primary px-8 py-3 w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <div className="md:col-span-2">
                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}
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

          <div className="card-pharmaceutical p-8">
            {/* Google Map Embed */}
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7267405894373!2d72.5014!3d23.0311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2e1234567%3A0x1234567890abcdef!2sBodakdev%2C%20Ahmedabad%2C%20Gujarat%20380054%2C%20India!5e0!3m2!1sen!2sus!4v1640123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Acmedix Pharma Location"
              ></iframe>
            </div>
            
            {/* Location Info and Directions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Acmedix Pharma LLP
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  ACME HOUSE, Zion-Z1, Nr. Avalon Hotel,<br/>
                  Ramdas Road, Off Sindhu Bhavan Road,<br/>
                  Bodakdev, Ahmedabad - 380054<br/>
                  Gujarat, India
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-medium">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h4 className="text-xl font-bold text-foreground mb-4">Get Directions</h4>
                <div className="space-y-3">
                  <a
                    href="https://maps.google.com/?q=Bodakdev,+Ahmedabad,+Gujarat+380054,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                  <div className="text-sm text-muted-foreground">
                    <p>📍 Located in the heart of Bodakdev</p>
                    <p>🚗 Ample parking available</p>
                    <p>🚌 Well connected by public transport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
