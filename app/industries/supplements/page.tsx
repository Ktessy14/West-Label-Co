import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Supplement Labels",
  description:
    "Product label printing for supplement bottles, tubs and pouches, using customer-approved artwork and information.",
};

const recommendedMaterials = [
  {
    name: "Gloss Polypropylene",
    badge: "Discuss suitability",
    description:
      "Discuss film stocks for your bottles and tubs. Test a sample for the moisture, handling and storage conditions your packaging will encounter.",
  },
  {
    name: "Matte Laminate",
    badge: "Premium feel",
    description:
      "Ask about a matte finish for your label. Material, finish and availability are confirmed on quote.",
  },
  {
    name: "Clear Film",
    badge: "Modern look",
    description:
      "Ask about clear label stock and white-toner requirements for your design. Suitability is confirmed for each job.",
  },
];

const commonSizes = [
  { size: "100 × 50mm", note: "Example format; check against your actual container" },
  { size: "80 × 40mm",  note: "Example compact format; confirm fit on your packaging" },
  { size: "60 × 30mm",  note: "Example small format; confirm artwork readability" },
];

const requirements = [
  "Approved product names and claims",
  "Ingredient and nutrition information, where required",
  "Directions, warnings and other required statements",
  "Batch and date fields, where required",
  "Supplied barcodes or QR codes",
  "You are responsible for approving the content and regulatory suitability before printing"
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
            Printed labels for supplement bottles, tubs and pouches, using your approved artwork and product information.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-copper hover:bg-copper-dark text-white font-semibold px-8 h-12"
          >
            <Link href="/quote-calculator">
              Request a Quote
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
                Example label sizes
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
                  Send your actual dimensions so we can confirm layout and cutting suitability.
                </p>
              </div>
            </div>

            {/* Compliance */}
            <div>
              <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
                Artwork content
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Information to include in your approved artwork
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
            Send your label dimensions, quantity per design and material preferences for a job-specific quote.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-copper hover:bg-copper-dark text-white font-semibold px-10 h-12 text-base"
          >
            <Link href="/quote-calculator">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
