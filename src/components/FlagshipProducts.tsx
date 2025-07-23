import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

const FlagshipProducts = () => {
  const products = [
    {
      name: "Daxiga",
      category: "Cardiovascular Drug",
      description: "Advanced cardiac care medication for comprehensive heart health management",
      image: "https://i.ibb.co/N6ds6yTw/daxiga.png",
      features: ["WHO-GMP Certified", "Cost Effective", "Proven Efficacy"]
    },
    {
      name: "Acmerose",
      category: "Rosuvastatin Drug",
      description: "High-quality cholesterol management solution with superior bioavailability",
      image: "https://i.ibb.co/fzVV0YqV/Acmerose.png",
      features: ["International Standards", "Quality Assured", "Doctor Recommended"]
    },
    {
      name: "Acmeglim",
      category: "Glimepiride Drug",
      description: "Advanced diabetes management solution with superior glycemic control",
      image: "https://i.ibb.co/nsLNrdM9/Acmeglim.png",
      features: ["WHO-GMP Certified", "Enhanced Bioavailability", "Clinically Proven"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our
            <span className="gradient-text"> Flagship Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our leading pharmaceutical solutions, each designed to deliver 
            exceptional therapeutic outcomes while maintaining affordability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="card-pharmaceutical overflow-hidden group"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)',
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-white flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Interested in Our Complete Product Range?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive portfolio of over 100+ pharmaceutical products 
            designed to meet diverse healthcare needs
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
          >
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProducts;