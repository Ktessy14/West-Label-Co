import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Palette, Layers, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Cosmetics Labels",
  description:
    "Custom cosmetic labels printed in Perth, with colour, white toner, metallic effects and digital cutting.",
};

const features = [
 { icon: Sparkles, title: "Metallic Effects", description: "Silver stock and selective white toner can combine metallic accents with opaque text and colour." },
 { icon: Palette, title: "Colour and White Toner", description: "Discuss colour, opacity and white-layer requirements for your artwork. Ask about proof options for colour-critical designs." },
 { icon: Layers, title: "Material and Finish", description: "Material and finish options are confirmed for each job. Test samples against oils, moisture and handling before committing to a run." },
 { icon: Gem, title: "Digital Cutting", description: "Send your label size and shape so we can check a suitable cutting layout for your container." },
];

const applications = [
  "Skincare serums & moisturizers",
  "Lipsticks & lip gloss",
  "Foundation & concealer",
  "Perfume & fragrance bottles",
  "Mascara & eyeliner",
  "Body lotion & oil",
  "Hair care & styling products",
  "Nail polish",
  "Candles & bath products",
];

const standardFinishes = [
  {
    "name": "White toner",
    "detail": "Opaque areas on suitable stocks"
  },
  {
    "name": "Metallic stock",
    "detail": "Selective metallic effects in your artwork"
  },
  {
    "name": "Other finishes",
    "detail": "Availability and suitability confirmed on quote"
  }
];

export default function CosmeticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            Industry
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 max-w-2xl">
            Cosmetics Labels That Captivate
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Custom labels for your skincare and beauty packaging, with colour, white toner and metallic effects on suitable stocks.
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
              Premium Finishes for Premium Brands
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

      {/* Applications & Finishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-8">
                Products We Label
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
                Discuss Your Finish
              </h2>
              <div className="flex flex-col gap-4">
                {standardFinishes.map((f) => (
                  <div key={f.name} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-gold" />
                    <div>
                      <span className="font-medium text-brand-navy">{f.name}</span>
                      <span className="text-gray-500 text-sm ml-2">— {f.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specialty Finishes */}
              <div className="mt-10 rounded-xl border border-brand-navy/20 bg-brand-navy/5 p-6">
                <h3 className="font-semibold text-brand-navy text-base mb-2">
                  Specialty Finishes
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Have a specific finish in mind? Send a reference so we can confirm feasibility, material availability and pricing before you order.
                </p>
                <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold">
                  <Link href="/contact">
                    Request Specialty Quote <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Beauty Brand
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Get a custom quote or hold our samples in your hands.
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
