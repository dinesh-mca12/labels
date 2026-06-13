"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Printer, Layers, Compass, BarChart, Settings, Mail, Phone, BookOpen, FileText, Sparkles, Lock, Shirt, Package, MapPin, Tag } from "lucide-react";

const services = [
  {
    name: "Custom Wash Care Printing",
    description: "Wash care instructions printed to reflect absolute fabric details.",
    href: "/products/wash-care-labels",
    icon: Printer,
    image: "/srv-wash-care.png",
  },
  {
    name: "Offset Printing Services",
    description: "High-volume paper products, cardboard layouts & folding boxes.",
    href: "/products/offset-printing",
    icon: Layers,
    image: "/srv-offset-services.png",
  },
  {
    name: "Hang Tag & Price Tag",
    description: "Stylish price cards & tags engineered with point-of-sale barcodes.",
    href: "/products/hang-tags",
    icon: Compass,
    image: "/srv-designing.png",
  },
  {
    name: "Woven Labels",
    description: "Garment neck labels and woven brand badges woven from fine threads.",
    href: "/products/woven-labels",
    icon: Shirt,
    image: "/srv-woven-labels.png",
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

const products = [
  {
    name: "Premium Wash Care Labels",
    description: "High-definition care tags on soft satin and fine cotton tapes.",
    href: "/products/wash-care-labels",
    icon: Printer,
  },
  {
    name: "High-Density Woven Labels",
    description: "High-density woven neck brands, badges and taffeta tags.",
    href: "/products/woven-labels",
    icon: Shirt,
  },
  {
    name: "Luxury Apparel Hang Tags",
    description: "Luxury price tags, barcode cards and customized retail tags.",
    href: "/products/hang-tags",
    icon: Tag,
  },
  {
    name: "Industrial Adhesive Stickers",
    description: "Self-adhesive stickers, barcode thermal rolls & die-cut labels.",
    href: "/products/stickers",
    icon: Settings,
  },
  {
    name: "Custom Poly Packaging",
    description: "Custom printed transparent LDPE bags & organic eco-bio poly covers.",
    href: "/products/poly-packaging",
    icon: Package,
  },
  {
    name: "Precision Offset Printing",
    description: "Ultrasonic trimming, ribbon sealing and offset capabilities.",
    href: "/products/offset-printing",
    icon: Layers,
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: "services" },
  { name: "Products", href: "/portfolio", hasDropdown: "products" },
  { name: "Articles", href: "/#articles", hasDropdown: "articles" },
  { name: "Industries", href: "/industries" },
  { name: "Client Coverage", href: "/client-coverage" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact", onlyMobile: true },
];

const HamburgerButton = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <button
      onClick={toggle}
      className="relative z-50 p-2.5 w-11 h-11 text-slate-600 hover:text-sky-600 bg-white/70 backdrop-blur-md hover:bg-slate-50/50 rounded-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 flex flex-col justify-center items-center gap-1.5 focus:outline-none cursor-pointer"
      aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-5 h-[2px] bg-slate-700 rounded-full block origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        className="w-5 h-[2px] bg-slate-700 rounded-full block"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-5 h-[2px] bg-slate-700 rounded-full block origin-center"
      />
    </button>
  );
};

const drawerVariants = {
  hidden: { 
    x: "100%", 
    transition: { 
      type: "spring" as const, 
      stiffness: 380, 
      damping: 36 
    } 
  },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 36,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 15, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 24 
      } 
    },
  };

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
    setExpandedDropdown(null);
  }, [pathname]);

  // Body scroll locking when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          <Link href="/" className="-ml-3 flex items-center group shrink-0 relative py-1 px-2.5 bg-white/70 hover:bg-white rounded-2xl border border-slate-100/80 hover:border-sky-300/40 hover:shadow-lg hover:shadow-sky-100/30 transition-all duration-300">
            <img src="/logo.png" alt="Velmurugan Labels Logo" className="h-14 md:h-16 w-auto object-contain group-hover:scale-[1.01] transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 flex-nowrap shrink-0">
            {navItems.filter((item) => !item.onlyMobile).map((item) => (
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

                {/* Products Mega Menu Dropdown */}
                {item.hasDropdown === "products" && (
                  <AnimatePresence>
                    {activeDropdown === "products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border border-slate-100 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 z-50"
                      >
                        {products.map((prod) => {
                          const IconComp = prod.icon;
                          return (
                            <Link
                              key={prod.name}
                              href={prod.href}
                              className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-slate-100 hover:shadow-sm"
                            >
                              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 border border-sky-100/50 group-hover/item:bg-sky-600 group-hover/item:text-white transition-colors duration-250">
                                <IconComp size={16} className="stroke-[2.2]" />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover/item:text-sky-600 transition-colors duration-200 leading-snug">
                                  {prod.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                                  {prod.description}
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
          <div className="lg:hidden flex items-center z-[60]">
            <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Slide-in Premium Side Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-0 top-0 bottom-0 w-[340px] max-w-[90vw] bg-white/85 backdrop-blur-2xl shadow-[-15px_0_50px_rgba(32,69,140,0.08)] z-50 lg:hidden flex flex-col justify-between h-[100dvh] overflow-hidden border-l border-slate-200/40 rounded-l-[32px] relative"
            >
              {/* Premium Background Glows */}
              <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] rounded-full bg-sky-400/10 blur-[80px] pointer-events-none -z-10" />
              <div className="absolute bottom-[-10%] left-[-20%] w-[250px] h-[250px] rounded-full bg-indigo-400/10 blur-[80px] pointer-events-none -z-10" />

              {/* Drawer Top Header (Logo & Close Button Placeholder) */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 relative z-10">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center group shrink-0 relative py-1 px-2.5 bg-slate-50 border border-slate-100 rounded-xl"
                >
                  <img src="/logo.png" alt="Velmurugan Labels Logo" className="h-11 w-auto object-contain" />
                </Link>
                {/* Spacer block to perfectly align the z-[60] floating close icon that morphs in navbar */}
                <div className="w-11 h-11 shrink-0" />
              </div>

              {/* Scrollable Navigation links with Accordions */}
              <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 overscroll-contain relative z-10">
                <motion.div className="flex flex-col gap-2" variants={containerVariants}>
                  {navItems.map((item) => {
                    const isDropdown = !!item.hasDropdown;
                    const isExpanded = expandedDropdown === item.name;
                    const isActive = pathname === item.href;

                    return (
                      <motion.div 
                        variants={itemVariants} 
                        key={item.name} 
                        className="border-b border-slate-100/50 pb-1.5 last:border-0 last:pb-0"
                      >
                        {isDropdown ? (
                          <div className="space-y-1">
                            {/* Accordion Toggle Trigger */}
                            <button
                              onClick={() => setExpandedDropdown(isExpanded ? null : item.name)}
                              className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl font-bold text-base transition-all duration-200 cursor-pointer ${
                                isExpanded 
                                  ? "text-sky-600 bg-gradient-to-r from-sky-500/10 to-indigo-500/5 shadow-sm shadow-sky-50/50" 
                                  : "text-slate-800 hover:text-sky-600 hover:bg-slate-50/50"
                              }`}
                            >
                              <span>{item.name}</span>
                              <ChevronDown 
                                size={16} 
                                className={`text-slate-400 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180 text-sky-600" : ""
                                }`} 
                              />
                            </button>
                            
                            {/* Accordion Sub-Menu Panel */}
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="overflow-hidden pl-3 border-l-2 border-sky-150 mt-1 space-y-1 bg-slate-50/30 rounded-r-xl"
                                >
                                  {item.hasDropdown === "services" ? (
                                    <div className="py-2.5 pr-2 pl-1 space-y-1.5">
                                      {services.map((srv) => {
                                        const IconComp = srv.icon;
                                        return (
                                          <Link
                                            key={srv.name}
                                            href={srv.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3.5 py-3 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:text-sky-600 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all duration-200 group/sub"
                                          >
                                            <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 border border-sky-100/50 group-hover/sub:bg-sky-600 group-hover/sub:text-white transition-colors duration-250">
                                              <IconComp size={14} className="stroke-[2.2]" />
                                            </div>
                                            <span className="leading-snug">{srv.name}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  ) : item.hasDropdown === "products" ? (
                                    <div className="py-2.5 pr-2 pl-1 space-y-1.5">
                                      {products.map((prod) => {
                                        const IconComp = prod.icon;
                                        return (
                                          <Link
                                            key={prod.name}
                                            href={prod.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3.5 py-3 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:text-sky-600 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all duration-200 group/sub"
                                          >
                                            <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 border border-sky-100/50 group-hover/sub:bg-sky-600 group-hover/sub:text-white transition-colors duration-250">
                                              <IconComp size={14} className="stroke-[2.2]" />
                                            </div>
                                            <span className="leading-snug">{prod.name}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    <div className="py-2.5 pr-2 pl-1 space-y-1.5">
                                      {articles.map((art) => {
                                        const IconComp = art.icon;
                                        return (
                                          <Link
                                            key={art.name}
                                            href={art.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3.5 py-3 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:text-sky-600 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all duration-200 group/sub"
                                          >
                                            <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 border border-sky-100/50 group-hover/sub:bg-sky-600 group-hover/sub:text-white transition-colors duration-250">
                                              <IconComp size={14} className="stroke-[2.2]" />
                                            </div>
                                            <span className="leading-snug">{art.name}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          /* Regular Link */
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`relative flex items-center py-3.5 px-4 text-base font-bold rounded-xl transition-all duration-200 overflow-hidden ${
                              isActive
                                ? "text-sky-600 bg-gradient-to-r from-sky-500/10 to-indigo-500/5 shadow-sm shadow-sky-50/50"
                                : "text-slate-800 hover:text-sky-600 hover:bg-slate-50/50"
                            }`}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-sky-600 rounded-r-md" />
                            )}
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Bottom Sticky Action Block */}
              <div className="p-6 border-t border-slate-200/50 bg-slate-50/90 backdrop-blur-md shrink-0 space-y-5 relative z-10">
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 border border-slate-200 hover:border-sky-300/40 rounded-xl font-bold text-slate-600 text-xs uppercase tracking-wider hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all duration-200 group/btn"
                  >
                    <Lock size={14} className="stroke-[2.2] group-hover/btn:scale-105 transition-transform" />
                    Admin Dashboard
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-150/40 hover:shadow-lg hover:shadow-sky-200/40 hover:-translate-y-[0.5px] transition-all duration-200 text-center"
                  >
                    Get A Quote
                  </Link>
                </div>
                
                {/* Logistics Coordinates Info Footer */}
                <div className="pt-4 border-t border-slate-200/60 text-[10px] text-slate-400 space-y-2.5 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-slate-200/40 flex items-center justify-center text-slate-500">
                      <Phone size={12} className="stroke-[2.2]" />
                    </div>
                    <a href="tel:+918220046231" className="hover:text-sky-600 transition-colors">+91 82200 46231</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-slate-200/40 flex items-center justify-center text-slate-500">
                      <MapPin size={12} className="stroke-[2.2]" />
                    </div>
                    <span>Tiruppur, Tamil Nadu Hub</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
