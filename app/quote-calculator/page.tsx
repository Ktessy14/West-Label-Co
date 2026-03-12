import type { Metadata } from "next";
import QuoteCalculatorClient from "./QuoteCalculatorClient";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Quote Calculator",
  description:
    "Get an instant price estimate for your custom label order. Adjust quantity, size, material, and finish to see live pricing.",
};

export default function QuoteCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-dark border-b border-white/10 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-copper/20 text-copper border-copper/30 text-xs uppercase tracking-widest font-semibold">
            Instant Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Quote Calculator
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Configure your label specs below and get a live estimate. Prices update
            instantly as you adjust each option.
          </p>
        </div>
      </section>

      <QuoteCalculatorClient />
    </>
  );
}
