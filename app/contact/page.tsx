import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with West Label Co. Talk to a label specialist about your project.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+61 448 729 899",
    href: "tel:+61448729899",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@westlabelco.com.au",
    href: "mailto:info@westlabelco.com.au",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "1/67 Erceg Road, Yangebup WA 6164",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 8am – 5:30pm AWST",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-xs uppercase tracking-widest font-semibold">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Talk to a Label Specialist
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a question about materials, specs, or pricing? Our team responds
            within 1 business day — usually much faster.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-4 w-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-brand-navy font-medium hover:text-brand-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-brand-navy font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-navy rounded-xl">
                <h3 className="font-semibold text-white mb-2">Need a quote fast?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Use our quote calculator for instant pricing on standard orders.
                </p>
                <Button
                  asChild
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-medium text-sm"
                >
                  <a href="/quote-calculator">Quote Calculator</a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
              <EnquiryForm name="contact" className="flex flex-col gap-5">
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
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input name="phone" id="phone" maxLength={200} type="tel" placeholder="0400 000 000" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="enquiry-type">Enquiry type</Label>
                  <select name="enquiry-type" id="enquiry-type" required defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
<option value="" disabled>What can we help with?</option>
<option value="quote">Request a Quote</option>
<option value="sample">Request Samples</option>
<option value="artwork">Artwork / File Questions</option>
<option value="order">Order Status</option>
<option value="reorder">Reorder</option>
<option value="other">General Inquiry</option>
</select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    required
                    maxLength={5000}
                    id="message"
                    placeholder="Tell us about your project — label size, quantity, material preferences, timeline, etc."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold"
                >
                  Send Message
                </Button>
              </EnquiryForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
