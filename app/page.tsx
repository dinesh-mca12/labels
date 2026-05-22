"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  Settings,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

// Services preview
const homeServices = [
  {
    title: "Designing & Artworks",
    desc: "Pre-press label layouts and structural mockups optimized for flawless outputs.",
    href: "/services#designing",
    tag: "Creative",
  },
  {
    title: "Digital Label Printing",
    desc: "Low minimums and photorealistic variable labels with instant setup speeds.",
    href: "/services#digital-printing",
    tag: "Express",
  },
  {
    title: "Offset Print Packaging",
    desc: "Premium hangtags, garment boxes, and paper wrappers with absolute color consistency.",
    href: "/services#offset-printing",
    tag: "Bulk Precision",
  },
  {
    title: "Custom Stickers & Decals",
    desc: "Self-adhesive, roll-form stickers, barcode thermal labels, and vinyl die-cuts.",
    href: "/services#stickers",
    tag: "Heavy-Duty",
  },
  {
    title: "Rotary Roll Printing",
    desc: "Continuous high-speed print runs for satin, cotton, and woven textile tags.",
    href: "/services#rotary-label-printing",
    tag: "High Volume",
  },
  {
    title: "Luxury Screen Printing",
    desc: "Tactile Spot UV, metallic foils, and textured gloss profiles that pop.",
    href: "/services#screen-printing",
    tag: "Finishing",
  },
];

