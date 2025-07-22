import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Pill, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const NeuroCare = () => {
  const products = [
    {
      name: "Antiepileptic 500mg",
      description: "Broad-spectrum anticonvulsant for seizure management",
      indication: "Epilepsy, Seizure Disorders",
      strength: "500mg/750mg",
      form: "Extended Release Tablet"
    },
    {
      name: "SSRI Antidepressant",
      description: "Selective serotonin reuptake inhibitor for mood disorders",
      indication: "Depression, Anxiety Disorders",
      strength: "20mg/40mg",
      form: "Film Coated Tablet"
    },
    {
      name: "Anxiolytic 0.5mg",
      description: "Short-acting benzodiazepine for anxiety management",
      indication: "Anxiety, Panic Disorders",
      strength: "0.5mg/1mg",
      form: "Sublingual Tablet"
    },
    {
      name: "Neuroprotective Agent",
      description: "Advanced neuroprotective therapy for cognitive support",
      indication: "Alzheimer's, Dementia",
      strength: "10mg/20mg",
      form: "Orally Disintegrating Tablet"
    },
    {
      name: "Anti-Parkinson Drug",
      description: "Dopamine agonist for Parkinson's disease management",
      indication: "Parkinson's Disease",
      strength: "0.25mg/0.5mg",
      form: "Extended Release Tablet"
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
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Neurological Classes</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-pharmaceutical group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <Pill className="h-6 w-6 text-green-500" />
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