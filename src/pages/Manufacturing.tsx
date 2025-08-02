
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Factory, Award, Settings, Shield, Beaker, Droplets, Building2, CheckCircle, Heart } from 'lucide-react';

const Manufacturing = () => {
  const capabilities = [
    {
      icon: Building2,
      title: "Streamlined Site Design",
      description: "The facility is meticulously planned to ensure smooth, unidirectional flow of both personnel and materials, minimizing cross-contamination and maximizing operational efficiency."
    },
    {
      icon: Factory,
      title: "Strategically Segregated Warehousing",
      description: "Distinct, climate-controlled storage zones are designated for Raw Materials, Primary Packaging, and Finished Goods. A separate, spacious area is dedicated for Secondary Packaging materials."
    },
    {
      icon: Shield,
      title: "Comprehensive Material Handling Areas",
      description: "Specific zones have been earmarked for Quarantined, Under-Test, and Approved Raw Materials, ensuring compliance with GMP standards. Dedicated dispensing booths are provided for handling both Active Pharmaceutical Ingredients (APIs) and Excipients."
    },
    {
      icon: Settings,
      title: "Controlled Manufacturing Environment",
      description: "All core manufacturing areas and their adjoining airlocks conform to Class D (100,000) cleanroom standards. Each suite and cabin are equipped with independent Air Handling Units (AHUs) integrated with terminal HEPA filters."
    },
    {
      icon: Beaker,
      title: "State-of-the-Art Quality Control Laboratory",
      description: "The lab is fitted with 21 CFR-compliant analytical instruments such as HPLC, FTIR, UV-Vis Spectrophotometer, Karl Fischer Auto Titrator, and high-precision microbalances. A fully-equipped microbiology lab and a walk-in stability chamber support comprehensive product testing."
    },
    {
      icon: Droplets,
      title: "Advanced Purified Water System",
      description: "A two-pass Reverse Osmosis (RO) system with online conductivity and pH monitoring, coupled with Electro-Deionization (EDI), ensures consistent water quality for production."
    }
  ];

  const manufacturingUnits = [
    {
      image: "https://i.ibb.co/fdbh5J0z/Acme-1.webp",
      title: "Acme 1 - Acme Lifetech LLP",
      description: "World-class pharmaceutical manufacturing facility featuring cutting-edge technology, automated production lines, and stringent quality control systems. Specialized in high-volume production of tablets, capsules, and sterile injectables with WHO-GMP compliance.",
      website: "https://acmegrp.in/acme-lifetech-llp/"
    },
    {
      image: "https://i.ibb.co/JZ2q3xD/Acme-2.webp", 
      title: "Acme 2 - F&D",
      description: "Advanced formulation and development center dedicated to innovative pharmaceutical research and product development. Houses state-of-the-art analytical laboratories, pilot production units, and R&D facilities for next-generation therapeutic solutions.",
      website: "https://acmegrp.in/acme-fd/"
    },
    {
      image: "https://i.ibb.co/rRY0XN1j/Acme-3.webp",
      title: "Acme 3 - Acme Dietcare Pvt. Ltd.",
      description: "Specialized manufacturing facility focused on nutraceuticals, dietary supplements, and wellness products. Features dedicated production lines for health supplements, functional foods, and specialized therapeutic nutrition products with international quality standards.",
      website: "https://acmedix.vercel.app/"
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
          style={{ backgroundImage: 'url(https://i.ibb.co/NgrgPSG5/3d-coronavirus-vaccine.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
              <img 
                src="https://i.ibb.co/5g3yJ9vz/acme-group-logo.webp" 
                alt="Acme Group Logo" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Manufacturing <span className="text-white/90 block sm:inline">Excellence</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto px-4">
            40 years of pharmaceutical manufacturing expertise with cutting-edge facilities
          </p>
        </div>
      </section>

      {/* Manufacturing Prowess Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Manufacturing <span className="gradient-text">Prowess</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 - Marketing Venture */}
            <div className="card-pharmaceutical p-8 bg-gradient-to-br from-white to-primary/5 border border-primary/10 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Chronic Care Focus</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Acmedix specializes in <span className="font-semibold text-foreground">Cardiac Care, Anti-Diabetes and Neuro care Therapy</span> with India's most economical brands available in the market.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Cardiac Care</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Anti-Diabetes</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Neuro Care</span>
              </div>
            </div>

            {/* Card 2 - Manufacturing Prowess */}
            <div className="card-pharmaceutical p-8 bg-gradient-to-br from-primary to-primary-hover text-white group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/20 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Elite Manufacturing</h3>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                Acmedix is one of <span className="font-bold text-white">8% pharmaceutical companies</span> with large scale self-manufacturing prowess.
              </p>
            </div>

            {/* Card 3 - Global Reach */}
            <div className="card-pharmaceutical p-8 bg-gradient-to-br from-white to-accent/5 border border-accent/10 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-accent rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Global Excellence</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manufacturing <span className="font-semibold text-foreground">top brands for leading pharmaceutical companies</span> across domestic and international markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">5 lac+</div>
                  <div className="text-xs text-muted-foreground">Happy patients</div>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">250 cr</div>
                  <div className="text-xs text-muted-foreground">saving by patients</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Manufacturing Units Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              State-of-the-Art <span className="gradient-text">Manufacturing Units</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three world-class manufacturing facilities equipped with the latest technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {manufacturingUnits.map((unit, index) => (
              <div 
                key={unit.title}
                className="card-pharmaceutical overflow-hidden group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={unit.image} 
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {unit.description}
                  </p>
                  {unit.website && (
                    <a 
                      href={unit.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salient Capabilities Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Salient <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced manufacturing capabilities that ensure quality, efficiency, and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="card-pharmaceutical p-6 group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-light rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <capability.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Capability */}
          <div className="mt-8">
            <div className="card-pharmaceutical p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-light rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Dedicated Therapeutic Blocks
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Separate, specialized blocks are designated for the manufacturing of Food and Veterinary products, allowing for focused and compliant production practices.
                  </p>
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

export default Manufacturing;
