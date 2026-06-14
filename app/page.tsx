"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  HelpCircle,
  Globe,
  Shirt,
  Tag,
  Package,
  Scissors,
  Clipboard,
  Sliders,
  Cpu,
  Truck,
  Maximize2,
  X,
} from "lucide-react";

const homeServices = [
  {
    title: "Premium Wash Care Labels",
    desc: "Soft satin and cotton wash care labels engineered with high-definition care instructions for export garment manufacturing.",
    href: "/products/wash-care-labels",
    tag: "Garment Care",
    icon: Printer,
  },
  {
    title: "High-Density Woven Labels",
    desc: "Luxury woven garment labels crafted with precision threading for long-lasting premium apparel branding.",
    href: "/products/woven-labels",
    tag: "Luxury Weaving",
    icon: Shirt,
  },
  {
    title: "Retail Hang Tags & Barcode Labels",
    desc: "Premium retail branding tags designed with barcode integration, elegant finishes, and durable print quality.",
    href: "/products/hang-tags",
    tag: "Retail Brands",
    icon: Tag,
  },
  {
    title: "Industrial Offset Printing",
    desc: "High-speed precision offset printing solutions powered by advanced production systems and color accuracy control.",
    href: "/products/offset-printing",
    tag: "High Volume",
    icon: Layers,
  },
  {
    title: "Premium Brand Photocards",
    desc: "Bespoke custom photocards and brand cards printed with premium finishes, glossy laminations, and rounded edge-cuts.",
    href: "/products/photocards",
    tag: "Brand Merchandise",
    icon: Tag,
  },
  {
    title: "Precision Label Cutting & Sealing",
    desc: "Automated ultrasonic cutting and heat-sealing technology delivering clean edges and superior finishing quality.",
    href: "/products/cut-seal",
    tag: "Fray-Free Edges",
    icon: Scissors,
  },
];

// Workflow stages
const workflowSteps = [
  {
    num: "01",
    title: "Technical Consultation",
    desc: "We analyze branding specifications, fabric compatibility, label durability, print methods, and production requirements for precision manufacturing.",
    icon: Clipboard,
  },
  {
    num: "02",
    title: "Pre-Press & Proofing",
    desc: "Digital proofs and physical samples are calibrated with accurate color matching and layout validation before mass production.",
    icon: Sliders,
  },
  {
    num: "03",
    title: "Precision Production",
    desc: "High-speed rotary and digital production systems manufacture labels with exceptional consistency and strict tolerance control.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Quality Audit Check",
    desc: "Every production batch undergoes multi-stage inspection for print clarity, adhesive precision, edge finishing, and durability assurance.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Industrial Shipping",
    desc: "Products are securely packed using export-grade packaging standards and delivered efficiently across India and global markets.",
    icon: Truck,
  },
];

// Synthetic Indian testimonials
const testimonials = [
  {
    name: "Senthil Kumar",
    role: "Production Director, Tiruppur Tex-Craft",
    content:
      "Velmurugan Labels cares about our survival and livelihoods more than their margins. Their proud workers treat our tags as high-quality pieces of art, keeping our factory shifts active.",
  },
  {
    name: "Anitha Selvam",
    role: "Founder, Kovai Organic Foods",
    content:
      "We chose them because they value people over profits. Their team worked alongside us during our initial scale-up. The premium quality self-adhesive labels are printed by proud hands, ensuring 100% satisfaction.",
  },
  {
    name: "Velusamy Chinnasamy",
    role: "Logistics Manager, Kongu Garment Exporters",
    content:
      "Their starting motive to uplift the local Tiruppur industry shines through in every order. With real-time machine tracking and highly satisfied workers, they deliver premium quality roll barcode stickers.",
  },
];

