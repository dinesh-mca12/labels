"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  FileText,
  Download,
  Eye,
  EyeOff,
  ChevronRight,
  Info,
  Layers,
  CheckCircle,
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "Wash Care Labels" | "Woven Labels" | "Hang Tags" | "Stickers" | "Packaging" | "Production";
  desc: string;
  spec: string;
  finish: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "item1",
    title: "Premium Garment Wash Care Labels",
    category: "Wash Care Labels",
    desc: "High-quality satin and cotton wash care labels designed for export garment manufacturing with durable print precision.",
    spec: "Premium Double-Face Washfast Satin & Soft Cotton",
    finish: "Ultrasonic Cut & Seam (Fray-Free Border)",
    image: "/portfolio-wash-care.png",
  },
  {
    id: "item2",
    title: "High-Density Woven Brand Labels",
    category: "Woven Labels",
    desc: "Premium woven branding labels crafted for luxury fashion garments with long-lasting durability and elegant texture.",
    spec: "Ultra-Fine 50D Damask Weave Micro-Threads",
    finish: "Luxurious End-Fold Soft-Edge Neck Finish",
    image: "/portfolio-woven-labels.png",
  },
  {
    id: "item3",
    title: "Luxury Apparel Hang Tags",
    category: "Hang Tags",
    desc: "Modern barcode hang tags and premium garment branding accessories designed for retail and export apparel industries.",
    spec: "400 gsm FSC-Certified Recycled Cardboards",
    finish: "Matte Contrast Varnish, Eyelet Drills & Cotton Strings",
    image: "/portfolio-hang-tags.png",
  },
  {
    id: "item4",
    title: "Industrial Adhesive Brand Stickers",
    category: "Stickers",
    desc: "Custom adhesive stickers and barcode labels manufactured for industrial branding and packaging applications.",
    spec: "UV-Stable Weatherproof Synthetic PET Film",
    finish: "Scannable Matte Contrast Barrier Lamination",
    image: "/portfolio-stickers.png",
  },
  {
    id: "item5",
    title: "Custom Printed Poly Packaging Covers",
    category: "Packaging",
    desc: "Durable transparent and branded poly packaging covers developed for premium apparel packaging solutions.",
    spec: "Dustproof High-Tensile Recyclable LDPE Covers",
    finish: "Logo Flexographic Prints & Self-Adhesive Seals",
    image: "/portfolio-packaging.png",
  },
  {
    id: "item6",
    title: "Precision Offset Printing Production",
    category: "Production",
    desc: "Advanced offset printing and automated label production systems ensuring precision manufacturing quality.",
    spec: "Multi-Color Offset & Automated Quality Inspect Sensor Lines",
    finish: "Pantone PMS Calibrated Dynamic Impressions",
    image: "/portfolio-production.png",
  },
  {
    id: "item7",
    title: "DTF Heat Transfer Stickers",
    category: "Stickers",
    desc: "Premium DTF transfer stickers for fashion branding with high-definition print durability.",
    spec: "Premium Cured Hot-Melt Elastic PET Film",
    finish: "Stretchproof Washfast Vibrant Color Curing",
    image: "/portfolio-dtf-stickers.png",
  },
  {
    id: "item8",
    title: "Cotton Branding Tape",
    category: "Packaging",
    desc: "Custom cotton branding tapes designed for premium apparel packaging and fashion presentation.",
    spec: "Natural Organic Woven Cotton Ribbon Rolls",
    finish: "Screen-Printed Washfast High-Density Ink",
    image: "/portfolio-cotton-tape.png",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [viewPdf, setViewPdf] = useState<boolean>(false);

  const categories = [
    "All",
    "Wash Care Labels",
    "Woven Labels",
    "Hang Tags",
    "Stickers",
    "Packaging",
    "Production",
  ];

  const filteredItems =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <div className="relative bg-slate-50/50 min-h-screen overflow-hidden isolate">
      
      {/* Soft Indigo/Sky glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[130px] -z-10 pointer-events-none" />
      
      {/* Dynamic fine mesh backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 -z-10 pointer-events-none" />

      {/* 1. Page Header */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={13} className="stroke-[2.5]" />
            Our Works Gallery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Precision Label <br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Manufacturing Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            Explore export-quality woven labels, wash care tags, industrial stickers, luxury hang tags, and advanced textile branding solutions manufactured with precision.
          </motion.p>
        </div>
      </section>

      {/* 2. PDF Catalogue Showcase */}
      <section className="py-12 bg-white/40 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-slate-200/60 rounded-[30px] p-6 md:p-10 shadow-xl shadow-slate-100/50 relative overflow-hidden group">
            
            {/* Ambient mesh inside card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-indigo-500/5 opacity-80 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Catalogue Cover Preview Block */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px] aspect-[1/1.4] bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 rounded-2xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden border border-slate-800 transform hover:scale-102 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                    <FileText size={20} className="stroke-[1.5]" />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[9px] font-bold text-sky-400 uppercase tracking-widest block">Corporate Catalog</span>
                    <h3 className="text-lg font-extrabold text-white leading-tight">VELMURUGAN LABELS</h3>
                    <p className="text-[10px] text-slate-400 leading-normal">Woven tags, Care loops, Stickers, Bio packaging covers & buttons.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Export Quality</span>
                    <span>Tiruppur Hub</span>
                  </div>
                </div>
              </div>

              {/* Description & Buttons Block */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wider">
                    Digital Showcase
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-850 tracking-tight leading-none">
                    Velmurugan Labels Corporate PDF Catalog
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-medium">
                    Explore our comprehensive catalogue illustrating premium custom neck tags, thermal barcode stickers, satin laundry tapes, woven brand emblems, transparent buttons, and bio packaging covers. 
                    <span className="block mt-1 font-bold text-slate-600">File size: 28.3 MB &bull; High-Definition print-ready format.</span>
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                  <a
                    href="/vml company catlogue.pdf"
                    download="Velmurugan_Labels_Company_Catalogue.pdf"
                    className="px-6 py-3.5 bg-sky-600 hover:bg-sky-750 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-sky-100 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Download size={14} className="stroke-[2.5]" />
                    Download PDF Catalogue
                  </a>

                  <button
                    onClick={() => setViewPdf(!viewPdf)}
                    className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {viewPdf ? (
                      <>
                        <EyeOff size={14} />
                        Close Catalogue Viewer
                      </>
                    ) : (
                      <>
                        <Eye size={14} />
                        View Catalogue Online
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* PDF Interactive Viewer IFrame */}
            <AnimatePresence>
              {viewPdf && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-10 border-t border-slate-100 pt-8"
                >
                  <div className="rounded-2xl border border-slate-200/60 overflow-hidden shadow-2xl relative bg-slate-900">
                    <div className="bg-slate-950 p-4 border-b border-slate-850 flex justify-between items-center text-white text-xs font-bold">
                      <span className="flex items-center gap-2">
                        <FileText size={16} className="text-sky-400" />
                        vml company catlogue.pdf (28.3 MB)
                      </span>
                      <button 
                        onClick={() => setViewPdf(false)}
                        className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <iframe
                      src="/vml company catlogue.pdf#toolbar=1"
                      className="w-full h-[600px] border-0"
                      title="Velmurugan Labels Corporate Catalogue Viewer"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* 3. Gallery Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Animated Category Filter tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 pb-6 border-b border-slate-100">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border relative ${
                    isActive
                      ? "bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-100 scale-102"
                      : "bg-slate-50 border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterGlow"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 -z-0 opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white border border-slate-200/50 rounded-[30px] overflow-hidden shadow-xl shadow-slate-100/50 hover:shadow-sky-100/50 hover:shadow-2xl hover:border-sky-300/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                >
                  
                  {/* Decorative High-Fidelity Product Photography */}
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-50 border-b border-slate-100 isolate">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                    />
                    
                    {/* Royal Blue subtle glow overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Magnify button on hover */}
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300 cursor-pointer z-10"
                      aria-label="Enlarge Image"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
                        <Maximize2 size={18} className="stroke-[2.5]" />
                      </div>
                    </button>
                  </div>

                  {/* Card Description Block */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-800 leading-snug group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-150">
                      <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        <div>
                          <span className="block text-slate-400">Material Stock</span>
                          <span className="block text-slate-700 mt-0.5">{item.spec}</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-slate-400">Print Finish</span>
                          <span className="block text-sky-600 mt-0.5">{item.finish}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Lightbox Interactive Drawer Modal */}
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
              className="bg-white rounded-[30px] border border-slate-150 overflow-hidden shadow-2xl max-w-2xl w-full p-6 relative flex flex-col justify-between"
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
                <div className="md:col-span-5 aspect-square rounded-2xl overflow-hidden relative shadow-inner bg-slate-50 border border-slate-100">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Spec text */}
                <div className="md:col-span-7 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                      {lightboxItem.category} Showcase
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-800 leading-snug">{lightboxItem.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {lightboxItem.desc}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 space-y-2">
                    <div className="flex gap-2 items-center text-xs">
                      <Info size={14} className="text-sky-600 shrink-0" />
                      <span className="font-bold text-slate-500 uppercase tracking-wide">Technical Specifications:</span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc font-medium">
                      <li>Material stock: {lightboxItem.spec}</li>
                      <li>Finishing treatment: {lightboxItem.finish}</li>
                      <li>Conforms to dynamic Indian apparel export metrics</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setLightboxItem(null)}
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
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