// Workflow stages
const workflowSteps = [
  {
    num: "01",
    title: "Technical Consultation",
    desc: "We analyze your specific labeling specifications, material durability, and design layouts.",
  },
  {
    num: "02",
    title: "Pre-Press & Proofing",
    desc: "Advanced digital proofs and physical samples are calibrated to match your brand colors exactly.",
  },
  {
    num: "03",
    title: "Precision Production",
    desc: "High-speed modern rotary and digital machinery executes the print run under strict tolerances.",
  },
  {
    num: "04",
    title: "Quality Audit Check",
    desc: "Each printed batch undergoes visual inspection for perfect registration, adhesiveness, and cut lines.",
  },
  {
    num: "05",
    title: "Industrial Shipping",
    desc: "Packed in weather-sealed boxes and shipped directly to your factories across South India.",
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

export default function Home() {
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

  return (
    <div className="relative overflow-hidden bg-slate-50/50">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 bg-gradient-to-b from-sky-50/70 via-white to-transparent overflow-hidden">
        {/* Dynamic mesh background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider"
              >
                <Sparkles size={14} className="stroke-[2.5]" />
                Premium Printing Authority Since 2015
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
              >
                Premium Label <br />
                <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  Printing Solutions
                </span> <br />
                for Modern Brands
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building premium industrial labels driven by people-first values. Our starting motive is to lift workers and client satisfaction over pure profit, helping local businesses survive and live a good life with premium craftsmanship crafted by proud hands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#quote-section"
                  className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full shadow-lg shadow-sky-100 hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-[1px] transition-all duration-200 text-center text-sm uppercase tracking-wider"
                >
                  Get Free Quote
                </a>
                <Link
                  href="/schedule-meeting"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-full shadow-sm hover:shadow-md border border-slate-200 hover:border-slate-300 transition-all duration-200 text-center text-sm uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  Schedule Meeting
                  <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Mini counters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0"
              >
                <div>
                  <span className="block text-2xl font-black text-slate-800">25M+</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Labels Printed</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-800">500+</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Global Brands</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-800">99.9%</span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Accuracy Rate</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Right Visual Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[4/5] bg-white rounded-3xl p-4 shadow-xl border border-slate-100/50 flex flex-col justify-between relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-indigo-50/30 rounded-3xl -z-10 opacity-70 group-hover:scale-[1.01] transition-transform duration-300" />
                
                {/* Visual mock elements */}
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-8 h-8 rounded bg-sky-100 flex items-center justify-center text-sky-600">
                      <Printer size={16} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-800">HP Indigo 6K</span>
                      <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Line Active</span>
                    </div>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="my-auto py-10 flex flex-col items-center justify-center text-center">
                  <svg className="w-44 h-44 text-slate-200" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="35" stroke="#0ea5e9" strokeWidth="3" className="animate-spin" style={{ transformOrigin: "center", animationDuration: "12s" }} />
                    <path d="M50 25 L50 75 M25 50 L75 50" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="1 2" />
                    <rect x="35" y="35" width="30" height="30" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="4" fill="#0ea5e9" />
                  </svg>
                  <span className="block text-sm font-bold text-slate-800 mt-4">Precision Manufacturing Standards</span>
                  <span className="text-xs text-slate-500 mt-1">Zero-Alignment Registration Error</span>
                </div>

                <div className="bg-sky-900 text-white p-5 rounded-2xl flex justify-between items-center shadow-lg shadow-sky-950/10">
                  <div>
                    <span className="block text-[10px] font-bold tracking-widest text-sky-400 uppercase">Tiruppur Hub</span>
                    <span className="block text-sm font-semibold mt-0.5">Velmurugan Labels Facility</span>
                  </div>
                  <ArrowRight size={18} className="text-sky-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Client Sectors Logo Slider */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Empowering Leading Sectors Nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["TEXTILES", "GARMENTS", "FMCG PACKAGING", "PHARMACEUTICALS", "RETAIL BRANDS", "ELECTRONICS"].map((brand) => (
              <span key={brand} className="text-sm md:text-base font-extrabold tracking-widest text-slate-400 font-mono select-none">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Advanced Label Production Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Equipped with high-performance machinery, we handle comprehensive printing requirements under one roof with absolute material integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {srv.tag}
                    </span>
                    <Printer size={18} className="text-slate-400 group-hover:text-sky-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <Link
                  href={srv.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-widest group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Production Workflow Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our High-Performance Production Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              How we assure premium print registration and seamless order fulfillment for heavy-duty industrial volumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connector line for large screens */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-[1px] bg-slate-200 -z-10" />

            {workflowSteps.map((step, idx) => (
              <div key={step.num} className="space-y-4 relative bg-white">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 text-lg font-black shadow-sm mb-6">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-800">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Grid */}
      <section className="py-20 bg-slate-50/50">
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

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-800">Real-Time Production Output</span>
                <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">Live Status</span>
              </div>
              <div className="space-y-4">
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
                    <span>HP Indigo Digital Line</span>
                    <span>100% Ready</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-600 h-full w-full rounded-full" />
                  </div>
                </div>
              </div>
              <div className="pt-4 text-center border-t border-slate-100/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Calibrated hourly by engineering leads
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Slider */}
      <section className="py-20 bg-white border-y border-slate-100">
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
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/50">
                  <h4 className="text-sm font-bold text-slate-800">{t.name}</h4>
                  <span className="text-xs text-slate-400 block mt-0.5">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact / Quick Quote Section */}
      <section id="quote-section" className="py-20 bg-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Side */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="space-y-2 mb-8">
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

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
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
                  className="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 font-semibold rounded-xl text-white text-sm uppercase tracking-wider shadow-md shadow-sky-100 hover:shadow-lg transition-all duration-200"
                >
                  {loading ? "Transmitting Specs..." : "Request Call-Back"}
                </button>
              </form>
            </div>

            {/* Address & Direct Dial Side */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Facility Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 flex-grow flex flex-col justify-center border border-slate-800 shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                  Our Headquarters
                </span>
                <h3 className="text-xl font-bold">Velmurugan Labels</h3>
                
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3 items-start">
                    <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      Laxmi Nagar, Ram Nagar,<br/>
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
                    <span>Open — Closes 8 PM (Mon-Sat)</span>
                  </li>
                </ul>

                <hr className="border-slate-800" />

                <div className="flex gap-4">
                  <Link
                    href="/schedule-meeting"
                    className="flex-grow py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl text-center border border-slate-700 transition-colors"
                  >
                    Reserving slots
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
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md aspect-video relative flex items-center justify-center p-4">
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
