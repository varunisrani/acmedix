import { Heart, Activity, Brain, Pill, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import medicinesHeroImage from '@/assets/medicines-hero.jpg';

const ProductCategories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Cardiac Care",
      description: "Advanced cardiovascular medications for heart health and circulation disorders",
      products: "25+ Products",
      color: "text-red-500",
      bgColor: "bg-red-50",
      hoverColor: "group-hover:bg-red-500"
    },
    {
      icon: Activity,
      title: "Anti-Diabetic",
      description: "Comprehensive diabetes management solutions with proven efficacy",
      products: "18+ Products", 
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      hoverColor: "group-hover:bg-blue-500"
    },
    {
      icon: Brain,
      title: "Neuro Therapy",
      description: "Neurological treatments for mental health and cognitive disorders",
      products: "22+ Products",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      hoverColor: "group-hover:bg-purple-500"
    },
    {
      icon: Pill,
      title: "General Medicine",
      description: "Essential medications for common health conditions and wellness",
      products: "35+ Products",
      color: "text-green-500",
      bgColor: "bg-green-50",
      hoverColor: "group-hover:bg-green-500"
    }
  ];

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our
            <span className="gradient-text"> Product Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive therapeutic solutions across multiple specialties, 
            ensuring quality healthcare for diverse medical needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Categories Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className="card-pharmaceutical p-6 group cursor-pointer animate-fade-in hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4 transition-all duration-300 ${category.hoverColor} group-hover:text-white`}>
                  <category.icon className={`h-6 w-6 ${category.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{category.products}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Product Image and Info */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={medicinesHeroImage} 
                alt="Acmedix Pharmaceutical Products"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Quality You Can Trust</h3>
                <p className="text-white/90 mb-4">
                  Every product undergoes rigorous quality testing to ensure safety and efficacy
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  View All Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-lg border animate-pulse-glow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Active Products</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="btn-primary text-lg px-8 py-4">
            Request Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;