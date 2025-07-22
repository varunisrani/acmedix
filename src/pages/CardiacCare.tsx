import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Beaker, Download } from "lucide-react";
import { Link } from "react-router-dom";

const CardiacCare = () => {
  const products = [
    {
      name: "ACBISO 5",
      image: "https://i.ibb.co/gbYJ5YCv/ACBISO-5.png"
    },
    {
      name: "ACMEROSE 10",
      image: "https://i.ibb.co/MkjVhLj9/ACMEROSE-10.png"
    },
    {
      name: "ACMEROSE 20",
      image: "https://i.ibb.co/nqYsJzNh/ACMEROSE-20.png"
    },
    {
      name: "ACMEROSE A 10",
      image: "https://i.ibb.co/ks2bNfNk/ACMEROSE-A-10.png"
    },
    {
      name: "ACMEROSE CV 10",
      image: "https://i.ibb.co/rNhF09C/ACMEROSE-CV-10.png"
    },
    {
      name: "ACMEROSE EZ",
      image: "https://i.ibb.co/PzTJ6h1B/ACMEROSE-EZ.png"
    },
    {
      name: "ACMEROSE F",
      image: "https://i.ibb.co/Pv25B9Fv/ACMEROSE-F.png"
    },
    {
      name: "ACMEROSE GOLD 10",
      image: "https://i.ibb.co/LX5PRNb3/ACMEROSE-GOLD-10.png"
    },
    {
      name: "ACMEROSE GOLD 20",
      image: "https://i.ibb.co/tPFRTbMd/ACMEROSE-GOLD-20.png"
    },
    {
      name: "ACMETEL 40",
      image: "https://i.ibb.co/qMgSNQYR/ACMETEL-40.png"
    },
    {
      name: "ACMETEL AM",
      image: "https://i.ibb.co/Z1fCnYSm/ACMETEL-AM.png"
    },
    {
      name: "ACMETEL AMH",
      image: "https://i.ibb.co/NgbGHGQw/ACMETEL-AMH.png"
    },
    {
      name: "ACMETEL BS",
      image: "https://i.ibb.co/0yMX4QjD/ACMETEL-BS.png"
    },
    {
      name: "ACMETEL CH",
      image: "https://i.ibb.co/RG53LXf0/ACMETEL-CH.png"
    },
    {
      name: "ACMETEL H",
      image: "https://i.ibb.co/q3byz6wn/ACMETEL-H.png"
    },
    {
      name: "ACMETEL LN",
      image: "https://i.ibb.co/qz07Gcz/ACMETEL-LN.png"
    },
    {
      name: "ACMETEL MT 25",
      image: "https://i.ibb.co/zTrKvrCb/ACMETEL-MT-25.png"
    },
    {
      name: "ACMETEL MT 50",
      image: "https://i.ibb.co/fGztvSCY/ACMETEL-MT-50.png"
    },
    {
      name: "ACMETO AM",
      image: "https://i.ibb.co/PsWbyszL/ACMETO-AM.png"
    },
    {
      name: "ACMETO XL 25",
      image: "https://i.ibb.co/35hCcwGc/ACMETO-XL-25.png"
    },
    {
      name: "ACMETO XL 50",
      image: "https://i.ibb.co/xSYvn27h/ACMETO-XL-50.png"
    },
    {
      name: "ACOTIDE 10",
      image: "https://i.ibb.co/rRfn9QDh/ACOTIDE-10.png"
    },
    {
      name: "AFFOLMY 20",
      image: "https://i.ibb.co/jkVBdWzj/AFFOLMY-20.png"
    },
    {
      name: "AFFOLMY 40",
      image: "https://i.ibb.co/3mrWQXww/AFFOLMY-40.png"
    },
    {
      name: "CILAFIRST 10",
      image: "https://i.ibb.co/yFTfhPS5/CILAFIRST-10.png"
    },
    {
      name: "CILAFIRST 20",
      image: "https://i.ibb.co/jZ9gQkC0/CILAFIRST-20.png"
    },
    {
      name: "CILAFIRST M 10/25",
      image: "https://i.ibb.co/5gVR69DX/CILAFIRST-M-10-25.png"
    },
    {
      name: "CILAFIRST M 10/50",
      image: "https://i.ibb.co/7d5vvVZ1/CILAFIRST-M-10-50.png"
    },
    {
      name: "IVASAFE 5",
      image: "https://i.ibb.co/kVsdv5cR/IVASAFE-5.png"
    },
    {
      name: "SACUSAFE 50",
      image: "https://i.ibb.co/8nYsLLg6/SACUSAFE-50.png"
    },
    {
      name: "SACUSAFE 100",
      image: "https://i.ibb.co/W48P7TcX/SACUSAFE-100.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center mb-8">
            <div className="bg-blue-500 p-4 rounded-2xl mr-6">
              <Beaker className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cardiac Care Products
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Comprehensive cardiovascular treatments for optimal heart health and patient outcomes
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{products.length}+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">FDA</div>
              <div className="text-gray-600">Approved Formulations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
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
            Partner with Cardiac Care Experts
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our cardiovascular portfolio is backed by rigorous clinical research and manufacturing excellence, ensuring the highest quality standards for patient care.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Contact Specialists
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CardiacCare;