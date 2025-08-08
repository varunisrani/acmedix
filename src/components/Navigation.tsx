
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, MapPin, Heart, Beaker, Shield, Pill, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showProductsDropdown && !target.closest('.products-dropdown')) {
        setShowProductsDropdown(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showProductsDropdown]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'R&D', href: '/rnd' },
    { name: 'Export', href: '/export' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    {
      id: 'anti-diabetic',
      name: 'Anti-Diabetic',
      icon: Heart,
      color: 'bg-red-500',
      description: 'Advanced formulations for diabetes management',
      products: [
        'Metformin SR 500mg',
        'Glimepiride + Metformin',
        'Insulin Analogue',
        'DPP-4 Inhibitor',
        'Gliclazide MR'
      ]
    },
    {
      id: 'cardiac-care',
      name: 'Cardiac Care',
      icon: Beaker,
      color: 'bg-blue-500',
      description: 'Comprehensive cardiovascular treatments',
      products: [
        'ACE Inhibitor 10mg',
        'Beta Blocker 25mg',
        'Calcium Channel Blocker',
        'Statin + Ezetimibe',
        'Aspirin + Clopidogrel'
      ]
    },
    {
      id: 'neuro-care',
      name: 'Neuro Care',
      icon: Shield,
      color: 'bg-green-500',
      description: 'Neurological and psychiatric medications',
      products: [
        'Antiepileptic 500mg',
        'SSRI Antidepressant',
        'Anxiolytic 0.5mg',
        'Neuroprotective Agent',
        'Anti-Parkinson Drug'
      ]
    },
    {
      id: 'other-therapy',
      name: 'Other Therapy',
      icon: Pill,
      color: 'bg-purple-500',
      description: 'Specialized therapeutic solutions',
      products: [
        'Gastro-Protective Agent',
        'Antibiotic Combination',
        'Pain Relief Formula',
        'Vitamin D3 + K2',
        'Anti-Inflammatory'
      ]
    }
  ];

  return (
    <>
      {/* Top Contact Bar removed as requested */}

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' 
          : 'bg-background'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <img 
                src="https://i.ibb.co/ZpqHhTQp/ACMEDIX-LOGO.png" 
                alt="Acmedix Pharma Logo" 
                className="h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Products Dropdown */}
              <div 
                className="relative products-dropdown"
              >
                <span 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1"
                  onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                >
                  Products
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showProductsDropdown ? 'rotate-180' : ''
                    }`} 
                  />
                </span>
                
                {/* Dropdown Menu */}
                {showProductsDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-2xl z-50 overflow-hidden">
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-6 text-center">Our Product Portfolio</h3>
                      <div className="grid grid-cols-4 gap-6">
                        {productCategories.map((category) => (
                          <Link 
                            key={category.id} 
                            to={`/products/${category.id}`}
                            className="block p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                            onClick={() => setShowProductsDropdown(false)}
                          >
                            {/* Category Header */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 ${category.color} rounded-lg`}>
                                  <category.icon className="h-5 w-5 text-white" />
                                </div>
                                <h4 className="font-bold text-foreground text-sm">
                                  {category.name}
                                </h4>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Bottom CTA */}
                      <div className="mt-8 pt-6 border-t border-border text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Need detailed product information or custom formulations?
                        </p>
                        <div className="flex justify-center space-x-4">
                          <Button size="sm" className="btn-primary">
                            Contact Us
                          </Button>
                          <Button size="sm" variant="outline">
                            Download Catalog
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navItems.slice(3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>


            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2 ${
                        location.pathname === item.href ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Products Section for Mobile */}
                  <div className="py-2">
                    <span className="text-lg font-medium text-foreground">Products</span>
                    <div className="mt-2 pl-4 space-y-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/products/${category.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 py-1 hover:text-primary transition-colors duration-200"
                        >
                          <div className={`p-1 ${category.color} rounded`}>
                            <category.icon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navItems.slice(3).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2 ${
                        location.pathname === item.href ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
