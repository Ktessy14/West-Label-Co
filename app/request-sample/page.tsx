import type { Metadata } from "next";
import { PackageOpen, CheckCircle2, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Request a Sample",
  description:
    "Request free label samples from West Label Co. Feel the quality difference before you order.",
};

const sampleTypes = [
  {
    name: "Material Swatch Kit",
    description: "A curated set of our most popular label substrates — BOPP, polyester, kraft, and more. Feel the difference between materials.",
    includes: ["10+ substrate swatches", "Finish samples (gloss, matte, laminate)", "Adhesive comparison"],
  },
  {
    name: "Industry Sample Pack",
    description: "Pre-printed samples specific to your industry. See how our labels look on real supplement bottles, cosmetic containers, or beer bottles.",
    includes: ["3–5 printed label samples", "Industry-specific substrates", "Finish examples"],
  },
  {
    name: "Custom Printed Sample",
    description: "Upload your artwork and we'll print a short test run on your chosen material. Available for qualified orders (typically 500+ label projects).",
    includes: ["Printed with your artwork", "Your chosen material & finish", "Proof of colour accuracy"],
  },
];

const perks = [
  { icon: CheckCircle2, label: "100% free, no obligation" },
  { icon: Clock, label: "Ships within 2 business days" },
  { icon: Truck, label: "Free shipping Australia-wide" },
  { icon: PackageOpen, label: "No sales pressure" },
];

export default function RequestSamplePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            Free Samples
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Feel the Quality Before You Order
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            We'll send you a curated sample pack so you can touch, see, and compare
            our materials before committing to an order.
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
            Fill out the form below and we&apos;ll ship your samples within 2 business days.
          </p>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Smith" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="jane@yourbrand.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="company">Company / Brand Name</Label>
              <Input id="company" placeholder="Your Brand Co." />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplements">Supplements / Nutraceuticals</SelectItem>
                  <SelectItem value="cosmetics">Cosmetics / Beauty</SelectItem>
                  <SelectItem value="breweries">Brewery / Beverage</SelectItem>
                  <SelectItem value="food">Food & Beverage (Other)</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sample-type">Sample Type</Label>
              <Select>
                <SelectTrigger id="sample-type">
                  <SelectValue placeholder="Select sample type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="swatch">Material Swatch Kit</SelectItem>
                  <SelectItem value="industry">Industry Sample Pack</SelectItem>
                  <SelectItem value="custom">Custom Printed Sample</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="address">Shipping Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="city">City, State, ZIP</Label>
                <Input id="city" placeholder="Perth WA 6000" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
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
              Free shipping. No obligation. We'll never spam you.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
