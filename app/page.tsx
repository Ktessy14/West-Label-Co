import Link from "next/link";
import { ArrowRight, Clock, Package, MapPin, Upload, FileCheck, Printer, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const valueProps = [
  {
    icon: Clock,
    title: "3-Day Turnaround",
    description:
      "From proof approval to dispatch in 3 business days. Rush jobs welcome — talk to us about same-day dispatch for urgent orders.",
  },
  {
    icon: Package,
    title: "250 Label Minimum Order",
    description:
      "No need to over-order. Our digital presses let you start from as little as 250 labels per design, with no setup fees.",
  },
  {
    icon: MapPin,
    title: "WA-Based Production",
    description:
      "Printed and dispatched from Perth, Western Australia. Faster delivery for local brands, and you can collect in person.",
  },
];

const materials = [
  {
    name: "Gloss Polypropylene",
    description:
      "Our most popular waterproof film. Vibrant colour reproduction and a high-gloss finish that makes products stand out on shelf. Ideal for bottles, jars, and anything that sees moisture.",
  },
  {
    name: "Matte Paper",
    description:
      "A natural, premium feel suited to craft and organic brand positioning. Takes ink beautifully for rich, accurate colour. Best for dry environments and decorative packaging.",
  },
  {
    name: "Clear Film",
    description:
      "Transparent BOPP substrate creates a seamless no-label look. Your design appears to float directly on the product surface — a favourite for premium cosmetic and beverage brands.",
  },
  {
    name: "Holographic",
    description:
      "Rainbow foil substrate that shifts and shimmers under light. Delivers instant shelf presence and a premium, hard-to-replicate finish for limited editions and luxury products.",
  },
];

const processSteps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Artwork",
    description: "Send us your print-ready files via the quote form. We accept PDF, AI, and EPS.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Get Quote",
    description: "Receive a detailed quote within 1 business hour, including material and finish options.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Approve Proof",
    description: "We send a digital proof for your sign-off before anything goes to press.",
  },
  {
    icon: Printer,
    step: "04",
    title: "We Print",
    description: "Production begins immediately after approval. Every run is colour-checked against your proof.",
  },
  {
    icon: Truck,
    step: "05",
    title: "Delivered",
    description: "Dispatched from Perth in 3 business days. Australia-wide shipping with full tracking.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#2D2D2D]">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Premium Labels.
              <br />
              <span className="text-copper">Printed Fast.</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Perth-based label printing for supplement, cosmetic, and beverage brands.
              Low minimums. 3-day turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-copper hover:bg-copper-dark text-white font-semibold text-base px-8 h-12"
              >
                <Link href="/quote-calculator">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40 font-medium text-base h-12"
              >
                <Link href="/request-sample">Request Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-copper" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10">
            <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
              Materials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The right substrate for every brand
            </h2>
          </div>
          <p className="text-xs text-gray-400 mb-5">All substrates in stock for 3-day turnaround</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {materials.map(({ name, description }) => (
              <div
                key={name}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 flex flex-col gap-3 hover:border-copper/40 hover:bg-copper/5 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-copper/15 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-sm bg-copper block" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug">{name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <p className="text-copper text-xs font-semibold uppercase tracking-widest mb-2">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              From file to front door in 5 steps
            </h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:grid md:grid-cols-5 gap-0 relative">
            {/* Connector line */}
            <div
              className="absolute top-[22px] left-[calc(10%+16px)] right-[calc(10%+16px)] h-px bg-gray-200"
              aria-hidden="true"
            />
            {processSteps.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="relative flex flex-col items-center text-center px-3">
                {/* Step circle */}
                <div className="relative z-10 mb-5 w-11 h-11 rounded-full bg-white border-2 border-copper flex items-center justify-center shadow-sm">
                  <Icon className="h-4 w-4 text-copper" />
                </div>
                <span className="text-xs text-copper font-bold tracking-widest mb-1">{step}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 md:hidden">
            {processSteps.map(({ icon: Icon, step, title, description }, idx) => (
              <div key={step} className="flex gap-4">
                {/* Left: icon + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-copper flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="h-4 w-4 text-copper" />
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 my-2" />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-8 pt-1">
                  <span className="text-xs text-copper font-bold tracking-widest">{step}</span>
                  <h3 className="font-bold text-gray-900 text-sm mt-0.5 mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#2D2D2D]">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready for premium labels?
          </h2>
          <p className="text-white/55 max-w-md mx-auto mb-10 text-base leading-relaxed">
            Configure your specs, get an instant price, and have labels at your door
            within the week.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-copper hover:bg-copper-dark text-white font-semibold px-10 h-12 text-base"
          >
            <Link href="/quote-calculator">
              Start Your Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
