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
    "number": "01",
    "title": "Send Your Specs",
    "description": "Tell us the label size, quantity per design, intended use and any finishing requirements.",
    "detail": "Include roll direction, core size and application method if you use a labelling machine. Email artwork to info@westlabelco.com.au."
  },
  {
    "number": "02",
    "title": "Confirm the Quote",
    "description": "Pricing depends on material, layout, artwork, white-toner coverage and finishing.",
    "detail": "The quote confirms minimum quantities, any setup charges, delivery costs and expected dispatch timing for your job."
  },
  {
    "number": "03",
    "title": "Review Artwork",
    "description": "Check the layout and supplied product information before production.",
    "detail": "Discuss bleed, safe areas, resolution and colour requirements. A digital proof is not a guarantee of an exact screen-to-print colour match."
  },
  {
    "number": "04",
    "title": "Approve the Specification",
    "description": "Confirm artwork, material, dimensions and quantities before the job proceeds.",
    "detail": "For demanding applications, request a sample and test it on your own packaging under the intended conditions."
  },
  {
    "number": "05",
    "title": "Print and Finish",
    "description": "Labels are printed and finished to the specification agreed for your job.",
    "detail": "Multiple designs and quantities can be quoted together. Production timing depends on stock, setup and the current schedule."
  },
  {
    "number": "06",
    "title": "Arrange Delivery",
    "description": "Delivery or collection arrangements are confirmed with your order.",
    "detail": "For a reorder, provide the previous job reference and identify any changes to artwork, quantities or materials."
  }
];

const faqs = [
  {
    "q": "How do I send artwork?",
    "a": "Email your artwork to info@westlabelco.com.au with the job details. Include your available file formats so we can check print readiness."
  },
  {
    "q": "What is the minimum order?",
    "a": "Minimum quantities and setup requirements are confirmed on quote. Include the quantity for each design or SKU."
  },
  {
    "q": "Can I check a sample first?",
    "a": "Use the sample request form to discuss materials and your intended application. Availability and any sample costs are confirmed before proceeding."
  },
  {
    "q": "Can I reorder?",
    "a": "Send your previous job reference and tell us what has changed. We will confirm the specification and current quote."
  },
  {
    "q": "Can you help prepare artwork?",
    "a": "Tell us what files you have and what needs changing. Artwork assistance and its scope are confirmed before work begins."
  }
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
            From your label specification to printing and delivery. Timing and job requirements are confirmed on quote.
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
