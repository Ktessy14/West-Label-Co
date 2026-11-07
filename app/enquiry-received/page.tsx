import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Enquiry submitted", robots: { index: false, follow: false } };

export default function EnquiryReceivedPage() {
  return <section className="bg-brand-cream py-20 px-4 text-center">
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-navy mb-4">Thank you for your enquiry</h1>
      <p className="mb-6">Our team will review your message and get back to you by email.</p>
      <Link href="/" className="text-brand-navy underline">Back to West Label Co.</Link>
    </div>
  </section>;
}
