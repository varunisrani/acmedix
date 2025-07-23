
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Ship, Award, CheckCircle, MapPin, Truck } from 'lucide-react';

const Export = () => {
  const exportMarkets = [
    { country: "United States", flag: "🇺🇸", products: "Cardiac Care" },
    { country: "United Kingdom", flag: "🇬🇧", products: "Anti-Diabetic" },
    { country: "Germany", flag: "🇩🇪", products: "Neuro Care" },
    { country: "Australia", flag: "🇦🇺", products: "Cardiac Care" },
    { country: "Canada", flag: "🇨🇦", products: "Anti-Diabetic" },
    { country: "South Africa", flag: "🇿🇦", products: "Neuro Care" }
  ];

  const exportCapabilities = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving pharmaceutical markets across 25+ countries worldwide with reliable supply chain management"
    },
    {
      icon: Ship,
      title: "Logistics Excellence",
      description: "Advanced cold chain and temperature-controlled logistics for international pharmaceutical distribution"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full compliance with international regulatory standards including FDA, EMA, and WHO-GMP certifications"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Stringent quality control processes ensuring product integrity throughout the export supply chain"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://i.ibb.co/rKYjFj0N/6301811.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Export <span className="text-white/90">Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Bringing affordable, quality pharmaceuticals to global markets
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex p-4 bg-primary-light rounded-full mb-8">
              <Globe className="h-12 w-12 text-primary" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Global Expansion <span className="gradient-text">Coming Soon</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We are preparing to launch our export division to bring Acmedix's affordable, 
              high-quality pharmaceutical solutions to international markets. Our global expansion 
              will focus on chronic care therapeutics across multiple countries.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {exportCapabilities.map((capability, index) => (
                <div 
                  key={capability.title}
                  className="card-pharmaceutical p-6 text-center group"
                  style={{ 
                    opacity: 1,
                    transform: 'translateY(0)',
                    animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="inline-flex p-3 bg-primary-light rounded-full mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <capability.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Target <span className="gradient-text">Markets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Planned expansion to key pharmaceutical markets worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportMarkets.map((market, index) => (
              <div 
                key={market.country}
                className="card-pharmaceutical p-6 text-center group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `scale-in 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-4">{market.flag}</div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {market.country}
                </h3>
                <p className="text-sm text-muted-foreground">{market.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Export Inquiries */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto card-pharmaceutical p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Interested in <span className="gradient-text">Partnership?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For export opportunities, international partnerships, or bulk supply inquiries, 
              please get in touch with our business development team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Export Inquiries
              </button>
              <button className="btn-secondary px-8 py-3">
                Partnership Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Export;
