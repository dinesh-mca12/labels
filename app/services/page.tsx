"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Printer,
  Layers,
  Settings,
  BarChart,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Package,
  Shirt,
  Scissors,
} from "lucide-react";

const servicesData = [
  {
    id: "wash-care",
    title: "Custom Wash Care Labels Printing",
    icon: Printer,
    tagline: "garment care instructions printed to reflect absolute fabric details.",
    description:
      "We design and manufacture premium wash care instruction tags customized to your exact requirements. We calibrate care layouts containing dynamic wash symbols, fabric compositions, customized brand logos, sizing layouts, and specific handling warnings to keep garments perfectly compliant and brand-consistent over years of wash cycles.",
    features: [
      "Dynamic wash symbols & parameters customization",
      "Soft skin-contact satin and cotton roll stocks",
      "High-contrast, wash-proof black and color inks",
      "Dual-sided wash parameters and text layouts",
    ],
    workflow: "Client Proof Assessment &rarr; Text & Symbol Layout &rarr; Ribbon Printing Press Run &rarr; Ultrasonic Fray-Free Cut",
    benefits: "Ensures precise care symbols, maintains material composition transparency, and provides permanent legibility.",
    industries: "Garments, Textiles, Apparel Exports, Retail",
  },
  {
    id: "offset-printing",
    title: "Offset Printing Services",
    icon: Layers,
    tagline: "High-volume garment care sheets, cardboard boxes & premium print runs.",
    description:
      "Our sheetfed offset print lines manufacture massive batches of premium apparel cards, folding boxes, and custom care manuals. We match your corporate PMS color targets perfectly across thousands of impressions, featuring high precision vector details and robust material weights.",
    features: [
      "Heavy premium cardboards & textured stocks",
      "Calibrated Pantone PMS color-matching precision",
      "Double-sided high-density color press systems",
      "Robust folding box and carton manufacturing",
    ],
    workflow: "PMS Calibration Proofing &rarr; Aluminum Plate Mounting &rarr; High-Volume Press Run &rarr; Precision Die-Cutting",
    benefits: "Ultra-low unit pricing for bulk production, exact brand color replication, and premium material rigidities.",
    industries: "Garments, Retail Exporters, Packaging, Luxury Brands",
  },
  {
    id: "hang-tag",
    title: "Hang Tag & Price Tag",
    icon: Compass,
    tagline: "Stylish, high-durability price cards and premium custom hang tags.",
    description:
      "Elevate your retail shelf-appeal with high-end, professionally designed hang tags and price cards. We construct durable price cards featuring high-accuracy barcode and QR-code formats to support point-of-sale inventory operations. Customize your cards with luxury foil stamping, high-build textures, or rounded die-cut bounds.",
    features: [
      "High-accuracy point-of-sale barcode & QR vectors",
      "Ultra-durable cardboards and eco-kraft card sheets",
      "Stylish shapes, premium hot foil & spot-UV options",
      "Clean drill holes with optional string loop fasteners",
    ],
    workflow: "Vector Shape Drafting &rarr; Paper stock specification &rarr; Press Run Printing &rarr; Die-Cutting & Hole Drilling",
    benefits: "Significantly enhances perceived retail brand value, empowers automated barcode tracking, and reflects unique corporate identity.",
    industries: "Garments, Retail, Apparel Brands, Footwear",
  },
  {
    id: "woven-labels",
    title: "Woven Labels",
    icon: Shirt,
    tagline: "Premium garment neck badges and woven branding woven from micro-threads.",
    description:
      "Unlike standard printed wash tags, woven labels are created by interlacing high-density premium threads together to craft your brand name, emblem, or size badge directly inside the weave. We weave extremely soft, non-irritating border edges optimized for neck contact, ensuring exceptional luxury and lifetime durability.",
    features: [
      "High-density weave lines for micro-text details",
      "Soft satin/damask borders that never scratch skin",
      "Extreme washproof lifecycle, never fades or shifts",
      "End-folded or loop-folded custom formats",
    ],
    workflow: "Pattern Thread Grid Conversion &rarr; Loom Threading &rarr; Micro-Thread Damask Weaving &rarr; Folding & Pack",
    benefits: "Delivers an ultra-luxury brand look, resists fading across thousands of laundry cycles, and maintains soft neck ergonomics.",
    industries: "Garments, Luxury Apparel, Neck Tags, Outerwear Exports",
  },
  {
    id: "stickers",
    title: "Stickers & Die-Cuts (Dey Cut)",
    icon: Settings,
    tagline: "Self-adhesive, roll-form, and sheet stickers for industrial assets.",
    description:
      "We design and manufacture premium pressure-sensitive stickers, adhesive labels, barcodes, thermal transfer rolls, and vinyl die-cuts designed to stick flawlessly under diverse temperatures.",
    features: [
      "Custom permanent or removable acrylic adhesives",
      "Roll-form winding tailored for automatic dispensers",
      "Gloss/matte laminate protections against moisture",
      "Precision rotary die-cutting (Dey Cut) for complex borders",
    ],
    workflow: "Substrate Loading &rarr; Roll adhesive printing &rarr; Rotary Die Cutter &rarr; Core Rewinder",
    benefits: "Flawless adhesive application, water-resistant layers, and roll layout optimized for packing conveyors.",
    industries: "Manufacturing, FMCG, Logistics, Retail",
  },
  {
    id: "cut-seal",
    title: "Label Cut & Seal",
    icon: Scissors,
    tagline: "Automated ultrasonic ribbon cuts & warm melt frayed-edge sealing.",
    description:
      "Our continuous ultrasonic label cut-and-seal lines eliminate the problem of unraveling and fraying threads. We trim ribbon care labels, satin loops, and cotton wash tapes with precision warm blades, melting and sealing tag borders cleanly so they stay smooth, uniform, and comfortable next to skin.",
    features: [
      "Ultrasonic blade warmth to melt and seal fabric edges",
      "Perfect cut length uniformity across high-speed runs",
      "Prevents satin Neck Tags from unraveling threads",
      "Smooth border finish, soft skin-contact profiles",
    ],
    workflow: "Satin Ribbon Roll Feeding &rarr; Ultrasonic Blade Calibration &rarr; Automated Cut & Seal &rarr; Stack Audit",
    benefits: "Eliminates fiber fraying, prevents neck tag irritation, and handles bulk production rolls instantly.",
    industries: "Garments, Neck Tags, Care Instructions, Textiles",
  },
];

