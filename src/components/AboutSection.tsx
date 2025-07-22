import { Target, Eye, Users, Building2, Microscope, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import facilityExteriorImage from '@/assets/facility-exterior.jpg';

const AboutSection = () => {
  const milestones = [
    { year: "1983", event: "Company Founded", description: "Started with a vision to make quality medicines affordable" },
    { year: "1995", event: "First Manufacturing Unit", description: "Established state-of-the-art production facility" },
    { year: "2005", event: "WHO-GMP Certification", description: "Achieved international quality standards" },
    { year: "2015", event: "Export Business Launch", description: "Expanded to international markets" },
    { year: "2023", event: "40 Years of Excellence", description: "Four decades of serving healthcare needs" }
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To provide high-quality, affordable medicines that improve lives and make healthcare accessible to all." },
    { icon: Eye, title: "Our Vision", description: "To be India's most trusted pharmaceutical company, recognized globally for innovation and excellence." }
  ];

  const pillars = [
    { icon: Building2, title: "Quality Manufacturing", description: "State-of-the-art facilities with international standards" },
    { icon: Microscope, title: "Research & Innovation", description: "Continuous investment in R&D for better formulations" },
    { icon: Users, title: "Patient Focus", description: "Every decision prioritizes patient welfare and accessibility" },
    { icon: Globe, title: "Global Reach", description: "Expanding footprint to serve healthcare needs worldwide" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About
            <span className="gradient-text"> Acmedix Pharma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four decades of unwavering commitment to making quality healthcare 
            affordable and accessible for everyone
          </p>
        </div>

        {/* Company Story with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1983 with a simple yet profound mission: to make quality medicines 
              accessible to all. What started as a small pharmaceutical venture has grown 
              into a trusted name in the industry, serving millions of patients across 
              25+ countries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to affordability doesn't compromise quality. Every product 
              undergoes rigorous testing and meets international standards, ensuring 
              that cost-effective healthcare remains synonymous with excellence.
            </p>
            <Button className="btn-primary">
              Learn More About Our Journey
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={facilityExteriorImage} 
              alt="Acmedix Pharma Facility" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary-light hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="card-pharmaceutical p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="card-pharmaceutical p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-light rounded-lg mr-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Business Pillars */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Pillars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="text-center group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `scale-in 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="inline-flex p-4 bg-primary-light rounded-full mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;