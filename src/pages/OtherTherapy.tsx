import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const OtherTherapy = () => {
  const products = [
    {
      name: "Gastro-Protective Agent",
      description: "Proton pump inhibitor for gastric acid suppression",
      indication: "GERD, Peptic Ulcers",
      strength: "20mg/40mg",
      form: "Enteric Coated Capsule"
    },
    {
      name: "Antibiotic Combination",
      description: "Broad-spectrum antibiotic with beta-lactamase inhibitor",
      indication: "Bacterial Infections",
      strength: "625mg/1000mg",
      form: "Film Coated Tablet"
    },
    {
      name: "Pain Relief Formula",
      description: "Non-steroidal anti-inflammatory drug for pain management",
      indication: "Pain, Inflammation",
      strength: "100mg/200mg",
      form: "Sustained Release Tablet"
    },
    {
      name: "Vitamin D3 + K2",
      description: "Synergistic combination for bone health and calcium metabolism",
      indication: "Vitamin Deficiency, Osteoporosis",
      strength: "1000IU + 45mcg",
      form: "Soft Gelatin Capsule"
    },
    {
      name: "Anti-Inflammatory",
      description: "Selective COX-2 inhibitor for targeted inflammation control",
      indication: "Arthritis, Joint Pain",
      strength: "100mg/200mg",
      form: "Hard Gelatin Capsule"
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
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Therapeutic Areas</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-pharmaceutical group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <Pill className="h-6 w-6 text-purple-500" />
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