// Authentic Brand Work Gallery items
const workGalleryItems = [
  {
    id: "work-minymo",
    title: "Organic Paper Board",
    category: "Eco & Organic",
    description: "FSC-certified biodegradable raw board tag with customized debossed brand printing and organic cotton hanger threads, fabricated for sustainable Scandinavian export fashion.",
    image: "/gallery-work-minymo.png",
  },
  {
    id: "work-brands",
    title: "Premium Die-Cut Paperboard",
    category: "Licensed Brands",
    description: "Premium die-cut paperboard tags displaying high-fidelity Pantone color consistency, soft-touch matte lamination, and integrated security barcodes.",
    image: "/gallery-work-brands.png",
  },
  {
    id: "work-pret",
    title: "Custom Printed Tapes",
    category: "Wash Care & Woven",
    description: "Custom screen-printed branding tapes and cotton ribbons engineered with high-density wash-resistant ink for luxury retail presentations.",
    image: "/gallery-work-pret.png",
  },
  {
    id: "work-cartoons",
    title: "Premium Packaging Boxes",
    category: "Licensed Brands",
    description: "Custom-printed kraft packaging boxes and corrugated cardboard mailers, featuring eco-friendly single-color branding prints and durable structural designs for secure product shipping.",
    image: "/gallery-work-cartoons.png",
  },
  {
    id: "work-kids",
    title: "High-Quality Photo Tags",
    category: "Licensed Brands",
    description: "Artistic watercolor-illustrated fashion hang tags with custom typography and dual-layered product information backing, complete with elegant premium string hangers.",
    image: "/gallery-work-kids.png",
  },
  {
    id: "work-ramraj",
    title: "Wash Care Labels",
    category: "Wash Care & Woven",
    description: "Export-grade ultra-soft satin wash care labels printed with high-density wash-resistant ink in multiple languages (English, French, Spanish) for premier shirt brands.",
    image: "/gallery-work-ramraj.jpg",
  },
  {
    id: "work-decathlon",
    title: "Professional Woven Neck Labels",
    category: "Wash Care & Woven",
    description: "Premium high-density woven neck labels and brand tags featuring high-definition white lettering on soft black textured ribbon with precise folded end-finishes.",
    image: "/gallery-work-decathlon.png",
  },
  {
    id: "trust-quality",
    title: "Cotton Printed Tapes",
    category: "Eco & Organic",
    description: "Custom-printed cotton and grosgrain ribbon tapes with bold graphic text prints, designed for premium garment drawstrings, packaging decorations, and modern brand detailing.",
    image: "/gallery-trust-quality.png",
  },
  {
    id: "trust-satisfaction",
    title: "FSC® Standards",
    category: "Eco & Organic",
    description: "Crafted in Tiruppur using 100% sustainable paperboard and manufactured under certified ISO 9001 quality audits, ensuring absolute compliance and traceability for export brands.",
    image: "/gallery-trust-satisfaction.png",
  },
];

