import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";

const NeuroCare = () => {
  const products = [
    {
      name: "ACOGAB NT",
      image: "https://i.ibb.co/hRMBCLgn/ACOGAB-NT.png"
    },
    {
      name: "ACOLEV 500",
      image: "https://i.ibb.co/8DYsq8JY/ACOLEV-500.png"
    },
    {
      name: "ACONERV P",
      image: "https://i.ibb.co/nN6BTHMh/ACONERV-P.png"
    },
    {
      name: "ACONERV PLUS",
      image: "https://i.ibb.co/hFLj5Wcs/ACONERV-PLUS.png"
    },
    {
      name: "ACONERV SL",
      image: "https://i.ibb.co/rGwLkMyV/ACONERV-SL.png"
    },
    {
      name: "ACOPRAM PLUS",
      image: "https://i.ibb.co/8nhsH9C2/ACOPRAM-PLUS.png"
    },
    {
      name: "ACOPRAM",
      image: "https://i.ibb.co/1tk4Wk9q/ACOPRAM.png"
    },
    {
      name: "ACOPREG NT",
      image: "https://i.ibb.co/35Mdqkmb/ACOPREG-NT.png"
    },
    {
      name: "ACOVERT 16",
      image: "https://i.ibb.co/RGHD9D2h/ACOVERT-16.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center mb-8">
            <div className="bg-green-500 p-4 rounded-2xl mr-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Neuro Care Products
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Advanced neurological and psychiatric medications for comprehensive brain health and mental wellness
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{products.length}+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">CNS</div>
              <div className="text-gray-600">Specialized Formulations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Clinical Studies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div key={index} className="aspect-square bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                {/* Image Area - 60% */}
                <div className="flex-[3] flex items-center justify-center p-2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Text Area - 40% */}
                <div className="flex-[2] flex items-center justify-center px-3 py-4 bg-gray-100 border-t border-gray-200">
                  <h3 className="text-base font-bold text-center text-red-600 leading-tight uppercase">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Advancing Neurological Care
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our neurological portfolio combines cutting-edge research with proven therapeutic approaches to address complex CNS conditions and improve patient quality of life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Connect with Experts
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeuroCare;