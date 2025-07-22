import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Pill, Download } from "lucide-react";
import { Link } from "react-router-dom";

const OtherTherapy = () => {
  const products = [
    {
      name: "ACMOXIA 60",
      image: "https://i.ibb.co/cmBHxp7/ACMOXIA-60.png"
    },
    {
      name: "ACMOXIA 90",
      image: "https://i.ibb.co/SDKTPkVG/ACMOXIA-90.png"
    },
    {
      name: "ACMOXIA MR",
      image: "https://i.ibb.co/hRzfzZg4/ACMOXIA-MR.png"
    },
    {
      name: "ACORISE D3",
      image: "https://i.ibb.co/b5mKpx0m/ACORISE-D3.png"
    },
    {
      name: "AFFOCAL CT",
      image: "https://i.ibb.co/gbpw1sns/AFFOCAL-CT.png"
    },
    {
      name: "AFFOCAL XT",
      image: "https://i.ibb.co/qLSRZ5rG/AFFOCAL-XT.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center mb-8">
            <div className="bg-purple-500 p-4 rounded-2xl mr-6">
              <Pill className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Other Therapy Products
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Specialized therapeutic solutions across diverse medical conditions and patient needs
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{products.length}+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Multi</div>
              <div className="text-gray-600">Dosage Forms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Global</div>
              <div className="text-gray-600">Quality Standards</div>
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
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our diverse therapeutic portfolio addresses a wide range of medical conditions with innovative formulations and proven clinical effectiveness across multiple specialties.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Overview
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherTherapy;