import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shadow-md shadow-slate-950/20 bg-slate-800 border border-slate-700/50 p-0.5">
                <img src="/logo.png" alt="Velmurugan Labels Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  VELMURUGAN
                </span>
                <span className="block text-xs font-bold text-sky-400 tracking-widest uppercase leading-none">
                  LABELS
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              State-of-the-art label production and printing solutions. Delivering premium high-precision commercial tags and self-adhesive stickers to international brands.
            </p>
            {/* Mail, WhatsApp & Instagram icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="mailto:sales@velmuruganlabels.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/919626638614"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                {/* Custom SVG WhatsApp icon for high-fidelity look */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.411 2.439 1.109 3.393l-.724 2.645 2.716-.712c.915.586 2.002.934 3.17.934 3.182 0 5.767-2.585 5.767-5.766 0-3.18-2.585-5.766-5.767-5.766zm3.435 8.167c-.201.564-1.18 1.096-1.637 1.137-.417.037-.962.062-2.73-.67-2.261-.937-3.693-3.237-3.805-3.39-.112-.149-.912-1.21-.912-2.31 0-1.1.573-1.637.774-1.862.202-.226.44-.282.588-.282.148 0 .296.002.422.009.135.006.315-.052.493.38.188.457.643 1.571.7 1.684.056.113.093.245.018.395-.075.15-.112.245-.224.376-.113.131-.237.293-.338.394-.112.112-.229.234-.098.46.131.226.582.962 1.25 1.56.862.77 1.585 1.008 1.81 1.121.226.112.357.094.488-.056.131-.15.564-.658.714-.883.15-.225.301-.188.508-.113.207.075 1.315.62 1.54.732.226.113.376.169.433.263.057.094.057.545-.144 1.109z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.9 5.86L2.1 22l4.3-1.74C8.03 21.41 9.94 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.87 0-3.61-.53-5.09-1.46l-.37-.23-2.5 1.01.62-2.4-.24-.39C3.51 15.17 3 13.65 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/velmurugan_labels?utm_source=qr&igsh=MTBhM2w2ZGZkZXdldQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-indigo-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Client Distribution", href: "/client-coverage" },
                { name: "Portfolio & Works", href: "/portfolio" },
                { name: "Schedule A Call", href: "/schedule-meeting" },
                { name: "Contact Inquiry", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Production Solutions
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Label Designing", href: "/services#designing" },
                { name: "Digital Label Printing", href: "/services#digital-printing" },
                { name: "Offset Packaging Printing", href: "/services#offset-printing" },
                { name: "Custom Stickers & Decals", href: "/services#stickers" },
                { name: "Rotary Garment Labels", href: "/services#rotary-label-printing" },
                { name: "Premium Screen Printing", href: "/services#screen-printing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Mini Map Column */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Contact Details
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex gap-2.5 items-start">
                  <MapPin size={16} className="text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-slate-400 leading-normal">
                    Laxmi Nagar, Ram Nagar,<br/>
                    Tiruppur, Tamil Nadu 641602
                  </span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Phone size={16} className="text-sky-500 shrink-0" />
                  <a href="tel:+918220046231" className="hover:text-white transition-colors">
                    +91 82200 46231
                  </a>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Clock size={16} className="text-sky-500 shrink-0" />
                  <span className="text-slate-400">Open — Closes 8 PM</span>
                </li>
              </ul>
            </div>
            
            {/* Embedded Mini-Map Vector Widget */}
            <div className="h-28 w-full bg-slate-800 rounded-xl overflow-hidden relative border border-slate-700/50 flex items-center justify-center p-2 group shadow-inner">
              <svg className="w-full h-full opacity-35" viewBox="0 0 100 50">
                <path d="M10 5 Q 30 40 50 15 T 90 40" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="2" />
                <circle cx="50" cy="15" r="4" fill="#0ea5e9" className="animate-pulse" />
                <circle cx="10" cy="5" r="2.5" fill="#64748b" />
                <circle cx="90" cy="40" r="2.5" fill="#64748b" />
                <line x1="50" y1="15" x2="50" y2="40" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="1" />
              </svg>
              <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/20 transition-colors duration-200 flex flex-col justify-center items-center text-center p-3">
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">Tiruppur Hub</span>
                <span className="text-[9px] text-slate-400 mt-0.5">Click for Google Directions</span>
                <a
                  href="https://maps.app.goo.gl/uJnPfeeD3v7fE1DC7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="View on Google Maps"
                />
              </div>
            </div>
          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Velmurugan Labels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
