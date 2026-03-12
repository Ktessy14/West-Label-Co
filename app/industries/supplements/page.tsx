import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Supplement Labels",
  description:
    "TGA-compliant label printing for protein, vitamins, and wellness brands. Batch codes, ingredient panels, and expiry requirements handled.",
};

const recommendedMaterials = [
  {
    name: "Gloss Polypropylene",
    badge: "Most popular",
    description:
      "Waterproof and tear-resistant — the go-to for supplement bottles and tubs. Survives condensation, oily hands, and warehouse handling without peeling or smearing.",
  },
  {
    name: "Matte Laminate",
    badge: "Premium feel",
    description:
      "A soft, non-reflective surface that communicates quality at first touch. Works exceptionally well for premium wellness and natural supplement lines.",
  },
  {
    name: "Clear Film",
    badge: "Modern look",
    description:
      "Transparent substrate gives a clean, contemporary no-label appearance. Ideal for brands that want the product itself to be part of the visual identity.",
  },
];

const commonSizes = [
  { size: "100 × 50mm", note: "Standard for 250–500ml bottles and mid-size tubs" },
  { size: "80 × 40mm",  note: "Compact format for capsule jars and slim bottles" },
  { size: "60 × 30mm",  note: "Small-format for sachets, sample packs, and vials" },
];

const requirements = [
  "Batch code and lot number printing",
  "Expiry date placement and formatting",
  "Ingredient and nutrition panels",
  "TGA advisory statements",
  "Barcode and QR code integration",
  "Tamper-evident and sequential numbering",
];

export default function SupplementsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#2D2D2D]">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-4">
            Industry — Supplements
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 max-w-2xl">
            Supplement Labels
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
            TGA-compliant label printing for protein, vitamins, and wellness brands.
            We understand batch codes, ingredient panels, and expiry requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-copper hover:bg-copper-dark text-white font-semibold px-8 h-12"
          >
            <Link href="/quote-calculator">
              Get Instant Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Recommended Materials ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
              Recommended materials
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Substrates built for supplement packaging
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedMaterials.map(({ name, badge, description }) => (
              <div
                key={name}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col gap-3 hover:border-copper/40 hover:bg-copper/5 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{name}</h3>
                  <span className="flex-shrink-0 text-xs font-semibold text-copper bg-copper/10 px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Sizes + Compliance Requirements ── */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

            {/* Sizes */}
            <div>
              <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
                Common sizes
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Standard supplement label sizes
              </h2>
              <div className="flex flex-col gap-0">
                {commonSizes.map(({ size, note }) => (
                  <div
                    key={size}
                    className="flex items-start gap-5 py-5 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-shrink-0 w-28 h-14 rounded-lg border-2 border-copper/30 bg-copper/5 flex items-center justify-center">
                      <span className="text-copper font-bold text-sm tabular-nums">{size}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed pt-1">{note}</p>
                  </div>
                ))}
                <p className="text-xs text-gray-400 mt-4">
                  Custom sizes available — enter any dimensions in the quote calculator.
                </p>
              </div>
            </div>

            {/* Compliance */}
            <div>
              <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
                Compliance
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                What we handle on every supplement job
              </h2>
              <ul className="flex flex-col gap-0">
                {requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-center gap-3 py-3.5 border-b border-gray-100 last:border-0"
                  >
                    <CheckCircle className="h-4 w-4 text-copper flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2D2D2D]">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to label your supplement range?
          </h2>
          <p className="text-white/55 max-w-md mx-auto mb-10 text-base leading-relaxed">
            Enter your label dimensions, quantity, and material to get an instant
            price — no account required.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-copper hover:bg-copper-dark text-white font-semibold px-10 h-12 text-base"
          >
            <Link href="/quote-calculator">
              Get Instant Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
