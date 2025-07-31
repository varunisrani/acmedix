import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Lightbulb, Shield, Heart, Users, Leaf, Award, TrendingUp, Zap, Globe } from 'lucide-react';

const About = () => {
  const businessPillars = [
    {
      icon: Shield,
      title: "Affordability",
      description: "Delivering high-quality, effective pharmaceutical products at the most economical prices, ensuring chronic care therapies are accessible to a wider population.",
      highlight: "250 cr saving by patients"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously developing and offering advanced formulations with enhanced bioavailability, providing better outcomes for patients in the chronic care segment.",
      highlight: "Advanced Formulations"
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Upholding Acme Group's 40-year legacy of manufacturing premium pharmaceutical products, ensuring stable, safe, and effective treatments.",
      highlight: "15,000 doctors trust"
    },
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Prioritizing the needs of patients by focusing on life-long chronic conditions like Diabetes, Hypertension, dyslipidaemia, & cardiovascular diseases.",
      highlight: "Chronic Care Focus"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to long-term value by reducing healthcare costs for patients through affordable alternatives, contributing to a more sustainable healthcare ecosystem.",
      highlight: "Sustainable Healthcare"
    },
    {
      icon: Users,
      title: "Trust & Integrity",
      description: "Building lasting relationships with healthcare professionals and patients by maintaining transparency, reliability, and ethical practices across all operations.",
      highlight: "Trusted Partner"
    }
  ];

  const companyStats = [
    { number: "15,000", label: "doctors trust", icon: Award },
    { number: "50,000", label: "chemist network", icon: TrendingUp },
    { number: "5 lac +", label: "Happy patients", icon: Users },
    { number: "250 cr", label: "saving by patients", icon: Zap }
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://i.ibb.co/8gjs3sC0/sl-040220-29550-19.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Globe className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Trusted Globally Since 1983</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-white/90">Acmedix Pharma</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Four decades of pharmaceutical excellence in chronic care solutions, making healthcare accessible and affordable for millions.
            </p>
            
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="section-padding bg-background -mt-16 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card-pharmaceutical p-6 text-center group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.8s ease-out both'
                }}
              >
                <div className="inline-flex p-3 bg-primary-light rounded-full mb-4 group-hover:bg-primary transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="counter-number text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Story Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground leading-tight">
                The <span className="gradient-text">Acmedix Story</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-primary">Acmedix Pharma Pvt. Ltd.</span>, a prominent venture of the Acme Group, represents four decades of unwavering commitment to pharmaceutical excellence.
                </p>
                
                <p>
                  We specialize in affordable and high-quality pharmaceutical solutions within the <span className="font-semibold text-foreground">Chronic Care sector</span>, focusing on Cardiac, Anti-Diabetic, and Neuro therapies that make a real difference in patients' lives.
                </p>
                
                <p>
                  Our products deliver <span className="font-semibold text-primary">superior bio-availability at highly competitive prices</span>, offering patients managing chronic conditions substantial long-term savings with our network of 50,000 chemists and 15,000 trusted doctors.
                </p>
                
                <div className="bg-primary-light p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-semibold text-lg italic">
                    "Choose Acmedix for effective, affordable care and enhanced well-being."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-pharmaceutical p-8 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Trusted by 15,000 doctors</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Serving 5 lac+ happy patients</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Expanding across global markets</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Continuous innovation in formulations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision & Mission Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Vision & <span className="gradient-text">Mission</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="relative">
              <div className="card-pharmaceutical p-8 h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-primary rounded-full mr-4 shadow-lg">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  To be a <span className="font-semibold text-primary">trusted global leader</span> in the pharmaceutical industry by providing innovative, affordable, and high-quality chronic care solutions that enhance patient well-being and make healthcare accessible to all.
                </p>
                
                <div className="bg-white/80 p-4 rounded-lg">
                  <p className="text-primary font-medium italic">
                    "Making healthcare accessible through innovation and affordability."
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative">
              <div className="card-pharmaceutical p-8 h-full bg-gradient-to-br from-primary to-primary-hover text-white">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-white/20 rounded-full mr-4 shadow-lg">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/90 leading-relaxed">
                      <span className="font-semibold text-white">Global Healthcare Leadership:</span> Be recognized worldwide as a reliable provider of high-quality healthcare solutions.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/90 leading-relaxed">
                      <span className="font-semibold text-white">Innovation-Driven Value:</span> Deliver exceptional value through innovation, affordability, and specialization in healthcare.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/90 leading-relaxed">
                      <span className="font-semibold text-white">Empowered Culture:</span> Foster a high-performance environment that nurtures talent, learning, and collective success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Pillars Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Six fundamental principles that drive our commitment to excellence in pharmaceutical care and guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="card-pharmaceutical p-6 text-center group hover:shadow-2xl transition-all duration-300"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-primary-light rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                    {pillar.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {pillar.description}
                </p>
                
                <div className="w-full h-1 bg-primary-light rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Partner with us in making quality healthcare accessible and affordable for everyone. Together, we can create a healthier future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;