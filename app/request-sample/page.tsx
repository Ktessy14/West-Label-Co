import type { Metadata } from "next";
import { PackageOpen, CheckCircle2, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Request a Sample",
  description:
    "Discuss label samples and material suitability with West Label Co. Availability and any costs confirmed before proceeding.",
};

const sampleTypes = [
  {
    name: "Material Swatch Kit",
    description: "Tell us which material properties matter for your packaging so we can discuss suitable samples.",
    includes: ["Available stock samples", "Finish options to discuss", "Application requirements"],
  },
  {
    name: "Industry Sample Pack",
    description: "Ask about available printed examples relevant to your packaging and design.",
    includes: ["Available printed examples", "Material options to discuss", "Finish examples where available"],
  },
  {
    name: "Custom Printed Sample",
    description: "Ask about a test print using your artwork. Feasibility, scope and any costs are confirmed before proceeding.",
    includes: ["Artwork requirements", "Material and finish selection", "Proof options to discuss"],
  },
];

const perks = [
  { icon: CheckCircle2, label: "Sample options confirmed first" },
  { icon: Clock, label: "Dispatch timing confirmed" },
  { icon: Truck, label: "Delivery costs confirmed" },
  { icon: PackageOpen, label: "No sales pressure" },
];

export default function RequestSamplePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            Label Samples
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Feel the Quality Before You Order
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Tell us about your packaging and intended use so we can discuss suitable samples.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {perks.map((perk) => (
              <div key={perk.label} className="flex items-center gap-2 text-sm text-gray-600">
                <perk.icon className="h-4 w-4 text-brand-gold" />
                {perk.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Types */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">
            What Would You Like to Receive?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTypes.map((sample) => (
              <Card key={sample.name} className="bg-white border-gray-200">
                <CardContent className="p-7">
                  <h3 className="font-semibold text-brand-navy text-lg mb-3">{sample.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{sample.description}</p>
                  <ul className="flex flex-col gap-2">
                    {sample.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy text-center mb-2">
            Request Your Samples
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Fill out the form below. We will confirm sample availability, any costs and delivery arrangements.
          </p>

          <EnquiryForm name="sample-request" className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="first-name">First Name</Label>
                <Input name="first-name" id="first-name" required maxLength={200} placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="last-name">Last Name</Label>
                <Input name="last-name" id="last-name" required maxLength={200} placeholder="Smith" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input name="email" id="email" required maxLength={254} type="email" placeholder="jane@yourbrand.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="company">Company / Brand Name</Label>
              <Input name="company" id="company" maxLength={200} placeholder="Your Brand Co." />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="industry">Industry</Label>
              <select name="industry" id="industry" required defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
<option value="" disabled>Select your industry</option>
<option value="supplements">Supplements / Nutraceuticals</option>
<option value="cosmetics">Cosmetics / Beauty</option>
<option value="breweries">Brewery / Beverage</option>
<option value="food">Food & Beverage (Other)</option>
<option value="other">Other</option>
</select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sample-type">Sample Type</Label>
              <select name="sample-type" id="sample-type" required defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
<option value="" disabled>Select sample type</option>
<option value="swatch">Material Swatch Kit</option>
<option value="industry">Industry Sample Pack</option>
<option value="custom">Custom Printed Sample</option>
</select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="address">Shipping Address</Label>
                <Input name="address" id="address" required maxLength={200} placeholder="123 Main St" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="city">Suburb, State, Postcode</Label>
                <Input name="city" id="city" required maxLength={200} placeholder="Perth WA 6000" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
                name="notes"
                maxLength={5000}
                id="notes"
                placeholder="Any specific materials, finishes, or label sizes you're interested in?"
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold"
            >
              Send My Sample Request
            </Button>

            <p className="text-center text-xs text-gray-400">
              Submitting this request does not place an order. Sample details are confirmed before proceeding.
            </p>
          </EnquiryForm>
        </div>
      </section>
    </>
  );
}
