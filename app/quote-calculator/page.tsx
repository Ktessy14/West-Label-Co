import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Request a Label Quote",
  description: "Request a quote based on your label size, quantity, artwork and finishing requirements.",
};

const specifications = [
  "Label width, height and shape",
  "Quantity required for each design or SKU",
  "Container material and intended use",
  "Preferred stock, colour and white-toner requirements",
  "Finish, roll direction and core size, if applicable",
  "Delivery postcode and preferred timing",
];

export default function QuoteCalculatorPage() {
  return (
    <>
      <section className="bg-charcoal-dark py-14 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">A quote for your label job</h1>
          <p className="text-white/70 text-lg">Pricing depends on your material, layout, artwork, white-toner coverage and finishing. Send the details below so we can confirm the scope and price for your job.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">What to include</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {specifications.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="mt-8 text-gray-600">Your quote will confirm minimum quantities, material availability, any setup charges, delivery costs and expected dispatch timing. For demanding applications, ask about samples to test on your own packaging.</p>
        <p className="mt-4 text-gray-600">Use the enquiry form for your job details. Artwork can be emailed to <a className="underline" href="mailto:info@westlabelco.com.au">info@westlabelco.com.au</a>.</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button asChild><Link href="/contact">Send Your Enquiry</Link></Button>
          <Button asChild variant="outline"><Link href="/request-sample">Request Samples</Link></Button>
        </div>
      </section>
    </>
  );
}
