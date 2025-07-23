import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Shield, Heart, Beaker, Award } from 'lucide-react';
import heroLabImage from '@/assets/hero-lab.jpg';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    savings: 0,
    units: 0,
    products: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { years: 40, savings: 70, units: 3, products: 100 };
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          savings: Math.floor(targets.savings * progress),
          units: Math.floor(targets.units * progress),
          products: Math.floor(targets.products * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroLabImage})` }}
      />
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            India's Most
            <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              Economical Branded
            </span>
            Medicines
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Pioneering affordable healthcare with WHO-GMP certified pharmaceutical 
            solutions for over four decades
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="counter-number">{counters.years}+</div>
              <p className="text-white/80 font-medium">Years Legacy</p>
            </div>
            <div className="text-center">
              <div className="counter-number">{counters.savings}%</div>
              <p className="text-white/80 font-medium">Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="counter-number">{counters.units}</div>
              <p className="text-white/80 font-medium">Manufacturing Units</p>
            </div>
            <div className="text-center">
              <div className="counter-number">{counters.products}+</div>
              <p className="text-white/80 font-medium">Products</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Beaker className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-20 hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Award className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;