const heroSlides = [
  {
    image: "/ihs1.png",
    description: "Factory & Infrastructure",
    title: "Premium Manufacturing Facility",
    details: "Our modern production floor in Tiruppur features advanced flexographic and digital printing machines running at full capacity to ensure export-quality manufacturing.",
  },
  {
    image: "/ihs2.png",
    description: "Quality Inspection",
    title: "Precision Quality Inspection",
    details: "Every garment label, woven badge, wash care ribbon, and hang tag undergoes rigorous testing and multi-stage manual inspections for absolute alignment and accuracy.",
  },
  {
    image: "/ihs3.png",
    description: "Label Products",
    title: "Garment Labels in Production",
    details: "Premium woven labels and retail brand tags are crafted using high-density threading and premium substrates to elevate luxury apparel branding.",
  },
  {
    image: "/ihs4.png",
    description: "Production Tech",
    title: "Printing & Packaging Process",
    details: "Advanced automated production lines process large rolls of self-adhesive stickers, barcode rolls, cotton tapes, and shipping containers.",
  },
  {
    image: "/ihs5.png",
    description: "Finished & Delivery",
    title: "Finished Products & Delivery",
    details: "Completed orders are consolidated, professionally packed to international standards, and dispatched for swift logistics to domestic and global clients.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess("Thank you! Your quote request has been sent successfully.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setError(result.errors?.[0]?.message || result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const filteredWorkItems = activeCategory === "All"
    ? workGalleryItems
    : workGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative overflow-hidden bg-slate-50/50">

      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden isolate border-b border-slate-100">
        {/* Supporting premium background slider */}
        <div className="absolute inset-0 -z-20 overflow-hidden bg-white">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-[58%_62%] transform-gpu"
              style={{ backgroundImage: `url('${heroSlides[activeSlide].image}')` }}
            />
          </AnimatePresence>
        </div>
        {/* Solid & smooth light glassmorphism/gradient overlays for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white lg:hidden -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent hidden lg:block -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/10 via-transparent to-white -z-10" />

        {/* Dynamic mesh background grid with matching soft slate rules */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-6 md:pt-2 md:pb-12">

            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start justify-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-extrabold text-[9px] sm:text-[10px] tracking-wide shrink-0">IN</span>
                <span className="text-slate-650 font-bold tracking-wide">INDIA'S TRUSTED LABEL MANUFACTURER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.1] text-left"
              >
                Premium Label <br />
                <span className="text-sky-600">Printing Solutions</span> <br />
                for Modern Brands
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-650 font-medium leading-relaxed text-left max-w-xl"
              >
                Empowering Indian industries with export-quality labels, precision printing, and innovative branding solutions from Tiruppur.
              </motion.p>

              {/* Short Blue Divider Line */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 48 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="h-[3px] bg-sky-600 rounded-full"
              />

              {/* Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-xl text-left py-2 w-full"
              >
                <div className="flex items-center gap-3 text-slate-800 font-extrabold text-xs sm:text-sm">
                  <CheckCircle className="text-sky-600 w-5 h-5 shrink-0" />
                  <span>Export Quality Standards</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-extrabold text-xs sm:text-sm">
                  <CheckCircle className="text-sky-600 w-5 h-5 shrink-0" />
                  <span>Custom Branding Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-extrabold text-xs sm:text-sm">
                  <CheckCircle className="text-sky-600 w-5 h-5 shrink-0" />
                  <span>Advanced Printing Technology</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-extrabold text-xs sm:text-sm">
                  <CheckCircle className="text-sky-600 w-5 h-5 shrink-0" />
                  <span>On-Time Delivery Assurance</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4 w-full"
              >
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-between gap-4 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full shadow-lg shadow-sky-100 hover:shadow-xl hover:shadow-sky-200 transition-all duration-200 text-xs uppercase tracking-widest group min-w-[190px]"
                >
                  <span>GET FREE QUOTE</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </span>
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-between gap-4 px-6 py-3.5 bg-transparent hover:bg-sky-50 text-sky-600 border-2 border-sky-600 hover:border-sky-700 font-bold rounded-full transition-all duration-200 text-xs uppercase tracking-widest group min-w-[190px]"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <span className="w-6 h-6 rounded-full bg-sky-600/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 stroke-[2.5]" />
                  </span>
                </Link>
              </motion.div>

              {/* Production Journey Progress Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="w-full pt-6 border-t border-slate-200/50 mt-6"
              >
                <span className="text-[10px] font-black text-sky-600 tracking-widest uppercase block mb-3">
                  PRODUCTION JOURNEY STORY
                </span>
                <div className="grid grid-cols-5 gap-2 w-full">
                  {heroSlides.map((slide, idx) => {
                    const isActive = activeSlide === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className="flex flex-col text-left group focus:outline-none cursor-pointer"
                      >
                        {/* Progress line */}
                        <div className="w-full bg-slate-200/60 h-1 rounded-full overflow-hidden mb-2 relative">
                          {isActive ? (
                            <motion.div
                              key={`progress-${activeSlide}`}
                              className="bg-sky-600 h-full w-full absolute left-0 top-0 origin-left"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 6, ease: "linear" }}
                            />
                          ) : idx < activeSlide ? (
                            <div className="bg-sky-600 h-full w-full absolute left-0 top-0" />
                          ) : null}
                        </div>
                        {/* Slide tag / name */}
                        <span className={`text-[9px] font-black uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-sky-600 font-extrabold" : "text-slate-400 group-hover:text-slate-500"
                          }`}>
                          {`0${idx + 1}`}
                        </span>
                        <span className={`text-[10px] font-extrabold leading-tight transition-colors duration-300 hidden md:block ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                          }`}>
                          {slide.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right column - Production Journey Card */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full mt-8 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-slate-900/5 relative overflow-hidden group hover:border-sky-300/40 transition-all duration-300"
                >
                  {/* Subtle top decoration line using brand colors */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-indigo-600" />

                  <div className="space-y-4">
                    {/* Visual Slide Image for all devices */}
                    <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50 shadow-inner relative isolate">
                      <img
                        src={heroSlides[activeSlide].image}
                        alt={heroSlides[activeSlide].title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {`STAGE 0${activeSlide + 1}`}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {`0${activeSlide + 1} / 05`}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {heroSlides[activeSlide].title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {heroSlides[activeSlide].details}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Velmurugan Labels</span>
                      <span className="text-sky-600 font-extrabold">Tiruppur, India</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* 2. Statistics Bar Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full bg-sky-600 rounded-3xl p-6 md:py-8 md:px-8 text-white shadow-xl shadow-sky-950/15 relative z-20 mt-8 border border-sky-700/30"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-stretch justify-between gap-6 md:gap-0">
              {[
                { icon: ShieldCheck, value: "15+", label: "Years of Excellence" },
                { icon: Printer, value: "25M+", label: "Labels Printed" },
                { icon: Globe, value: "500+", label: "Global Clients" },
                { icon: Award, value: "99.9%", label: "Quality Assurance" },
                { icon: Clock, value: "On-Time", label: "Delivery" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 flex-1 justify-center md:justify-start ${idx > 0 ? "md:border-l md:border-white/20 md:pl-6 lg:pl-10" : ""
                    } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-white stroke-[1.5]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-2xl font-black text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] font-bold text-white/80 uppercase tracking-wider mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Product Categories Grid (10 Cards) directly below the Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-3 mt-8 relative z-20 pb-4"
          >
            {[
              {
                name: "WASH CARE LABELS",
                image: "/portfolio-wash-care.png",
                href: "/products/wash-care-labels",
              },
              {
                name: "WOVEN LABELS",
                image: "/portfolio-woven-labels.png",
                href: "/products/woven-labels",
              },
              {
                name: "HANG TAGS",
                image: "/portfolio-hang-tags.png",
                href: "/products/hang-tags",
              },
              {
                name: "PRICE TAGS",
                image: "/portfolio-hang-tags.png",
                href: "/products/price-tags",
              },
              {
                name: "STICKERS",
                image: "/portfolio-stickers.png",
                href: "/products/stickers",
              },
              {
                name: "PHOTOCARD",
                image: "/portfolio-photocards.png",
                href: "/products/photocards",
              },
              {
                name: "COTTON TAPES",
                image: "/portfolio-cotton-tape.png",
                href: "/products/cotton-tapes",
              },
              {
                name: "DTF STICKERS",
                image: "/portfolio-dtf-stickers.png",
                href: "/products/dtf-stickers",
              },
              {
                name: "MAGAZINES",
                image: "/portfolio-magazines.png",
                href: "/products/magazines",
              },
              {
                name: "PACKING BOX",
                image: "/portfolio-packing-boxes.png",
                href: "/products/packing-boxes",
              },
            ].map((prod, idx) => (
              <Link
                key={`${prod.name}-${idx}`}
                href={prod.href}
                className="group bg-white rounded-2xl p-2 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-sky-300/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-50 relative isolate">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="py-3 px-1 text-center border-t border-slate-100 rounded-b-2xl">
                  <span className="text-[9px] sm:text-[10px] font-black text-sky-600 tracking-wider group-hover:text-sky-700 transition-colors block whitespace-normal">
                    {prod.name}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 2.5. Our Work Gallery Section */}
      <section className="py-16 bg-white relative overflow-hidden isolate border-b border-slate-100">
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/3 left-1/10 w-[500px] h-[500px] bg-sky-100/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-indigo-50/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-600 uppercase tracking-widest">
              <Sparkles size={12} className="animate-pulse" />
              Our Print Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Textile Branding <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Masterpieces</span> We Fabricate
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Explore the premium hang tags, FSC-certified organic boards, and licensed garment labels trusted by top export apparel houses worldwide.
            </p>
          </div>

          {/* Filtration Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {["All", "Licensed Brands", "Wash Care & Woven", "Eco & Organic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${activeCategory === cat
                  ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-950/10 scale-105"
                  : "bg-white/80 backdrop-blur-md border-slate-200 text-slate-650 hover:bg-slate-50 hover:border-slate-350"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Work Gallery Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorkItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(workGalleryItems.findIndex(w => w.id === item.id))}
                  className="group bg-white rounded-3xl p-3 border border-slate-200/50 hover:border-sky-300/40 shadow-sm hover:shadow-2xl hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Image Viewport */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 relative isolate border border-slate-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out origin-center"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md text-slate-800 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 size={16} />
                      </div>
                    </div>

                    {/* Category Label Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-widest bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="p-4 text-left space-y-2 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors duration-250">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-2 flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Certified Quality</span>
                      <span className="text-sky-600 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                        Maximize <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 2.6. Fullscreen Work Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar Controls */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10 pt-2">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                Item {lightboxIndex + 1} of {workGalleryItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Viewport */}
            <div className="relative flex-grow flex items-center justify-center max-w-7xl mx-auto w-full p-2">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                src={workGalleryItems[lightboxIndex].image}
                alt={workGalleryItems[lightboxIndex].title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-2xl sm:rounded-[24px] object-contain shadow-2xl border border-white/5"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev! === 0 ? workGalleryItems.length - 1 : prev! - 1));
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-850 hover:scale-105 transition-all shadow-xl cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  setLightboxIndex((prev) => (prev! === workGalleryItems.length - 1 ? 0 : prev! + 1));
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-850 hover:scale-105 transition-all shadow-xl cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom details */}
            <div className="w-full max-w-3xl mx-auto text-center space-y-2 pb-6 z-10">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
                {workGalleryItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                {workGalleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
                {workGalleryItems[lightboxIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Services Preview */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/10 to-white relative overflow-hidden isolate border-b border-slate-100">

        {/* Subtle Textile Texture Background Layer */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none -z-10 bg-[linear-gradient(to_right,#20458c_1px,transparent_1px),linear-gradient(to_bottom,#20458c_1px,transparent_1px)] bg-[size:8px_8px]" />

        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[110px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[110px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles size={12} className="stroke-[2.5]" />
              Capabilities
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight"
            >
              Advanced Textile Label <br className="hidden sm:inline" /> Manufacturing Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium"
            >
              Driven by precision machinery and export-grade manufacturing standards, every branding solution is engineered for durability, consistency, and premium garment presentation.
            </motion.p>
          </div>

          {/* Staggered Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white/90 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-sky-100/40 hover:border-sky-300/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Top capsule + icon wrapper */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
                        {srv.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-100/80 group-hover:rotate-3 shrink-0 shadow-sm">
                        <IconComp size={20} className="stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-slate-850 group-hover:text-sky-600 transition-colors duration-200 leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="pt-8 mt-6 border-t border-slate-100/60">
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-widest group-hover:text-sky-750 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} className="stroke-[2.5] transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Production Workflow Section */}
      <section className="py-24 bg-slate-50/30 relative overflow-hidden isolate border-b border-slate-100">

        {/* Soft luxurious industrial background layers */}
        {/* 1. Subtle grid lines background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-70 -z-10 pointer-events-none" />
        {/* 2. Microscopic woven textile mesh background overlay */}
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none -z-10 bg-[linear-gradient(to_right,#20458c_1px,transparent_1px),linear-gradient(to_bottom,#20458c_1px,transparent_1px)] bg-[size:10px_10px]" />
        {/* 3. Soft glowing ambient blur orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-100/25 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-50/35 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles size={12} className="stroke-[2.5]" />
              EXECUTION PIPELINE
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight"
            >
              Precision Manufacturing <br />
              <span className="text-sky-600">Workflow Engineered</span> for Global Quality
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium"
            >
              Every stage of production is optimized with advanced machinery, strict quality control, and export-grade precision to ensure flawless label manufacturing at scale.
            </motion.p>
          </div>

          {/* Interactive Connected Timeline Layout */}
          <div className="relative">

            {/* Horizontal Timeline Connector Path for Desktop (lg screens) */}
            <div className="hidden lg:block absolute top-[90px] left-[5%] right-[5%] h-[4px] bg-slate-200/60 -z-10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-600 relative"
              >
                {/* Glowing flow particle effect */}
                <span className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </motion.div>
            </div>
            {/* Vertical Timeline Connector Path for Mobile & Tablet */}
            <div className="lg:hidden absolute top-10 bottom-10 left-[22.5px] w-[3px] bg-slate-200/80 -z-10 rounded-full overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-b from-sky-400 via-sky-600 to-indigo-600"
              />
            </div>

            {/* Grid of Cards */}
            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-6 items-stretch relative">
              {workflowSteps.map((step, idx) => {
                const IconComp = step.icon;
                const isCenter = idx === 2; // Precision Production center feature card

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`relative pl-14 sm:pl-16 lg:pl-0 pb-0 flex flex-col justify-between group`}
                  >
                    {/* Timeline icon node */}
                    <div className="absolute left-0 top-0 lg:static lg:flex lg:items-center lg:justify-between lg:mb-8 z-10">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-100/80 group-hover:rotate-6">
                        <IconComp size={20} className="stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Card content */}
                    <div className={`p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[32px] border ${isCenter
                      ? "border-sky-400/35 shadow-xl shadow-sky-900/5 lg:scale-[1.05] lg:z-20 bg-gradient-to-b from-white to-sky-50/10"
                      : "border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.015)]"
                      } hover:-translate-y-1 lg:hover:-translate-y-3 hover:border-sky-300/60 hover:shadow-2xl hover:shadow-sky-100/40 transition-all duration-500 flex flex-col justify-between flex-grow relative`}
                    >
                      {/* Layered Card Background Enhancements */}
                      {/* Step 1: Technical Consultation specifications sheet blueprint details */}
                      {idx === 0 && (
                        <div className="absolute right-6 bottom-6 opacity-[0.04] pointer-events-none select-none text-[8px] font-mono text-slate-800 leading-normal border border-slate-400 p-2 rounded max-w-[120px]">
                          <span className="block border-b border-slate-350 pb-1 font-bold">SPECIFICATIONS</span>
                          <span className="block pt-1">DIM: 15mm x 60mm</span>
                          <span className="block">YARN: 50D Damask</span>
                          <span className="block">QTY: 100,000 Pcs</span>
                          <span className="block">ALIGN: Center-Fold</span>
                        </div>
                      )}

                      {/* Step 2: CMYK bars */}
                      {idx === 1 && (
                        <div className="absolute right-6 bottom-6 flex gap-1 opacity-20 pointer-events-none select-none">
                          <span className="w-2.5 h-6 bg-cyan-400 rounded-sm" />
                          <span className="w-2.5 h-6 bg-fuchsia-500 rounded-sm" />
                          <span className="w-2.5 h-6 bg-amber-400 rounded-sm" />
                          <span className="w-2.5 h-6 bg-slate-900 rounded-sm" />
                        </div>
                      )}

                      {/* Step 3: Spinning gears / machinery loop */}
                      {idx === 2 && (
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full border border-sky-300/10 opacity-30 flex items-center justify-center pointer-events-none">
                          <Cpu className="w-12 h-12 text-sky-400/30 animate-[spin_10s_linear_infinite]" />
                        </div>
                      )}

                      {/* Step 4: Magnifying checking grids */}
                      {idx === 3 && (
                        <div className="absolute right-6 bottom-6 w-12 h-12 rounded-full border-2 border-dashed border-emerald-400/20 flex items-center justify-center pointer-events-none select-none opacity-40">
                          <span className="text-[9px] font-bold text-emerald-500/50">[100%]</span>
                        </div>
                      )}

                      {/* Step 5: Logistics lines */}
                      {idx === 4 && (
                        <div className="absolute right-6 bottom-6 opacity-[0.25] pointer-events-none select-none text-[8px] font-mono text-slate-400 text-right">
                          <span className="block">TIRUPPUR ➔</span>
                          <span className="block">MUMBAI ➔</span>
                          <span className="block text-sky-600 font-bold">GLOBAL DEPOT</span>
                        </div>
                      )}

                      <div>
                        {/* Floating Number Badge */}
                        <div className="flex justify-end mb-4 lg:mb-8">
                          <div className={`text-xs font-black px-2.5 py-1 rounded-full ${isCenter
                            ? "bg-sky-600 text-white shadow-md shadow-sky-100 animate-pulse"
                            : "bg-slate-100 text-slate-500"
                            } tracking-wide`}>
                            {step.num}
                          </div>
                        </div>

                        {/* Content block */}
                        <div className="space-y-3">
                          <h3 className="text-[17px] sm:text-[18px] font-black text-slate-850 group-hover:text-sky-600 transition-colors leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Subtle micro footer active/indicator */}
                      <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider relative z-10">
                        <span>{isCenter ? "Primary Hub" : "Workflow Flow"}</span>
                        <span className={`h-2 w-2 rounded-full ${isCenter ? "bg-sky-500 animate-ping" : "bg-slate-300"}`}></span>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Why Choose Us Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50/20 to-white relative overflow-hidden isolate border-b border-slate-100">
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80 -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                Our Edge
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Engineering Industrial Trust
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a premium print supplier based in Tiruppur, we recognize that a label is the gateway to your brand identity. We enforce strict manufacturing codes to assure excellence.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Advanced 24/7 Operations</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      Continuous shifts on digital and rotary equipment prevent processing bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Certified Material Inputs</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      We utilize high-grade water-resistant paper substrates and non-toxic commercial inks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Zero-Alignment Registration Error</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      Automated laser calibration ensures each color matrix is perfectly centered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/60 shadow-lg shadow-slate-100/50 space-y-6 relative overflow-hidden group hover:border-sky-200/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 relative z-10">
                <span className="text-sm font-bold text-slate-800">Real-Time Production Output</span>
                <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">Live Status</span>
              </div>
              <div className="space-y-4 relative z-10">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Heidelberg Offset Line</span>
                    <span>92% Speed</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-600 h-full w-[92%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Rotary Fabric Weavers</span>
                    <span>85% Capacity</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-600 h-full w-[85%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Advanced Digital Press Line</span>
                    <span>100% Ready</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-600 h-full w-full rounded-full" />
                  </div>
                </div>
              </div>
              <div className="pt-4 text-center border-t border-slate-100/50 relative z-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Calibrated hourly by engineering leads
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Slider */}
      <section className="py-20 bg-white relative overflow-hidden isolate border-b border-slate-100">
        {/* Soft glowing ambient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-50/40 rounded-full blur-[130px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="bg-white/85 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-200/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-extrabold shrink-0 border border-sky-100/50 transition-transform duration-300 group-hover:scale-105">
                    {t.name[0]}
                  </div>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-800">{t.name}</h4>
                  <span className="text-xs text-slate-400 block mt-0.5">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact / Quick Quote Section */}
      <section id="quote-section" className="py-20 bg-gradient-to-b from-white via-slate-50/40 to-slate-100/30 relative overflow-hidden isolate border-t border-slate-100">
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-100/25 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[110px] -z-10 pointer-events-none" />
        {/* Fine technical blueprint grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* Form Side */}
            <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-xl shadow-slate-100/50 relative overflow-hidden group hover:border-sky-200/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="space-y-2 mb-8 relative z-10">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
                  Quick Inquiry
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Request an Instant Production Quote
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Complete the fields below and our estimating desk will respond with transparent bulk pricing within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sanjay@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      WhatsApp/Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Required Printing Service *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all cursor-pointer"
                    >
                      <option value="">Select Service...</option>
                      <option value="Designing">Label Designing</option>
                      <option value="Digital Printing">Digital Printing</option>
                      <option value="Offset Printing">Offset Printing</option>
                      <option value="Stickers">Stickers & Decals</option>
                      <option value="Rotary Label Printing">Rotary Label Printing</option>
                      <option value="Screen Printing">Screen Printing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Production Specifications & Quantities *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe material type (Satin, adhesive, paper), sizes, and approximate quantities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all resize-none"
                  />
                </div>

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <CheckCircle size={16} />
                      {success}
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <HelpCircle size={16} />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 font-semibold rounded-xl text-white text-sm uppercase tracking-wider shadow-lg shadow-sky-100 hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-[1px] transition-all duration-200 cursor-pointer"
                >
                  {loading ? "Transmitting Specs..." : "Request Call-Back"}
                </button>
              </form>
            </div>

            {/* Address & Direct Dial Side */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 relative">

              {/* Facility Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 space-y-6 flex-grow flex flex-col justify-center border border-slate-800 shadow-xl shadow-slate-900/10 hover:border-slate-700 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase relative z-10">
                  Our Headquarters
                </span>
                <h3 className="text-xl font-bold relative z-10">Velmurugan Labels</h3>

                <ul className="space-y-4 text-slate-300 text-sm relative z-10">
                  <li className="flex gap-3 items-start">
                    <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      Laxmi Nagar, Ram Nagar,<br />
                      Tiruppur, Tamil Nadu 641602
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone size={18} className="text-sky-400 shrink-0" />
                    <a href="tel:+918220046231" className="hover:text-white transition-colors">
                      +91 82200 46231
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Clock size={18} className="text-sky-400 shrink-0" />
                    <span>Open ΓÇö Closes 8 PM (Mon-Sat)</span>
                  </li>
                </ul>

                <hr className="border-slate-800 relative z-10" />

                <div className="flex gap-4 relative z-10">
                  <Link
                    href="/contact"
                    className="flex-grow py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl text-center border border-slate-750 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://wa.me/919626638614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-colors"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>

              {/* Google Map Mock Illustration */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/50 shadow-lg shadow-slate-100/30 aspect-video relative flex items-center justify-center p-4 group hover:border-sky-200/50 transition-all duration-300">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
                  <path d="M 0 30 Q 50 10 100 30 M 0 60 Q 50 40 100 60 M 30 0 Q 10 50 30 100 M 60 0 Q 40 50 60 100" stroke="#0ea5e9" strokeWidth="2" />
                </svg>
                <div className="relative text-center space-y-3 z-10">
                  <MapPin size={36} className="text-sky-600 mx-auto animate-bounce" />
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-widest">Interactive Directions</span>
                  <a
                    href="https://maps.app.goo.gl/uJnPfeeD3v7fE1DC7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-lg border border-sky-200 transition-colors"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
