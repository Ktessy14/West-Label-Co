"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────

const MINIMUM_QTY = 250;
const SETUP_FEE = 25;
const MINIMUM_SPEND = 100;
const BLEED_MM = 9; // added to each dimension for consumed area

type MaterialKey = "paper" | "polypropylene" | "clear-film" | "holographic";
type FinishKey = "none" | "gloss" | "matte" | "laminated";
type ColourKey = "bw" | "full";
type TurnaroundKey = "standard" | "express";

interface Material {
  key: MaterialKey;
  label: string;
  ratePerM2: number; // AUD per m²
  description: string;
}

interface Finish {
  key: FinishKey;
  label: string;
  addPerM2: number; // AUD per m² surcharge
}

const MATERIALS: Material[] = [
  { key: "paper", label: "Paper", ratePerM2: 60, description: "Uncoated stock, ideal for short-run & eco branding" },
  { key: "polypropylene", label: "Polypropylene", ratePerM2: 100, description: "Waterproof, durable film for bottles & jars" },
  { key: "clear-film", label: "Clear Film", ratePerM2: 110, description: "Transparent BOPP for a premium no-label look" },
  { key: "holographic", label: "Holographic", ratePerM2: 140, description: "Rainbow foil substrate for premium shelf impact" },
];

const FINISHES: Finish[] = [
  { key: "none", label: "None", addPerM2: 0 },
  { key: "gloss", label: "Gloss", addPerM2: 10 },
  { key: "matte", label: "Matte", addPerM2: 12 },
  { key: "laminated", label: "Laminated", addPerM2: 20 },
];

const COLOUR_OPTIONS: { key: ColourKey; label: string; sublabel: string; factor: number }[] = [
  { key: "bw", label: "Black & White", sublabel: "Single colour printing", factor: 1.0 },
  { key: "full", label: "Full Colour", sublabel: "+30% — CMYK process", factor: 1.3 },
];

const TURNAROUND_OPTIONS: { key: TurnaroundKey; label: string; sublabel: string; factor: number }[] = [
  { key: "standard", label: "Standard", sublabel: "5–7 business days", factor: 1.0 },
  { key: "express", label: "Express", sublabel: "+25% — 2–3 business days", factor: 1.25 },
];

// ─── Quantity discounts ───────────────────────────────────────────────────────

const QUANTITY_DISCOUNTS: { min: number; max: number; factor: number; label: string }[] = [
  { min:     1, max:   999, factor: 1.00, label: ""        },
  { min:  1000, max:  4999, factor: 0.90, label: "10% off" },
  { min:  5000, max:  9999, factor: 0.85, label: "15% off" },
  { min: 10000, max: Infinity, factor: 0.80, label: "20% off" },
];

function getDiscount(qty: number) {
  return QUANTITY_DISCOUNTS.find((d) => qty >= d.min && qty <= d.max)!;
}

// ─── Calculation ──────────────────────────────────────────────────────────────

