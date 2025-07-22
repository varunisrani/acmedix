import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beaker, Pill, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const CardiacCare = () => {
  const products = [
    {
      name: "ACE Inhibitor 10mg",
      description: "Angiotensin-converting enzyme inhibitor for hypertension",
      indication: "Hypertension, Heart Failure",
      strength: "10mg",
      form: "Film Coated Tablet"
    },
    {
      name: "Beta Blocker 25mg",
      description: "Selective beta-1 adrenergic receptor blocker",
      indication: "Hypertension, Angina",
      strength: "25mg/50mg",
      form: "Extended Release Tablet"
    },
    {
      name: "Calcium Channel Blocker",
      description: "Long-acting dihydropyridine calcium channel blocker",
      indication: "Hypertension, Angina",
      strength: "5mg/10mg",
      form: "Sustained Release Tablet"
    },
    {
      name: "Statin + Ezetimibe",
      description: "Fixed-dose combination for cholesterol management",
      indication: "Hypercholesterolemia",
      strength: "10mg + 10mg",
      form: "Fixed Dose Combination"
    },
    {
      name: "Aspirin + Clopidogrel",
      description: "Dual antiplatelet therapy for cardiovascular protection",
      indication: "Secondary CVD Prevention",
      strength: "75mg + 75mg",
      form: "Enteric Coated Tablet"
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
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Therapeutic Classes</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-pharmaceutical group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Pill className="h-6 w-6 text-blue-500" />
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Indication:</span>
                      <span className="text-sm font-medium">{product.indication}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Strength:</span>
                      <span className="text-sm font-medium">{product.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Form:</span>
                      <span className="text-sm font-medium">{product.form}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button size="sm" className="flex-1">
                      Request Quote
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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