export default function Services() {
  return (
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800 text-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: "url('/services-hero.png')" }}
        />
        {/* Sky-Blue Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-400 uppercase tracking-widest">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Industrial Printing & Production <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Built on Precision
            </span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Explore our state-of-the-art production departments. We deliver premium material substrates, high-speed execution, and exceptional craftsmanship crafted by proud hands.
          </p>
        </div>
      </section>

      {/* 2. Detailed Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((srv, idx) => {
            const IconComp = srv.icon;
            const isEven = idx % 2 === 0;

            // Map service ID to premium photorealistic images
            const serviceImages: Record<string, string> = {
              "wash-care": "/srv-wash-care.png",
              "offset-printing": "/srv-offset-services.png",
              "hang-tag": "/srv-designing.png",
              "woven-labels": "/srv-woven-labels.png",
              "stickers": "/portfolio-sticker-vinyl.png",
              "cut-seal": "/portfolio-tag-satin.png",
            };
            const srvImage = serviceImages[srv.id] || "/srv-designing.png";

            // Map service ID to dynamic product route hrefs
            const serviceLinks: Record<string, string> = {
              "wash-care": "/products/wash-care-labels",
              "offset-printing": "/products/offset-printing",
              "hang-tag": "/products/hang-tags",
              "woven-labels": "/products/woven-labels",
              "stickers": "/products/stickers",
              "cut-seal": "/products/cut-seal",
            };
            const srvLink = serviceLinks[srv.id] || "/contact";

            return (
              <motion.div
                key={srv.id}
                id={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                } border-b border-slate-100 pb-16 last:border-0 last:pb-0 scroll-mt-24`}
              >
                {/* Visual Widget Column */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"} relative`}>
                  <Link href={srvLink} className="aspect-square w-full max-w-sm mx-auto rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group border border-slate-200/20 cursor-pointer block">
                    {/* Background Service Image with hover zoom */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                      style={{ backgroundImage: `url('${srvImage}')` }}
                    />
                    {/* Dark gradient overlay for rich premium feel & readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/50 z-10 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Department Icon Badge with glassmorphism */}
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg relative z-20 transition-transform duration-300 group-hover:scale-110">
                      <IconComp size={22} className="stroke-[2.5]" />
                    </div>

                    {/* Active Status Badge with premium soft blur styling */}
                    <div className="my-auto text-center space-y-1.5 py-5 relative z-20 bg-slate-950/40 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg max-w-[200px] mx-auto w-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                      <span className="block text-[10px] font-bold text-sky-300 uppercase tracking-widest">Department Active</span>
                      <span className="text-[9px] text-slate-200 block font-bold uppercase tracking-wider">Calibrated Daily</span>
                    </div>

                    {/* Capacity Indicator Card */}
                    <div className="p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl text-center relative z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2 group-hover:pointer-events-none">
                      <span className="text-[9px] text-sky-400 font-bold uppercase tracking-wider block">Target Capacity</span>
                      <span className="text-xs font-bold text-white mt-1 block">Full-Volume Production Ready</span>
                    </div>
                  </Link>
                </div>

                {/* Text Content Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                      Velmurugan Dept
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                      <Link href={srvLink} className="hover:text-sky-600 transition-colors">
                        {srv.title}
                      </Link>
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 italic">
                      {srv.tagline}
                    </p>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Production Pipeline Workflow
                    </span>
                    <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 flex-wrap" dangerouslySetInnerHTML={{ __html: srv.workflow }} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex gap-2.5 items-start">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Primary Industries</span>
                      <span className="text-xs font-bold text-slate-800">{srv.industries}</span>
                    </div>
                    <Link
                      href={srvLink}
                      className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-100 transition-all flex items-center gap-1.5"
                    >
                      View Details & Video
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Global CTA */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white rounded-3xl p-10 border border-slate-100 shadow-md space-y-6">
          <h3 className="text-2xl font-black text-slate-900">Have a custom labeling requirement?</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Our advanced production floor can manufacture custom materials, specialized adhesives, die cuts, and textured finishes tailored to your exact manufacturing requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-sky-100 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
