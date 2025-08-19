import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Beaker, Microscope, FlaskConical, Pill, Target, Settings, Award, CheckCircle } from 'lucide-react';

const RnD = () => {
  const rdCapabilities = [
    {
      icon: FlaskConical,
      title: "Generic and Branded Product Development",
      description: "Development of cost-effective, high-quality formulations tailored for global markets"
    },
    {
      icon: Target,
      title: "Novel Drug Delivery Systems (NDDS)",
      description: "Design and development of advanced delivery platforms including sustained release, controlled release, and targeted formulations"
    },
    {
      icon: Beaker,
      title: "Innovative Drug Delivery Technologies",
      description: "Application of nanotechnology, lipid-based carriers, and other emerging systems for enhanced bioavailability and therapeutic effect"
    },
    {
      icon: Pill,
      title: "Rational Combinations & Line Extensions",
      description: "Development of scientifically justified fixed-dose combinations and product life cycle extensions"
    },
    {
      icon: Settings,
      title: "Difficult-to-Formulate Products",
      description: "Specialized expertise in tackling low-solubility, unstable, or bioavailability-challenged compounds"
    },
    {
      icon: Award,
      title: "New Chemical Entity (NCE) Formulation",
      description: "Customized development strategies for innovator molecules with a focus on regulatory compliance and early clinical milestones"
    }
  ];

  const infrastructureHighlights = [
    "Fully equipped formulation lab with state-of-the-art machinery for oral solid, liquid, and semi-solid dosage forms",
    "Dedicated Analytical Development Lab with modern instrumentation for method development and validation",
    "Pilot-scale and scalable equipment for seamless scale-up and technology transfer",
    "Capabilities to support both early-stage R&D and late-stage commercialization"
  ];

  const analyticalSupport = [
    "Analytical Method Development & Validation as per ICH and regulatory guidelines",
    "Comparative Dissolution Testing and Dissolution Method Development for regulatory submissions",
    "Comprehensive Stability Studies in accordance with ICH Q1A(R2) guidelines",
    "Full-scale Process Validation and Technology Transfer to commercial manufacturing facilities"
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-16 px-4 md:px-8 lg:px-12 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://i.ibb.co/9HwG6TLC/asian-women-working-together-chemical-project.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research & <span className="text-white/90">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Innovation-driven pharmaceutical research with therapeutic precision
          </p>
        </div>
      </section>

      {/* Innovation Strategy Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Research-Driven Innovation with <span className="gradient-text">Therapeutic Precision</span>
              </h2>
            </div>
            
            {/* Content cards */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Main content */}
              <div className="space-y-6">
                <div className="card-pharmaceutical p-8 bg-gradient-to-br from-white to-primary/5 border border-primary/10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary rounded-lg mr-4">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Strategic Focus</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Innovation and scientific inquiry form the backbone of our R&D strategy. We are dedicated to the discovery, development, and commercialization of differentiated pharmaceutical products in selected therapeutic segments backed by deep domain expertise.
                  </p>
                </div>
                
                <div className="card-pharmaceutical p-8 bg-gradient-to-br from-white to-accent/5 border border-accent/10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-accent rounded-lg mr-4">
                      <Beaker className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Novel Solutions</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our focus is on advancing novel formulations and targeted drug delivery systems that address unmet clinical needs and enhance therapeutic outcomes.
                  </p>
                </div>
              </div>
              
              {/* Right side - Key highlights */}
              <div className="space-y-6">
                <div className="card-pharmaceutical p-6 bg-gradient-to-br from-primary to-primary-hover text-white">
                  <h3 className="text-2xl font-bold mb-6">Our R&D Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">Therapeutic Segment Expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">Advanced Drug Delivery Systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">Clinical Need-Focused Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">Enhanced Therapeutic Outcomes</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats card */}
                <div className="card-pharmaceutical p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulation Capabilities Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Formulation Capabilities & <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our formulation development facility is designed to support end-to-end product development, backed by cutting-edge equipment and advanced analytical capabilities.
            </p>
          </div>

          {/* Infrastructure Highlights */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-center mb-6 text-foreground">
              Infrastructure & Equipment Highlights
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {infrastructureHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 card-pharmaceutical"
                  style={{ 
                    opacity: 1,
                    transform: 'translateX(0)',
                    animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Core Research Capabilities
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rdCapabilities.map((capability, index) => (
                <div 
                  key={capability.title}
                  className="card-pharmaceutical p-6 text-center group"
                  style={{ 
                    opacity: 1,
                    transform: 'translateY(0)',
                    animation: `scale-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <capability.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {capability.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytical & Regulatory Support Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Analytical & <span className="gradient-text">Regulatory Support</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analytical and regulatory services to ensure compliance and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {analyticalSupport.map((support, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 card-pharmaceutical group"
                style={{ 
                  opacity: 1,
                  transform: 'translateX(0)',
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors duration-300">
                    <Microscope className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">{support}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RnD;