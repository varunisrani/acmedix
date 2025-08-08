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
import { Heart, Download } from "lucide-react";
import { Link } from "react-router-dom";

const AntiDiabetic = () => {
  const rows: Array<{ sr: number; name: string; composition: string; mrp: string; packing: string }> = [
    { sr: 1, name: "ACMEGLIM M1 FORTE", composition: "Glimepiride 1 mg + Metformin 1000mg Tablet", mrp: "34.00", packing: "1 X 10'S" },
    { sr: 2, name: "ACMEGLIM M1", composition: "Metformin 500 mg SR + Glimepiride 1 mg Tablet", mrp: "27.50", packing: "1 X 10'S" },
    { sr: 3, name: "ACMEGLIM M2 FORTE", composition: "Glimepiride 2 mg + Metformin 1000mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 4, name: "ACMEGLIM M2", composition: "Metformin 500 mg SR + Glimepiride 2 mg Tablet", mrp: "29.50", packing: "1 X 10'S" },
    { sr: 5, name: "ACMEGLIM MP 1", composition: "Glimepiride 1mg + Pioglitazone 15mg + Metformin 500mg Tablet", mrp: "38.00", packing: "1 X 10'S" },
    { sr: 6, name: "ACMEGLIM MP 2", composition: "Glimepiride 2mg+Pioglitazone 15mg+Metformin 500mg Tablet", mrp: "42.00", packing: "1 X 10'S" },
    { sr: 7, name: "ACMEGLIM MV1", composition: "Metformin 500 mg SR + Glimepiride 1 mg +Voglibose 0.1 mg Tablet", mrp: "42.00", packing: "1 X 10'S" },
    { sr: 8, name: "ACMEGLIM MV2/0.3", composition: "Glimepiride 2mg + Metformin 500mg + Voglibose 0.3mg Tablet", mrp: "64.50", packing: "1 X 10'S" },
    { sr: 9, name: "ACMEGLIM MV2", composition: "Metformin 500 mg SR + Glimepiride 2 mg Tab +Voglibose 0.2 mg Tablet", mrp: "47.00", packing: "1 X 10'S" },
    { sr: 10, name: "ACMEZID M", composition: "Gliclazide 80mg + Metformin 500mg Tablet", mrp: "42.00", packing: "1 X 10'S" },
    { sr: 11, name: "ACOSITA 50", composition: "Sitagliptin 50mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 12, name: "ACOSITA 100", composition: "Sitagliptin 100mg Tablet", mrp: "69.00", packing: "1 X 10'S" },
    { sr: 13, name: "ACOSITA M 500", composition: "Sitagliptin 50mg + Metformin 500mg Tablet", mrp: "89.00", packing: "1 X 10'S" },
    { sr: 14, name: "ACOSITA M SR 100/500", composition: "Sitagliptin 100mg + Metformin 500mg SR Tablet", mrp: "85.00", packing: "1 X 10'S" },
    { sr: 15, name: "ACOSITA M SR 100/1000", composition: "Sitagliptin 100mg + Metformin 1000mg SR Tablet", mrp: "89.00", packing: "1 X 10'S" },
    { sr: 16, name: "ACOSITA MP 500", composition: "Sitagliptin 100mg + Pioglitazone 15mg + Metformin 500mg Tablet", mrp: "99.00", packing: "1 X 10'S" },
    { sr: 17, name: "ACOSITA MP 1000", composition: "Sitagliptin 100mg + Pioglitazone 15mg + Metformin 1000mg Tablet", mrp: "109.00", packing: "1 X 10'S" },
    { sr: 18, name: "ACOVOG M 0.3", composition: "Voglibose 0.3mg + Metformin 500mg(SR) Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 19, name: "ACOVOG MD 0.2", composition: "Voglibose  0.2 mg (MD) Tablet", mrp: "20.00", packing: "1 X 10'S" },
    { sr: 20, name: "ACOVOG MD 0.3", composition: "Voglibose  0.3 mg (MD) Tablet", mrp: "25.00", packing: "1 X 10'S" },
    { sr: 21, name: "ACVILDA 50", composition: "Vildagliptin 50mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 22, name: "ACVILDA M 500", composition: "Vildagliptin 50mg + Metformin 500mg Tablet", mrp: "46.00", packing: "1 X 10'S" },
    { sr: 23, name: "ACVILDA M 1000", composition: "Vildagliptin 50mg + Metformin 1000mg Tablet", mrp: "51.00", packing: "1 X 10'S" },
    { sr: 24, name: "ACVILDA M SR 500", composition: "Vildagliptin 50mg + Metformin HCL(SR)500mg Tablet", mrp: "51.00", packing: "1 X 10'S" },
    { sr: 25, name: "DAXIGA 5", composition: "Dapagliflozin 5 mg Tablet", mrp: "29.00", packing: "1 X 10'S" },
    { sr: 26, name: "DAXIGA 10", composition: "Dapagliflozin 10mg Tablet", mrp: "48.00", packing: "1 X 10'S" },
    { sr: 27, name: "DAXIGA GM 1", composition: "Dapagliflozin 10mg + Glimepiride 1mg + Metformin 500mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 28, name: "DAXIGA GM 2", composition: "Dapagliflozin 10mg + Glimepiride 2mg + Metformin 500mg Tablet", mrp: "65.00", packing: "1 X 10'S" },
    { sr: 29, name: "DAXIGA L", composition: "Dapagliflozin 10mg + Linagliptin 5mg Tablet", mrp: "79.00", packing: "1 X 10'S" },
    { sr: 30, name: "DAXIGA M 500", composition: "Dapagliflozin 10mg + Metformin 500mg Tablet", mrp: "63.00", packing: "1 X 10'S" },
    { sr: 31, name: "DAXIGA M 1000", composition: "Dapagliflozin 10mg + Metformin 1000mg Tablet", mrp: "79.00", packing: "1 X 10'S" },
    { sr: 32, name: "DAXIGA S 10/100", composition: "Sitagliptin 100mg + Dapagliflozin 10mg Tablet", mrp: "99.00", packing: "1 X 10'S" },
    { sr: 33, name: "DAXIGA SM 500", composition: "Sitagliptin 100mg + Dapagliflozin 10mg  + Metformin 500mg Tablet", mrp: "119.00", packing: "1 X 10'S" },
    { sr: 34, name: "DAXIGA SM 1000", composition: "Sitagliptin 100mg + Dapagliflozin 10mg + Metformin 1000mg Tablet", mrp: "129.00", packing: "1 X 10'S" },
    { sr: 35, name: "DAXIGA T", composition: "Dapagliflozin 10mg + Teneligliptin 20mg Tablet", mrp: "79.00", packing: "1 X 10'S" },
    { sr: 36, name: "DAXIGA V", composition: "Dapagliflozin 10mg + Vildagliptin 100mg SR Tablet", mrp: "89.00", packing: "1 X 10'S" },
    { sr: 37, name: "DAXIGA VM 500", composition: "Dapagliflozin 10mg + Vildagliptin 100mg + Metformin 500mg Tablet", mrp: "95.00", packing: "1 X 10'S" },
    { sr: 38, name: "DAXIGA VM 1000", composition: "Dapagliflozin 10mg + Vildagliptin 100mg + Metformin 1000mg Tablet", mrp: "99.00", packing: "1 X 10'S" },
    { sr: 39, name: "EMPIGA 10", composition: "Empagliflozin 10mg Tablet", mrp: "39.00", packing: "1 X 10'S" },
    { sr: 40, name: "EMPIGA 25", composition: "Empagliflozin 25mg Tablet", mrp: "59.00", packing: "1 X 10'S" },
    { sr: 41, name: "EMPIGA L 10", composition: "Empagliflozin 10mg + Linagliptin 5mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 42, name: "EMPIGA L 25", composition: "Empagliflozin 25mg + Linagliptin 5mg Tablet", mrp: "89.00", packing: "1 X 10'S" },
    { sr: 43, name: "EMPIGA M 12.5/500", composition: "Empagliflozin 12.5mg + Metformin 500mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
    { sr: 44, name: "EMPIGA M 12.5/1000", composition: "Empagliflozin 25mg + Metformin 1000mg Tablet", mrp: "79.00", packing: "1 X 10'S" },
    { sr: 45, name: "EMPIGA S 25", composition: "Empagliflozin 25mg + Sitagliptin 100mg Tablet", mrp: "99.00", packing: "1 X 10'S" },
    { sr: 46, name: "TENEDIX M 500", composition: "Teneligliptin 20mg + Metformin 500mg SR Tablet", mrp: "81.00", packing: "1 X 15'S" },
    { sr: 47, name: "TENEDIX 20", composition: "Teneligliptin 20mg Tablet", mrp: "49.00", packing: "1 X 10'S" },
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
              <div className="text-3xl font-bold text-primary mb-2">{rows.length}+</div>
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