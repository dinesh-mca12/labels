"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  Printer,
  ChevronRight,
  Info,
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "Labels" | "Stickers" | "Tags" | "Packaging";
  desc: string;
  spec: string;
  finish: string;
  gradient: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "item1",
    title: "Vanguard Gold-Foil Clothing Tags",
    category: "Tags",
    desc: "Luxury apparel hangtags printed on heavy-weight 450 gsm textured kraft cardboard with clean die-cut edges.",
    spec: "450 gsm textured cardstock",
    finish: "Hot Gold Foil Stamping & Spot UV",
    gradient: "from-amber-100 to-amber-200/50",
    image: "/portfolio-tag-gold.png",
  },
  {
    id: "item2",
    title: "Self-Adhesive Premium FMCG Jar Labels",
    category: "Labels",
    desc: "Waterproof synthetic roll labels designed for automated food packaging conveyors, featuring deep color saturation.",
    spec: "Moisture-resistant silver PET",
    finish: "Matte Contrast & Scratch-proof varnish",
    gradient: "from-sky-100 to-sky-200/50",
    image: "/portfolio-label-fmcg.png",
  },
  {
    id: "item3",
    title: "Satin Roll Fabric Care Labels",
    category: "Tags",
    desc: "Continuous high-speed rotary printing on ultra-soft double-faced satin fabric, calibrated for skin compliance.",
    spec: "Double-faced premium satin ribbon",
    finish: "Heat-fused non-fraying edge cuts",
    gradient: "from-emerald-100 to-emerald-200/50",
    image: "/portfolio-tag-satin.png",
  },
  {
    id: "item4",
    title: "Industrial Barcode Thermal stickers",
    category: "Stickers",
    desc: "High-adhesion direct thermal roll stickers optimized for rapid barcode scanning in logistics warehouses.",
    spec: "Heavy permanent acrylic adhesive paper",
    finish: "Scannable anti-glare barrier coating",
    gradient: "from-slate-200 to-slate-300/50",
    image: "/portfolio-sticker-barcode.png",
  },
  {
    id: "item5",
    title: "Spot UV Luxury Cosmetic Packaging Enclosure",
    category: "Packaging",
    desc: "Tactile high-build spot gloss UV and embossed highlights on custom folding skincare cartons.",
    spec: "350 gsm SBS paperboard sheet",
    finish: "High-build Spot UV & Metallic Embossing",
    gradient: "from-indigo-100 to-indigo-200/50",
    image: "/portfolio-pkg-cosmetic.png",
  },
  {
    id: "item6",
    title: "Die-Cut Vinyl Asset Decals",
    category: "Stickers",
    desc: "Weatherproof high-durability warning stickers and serial stickers for industrial manufacturing machinery.",
    spec: "4-mil UV-resistant vinyl sheet",
    finish: "Gloss laminate & Custom border die-cutting",
    gradient: "from-rose-100 to-rose-200/50",
    image: "/portfolio-sticker-vinyl.png",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const categories = ["All", "Labels", "Stickers", "Tags", "Packaging"];

  const filteredItems =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-sky-50/70 via-white to-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
            Our Works Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Printers' Masterpieces & <br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Product Showcases
            </span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Inspect our completed print runs. We design and manufacture label elements, packaging cards, and industrial stickers built strictly on high tolerances.
          </p>
        </div>
      </section>

      {/* 2. Gallery Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 pb-6 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                  filter === cat
                    ? "bg-sky-600 border-sky-600 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-slate-50 border border-slate-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  
                  {/* Decorative High-Fidelity Product Illustration */}
                  <div className="aspect-video w-full relative overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Magnify button on hover */}
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300 cursor-pointer z-10"
                      aria-label="Enlarge Image"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </button>
                  </div>

                  {/* Card Description */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-800 leading-snug">{item.title}</h3>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>

                    <hr className="border-slate-200/50" />

                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <div>
                        <span className="font-bold uppercase block">Material stock</span>
                        <span className="font-bold text-slate-700 block mt-0.5">{item.spec}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold uppercase block">Print finish</span>
                        <span className="font-bold text-sky-600 block mt-0.5">{item.finish}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Lightbox Interactive Drawer Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-100 overflow-hidden shadow-2xl p-6 relative flex flex-col justify-between"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors cursor-pointer z-10"
                aria-label="Close Preview"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
                {/* Product Image Block */}
                <div className="md:col-span-5 aspect-square rounded-2xl overflow-hidden relative shadow-inner bg-slate-100">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Spec text */}
                <div className="md:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                      {lightboxItem.category} Showcase
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-800 leading-snug">{lightboxItem.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {lightboxItem.desc}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                    <div className="flex gap-2 items-center text-xs">
                      <Info size={14} className="text-sky-600 shrink-0" />
                      <span className="font-bold text-slate-500">Technical Specifications:</span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                      <li>Material stock: {lightboxItem.spec}</li>
                      <li>Finishing treatment: {lightboxItem.finish}</li>
                      <li>Precision aligned calibration checks</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setLightboxItem(null)}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
