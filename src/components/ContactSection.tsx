import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact
            <span className="gradient-text"> Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Send us a message and we'll get back to you as soon as possible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="card-pharmaceutical p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your full name" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Department
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="medical">Medical Information</SelectItem>
                        <SelectItem value="export">Export Business</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Your company name" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements or questions..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <Button className="btn-primary w-full text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;