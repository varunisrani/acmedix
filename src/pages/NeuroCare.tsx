import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";

const NeuroCare = () => {
  const rows: Array<{ sr: number; name: string; composition: string; mrp: string; packing: string }> = [
    { sr: 1, name: "ACOGAB NT", composition: "Gabapentin 400 mg + Nortriptyline 10mg Tablet", mrp: "69.00", packing: "1 X 10'S" },
    { sr: 2, name: "ACOLEV 500", composition: "Levetiracetam 500mg Tablet", mrp: "69.00", packing: "1 X 10'S" },
    { sr: 3, name: "ACONERV P", composition: "Pregabalin 75 mg Sustained Released + Mecobalamin 1500 mcg. Tablet", mrp: "72.00", packing: "1 X 10'S" },
    { sr: 4, name: "ACONERV PLUS", composition: "Methylcobalamin 1500mcg+Alpha Lipoic Acid 100mg+Pyridoxine 3mg + Folic Acid 1.5mg + Vitamin D3 1000 IU Tablet", mrp: "90.00", packing: "1 X 10'S" },
    { sr: 5, name: "ACONERV SL", composition: "Methylcobalamin 1500 mcg Sublingual Tablet", mrp: "44.00", packing: "1 X 10'S" },
    { sr: 6, name: "ACOPRAM PLUS", composition: "Escitalopram 10mg +Clonezapam 0.5mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 7, name: "ACOPRAM ", composition: "Escitalopram 10mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 8, name: "ACOPREG NT", composition: "Pregabalin 75 mg + Nortryptilin 10 mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 9, name: "ACOVERT 16", composition: "Betahistine 16 mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
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
              <div className="text-3xl font-bold text-primary mb-2">{rows.length}+</div>
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

      {/* Products Table */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="card-pharmaceutical p-4 md:p-6 overflow-auto max-h-[70vh] relative">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-background shadow-sm">
                <TableRow>
                  <TableHead className="w-20 text-base md:text-lg font-semibold uppercase">Sr No</TableHead>
                  <TableHead className="text-base md:text-lg font-semibold uppercase">Product Name</TableHead>
                  <TableHead className="text-base md:text-lg font-semibold uppercase">Composition</TableHead>
                  <TableHead className="w-28 text-right text-base md:text-lg font-semibold uppercase">M.R.P</TableHead>
                  <TableHead className="w-28 text-base md:text-lg font-semibold uppercase">Packing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.sr}>
                    <TableCell className="font-medium">{r.sr}</TableCell>
                    <TableCell className="font-semibold text-foreground">{r.name}</TableCell>
                    <TableCell className="text-muted-foreground">{r.composition}</TableCell>
                    <TableCell className="text-right text-primary font-semibold">₹{r.mrp}</TableCell>
                    <TableCell>{r.packing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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