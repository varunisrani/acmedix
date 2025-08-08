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
import { Pill, Download } from "lucide-react";
import { Link } from "react-router-dom";

const OtherTherapy = () => {
  const rows: Array<{ sr: number; name: string; composition: string; mrp: string; packing: string }> = [
    { sr: 1, name: "ACMOXIA 60", composition: "Etoricoxib 60mg Tablet", mrp: "37.00", packing: "1 X 10'S" },
    { sr: 2, name: "ACMOXIA 90", composition: "Etoricoxib 90mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 3, name: "ACMOXIA MR", composition: "Etoricoxib 60mg + Thiocolchicoside 4mg Tablet", mrp: "129.00", packing: "1 X 10'S" },
    { sr: 4, name: "ACORISE D3", composition: "Cholecalciferol 60000 IU (Vitamin D3) Capsule", mrp: "44.00", packing: "1 X 4'S" },
    { sr: 5, name: "AFFOCAL CT", composition: "Calcitriol I.P 0.25 mcg + Calcium Carbonate 500mg. Eq to elemental Calcium 200mg. + Zinc 7.5mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 6, name: "AFFOCAL XT", composition: "Calcium Carbonate IP 1250mg Eq. to Elemental Calcium 500mg +Vitamin D3 IP 2000IU +Mecobalamin IP (Methylcobalamin) 1500mcg + L-Methylfolate Calcium 1mg + Pyridoxal 5 Phosphate 20mg Tablet", mrp: "134.00", packing: "1 X 15'S" },
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
              <div className="text-3xl font-bold text-primary mb-2">{rows.length}+</div>
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