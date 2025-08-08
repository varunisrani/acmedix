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
import { Beaker, Download } from "lucide-react";
import { Link } from "react-router-dom";

const CardiacCare = () => {
  const rows: Array<{ sr: number; name: string; composition: string; mrp: string; packing: string }> = [
    { sr: 1, name: "ACBISO 5", composition: "Bisoprolol 5 mg  Tablet", mrp: "29.00", packing: "1 X 10'S" },
    { sr: 2, name: "ACMEROSE 10", composition: "Rosuvastatin 10mg Tablet", mrp: "30.00", packing: "1 X 10'S" },
    { sr: 3, name: "ACMEROSE 20", composition: "Rosuvastatin 20mg Tablet", mrp: "52.00", packing: "1 X 10'S" },
    { sr: 4, name: "ACMEROSE A 10", composition: "Rosuvastatin 10mg + Aspirin 75mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 5, name: "ACMEROSE CV 10", composition: "Rosuvastatin 10mg + Clopidogrel 75mg Tablet", mrp: "53.00", packing: "1 X 10'S" },
    { sr: 6, name: "ACMEROSE EZ", composition: "Rosuvastatin 10mg + Ezetimibe 10mg Tablet", mrp: "89.00", packing: "1 X 10'S" },
    { sr: 7, name: "ACMEROSE F", composition: "Rosuvastatin 10mg + Fenofibrate 160mg Tablet", mrp: "52.00", packing: "1 X 10'S" },
    { sr: 8, name: "ACMEROSE GOLD 10", composition: "Rosuvastatin 10mg + Aspirin 75mg + Clopidogrel 75mg Capsule", mrp: "72.00", packing: "1 X 10'S" },
    { sr: 9, name: "ACMEROSE GOLD 20", composition: "Rosuvastatin 20mg + Aspirin 75mg + Clopidogrel 75mg Capsule", mrp: "82.00", packing: "1 X 10'S" },
    { sr: 10, name: "ACMETEL 40", composition: "Telmisartan 40 mg Tablet", mrp: "26.00", packing: "1 X 10'S" },
    { sr: 11, name: "ACMETEL AM", composition: "Telmisartan 40 mg + Amlodipine 5 mg  Tablet", mrp: "36.00", packing: "1 X 10'S" },
    { sr: 12, name: "ACMETEL AMH", composition: "Telmisartan 40 mg + Hydrochlorthiazide 12.5mg + Amlodipine 5mg  Tablet", mrp: "40.00", packing: "1 X 10'S" },
    { sr: 13, name: "ACMETEL BS", composition: "Telmisartan 40mg + Bisoprolol 5mg  Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 14, name: "ACMETEL CH", composition: "Telmisartan 40mg + Chlorthalidone 12.5mg  Tablet", mrp: "35.00", packing: "1 X 10'S" },
    { sr: 15, name: "ACMETEL H", composition: "Telmisartan 40 mg + Hydrochlorthiazide 12.5 mg  Tablet", mrp: "31.00", packing: "1 X 10'S" },
    { sr: 16, name: "ACMETEL LN", composition: "Telmisartan 40mg + Cilnidipine 10mg  Tablet", mrp: "44.00", packing: "1 X 10'S" },
    { sr: 17, name: "ACMETEL LNB 25", composition: "Telmisartan 40mg + Cilnidipine 10mg + Metoprolol 25mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 18, name: "ACMETEL LNB 50", composition: "Telmisartan 40mg + Cilnidipine 10mg + Metoprolol 50mg Tablet", mrp: "69.00", packing: "1 X 10'S" },
    { sr: 19, name: "ACMETEL TRIO 6.25", composition: "Telmisartan 40mg + Cilnidipine 10mg + Chlorthalidone 6.25mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 20, name: "ACMETEL TRIO 12.5", composition: "Telmisartan 40mg + Cilnidipine 10mg + Chlorthalidone 12.5mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 21, name: "ACMETEL MT 25", composition: "Telmisartan 40mg + Metoprolol 25mg Tablet", mrp: "35.00", packing: "1 X 10'S" },
    { sr: 22, name: "ACMETEL MT 50", composition: "Telmisartan 40mg + Metoprolol 50mg Tablet", mrp: "44.00", packing: "1 X 10'S" },
    { sr: 23, name: "ACMETO AM", composition: "Metoprolol 50 mg  + Amlodipine 5mg Tablet", mrp: "35.00", packing: "1 X 10'S" },
    { sr: 24, name: "ACMETO XL 25", composition: "Metoprolol 25 mg Tablet", mrp: "14.00", packing: "1 X 10'S" },
    { sr: 25, name: "ACMETO XL 50", composition: "Metoprolol 50 mg Tablet", mrp: "18.00", packing: "1 X 10'S" },
    { sr: 26, name: "ACOTIDE 10", composition: "Torsemide 10 mg Tablet", mrp: "29.00", packing: "1 X 10'S" },
    { sr: 27, name: "AFFOLMY 20", composition: "Olmesartan 20 mg Tablet", mrp: "29.00", packing: "1 X 10'S" },
    { sr: 28, name: "AFFOLMY 40", composition: "Olmesartan 40 mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 29, name: "CILAFIRST 10", composition: "Cilnidipine 10mg Tablet", mrp: "28.00", packing: "1 X 10'S" },
    { sr: 30, name: "CILAFIRST 20", composition: "Cilnidipine 20mg Tablet", mrp: "45.00", packing: "1 X 10'S" },
    { sr: 31, name: "CILAFIRST M 10/25", composition: "Cilnidipine 10mg + Metoprolol 25mg Tablet", mrp: "37.00", packing: "1 X 10'S" },
    { sr: 32, name: "CILAFIRST M 10/50", composition: "Cilnidipine 10 mg +  Metoprolol 50 mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 33, name: "IVASAFE 5", composition: "Ivabradine 5mg Tablet", mrp: "85.00", packing: "1 X 10'S" },
    { sr: 34, name: "SACUSAFE 50", composition: "Sacubitril 24 mg + Valsartan 26 mg Tablet", mrp: "125.00", packing: "1 X 14'S" },
    { sr: 35, name: "SACUSAFE 100", composition: "Sacubitril 49mg+Valsartan 51mg Tablet", mrp: "223.00", packing: "1 X 14'S" },
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
              <div className="text-3xl font-bold text-primary mb-2">{rows.length}+</div>
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