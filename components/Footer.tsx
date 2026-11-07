import Link from "next/link";
import { MapPin, Mail, Clock } from "lucide-react";

const NAV_COLS = [
  {
    heading: "Industries",
    links: [
      { label: "Supplements", href: "/industries/supplements" },
      { label: "Cosmetics",   href: "/industries/cosmetics"   },
      { label: "Breweries",   href: "/industries/breweries"   },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Process",      href: "/process"           },
      { label: "Request a Quote", href: "/quote-calculator"  },
      { label: "Request Samples",  href: "/request-sample"    },
      { label: "Contact",          href: "/contact"           },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white border-t border-white/8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-white hover:text-[#B87333] transition-colors mb-4"
            >
              West Label Co.
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Perth-based label printing for supplement, cosmetic, and beverage
              brands. Materials and finishing confirmed for your job.
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin className="h-4 w-4 text-[#B87333] flex-shrink-0 mt-0.5" />
                <span>
                  1/67 Erceg Road<br />
                  Yangebup WA 6164<br />
                  Australia
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@westlabelco.com.au"
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-[#B87333] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#B87333] flex-shrink-0" />
                  info@westlabelco.com.au
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/55">
                <Clock className="h-4 w-4 text-[#B87333] flex-shrink-0" />
                Monday – Friday, 8am – 5:30pm AWST
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/55 hover:text-[#B87333] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} West Label Co. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/55 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/55 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
