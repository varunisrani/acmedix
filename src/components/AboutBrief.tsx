import { Button } from '@/components/ui/button';
import { Users, Target, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutBrief = () => {
  const stats = [
    { number: "15,000", label: "doctors trust", suffix: "+" },
    { number: "50,000", label: "chemist network", suffix: "+" },
    { number: "5", label: "Happy patients", suffix: " lac+" },
    { number: "250", label: "saving by patients", suffix: " cr+" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                Our Impact
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Committed to providing 
                <span className="text-primary"> safe, effective</span> and 
                <span className="text-primary"> affordable medicines</span>
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For over four decades, Acmedix Pharma has been at the forefront of pharmaceutical innovation, 
              dedicated to making quality healthcare accessible to everyone. Our commitment to excellence 
              and affordability has made us a trusted partner in global healthcare.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that everyone deserves access to quality medicines regardless of their economic 
              status. Through our state-of-the-art manufacturing facilities and rigorous quality control 
              processes, we ensure that every product meets international standards while remaining 
              cost-effective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" className="btn-secondary" asChild>
                <a href="#quality-certifications">Quality Certifications</a>
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 sm:p-6 card-pharmaceutical group"
                  style={{ 
                    opacity: 1,
                    transform: 'translateY(0)',
                    animation: `scale-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Replaced mission statement with DMF Grade API image */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary-light to-background rounded-xl border border-primary/10 flex items-center justify-center">
              <img
                src="https://i.ibb.co/1Y98nRQP/DMF-GRADE-API-LOGO-1.png"
                alt="DMF Grade API"
                className="h-24 md:h-32 object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;