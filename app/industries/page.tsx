"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shirt,
  Sparkles,
  Package,
  ShoppingBag,
  Factory,
  Database,
  UtensilsCrossed,
  Layers,
  ArrowRight,
} from "lucide-react";

const industriesData = [
  {
    title: "Garments & Apparel",
    icon: Shirt,
    desc: "Complete branding suites for exporters and retail brands. Custom woven satin neck tags, cardboard hangtags, price barcode cards, and care labels.",
    products: ["Woven Satin Labels", "Cardboard Hangtags", "Wash Care Instructions", "Size Barcode Stickers"],
    material: "OEKO-TEX compliant cotton, satin, polyester, and recycled cardboards.",
  },
  {
    title: "Textile Mills",
    icon: Layers,
    desc: "Heavy-duty tracking and bulk branding roll forms. High-adhesion textile roll stickers, barcode labels, and fabric identification care tags.",
    products: ["Textile roll stickers", "Fabric ID tags", "Continuous care loops", "Cone tracking barcodes"],
    material: "Heat-resistant industrial adhesives and heavy fabric fibers.",
  },
  {
    title: "FMCG Products",
    icon: Sparkles,
    desc: "High-impact retail packaging roll labels designed to capture shelf space. Gloss laminates, metallic stamping, and sensory texture print structures.",
    products: ["Bottle wrapper labels", "Squeeze tube prints", "Contrast matte labels", "Promotional decals"],
    material: "Water-proof white and silver PET synthetics, metallic foil linings.",
  },
  {
    title: "Packaging & Logistics",
    icon: Package,
    desc: "Extremely durable shipping and product enclosure markings. Direct thermal shipping labels, outer carton barcodes, and tamper-evident tapes.",
    products: ["Direct Thermal stickers", "Warehouse rack barcodes", "Tamper seal tapes", "Kraft card backing sheets"],
    material: "High-tack synthetic adhesives and premium kraft cardstocks.",
  },
  {
    title: "Retail Brands",
    icon: ShoppingBag,
    desc: "Pristine point-of-sale branding and pricing cards. Die-cut glossy boxes, price hangtags, metallic emboss cards, and gift wrappers.",
    products: ["Custom printed boxes", "Luxury hangtags", "Pricing adhesive barcode labels", "Branded wrapping sheets"],
    material: "Premium textured cardstocks, cold foils, and gloss spot-UV layers.",
  },
  {
    title: "Heavy Manufacturing",
    icon: Factory,
    desc: "Ultra-durable hardware identification nameplates. High-adhesion chemical-resistant warnings, asset tracking, and warning decals.",
    products: ["Asset tracking nameplates", "Chemical warning decals", "Cylinder calibration scales", "Serialized warning loops"],
    material: "Chemical-resistant vinyl sheets, high-temperature adhesives.",
  },
  {
    title: "Food & Dairy Products",
    icon: UtensilsCrossed,
    desc: "Safe food-grade labeling capable of withstanding freeze-thaw cycles. Jar wraps, organic cold-pressed oil seals, and dynamic barcode batch marks.",
    products: ["Frozen food labels", "Jar wrapping stickers", "Cold-pressed oil seals", "Batch date barcode stickers"],
    material: "FDA-compliant direct contact adhesives, moisture-proof substrates.",
  },
  {
    title: "Electronics & Tech",
    icon: Database,
    desc: "Micro-printed serialized asset codes and heat-resistant battery seals. Static-dissipative serial codes, void tamper labels, and circuitry markers.",
    products: ["Serialized micro QR labels", "Void security seals", "Heat-resistant cell stickers", "Circuitry Identification marks"],
    material: "Polyester thermal transfer materials, UL-recognized adhesives.",
  },
];

export default function Industries() {
  return (
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800 text-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: "url('/industries-hero.png')" }}
        />
        {/* Sky-Blue Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-400 uppercase tracking-widest">
            Sectors We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tailored Label Solutions <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              For Diverse Markets
            </span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            From the textile clusters of South India to heavy electronics exports, we manufacture custom label assets crafted by proud artisans that conform strictly to your industry compliance guidelines.
          </p>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industriesData.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shadow-sm shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                      <IconComp size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-extrabold text-slate-800 leading-snug group-hover:text-sky-600 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>

                    <hr className="border-slate-200/50" />

                    <div className="space-y-3">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Key Products</span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.products.map((p) => (
                          <span key={p} className="text-[10px] bg-white border border-slate-200/80 text-slate-600 font-semibold px-2 py-0.5 rounded">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/50">
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Material Standards</span>
                    <span className="text-[10px] font-bold text-slate-700 block mt-0.5 leading-normal">{ind.material}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Footer Banner CTA */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">Need technical material specs?</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Our labs test tear indices, adhesive retention, wash fastness, and bar-code scanning contrast values before shipping, ensuring zero failures at assembly lines.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-sky-100 transition-colors"
            >
              Inquire Material Catalog
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
