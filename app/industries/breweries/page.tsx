import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets, Thermometer, Printer, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Brewery Labels",
  description:
    "Custom beverage labels printed in Perth. Discuss artwork, materials and application requirements for your packaging.",
};

const features = [
 { icon: Droplets, title: "Moisture Exposure", description: "Tell us whether the label will see condensation, refrigeration or immersion. Test samples on your actual packaging before ordering." },
 { icon: Thermometer, title: "Storage Conditions", description: "Share the application and storage temperatures so we can discuss suitable materials and adhesives." },
 { icon: Printer, title: "Multiple Designs", description: "Quote seasonal releases and product variants together. Minimum quantities and setup requirements are confirmed for the job." },
 { icon: PackageOpen, title: "Colour and Metallic Effects", description: "Ask about colour and selective white toner on suitable stock for your label design." },
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
  {
    "label": "Quantity",
    "value": "Confirmed per design on quote"
  },
  {
    "label": "Dispatch timing",
    "value": "Confirmed on quote"
  },
  {
    "label": "Urgent orders",
    "value": "Ask about current availability"
  },
  {
    "label": "Roll requirements",
    "value": "Supply direction and core size"
  },
  {
    "label": "Dimensions",
    "value": "Send label and container dimensions"
  },
  {
    "label": "Colour",
    "value": "Artwork and proof requirements confirmed"
  }
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
            Custom Beverage Labels
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Labels for your bottles and cans, with materials and finishing selected for the intended application.
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
              Plan Your Beverage Labels
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
            Send your sizes, quantities and intended use for a job-specific quote.
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
