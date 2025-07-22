import { Award, Trophy, Medal, Star, Shield, Globe } from 'lucide-react';

const AwardsRecognition = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Pharma Company",
      organization: "Healthcare Excellence Awards 2023",
      description: "Recognized for outstanding contribution to affordable healthcare",
      year: "2023"
    },
    {
      icon: Medal,
      title: "Quality Excellence Award",
      organization: "Pharmaceutical Society of India",
      description: "For maintaining highest quality standards in manufacturing",
      year: "2022"
    },
    {
      icon: Star,
      title: "Innovation in Medicine",
      organization: "Global Healthcare Innovation Summit",
      description: "Outstanding achievement in pharmaceutical research and development",
      year: "2023"
    }
  ];

  const certifications = [
    { name: "WHO-GMP", description: "World Health Organization Good Manufacturing Practice" },
    { name: "ISO 9001:2015", description: "Quality Management System Certification" },
    { name: "ISO 14001:2015", description: "Environmental Management System" },
    { name: "USFDA Approved", description: "United States Food and Drug Administration" },
    { name: "OHSAS 18001", description: "Occupational Health and Safety Assessment" },
    { name: "CE Marking", description: "European Conformity Certification" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Awards &
            <span className="gradient-text"> Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by prestigious organizations 
            worldwide, validating our dedication to quality and innovation
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <div 
              key={award.title}
              className="card-pharmaceutical p-8 text-center group"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)',
                animation: `scale-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <award.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-primary font-medium mb-2">{award.organization}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{award.description}</p>
              
              <div className="inline-flex px-3 py-1 bg-muted rounded-full">
                <span className="text-sm font-medium text-foreground">{award.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <span>Quality Certifications</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Our manufacturing processes meet and exceed international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                style={{ 
                  opacity: 1,
                  transform: 'translateX(0)',
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Recognition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-primary-light px-8 py-4 rounded-full">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-foreground font-medium">
              Trusted by healthcare professionals in 25+ countries worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;