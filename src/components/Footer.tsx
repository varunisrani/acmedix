import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart, Beaker, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      icon: Building,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Manufacturing", href: "/manufacturing" },
        { name: "R&D", href: "/rnd" },
        { name: "Careers", href: "/careers" },
        { name: "Export Business", href: "/export" }
      ]
    },
    {
      title: "Products",
      icon: Heart,
      links: [
        { name: "Anti-Diabetic", href: "/products/anti-diabetic" },
        { name: "Cardiac Care", href: "/products/cardiac-care" },
        { name: "Neuro Care", href: "/products/neuro-care" },
        { name: "Other Therapy", href: "/products/other-therapy" },
        { name: "Product Catalog", href: "/products/anti-diabetic" }
      ]
    },
    {
      title: "Support",
      icon: Users,
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Customer Support", href: "/contact" },
        { name: "Technical Support", href: "/contact" },
        { name: "Feedback", href: "/contact" },
        { name: "Partnership", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:bg-blue-400" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", name: "Instagram", color: "hover:bg-pink-600" }
  ];


  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
                <img 
                  src="https://i.ibb.co/ZpqHhTQp/ACMEDIX-LOGO.png" 
                  alt="Acmedix Pharma Logo" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
            
            {/* About Section with Background */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(https://i.ibb.co/8gjs3sC0/sl-040220-29550-19.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  About Acmedix Pharma
                </h3>
                <p className="text-slate-100 text-lg leading-relaxed">
                  Four decades of pharmaceutical excellence in chronic care solutions, making healthcare accessible and affordable for millions worldwide.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-slate-400 text-sm block">Call Us</span>
                  <span className="text-white font-medium">+91 7948907524</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-slate-400 text-sm block">Email Us</span>
                  <span className="text-white font-medium">info@acmedixpharma.com</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-slate-400 text-sm block">Visit Us</span>
                  <span className="text-white font-medium leading-relaxed">
                    ACME HOUSE, Zion-Z1, Nr. Avalon Hotel,<br />
                    Ramdas Road, Off Sindhu Bhavan Road,<br />
                    Bodakdev, Ahmedabad - 380054
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    className={`p-3 bg-slate-800 rounded-lg transition-all duration-300 ${social.color} hover:scale-110 hover:-translate-y-1`}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-slate-300 hover:text-primary transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-slate-400 text-center lg:text-left">
              <p className="mb-2">© 2024 Acmedix Pharma LLP. All rights reserved.</p>
              <p className="text-sm">Trusted globally since 1985 • Making healthcare accessible for everyone</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="text-sm text-slate-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-primary transition-colors">
                Medical Disclaimer
              </Link>
              <Link to="/" className="text-sm text-slate-400 hover:text-primary transition-colors">
                Sitemap
              </Link>
              {/* Admin Access */}
              <Link 
                to="/admin/login" 
                className="text-sm text-slate-400 hover:text-primary transition-colors"
                title="Admin Access"
              >
                Admin
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;