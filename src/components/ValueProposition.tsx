import { DollarSign, Shield, Lightbulb, Users, Globe, Award } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: DollarSign,
      title: "250 cr Saving By Patients",
      description: "Exceptional cost savings without compromising on quality, making healthcare accessible to all",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description: "International quality standards with rigorous testing and compliance protocols",
      color: "text-trust-blue",
      bgColor: "bg-trust-blue/10"
    },
    {
      icon: Lightbulb,
      title: "Advanced Formulations",
      description: "Cutting-edge research and development for innovative pharmaceutical solutions",
      color: "text-primary",
      bgColor: "bg-primary-light"
    }
  ];

  const trustMetrics = [
    { icon: Users, label: "Happy Patients", value: "10M+" },
    { icon: Globe, label: "Export Countries", value: "25+" },
    { icon: Award, label: "Quality Certifications", value: "15+" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose
            <span className="gradient-text"> Acmedix Pharma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four decades of pharmaceutical excellence, delivering quality medicines 
            that make healthcare affordable and accessible for everyone
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="card-pharmaceutical p-8 text-center group"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)',
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className={`inline-flex p-4 rounded-full ${value.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-gradient-to-r from-primary-light to-background rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Millions Worldwide
            </h3>
            <p className="text-muted-foreground text-lg">
              Our commitment to quality and affordability has earned global recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustMetrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="text-center group"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  animation: `scale-in 0.6s ease-out ${0.8 + index * 0.2}s both`
                }}
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <metric.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;