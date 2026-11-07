"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

/** Netlify handles storage/spam filtering; no client-side email credentials. */
export default function EnquiryForm({ name, className, children }: {
  name: "contact" | "sample-request";
  className?: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submitting = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    submitting.current = true;
    setStatus("sending");
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => { if (typeof value === "string") body.append(key, value); });
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission not confirmed");
      setStatus("sent");
    } catch {
      // A timeout is ambiguous. Keep the fields and never silently retry.
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  }

  if (status === "sent") return (
    <div role="status" className="rounded-lg border border-green-200 bg-green-50 p-6 text-brand-navy">
      <h3 className="font-semibold mb-2">Thank you. Your enquiry has been submitted.</h3>
      <p>Our team will review it and get back to you by email.</p>
    </div>
  );

  return (
    <form name={name} method="POST" action="/enquiry-received/" data-netlify="true"
      netlify-honeypot="bot-field" onSubmit={submit} aria-busy={status === "sending"}>
      <input type="hidden" name="form-name" value={name} />
      <p hidden><label>Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <fieldset disabled={status === "sending"} className={className}>
        {children}
      </fieldset>
      {status === "sending" && <p role="status" className="mt-4 text-sm">Sending your enquiry…</p>}
      {status === "error" && <p role="alert" className="mt-4 text-sm text-red-700">
        We couldn&apos;t confirm your submission. Your details are still here. Please try again,
        or email <a className="underline" href="mailto:info@westlabelco.com.au">info@westlabelco.com.au</a>.
        If you already received a reply, you don&apos;t need to resubmit.
      </p>}
    </form>
  );
}
