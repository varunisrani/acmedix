import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Download } from "lucide-react";
import { Link } from "react-router-dom";

const AntiDiabetic = () => {
  const products = [
    {
      name: "ACMEGLIM M1 FORTE",
      image: "https://i.ibb.co/TBF7mBdd/ACMEGLIM-M1-FORTE.png"
    },
    {
      name: "ACMEGLIM M1",
      image: "https://i.ibb.co/xSf296K3/ACMEGLIM-M1.png"
    },
    {
      name: "ACMEGLIM M2 FORTE",
      image: "https://i.ibb.co/Q0hx6Tk/ACMEGLIM-M2-FORTE.png"
    },
    {
      name: "ACMEGLIM M2",
      image: "https://i.ibb.co/cSMNCFD9/ACMEGLIM-M2.png"
    },
    {
      name: "ACMEGLIM MP 1",
      image: "https://i.ibb.co/Vc2rZ0Jy/ACMEGLIM-MP-1.png"
    },
    {
      name: "ACMEGLIM MP 2",
      image: "https://i.ibb.co/DyLZ5x1/ACMEGLIM-MP-2.png"
    },
    {
      name: "ACMEGLIM MV1",
      image: "https://i.ibb.co/qLpZzLZ0/ACMEGLIM-MV1.png"
    },
    {
      name: "ACMEGLIM MV2 0.3",
      image: "https://i.ibb.co/pvKDy4BG/ACMEGLIM-MV2-0-3.png"
    },
    {
      name: "ACMEGLIM MV2",
      image: "https://i.ibb.co/whPYJGwp/ACMEGLIM-MV2.png"
    },
    {
      name: "ACMEZID M",
      image: "https://i.ibb.co/XZYM9v2p/ACMEZID-M.png"
    },
    {
      name: "ACOSITA 50",
      image: "https://i.ibb.co/vvKjTnbj/ACOSITA-50.png"
    },
    {
      name: "ACOSITA 100",
      image: "https://i.ibb.co/r29YDtrk/ACOSITA-100.png"
    },
    {
      name: "ACOSITA M 500",
      image: "https://i.ibb.co/xqMrDmYT/ACOSITA-M-500.png"
    },
    {
      name: "ACOSITA M SR 100/500",
      image: "https://i.ibb.co/zHFr9G6s/ACOSITA-M-SR-100-500.png"
    },
    {
      name: "ACOSITA M SR 100/1000",
      image: "https://i.ibb.co/rGFG4r3w/ACOSITA-M-SR-100-1000.png"
    },
    {
      name: "ACOSITA MP 500",
      image: "https://i.ibb.co/hk3RLKt/ACOSITA-MP-500.png"
    },
    {
      name: "ACOSITA MP 1000",
      image: "https://i.ibb.co/MD9pgQT1/ACOSITA-MP-1000.png"
    },
    {
      name: "ACOVOG M 0.3",
      image: "https://i.ibb.co/KcDNDrJm/ACOVOG-M-0-3.png"
    },
    {
      name: "ACOVOG MD 0.2",
      image: "https://i.ibb.co/TDg0zZDn/ACOVOG-MD-0-2.png"
    },
    {
      name: "ACOVOG MD 0.3",
      image: "https://i.ibb.co/1tgG819h/ACOVOG-MD-0-3.png"
    },
    {
      name: "ACVILDA 50",
      image: "https://i.ibb.co/NnsfC7zF/ACVILDA-50.png"
    },
    {
      name: "ACVILDA M 500",
      image: "https://i.ibb.co/ksvbJHyN/ACVILDA-M-500.png"
    },
    {
      name: "ACVILDA M 1000",
      image: "https://i.ibb.co/7dFBrsBV/ACVILDA-M-1000.png"
    },
    {
      name: "ACVILDA M SR 500",
      image: "https://i.ibb.co/dw9tyGdJ/ACVILDA-M-SR-500.png"
    },
    {
      name: "DAXIGA 5",
      image: "https://i.ibb.co/XZyXgWFB/DAXIGA-5.png"
    },
    {
      name: "DAXIGA 10",
      image: "https://i.ibb.co/ym41Z8DG/DAXIGA-10.png"
    },
    {
      name: "DAXIGA GM 1",
      image: "https://i.ibb.co/RGYTTYfH/DAXIGA-GM-1.png"
    },
    {
      name: "DAXIGA GM 2",
      image: "https://i.ibb.co/jkd1CFzs/DAXIGA-GM-2.png"
    },
    {
      name: "DAXIGA L",
      image: "https://i.ibb.co/sJwsfJ49/DAXIGA-L.png"
    },
    {
      name: "DAXIGA M 500",
      image: "https://i.ibb.co/j97wQN1y/DAXIGA-M-500.png"
    },
    {
      name: "DAXIGA M 1000",
      image: "https://i.ibb.co/4gssd95B/DAXIGA-M-1000.png"
    },
    {
      name: "DAXIGA S 10/100",
      image: "https://i.ibb.co/4xgBt0P/DAXIGA-S-10-100.png"
    },
    {
      name: "DAXIGA SM 500",
      image: "https://i.ibb.co/jvvCb6jd/DAXIGA-SM-500.png"
    },
    {
      name: "DAXIGA SM 1000",
      image: "https://i.ibb.co/xKpGsyGn/DAXIGA-SM-1000.png"
    },
    {
      name: "DAXIGA T",
      image: "https://i.ibb.co/DPzssv9L/DAXIGA-T.png"
    },
    {
      name: "DAXIGA V",
      image: "https://i.ibb.co/sx2BZGV/DAXIGA-V.png"
    },
    {
      name: "DAXIGA VM 500",
      image: "https://i.ibb.co/65PqZZ4/DAXIGA-VM-500.png"
    },
    {
      name: "DAXIGA VM 1000",
      image: "https://i.ibb.co/4RbGk1FD/DAXIGA-VM-1000.png"
    },
    {
      name: "EMPIGA 10",
      image: "https://i.ibb.co/Zpz0XyhG/EMPIGA-10.png"
    },
    {
      name: "EMPIGA 25",
      image: "https://i.ibb.co/BVdtDRGm/EMPIGA-25.png"
    },
    {
      name: "EMPIGA L 10",
      image: "https://i.ibb.co/Mkqh5HxW/EMPIGA-L-10.png"
    },
    {
      name: "EMPIGA L 25",
      image: "https://i.ibb.co/rRqGZmw9/EMPIGA-L-25.png"
    },
    {
      name: "EMPIGA M 12.5/500",
      image: "https://i.ibb.co/60TvG00S/EMPIGA-M-12-5-500.png"
    },
    {
      name: "EMPIGA M 12.5/1000",
      image: "https://i.ibb.co/v47GhK8y/EMPIGA-M-12-5-1000.png"
    },
    {
      name: "EMPIGA S 25",
      image: "https://i.ibb.co/b5kx5HFc/EMPIGA-S-25.png"
    },
    {
      name: "TENEDIX M 500",
      image: "https://i.ibb.co/BHRrXB1M/TENEDIX-M-500.png"
    },
    {
      name: "TENEDIX",
      image: "https://i.ibb.co/67JZ0bKS/TENEDIX.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center mb-8">
            <div className="bg-red-500 p-4 rounded-2xl mr-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Anti-Diabetic Products
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Advanced formulations for diabetes management with proven efficacy and safety profiles
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{products.length}+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">WHO-GMP</div>
              <div className="text-gray-600">Certified Manufacturing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Countries Exported</div>
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
            Need More Information?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of pharmaceutical experts is ready to assist you with product inquiries, technical specifications, and regulatory documentation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Contact Sales Team
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiDiabetic;