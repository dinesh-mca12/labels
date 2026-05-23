"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Printer, Layers, Compass, BarChart, Settings, Mail, Phone, BookOpen, FileText, Sparkles, Lock, Shirt, Package } from "lucide-react";

const services = [
  {
    name: "Custom Wash Care Printing",
    description: "Wash care instructions printed to reflect absolute fabric details.",
    href: "/services#wash-care",
    icon: Printer,
    image: "/srv-wash-care.png",
  },
  {
    name: "Offset Printing Services",
    description: "High-volume paper products, cardboard layouts & folding boxes.",
    href: "/services#offset-printing",
    icon: Layers,
    image: "/srv-offset-services.png",
  },
  {
    name: "Hang Tag & Price Tag",
    description: "Stylish price cards & tags engineered with point-of-sale barcodes.",
    href: "/services#hang-tag",
    icon: Compass,
    image: "/srv-designing.png",
  },
  {
    name: "Woven Labels",
    description: "Garment neck labels and woven brand badges woven from fine threads.",
    href: "/services#woven-labels",
    icon: Shirt,
    image: "/srv-woven-labels.png",
  },
  {
    name: "Stickers & Die-Cuts (Dey Cut)",
    description: "Self-adhesive stickers, thermal barcodes & custom die-cut labels.",
    href: "/services#stickers",
    icon: Settings,
    image: "/portfolio-sticker-vinyl.png",
  },
  {
    name: "Poly Cover Printing & Cutting",
    description: "Custom printed transparent garment poly covers & eco-bio covers.",
    href: "/services#poly-covers",
    icon: Package,
    image: "/srv-poly-covers.png",
  },
  {
    name: "Label Cut & Seal",
    description: "Automated ultrasonic clean ribbon trimming & frayed-edge sealing.",
    href: "/services#cut-seal",
    icon: Settings,
    image: "/portfolio-tag-satin.png",
  },
];

