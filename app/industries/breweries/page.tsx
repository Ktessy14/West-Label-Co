import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets, Thermometer, Printer, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Brewery Labels",
  description:
    "Ice-bucket proof brewery labels for craft beer, cider, spirits, and more. Short-run friendly with vibrant colour.",
};

const features = [
  {
    icon: Droplets,
    title: "Ice Bucket Proof",
    description:
      "Our waterproof films and wet-strength adhesives stay on bottles through full submersion in ice water. No peeling, no smearing, no embarrassing labels.",
  },
  {
    icon: Thermometer,
    title: "Temperature Resistant",
    description:
      "Labels that perform from cold storage to a warm bar top. Our adhesives maintain bond across extreme temperature swings.",
  },
  {
    icon: Printer,
    title: "Short-Run Friendly",
    description:
      "Digital printing means no plate fees. Order as few as 250 labels — perfect for limited releases, seasonal brews, and test batches.",
  },
  {
    icon: PackageOpen,
    title: "No-Label Look",
    description:
      'Clear BOPP substrates give a premium "no label" appearance. Perfect for craft breweries wanting to showcase bottle colour.',
  },
];

const applications = [
  "Craft beer bottles & cans",
  "Cider & hard seltzer",
  "Wine & sparkling wine",
  "Spirits & whiskey",
  "Kombucha & cold brew",
  "Mead & sake",
  "NA beer & beverages",
  "Growlers & crowlers",
];

const specs = [
  { label: "Minimum Order", value: "250 labels" },
  { label: "Standard Turnaround", value: "5–7 business days" },
  { label: "Rush Options", value: "2–3 business day available" },
  { label: "Roll Direction", value: "1–12 available" },
  { label: "Max Label Width", value: "200mm (larger formats via partners)" },
  { label: "Colour", value: "Full CMYK + Pantone options" },
];

export default function BreweriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            Industry
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 max-w-2xl">
            Brewery Labels Built for the Cooler
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Ice-bucket proof. Condensation resistant. Shelf-stopping colour. Labels
            for craft breweries that refuse to settle for ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold">
              <Link href="/quote-calculator">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link href="/request-sample">Request Samples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-navy">
              Engineered for the Beverage Industry
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <Card key={f.title} className="bg-white border-gray-200">
                <CardContent className="p-8 flex gap-5">
                  <div className="w-11 h-11 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-8">
                Beverage Types We Serve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-8">
                Production Specs
              </h2>
              <div className="flex flex-col gap-4">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-sm">{s.label}</span>
                    <span className="font-medium text-brand-navy text-sm text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Label Your Next Batch?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Get a quote in minutes. No minimums too small for us.
          </p>
          <Button asChild className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold">
            <Link href="/quote-calculator">
              Start Your Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
