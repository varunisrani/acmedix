import { Award, Trophy, Medal, Star, Shield, Globe } from 'lucide-react';

const AwardsRecognition = () => {
  const awards = [
    {
      image: "https://i.ibb.co/QvSY0rLV/award-02.png",
      title: "Divyabhaskar Healthcare Award 2021",
      organization: "Divyabhaskar",
      description: "Recognised at the Best Emerging Pharma Company of the Year 2021",
      year: "2021"
    },
    {
      image: "https://i.ibb.co/Mx6Mqn8f/award-01.png",
      title: "Six Sigma Excellence Awards 2022, New Delhi",
      organization: "Six Sigma",
      description: "Recognised for \"Best Initiative for Providing Economical Medicines\"",
      year: "2022"
    },
    {
      image: "https://i.ibb.co/mr6yrpXr/award-03.png",
      title: "IHW 3rd Patient First Award 2024",
      organization: "IHW",
      description: "Awarded- Patient Centric Pharmaceutical Company in Diabetes Care",
      year: "2024"
    }
  ];

  const certifications = [
    { name: "WHO-GMP", description: "World Health Organization Good Manufacturing Practice" },
    { name: "ISO 9001:2015", description: "Quality Management System Certification" },
    { name: "ISO 14001:2015", description: "Environmental Management System" }
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
              className="card-pharmaceutical overflow-hidden group"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)',
                animation: `scale-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Image Section - Full Container */}
              <div className="h-96 bg-white overflow-hidden">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Text Section - 20% */}
              <div className="p-4">
                <div className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3 w-fit">
                  {award.year}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                
                <p className="text-primary font-semibold mb-3">
                  {award.organization}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div id="quality-certifications" className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 md:p-12">
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

        {/* Our Group of Companies Section */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Group of
              <span className="gradient-text"> Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse portfolio of healthcare companies working together to provide comprehensive medical solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-pharmaceutical overflow-hidden group">
              <div className="h-60 bg-white flex items-center justify-center p-6">
                <img 
                  src="https://i.ibb.co/zVvCsdkJ/Acme.jpg" 
                  alt="Acme"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="card-pharmaceutical overflow-hidden group">
              <div className="h-60 bg-white overflow-hidden">
                <img 
                  src="https://i.ibb.co/Jjdg9N33/Acme-Life-Tech-LLP.png" 
                  alt="Acme Life Tech LLP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="card-pharmaceutical overflow-hidden group">
              <div className="h-60 bg-white overflow-hidden">
                <img 
                  src="https://i.ibb.co/V0JkQwym/Acme-Diet-Care-Pvt-Ltd.png" 
                  alt="Acme Diet Care Pvt Ltd"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
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