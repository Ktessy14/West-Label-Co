import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How West Label Co. takes your label from concept to delivery. A streamlined 6-step process built for quality and speed.",
};

const steps = [
  {
    number: "01",
    title: "Submit Your Specs",
    description:
      "Use our quote calculator or contact form to tell us about your project. Label size, material, quantity, finish, and timeline — the more detail, the faster we can help.",
    detail:
      "We accept artwork in AI, EPS, PDF, and high-res TIFF formats. Not sure what you need? Our specialists will guide you.",
  },
  {
    number: "02",
    title: "Receive Your Quote",
    description:
      "We'll send a detailed quote within 1 business day. No hidden fees, no surprises — just transparent pricing for exactly what you need.",
    detail:
      "Our quotes include material, printing, finishing, and shipping. Volume discounts apply at 1K, 5K, 10K, and 50K quantities.",
  },
  {
    number: "03",
    title: "Artwork Review & Proofing",
    description:
      "Our prepress team reviews your artwork for print-readiness, colour accuracy, and file integrity. You receive a digital proof within 24 hours of order confirmation.",
    detail:
      "We check bleed, safe zones, resolution, and colour profile. If anything needs fixing, we flag it before production — not after.",
  },
  {
    number: "04",
    title: "Press Approval",
    description:
      "Review and approve your digital proof before we go to press. For colour-critical orders, physical press proofs are available.",
    detail:
      "Production begins only after you sign off on the proof. Your approval locks in colour, layout, and specifications.",
  },
  {
    number: "05",
    title: "Production",
    description:
      "Your labels enter our production queue. Standard lead time is 3–5 business days from proof approval. Rush service available: 2–3 days (+25%).",
    detail:
      "Every order is run through our quality control process — colour verification, adhesion testing, and visual inspection before rolling.",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Labels are wound on rolls or cut to sheets based on your preference. Shipped via Team Global Express with tracking, or collected from our Perth warehouse.",
    detail:
      "Reorders are stored in our system for fast turnaround — just reach out and we'll have your labels back in production.",
  },
];

const faqs = [
  {
    q: "What file formats do you accept?",
    a: "We accept AI, EPS, PDF (with bleeds), and high-resolution TIFF (300+ DPI). Vector formats are strongly preferred for the best print quality.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "Our digital presses allow us to run as few as 250 labels per design. For offset printing, minimums start at 5,000.",
  },
  {
    q: "Do you offer physical press proofs?",
    a: "Yes, for an additional fee we can run a physical press proof before your full production run. Contact us for pricing.",
  },
  {
    q: "Can I reorder with the same specifications?",
    a: "Absolutely. We store all approved artwork and specs in our system. Reorders take one business day to confirm and ship on our standard timeline.",
  },
  {
    q: "Do you have in-house designers?",
    a: "We offer basic artwork cleanup and template creation. For full label design, we can recommend trusted design partners.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            How It Works
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Our Process
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From first contact to delivery in as few as 3–5 business days. Here&apos;s
            exactly how we turn your vision into a finished label.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex gap-8 pb-12">
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-brand-gold font-bold text-sm">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-brand-navy/20 mt-3" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">{step.description}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <div className="py-6">
                  <h3 className="font-semibold text-brand-navy mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
                {i < faqs.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Start with a free quote — no commitment required.
          </p>
          <Button asChild className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold">
            <Link href="/quote-calculator">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
