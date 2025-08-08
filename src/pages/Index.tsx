
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutBrief from '@/components/AboutBrief';
import FlagshipProducts from '@/components/FlagshipProducts';
import AwardsRecognition from '@/components/AwardsRecognition';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Index = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const logoUrls = [
    "https://i.ibb.co/kVSSdJWk/CHILE.png",
    "https://i.ibb.co/1Y98nRQP/DMF-GRADE-API-LOGO-1.png",
    "https://i.ibb.co/BHjsKv0G/DR-CONGO.png",
    "https://i.ibb.co/qMBZLrqH/ECUADOR.png",
    "https://i.ibb.co/99wKR0bH/ETHIOPIA.png",
    "https://i.ibb.co/QvYk0Sdv/EU-GMP-IN-PROCESS-LOGO.png",
    "https://i.ibb.co/ZRyDTWbD/GHANA.png",
    "https://i.ibb.co/9kRpVtDm/IVORY-COAST.png",
    "https://i.ibb.co/4nJQYStz/MAURITIUS.png",
    "https://i.ibb.co/BVvBc0VR/MYANMAR.png",
    "https://i.ibb.co/23VTBY0K/NIGERIA.png",
    "https://i.ibb.co/JjPLHkcL/OMAN.png",
    "https://i.ibb.co/v6yLjVMR/PHILIPPINES.png",
    "https://i.ibb.co/FkmNbTVd/QATAR.png",
    "https://i.ibb.co/VWBQzhRr/REPUBLIC-OF-CONGO.png",
    "https://i.ibb.co/JR1LKkW1/TANZANIA.png",
    "https://i.ibb.co/yFs0DJh5/TURKMENISTAN.png",
    "https://i.ibb.co/Fbs8LPPd/UAE.png",
    "https://i.ibb.co/62LG0rp/UGANDA.png",
    "https://i.ibb.co/p5p51RP/VENEZUELA.png",
    "https://i.ibb.co/Mk7797TL/VIETNAM.png",
    "https://i.ibb.co/bgTzr9CS/WHO-GMP-APPROVED-LOGO.png",
    "https://i.ibb.co/cKLgQqrM/YEMEN.png",
    "https://i.ibb.co/XZm0h8Sx/ZAMBIA.png",
    "https://i.ibb.co/xdDYx6D/AFGHANISTAN.png",
    "https://i.ibb.co/BVWJKdsH/BELARUS.png",
    "https://i.ibb.co/8LLkt7zw/CAMBODIA.png",
  ];

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;
    let animId: number;
    const step = () => {
      container.scrollLeft += 1.2; // speed
      const half = (container.scrollWidth - container.clientWidth) / 2;
      if (container.scrollLeft >= half) {
        container.scrollLeft = 0;
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Corporate Video Section */}
      <section id="corporate-story" className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          {/* Auto-scrolling logos marquee */}
          <div ref={marqueeRef} className="mb-10 overflow-hidden">
            <div className="flex items-center gap-10 px-4">
              {[...logoUrls, ...logoUrls].map((src, idx) => (
                <img key={idx} src={src} alt="Partner/Recognition" className="h-12 md:h-16 object-contain flex-shrink-0" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Watch Our <span className="gradient-text">Corporate Story</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Discover how Acmedix Pharma is transforming healthcare with affordable, quality medicines
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0lDCI1TdyyI?start=20&rel=0&modestbranding=1&showinfo=0"
                title="Acmedix Corporate Video - 40 Years of Pharmaceutical Excellence"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <AboutBrief />
      <div id="flagship-products">
        <FlagshipProducts />
      </div>
      <AwardsRecognition />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
