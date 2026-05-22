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
} from "lucide-react";

const servicesData = [
  {
    id: "designing",
    title: "Label Designing & Pre-Press",
    icon: Compass,
    tagline: "Flawless layouts engineered for high-volume commercial runs.",
    description:
      "Our pre-press design desk translates your brand visuals into production-ready vector assets, calculating critical bleed margins, trap boundaries, and color profiles for high-performance printers.",
    features: [
      "High-resolution pre-flight vector formatting",
      "Calibrated Pantone matching alignments",
      "Digital mockups and folding carton layouts",
      "Variable barcode and serial numbering layout",
    ],
    workflow: "Art Submission &rarr; Technical Assessment &rarr; Calibration & Proof &rarr; Approval Plate",
    benefits: "Eliminates print registration shifting, ensures precise cutting margins, and prevents costly manufacturing reprints.",
    industries: "Garments, FMCG, Pharmaceuticals, Retail, Electronics",
  },
  {
    id: "digital-printing",
    title: "Digital Label Printing",
    icon: Printer,
    tagline: "Short-run variable label prints with stunning photographic quality.",
    description:
      "Using state-of-the-art digital presses (HP Indigo 6K), we manufacture short-to-medium label runs with absolute color precision, micro-text clarity, and instant setup times without requiring printing plates.",
    features: [
      "Photographic print resolution (up to 2400 dpi)",
      "Variable data integration (unique serials/QR codes)",
      "Zero plating setup costs for express runs",
      "Premium water-resistant substrates (synthetic, silver PET)",
    ],
    workflow: "Digital Asset File Loading &rarr; Laser Ink Setup &rarr; In-Line Corona Treatment &rarr; Precision Slitting",
    benefits: "No minimum order bottlenecks, fast 24-hour turnaround, and crisp variable printing outputs.",
    industries: "FMCG, Food & Beverage, Cosmetics, Retail, Industrial Goods",
  },
  {
    id: "offset-printing",
    title: "Offset Commercial Printing",
    icon: Layers,
    tagline: "High-volume sheetfed tag and folding packaging box precision.",
    description:
      "Our heavy-duty Heidelberg Speedmaster offset presses offer the industry benchmark in bulk color consistency, printing high-grade garment hangtags, backing cards, folding packaging boxes, and labels.",
    features: [
      "Ultra-fast processing (18,000 sheets per hour)",
      "Thick paper stocks (up to 450 gsm hangtags)",
      "In-line gloss/matte dispersion coating varnishes",
      "Custom pantone spot color consistency across millions",
    ],
    workflow: "Plate Engraving &rarr; Ink Tray Calibration &rarr; High-Speed Sheet Run &rarr; In-Line Die-Cutting",
    benefits: "Lowest unit cost for high-volume orders, perfect folding card structures, and pristine color matching.",
    industries: "Garments, Textiles, Retail, Industrial Goods, FMCG",
  },
  {
    id: "stickers",
    title: "Stickers & Die-Cut Labels",
    icon: Settings,
    tagline: "Self-adhesive, roll-form, and sheet stickers for industrial assets.",
    description:
      "We design and manufacture premium pressure-sensitive stickers, adhesive labels, barcodes, thermal transfer rolls, and vinyl die-cuts designed to stick flawlessly under diverse temperatures.",
    features: [
      "Custom permanent or removable acrylic adhesives",
      "Roll-form winding tailored for automatic dispensers",
      "Gloss/matte laminate protections against moisture",
      "Precision rotary die-cutting for complex borders",
    ],
    workflow: "Substrate Loading &rarr; Roll adhesive printing &rarr; Rotary Die Cutter &rarr; Core Rewinder",
    benefits: "Flawless adhesive application, water-resistant layers, and roll layout optimized for packing conveyors.",
    industries: "Manufacturing, FMCG, Logistics, Electronics, Retail",
  },
  {
    id: "rotary-label-printing",
    title: "Rotary Roll Fabric Printing",
    icon: BarChart,
    tagline: "Continuous roll tag weaving and label printing for textile items.",
    description:
      "Our rotary fabric print lines weave and print continuous textile care instruction labels, brand wash tags, satin neck ribbons, and custom woven tags for garment exports.",
    features: [
      "Ultra-soft fabric substrates (Satin, cotton, taffeta)",
      "Wash-resistant inks (withstands commercial hot-water cycles)",
      "Dual-sided continuous roll roll printing",
      "OEKO-TEX Standard 100 safe compliant inputs",
    ],
    workflow: "Ribbon Roll Threading &rarr; Cylinder Ink Calibration &rarr; Oven Curing &rarr; Hot-Knife Slitting",
    benefits: "Compliant for skin contact, wash-fast dye layers, and bulk roll-form outputs.",
    industries: "Garments, Textiles, Retail, Woven Goods",
  },
  {
    id: "screen-printing",
    title: "Luxury Tactile Screen Printing",
    icon: Printer,
    tagline: "Premium finishing, metallic spot UV, and luxury textured highlights.",
    description:
      "Upgrade your brand image with spot gloss UV coatings, metallic foils (gold, silver, bronze), matte-contrast screen overlays, and high-build tactile prints that prompt consumer sensory engagement.",
    features: [
      "High-build tactile textures you can physically feel",
      "Brilliant metallic hot and cold foil stamping",
      "Scratch-resistant spot gloss UV varnishes",
      "Deep opacity clean screen prints on dark stocks",
    ],
    workflow: "Emulsion screen frame exposure &rarr; Ink squeeze run &rarr; UV Tunnel Curing &rarr; Stack Audit",
    benefits: "Stunning premium visual contrast, high shelf appeal, and luxurious sensory branding.",
    industries: "Cosmetics, FMCG, Luxury Brands, Apparel, Retail",
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
                  <div className="aspect-square w-full max-w-sm mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-inner relative overflow-hidden group">
                    {/* SVG abstract technical printing schematic illustration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-indigo-50/20 opacity-70" />
                    
                    <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
                      <IconComp size={22} className="stroke-[2.5]" />
                    </div>

                    <div className="my-auto text-center space-y-2 py-6 relative z-10">
                      <svg className="w-24 h-24 mx-auto text-sky-200" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="3" />
                        <circle cx="50" cy="50" r="28" stroke="#0ea5e9" strokeWidth="3" />
                        <line x1="50" y1="2" x2="50" y2="98" stroke="#cbd5e1" strokeWidth="0.5" />
                        <line x1="2" y1="50" x2="98" y2="50" stroke="#cbd5e1" strokeWidth="0.5" />
                      </svg>
                      <span className="block text-xs font-bold text-slate-800 uppercase tracking-widest">Department Active</span>
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Calibrated Daily</span>
                    </div>

                    <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-center relative z-10">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Target Capacity</span>
                      <span className="text-xs font-bold text-slate-800 mt-1 block">Full-Volume Production Ready</span>
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                      Velmurugan Dept
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                      {srv.title}
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
                      href="/contact"
                      className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-100 transition-all flex items-center gap-1.5"
                    >
                      Inquire Dept
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
            <Link
              href="/schedule-meeting"
              className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare size={14} />
              Book Technical Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
