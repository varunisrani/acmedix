
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutBrief from '@/components/AboutBrief';
import FlagshipProducts from '@/components/FlagshipProducts';
import AwardsRecognition from '@/components/AwardsRecognition';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Corporate Video Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
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
      <FlagshipProducts />
      <AwardsRecognition />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
