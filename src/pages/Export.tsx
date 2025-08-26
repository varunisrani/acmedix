
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Ship, Award, CheckCircle, MapPin, Truck } from 'lucide-react';

const Export = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Partner logos for the quality section
  const partnerLogos = [
    "https://i.ibb.co/RT6ybD9n/Screenshot-2025-08-19-122004.png",
    "https://i.ibb.co/rfMQX53S/Screenshot-2025-08-19-122016.png",
    "https://i.ibb.co/tMR8dzGT/Screenshot-2025-08-19-122027.png",
    "https://i.ibb.co/R47gfYy3/Screenshot-2025-08-19-122031.png",
    "https://i.ibb.co/qtyBkRj/Screenshot-2025-08-19-122038.png",
    "https://i.ibb.co/KjjjykVF/Screenshot-2025-08-19-122041.png",
    "https://i.ibb.co/bjdhbqpV/Screenshot-2025-08-19-122046.png",
    "https://i.ibb.co/rfsVVvPh/Screenshot-2025-08-19-121956.png"
  ];

  // Auto-scroll animation for marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    let animId: number;
    const step = () => {
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
      } else {
        marquee.scrollLeft += 1;
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);
  const globalPresence = {
    "Asia": [
      { country: "Philippines", flag: "https://flagcdn.com/w40/ph.png", code: "ph" },
      { country: "Vietnam", flag: "https://flagcdn.com/w40/vn.png", code: "vn" },
      { country: "Cambodia", flag: "https://flagcdn.com/w40/kh.png", code: "kh" },
      { country: "Myanmar", flag: "https://flagcdn.com/w40/mm.png", code: "mm" },
      { country: "Bhutan", flag: "https://flagcdn.com/w40/bt.png", code: "bt" },
      { country: "Afghanistan", flag: "https://flagcdn.com/w40/af.png", code: "af" },
      { country: "Hong Kong", flag: "https://flagcdn.com/w40/hk.png", code: "hk" }
    ],
    "Middle East": [
      { country: "UAE", flag: "https://flagcdn.com/w40/ae.png", code: "ae" },
      { country: "Oman", flag: "https://flagcdn.com/w40/om.png", code: "om" },
      { country: "Bahrain", flag: "https://flagcdn.com/w40/bh.png", code: "bh" },
      { country: "Qatar", flag: "https://flagcdn.com/w40/qa.png", code: "qa" },
      { country: "Yemen", flag: "https://flagcdn.com/w40/ye.png", code: "ye" }
    ],
    "Europe & CIS": [
      { country: "Belarus", flag: "https://flagcdn.com/w40/by.png", code: "by" },
      { country: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png", code: "uz" },
      { country: "Tajikistan", flag: "https://flagcdn.com/w40/tj.png", code: "tj" },
      { country: "Turkmenistan", flag: "https://flagcdn.com/w40/tm.png", code: "tm" }
    ],
    "LATAM & Other": [
      { country: "Chile", flag: "https://flagcdn.com/w40/cl.png", code: "cl" },
      { country: "Venezuela", flag: "https://flagcdn.com/w40/ve.png", code: "ve" },
      { country: "Fiji", flag: "https://flagcdn.com/w40/fj.png", code: "fj" },
      { country: "Guatemala", flag: "https://flagcdn.com/w40/gt.png", code: "gt" },
      { country: "Dominican Republic", flag: "https://flagcdn.com/w40/do.png", code: "do" },
      { country: "El Salvador", flag: "https://flagcdn.com/w40/sv.png", code: "sv" },
      { country: "Ecuador", flag: "https://flagcdn.com/w40/ec.png", code: "ec" },
      { country: "Curacao", flag: "https://flagcdn.com/w40/cw.png", code: "cw" }
    ],
    "Africa": [
      { country: "Tanzania", flag: "https://flagcdn.com/w40/tz.png", code: "tz" },
      { country: "Uganda", flag: "https://flagcdn.com/w40/ug.png", code: "ug" },
      { country: "Zambia", flag: "https://flagcdn.com/w40/zm.png", code: "zm" },
      { country: "Zimbabwe", flag: "https://flagcdn.com/w40/zw.png", code: "zw" },
      { country: "Nigeria", flag: "https://flagcdn.com/w40/ng.png", code: "ng" },
      { country: "Republic of Congo", flag: "https://flagcdn.com/w40/cg.png", code: "cg" },
      { country: "DRC", flag: "https://flagcdn.com/w40/cd.png", code: "cd" },
      { country: "Madagascar", flag: "https://flagcdn.com/w40/mg.png", code: "mg" },
      { country: "Ivory Coast", flag: "https://flagcdn.com/w40/ci.png", code: "ci" },
      { country: "Mozambique", flag: "https://flagcdn.com/w40/mz.png", code: "mz" },
      { country: "Mauritania", flag: "https://flagcdn.com/w40/mr.png", code: "mr" },
      { country: "Senegal", flag: "https://flagcdn.com/w40/sn.png", code: "sn" }
    ]
  };


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


      {/* Our Quality Trusted By Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Quality <span className="gradient-text">Trusted By</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading healthcare institutions and pharmaceutical partners worldwide trust our commitment to quality and excellence
            </p>
          </div>
          
          {/* Auto-scrolling logos marquee */}
          <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-border p-8">
            <div ref={marqueeRef} className="overflow-hidden">
              <div className="flex items-center gap-16 px-4">
                {[...partnerLogos, ...partnerLogos].map((src, idx) => (
                  <img 
                    key={idx} 
                    src={src} 
                    alt={`Partner ${idx + 1}`} 
                    className="h-16 md:h-20 lg:h-24 object-contain flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="inline-flex p-3 bg-primary-light rounded-full mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 bg-accent-light rounded-full mb-3">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">25+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 bg-primary-light rounded-full mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">WHO-GMP</div>
              <div className="text-sm text-muted-foreground">Certified Facilities</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 bg-accent-light rounded-full mb-3">
                <Ship className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">50M+</div>
              <div className="text-sm text-muted-foreground">Products Exported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          {/* World Map Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="card-pharmaceutical p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Our Global <span className="gradient-text">Presence</span>
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Expanding our pharmaceutical excellence to serve healthcare needs across continents
                    </p>
                  </div>
                  
                  {/* World Map Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://i.postimg.cc/vmtCnsj7/Screenshot-2025-08-19-114015.png" 
                      alt="Acmedix Global Presence Map"
                      className="w-full h-auto object-contain"
                    />
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <span className="text-foreground font-medium">India (HQ)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span className="text-foreground font-medium">Export Markets</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-2xl font-bold text-primary">25+</div>
                          <div className="text-xs text-muted-foreground">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">6</div>
                      <div className="text-sm text-muted-foreground">Continents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">25+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">100+</div>
                      <div className="text-sm text-muted-foreground">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">50M+</div>
                      <div className="text-sm text-muted-foreground">Patients Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Global Presence by Region */}
          <div className="space-y-12">
            {Object.entries(globalPresence).map(([region, countries], regionIndex) => (
              <div 
                key={region}
                className="card-pharmaceutical p-8 bg-gradient-to-br from-background to-muted/20"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.6s ease-out ${regionIndex * 0.1}s both`
                }}
              >
                {/* Region Header */}
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{region}</h3>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/20 to-transparent rounded-full"></div>
                </div>
                
                {/* Countries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {countries.map((item, countryIndex) => (
                    <div 
                      key={item.country}
                      className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                      style={{ 
                        opacity: 1,
                        transform: 'translateX(0)',
                        animation: `scale-in 0.4s ease-out ${(regionIndex * 0.1) + (countryIndex * 0.05)}s both`
                      }}
                    >
                      <img 
                        src={item.flag} 
                        alt={`${item.country} flag`}
                        className="w-8 h-6 object-cover rounded shadow-sm"
                        loading="lazy"
                      />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">5</div>
                <div className="text-sm text-muted-foreground">Regions</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">50M+</div>
                <div className="text-sm text-muted-foreground">Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
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