function calculate(
  widthMm: number,
  heightMm: number,
  quantity: number,
  materialKey: MaterialKey,
  finishKey: FinishKey,
  colourKey: ColourKey,
  turnaroundKey: TurnaroundKey
) {
  const mat = MATERIALS.find((m) => m.key === materialKey)!;
  const fin = FINISHES.find((f) => f.key === finishKey)!;
  const colourFactor = COLOUR_OPTIONS.find((c) => c.key === colourKey)!.factor;
  const turnaroundFactor = TURNAROUND_OPTIONS.find((t) => t.key === turnaroundKey)!.factor;

  // Consumed area per label (mm²) → m²
  const consumedMm2 = (widthMm + BLEED_MM) * (heightMm + BLEED_MM);
  const consumedM2PerLabel = consumedMm2 / 1_000_000;
  const totalM2 = consumedM2PerLabel * quantity;

  const basePrice = totalM2 * (mat.ratePerM2 + fin.addPerM2);
  const priceBeforeDiscount = basePrice * colourFactor * turnaroundFactor;

  // Quantity discount applied as final multiplier
  const discount = getDiscount(quantity);
  const printCost = priceBeforeDiscount * discount.factor;
  const rawTotal = printCost + SETUP_FEE;

  // ±8% range on print cost only; setup fee is fixed
  const RANGE_PCT = 0.08;
  const displayTotal = Math.max(rawTotal, MINIMUM_SPEND);
  const displayLow = Math.max(printCost * (1 - RANGE_PCT) + SETUP_FEE, MINIMUM_SPEND);
  const displayHigh = Math.max(printCost * (1 + RANGE_PCT) + SETUP_FEE, MINIMUM_SPEND);

  const belowMinQty = quantity < MINIMUM_QTY;
  const belowMinSpend = rawTotal < MINIMUM_SPEND;
  const perLabel = displayTotal / quantity;
  const discountPct = Math.round((1 - discount.factor) * 100);

  return {
    printCost,
    setupFee: SETUP_FEE,
    rawTotal,
    priceBeforeDiscount,
    displayTotal,
    displayLow,
    displayHigh,
    perLabel,
    totalM2,
    consumedMm2,
    belowMinQty,
    belowMinSpend,
    discountPct,
    discountLabel: discount.label,
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ step, label }: { step: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-7 h-7 rounded-full bg-copper text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
        {step}
      </span>
      <h2 className="text-base font-semibold text-white tracking-wide">{label}</h2>
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-xl border border-white/10 bg-charcoal-light p-6", className)}>
      {children}
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full text-left rounded-lg border px-4 py-3 text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper",
        selected
          ? "border-copper bg-copper/10 text-white shadow-[0_0_0_1px_#B87333]"
          : "border-white/10 bg-charcoal hover:border-white/25 text-white/70 hover:text-white",
        className
      )}
    >
      {selected && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-copper flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
            <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function QuoteCalculatorClient() {
  const [width, setWidth] = useState<string>("100");
  const [height, setHeight] = useState<string>("150");
  const [quantity, setQuantity] = useState<string>("500");
  const [material, setMaterial] = useState<MaterialKey>("paper");
  const [finish, setFinish] = useState<FinishKey>("none");
  const [colour, setColour] = useState<ColourKey>("full");
  const [turnaround, setTurnaround] = useState<TurnaroundKey>("standard");

  const widthNum = Math.max(1, parseFloat(width) || 0);
  const heightNum = Math.max(1, parseFloat(height) || 0);
  const qtyNum = Math.max(1, parseInt(quantity) || 1);

  const result = useMemo(
    () => calculate(widthNum, heightNum, qtyNum, material, finish, colour, turnaround),
    [widthNum, heightNum, qtyNum, material, finish, colour, turnaround]
  );

  const matEntry = MATERIALS.find((m) => m.key === material)!;
  const finEntry = FINISHES.find((f) => f.key === finish)!;
  const isLargeFormat = widthNum > 200 || heightNum > 280;

  const fmtCurrency = (n: number) =>
    n.toLocaleString("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-charcoal-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: Form (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* 1. Dimensions */}
            <Card>
              <SectionHeading step={1} label="Label Dimensions" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="width" className="text-white/70 text-xs uppercase tracking-wider">
                    Width (mm)
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    min={1}
                    step={1}
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-copper focus-visible:border-copper h-11"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="height" className="text-white/70 text-xs uppercase tracking-wider">
                    Height (mm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    min={1}
                    step={1}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-copper focus-visible:border-copper h-11"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-white/35 flex items-start gap-1.5">
                <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                Consumed area includes {BLEED_MM}mm bleed on each dimension.
                Current: {(widthNum + BLEED_MM)} × {(heightNum + BLEED_MM)} mm
                = {result.consumedMm2.toLocaleString()} mm²
              </p>
              <p className="mt-2 text-xs text-copper/80 flex items-start gap-1.5">
                <Info className="h-3 w-3 mt-0.5 flex-shrink-0 text-copper/60" />
                For product labels under 150mm, typical pricing is 60–80% lower per label.
              </p>
            </Card>

            {/* 2. Quantity */}
            <Card>
              <SectionHeading step={2} label="Quantity" />
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quantity" className="text-white/70 text-xs uppercase tracking-wider">
                  Number of Labels
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min={1}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="bg-charcoal border-white/15 text-white placeholder:text-white/30 focus-visible:ring-copper focus-visible:border-copper h-11"
                />
              </div>
              {/* Quick-select qty chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[250, 500, 1000, 2500, 5000, 10000].map((q) => {
                  const d = getDiscount(q);
                  return (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(String(q))}
                      className={cn(
                        "flex flex-col items-center px-3 py-1.5 rounded-md text-xs font-medium border transition-all",
                        qtyNum === q
                          ? "border-copper bg-copper/15 text-copper"
                          : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/70"
                      )}
                    >
                      <span>{q.toLocaleString()}</span>
                      {d.label && (
                        <span className={cn(
                          "text-[10px] font-semibold leading-none mt-0.5",
                          qtyNum === q ? "text-copper/80" : "text-green-400/70"
                        )}>
                          {d.label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* 3. Material */}
            <Card>
              <SectionHeading step={3} label="Material" />
              <div className="flex flex-col gap-2.5">
                {MATERIALS.map((m) => (
                  <OptionButton
                    key={m.key}
                    selected={material === m.key}
                    onClick={() => setMaterial(m.key)}
                  >
                    <div className="pr-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-white text-sm">{m.label}</span>
                        <span className="text-copper text-xs font-medium">
                          ${m.ratePerM2}/m²
                        </span>
                      </div>
                      <p className="text-white/45 text-xs mt-0.5">{m.description}</p>
                    </div>
                  </OptionButton>
                ))}
              </div>
            </Card>

            {/* 4. Finish */}
            <Card>
              <SectionHeading step={4} label="Finish" />
              <div className="grid grid-cols-2 gap-2.5">
                {FINISHES.map((f) => (
                  <OptionButton
                    key={f.key}
                    selected={finish === f.key}
                    onClick={() => setFinish(f.key)}
                  >
                    <div className="pr-5">
                      <span className="font-semibold text-white text-sm block">{f.label}</span>
                      <span className={cn("text-xs mt-0.5 block", f.addPerM2 > 0 ? "text-copper" : "text-white/40")}>
                        {f.addPerM2 > 0 ? `+$${f.addPerM2}/m²` : "No upcharge"}
                      </span>
                    </div>
                  </OptionButton>
                ))}
              </div>
            </Card>

            {/* 5. Colour */}
            <Card>
              <SectionHeading step={5} label="Colour" />
              <div className="grid grid-cols-2 gap-2.5">
                {COLOUR_OPTIONS.map((c) => (
                  <OptionButton
                    key={c.key}
                    selected={colour === c.key}
                    onClick={() => setColour(c.key)}
                  >
                    <div className="pr-5">
                      <span className="font-semibold text-white text-sm block">{c.label}</span>
                      <span className={cn("text-xs mt-0.5 block", c.factor > 1 ? "text-copper" : "text-white/40")}>
                        {c.sublabel}
                      </span>
                    </div>
                  </OptionButton>
                ))}
              </div>
            </Card>

            {/* 6. Turnaround */}
            <Card>
              <SectionHeading step={6} label="Turnaround" />
              <div className="grid grid-cols-2 gap-2.5">
                {TURNAROUND_OPTIONS.map((t) => (
                  <OptionButton
                    key={t.key}
                    selected={turnaround === t.key}
                    onClick={() => setTurnaround(t.key)}
                  >
                    <div className="pr-5">
                      <span className="font-semibold text-white text-sm block">{t.label}</span>
                      <span className={cn("text-xs mt-0.5 block", t.factor > 1 ? "text-copper" : "text-white/40")}>
                        {t.sublabel}
                      </span>
                    </div>
                  </OptionButton>
                ))}
              </div>
            </Card>

            {/* Specialty Finishes callout */}
            <div className="rounded-xl border border-white/10 bg-charcoal-light p-6">
              <h2 className="text-sm font-semibold text-white mb-2">Specialty Finishes</h2>
              <p className="text-white/55 text-xs leading-relaxed mb-4">
                Looking for foil stamping, embossing, or spot UV? We source these through
                our production partners. Lead time: 7–10 days. Pricing on request.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper hover:text-copper-light transition-colors"
              >
                Request Specialty Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

          {/* ── Right: Price Summary (2 cols, sticky) ── */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 flex flex-col gap-4">

              {/* Large format warning */}
              {isLargeFormat && (
                <div className="flex items-start gap-3 rounded-xl border border-orange-500/40 bg-orange-500/10 px-4 py-3.5">
                  <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-orange-300 text-sm font-semibold">Large format detected</p>
                    <p className="text-orange-400/80 text-xs mt-0.5">
                      Labels larger than 200mm wide may require custom quoting.{" "}
                      <Link href="/contact" className="underline text-orange-300 hover:text-orange-200">
                        Contact us
                      </Link>{" "}
                      for large format options.
                    </p>
                  </div>
                </div>
              )}

              {/* Quantity minimum warning */}
              {result.belowMinQty && (
                <div className="flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3.5">
                  <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-300 text-sm font-semibold">250 label minimum order</p>
                    <p className="text-amber-400/80 text-xs mt-0.5">
                      Our minimum order is {MINIMUM_QTY} labels. Increase your quantity to get an accurate estimate.
                    </p>
                  </div>
                </div>
              )}

              {/* Minimum spend warning */}
              {result.belowMinSpend && !result.belowMinQty && (
                <div className="flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3.5">
                  <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-300 text-sm font-semibold">Minimum spend applies</p>
                    <p className="text-amber-400/80 text-xs mt-0.5">
                      Your order falls below our {fmtCurrency(MINIMUM_SPEND)} minimum. The minimum charge will apply.
                    </p>
                  </div>
                </div>
              )}

              {/* Total card */}
              <div className="rounded-xl border border-copper/40 bg-charcoal-light overflow-hidden">
                {/* Header */}
                <div className="bg-copper px-6 py-4">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-white/80 text-xs uppercase tracking-widest font-semibold">
                      Estimated Total
                    </p>
                    {result.discountPct > 0 && (
                      <span className="text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                        {result.discountPct}% discount
                      </span>
                    )}
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      {fmtCurrency(result.displayTotal)}
                    </span>
                    {result.discountPct > 0 && (
                      <span className="text-white/60 text-sm line-through mb-1">
                        {fmtCurrency(result.priceBeforeDiscount)}
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-xs mt-1">
                    Range: {fmtCurrency(result.displayLow)} – {fmtCurrency(result.displayHigh)}
                  </p>
                </div>

                {/* Per-label */}
                <div className="px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Cost per label</span>
                    <span className="text-white font-semibold text-lg">
                      {fmtCurrency(result.perLabel)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-white/40 text-xs">Total consumed area</span>
                    <span className="text-white/60 text-xs">
                      {result.totalM2.toFixed(4)} m²
                    </span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="px-6 py-4 flex flex-col gap-3">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    Breakdown
                  </p>

                  {[
                    {
                      label: "Material",
                      value: `${matEntry.label} — $${matEntry.ratePerM2}/m²`,
                    },
                    {
                      label: "Finish",
                      value: finEntry.addPerM2 > 0
                        ? `${finEntry.label} +$${finEntry.addPerM2}/m²`
                        : `${finEntry.label} — no upcharge`,
                    },
                    {
                      label: "Colour",
                      value: colour === "full" ? "Full Colour ×1.30" : "Black & White ×1.00",
                    },
                    {
                      label: "Turnaround",
                      value: turnaround === "express" ? "Express ×1.25" : "Standard ×1.00",
                    },
                    {
                      label: "Quantity",
                      value: qtyNum.toLocaleString() + " labels",
                    },
                    {
                      label: "Dimensions",
                      value: `${widthNum} × ${heightNum} mm`,
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-4">
                      <span className="text-white/45 text-xs">{label}</span>
                      <span className="text-white/80 text-xs text-right">{value}</span>
                    </div>
                  ))}

                  {/* Quantity discount row — only shown when applicable */}
                  {result.discountPct > 0 && (
                    <div className="flex items-start justify-between gap-4 pt-1">
                      <span className="text-green-400/80 text-xs">
                        Volume discount ({qtyNum.toLocaleString()}+ labels)
                      </span>
                      <span className="text-green-400 text-xs font-semibold text-right">
                        −{result.discountPct}%
                      </span>
                    </div>
                  )}

                  {/* Setup fee */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/45 text-xs">Setup fee</span>
                    <span className="text-white/80 text-xs text-right">{fmtCurrency(result.setupFee)}</span>
                  </div>

                  <Separator className="bg-white/10 my-1" />

                  <div className="flex items-baseline justify-between">
                    <span className="text-white/60 text-sm font-medium">Subtotal</span>
                    <span className="text-white font-bold">{fmtCurrency(result.displayTotal)}</span>
                  </div>
                  {result.belowMinSpend && (
                    <div className="flex items-baseline justify-between">
                      <span className="text-amber-400/80 text-xs">Minimum spend applied</span>
                      <span className="text-amber-400 text-xs font-medium">{fmtCurrency(MINIMUM_SPEND)}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 flex flex-col gap-3">
                  {isLargeFormat ? (
                    <Button
                      asChild
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold h-11 text-sm"
                    >
                      <Link href="/contact">
                        Request Custom Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full bg-copper hover:bg-copper-dark text-white font-semibold h-11 text-sm"
                    >
                      <Link href="/contact">
                        Get Official Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-white/60 hover:text-white hover:bg-white/5 h-10 text-sm"
                  >
                    <Link href="/request-sample" className="flex items-center gap-1">
                      Request free samples first
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-white/30 text-xs text-center px-2 leading-relaxed">
                Estimates are indicative only. Final pricing confirmed on official quote.
                Prices in AUD excluding GST.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