const articles = [
  {
    name: "Zero-Waste Efficiency in Label Pressing",
    description: "Optimizing nested vector paths to slash material selvage waste by 18% for clients.",
    href: "/#articles-waste-efficiency",
    icon: Sparkles,
  },
  {
    name: "OEKO-TEX Compliance & Garment Livelihoods",
    description: "Why safety-certified textile tags secure export contracts and empower textile workers.",
    href: "/#articles-oekotex-safety",
    icon: FileText,
  },
  {
    name: "Variable Data Label Scaling",
    description: "Driving retail logistics efficiency with sequential barcodes and fast digital press cycles.",
    href: "/#articles-variable-data",
    icon: BookOpen,
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: "services" },
  { name: "Articles", href: "/#articles", hasDropdown: "articles" },
  { name: "Industries", href: "/industries" },
  { name: "Client Coverage", href: "/client-coverage" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm"
          : "bg-white/40 backdrop-blur-md border-b border-slate-200/25"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group shrink-0 relative py-1.5 px-3 bg-white/70 hover:bg-white rounded-2xl border border-slate-100/80 hover:border-sky-300/40 hover:shadow-lg hover:shadow-sky-100/30 transition-all duration-300">
            <img src="/logo.png" alt="Velmurugan Labels Logo" className="h-10 md:h-12 w-auto object-contain group-hover:scale-[1.01] transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 flex-nowrap shrink-0">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.hasDropdown)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center gap-0.5 py-2 text-[13px] xl:text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer">
                    {item.name}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.hasDropdown ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative py-2 text-[13px] xl:text-sm font-semibold transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-sky-600 font-semibold"
                        : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Services Mega Menu Dropdown */}
                {item.hasDropdown === "services" && (
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border border-slate-100 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 z-50"
                      >
                        {services.map((srv) => {
                          const IconComp = srv.icon;
                          return (
                            <Link
                              key={srv.name}
                              href={srv.href}
                              className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-slate-100 hover:shadow-sm"
                            >
                              {/* Service Thumbnail Image */}
                              <div className="w-16 h-16 rounded-xl overflow-hidden relative border border-slate-100 shadow-sm shrink-0 bg-slate-50">
                                <img 
                                  src={srv.image} 
                                  alt={srv.name} 
                                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-350 ease-out" 
                                />
                                {/* Overlay floating micro-badge icon */}
                                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-md bg-white/95 backdrop-blur-sm border border-slate-100 flex items-center justify-center text-sky-600 shadow-sm transition-transform duration-300 group-hover/item:rotate-12">
                                  <IconComp size={10} className="stroke-[2.5]" />
                                </div>
                              </div>
                              <div className="flex flex-col justify-center">
                                <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover/item:text-sky-600 transition-colors duration-200 leading-snug">
                                  {srv.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                                  {srv.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Articles Mega Menu Dropdown with Background Image (Left Column) */}
                {item.hasDropdown === "articles" && (
                  <AnimatePresence>
                    {activeDropdown === "articles" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-12 gap-0 z-50"
                      >
                        {/* Left Column with Premium Background Image and Overlay */}
                        <div className="col-span-5 relative p-6 flex flex-col justify-end text-white min-h-[340px] bg-slate-900">
                          {/* Background Image Layer */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-85 z-0"
                            style={{ backgroundImage: "url('/articles-banner.png')" }}
                          />
                          {/* Rich Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
                          
                          {/* Content Overlay */}
                          <div className="relative z-20 space-y-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-[9px] font-bold text-sky-300 uppercase tracking-widest">
                              <Sparkles size={10} />
                              Livelihoods First
                            </span>
                            <h3 className="font-extrabold text-lg leading-tight text-white">
                              Crafting Labels, Elevating Lives
                            </h3>
                            <p className="text-slate-300 text-xs leading-relaxed font-medium">
                              Our starting motive is to lift workers & client satisfaction over pure profit. Explore how precision engineering serves human dignity and eco-efficiency.
                            </p>
                          </div>
                        </div>

                        {/* Right Column with Articles List */}
                        <div className="col-span-7 p-6 space-y-3 bg-slate-50/50 flex flex-col justify-center border-l border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 block mb-1">
                            Featured Publications
                          </span>
                          {articles.map((art) => {
                            const IconComp = art.icon;
                            return (
                              <Link
                                key={art.name}
                                href={art.href}
                                className="flex gap-3 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-200 group/art"
                              >
                                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 group-hover/art:bg-sky-600 group-hover/art:text-white transition-colors duration-200 shrink-0">
                                  <IconComp size={16} />
                                </div>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover/art:text-sky-600 transition-colors duration-200 leading-snug">
                                    {art.name}
                                  </h4>
                                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                    {art.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <Link
              href="/admin"
              className="p-2.5 text-slate-400 hover:text-sky-600 hover:bg-slate-50 border border-slate-200/30 hover:border-slate-200 rounded-full transition-all duration-200 flex items-center justify-center"
              title="Admin Portal"
            >
              <Lock size={13} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 px-3 py-2 xl:px-4.5 xl:py-2.5 rounded-full shadow-md shadow-sky-100 hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-[0.5px] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 bg-black z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-20 bottom-0 w-80 max-w-full bg-white shadow-xl z-50 lg:hidden p-6 border-l border-slate-100 overflow-y-auto flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown === "services" ? (
                        <div className="py-2">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2 px-3">
                            Services
                          </span>
                          <div className="grid gap-1 pl-3 border-l border-slate-100">
                            {services.map((srv) => (
                              <Link
                                key={srv.name}
                                href={srv.href}
                                className="py-2 text-sm font-medium text-slate-600 hover:text-sky-600 block transition-colors"
                              >
                                {srv.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.hasDropdown === "articles" ? (
                        <div className="py-2">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2 px-3">
                            Articles & Insights
                          </span>
                          <div className="grid gap-1 pl-3 border-l border-slate-100">
                            {articles.map((art) => (
                              <Link
                                key={art.name}
                                href={art.href}
                                className="py-2 text-xs font-medium text-slate-600 hover:text-sky-600 block transition-colors"
                              >
                                {art.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block py-3 px-3 text-base font-semibold rounded-xl hover:bg-slate-50 transition-colors ${
                            pathname === item.href
                              ? "text-sky-600 bg-sky-50/50"
                              : "text-slate-800 hover:text-sky-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="/admin"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl font-semibold text-slate-600 text-sm hover:bg-slate-50 transition-colors"
                >
                  <Lock size={15} />
                  Admin Dashboard
                </Link>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-sky-600 rounded-xl font-semibold text-white text-sm hover:bg-sky-700 shadow-md shadow-sky-100 transition-colors"
                >
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
