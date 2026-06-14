"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Printer,
  Shirt,
  Tag,
  Settings,
  BookOpen,
  Package,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const productsList = [
  {
    id: "wash-care-labels",
    name: "Wash Care Labels",
    title: "Premium Garment Wash Care Labels",
    description: "High-quality satin and cotton wash care tags engineered to resist fading across thousands of washing cycles, matching strict garment compliance.",
    image: "/portfolio-wash-care.png",
    icon: Printer,
    color: "from-sky-500/10 to-indigo-500/5",
  },
  {
    id: "woven-labels",
    name: "Woven Labels",
    title: "High-Density Woven Brand Labels",
    description: "Premium brand neck labels and woven badges crafted with ultra-fine threads for luxury garments and long-lasting texture.",
    image: "/portfolio-woven-labels.png",
    icon: Shirt,
    color: "from-indigo-500/10 to-purple-500/5",
  },
  {
    id: "hang-tags",
    name: "Hang Tags",
    title: "Luxury Apparel Hang Tags",
    description: "Modern barcode hang tags and thick card accessories designed to boost retail shelf-appeal with foil accents and custom shapes.",
    image: "/portfolio-hang-tags.png",
    icon: Tag,
    color: "from-purple-500/10 to-pink-500/5",
  },
  {
    id: "price-tags",
    name: "Price Tags",
    title: "Stylish Barcode Price Cards",
    description: "Customized retail price tags engineered with high-accuracy barcodes and point-of-sale layout calibration.",
    image: "/portfolio-hang-tags.png",
    icon: Tag,
    color: "from-pink-500/10 to-rose-500/5",
  },
  {
    id: "stickers",
    name: "Stickers",
    title: "Industrial Adhesive Brand Stickers",
    description: "Custom adhesive labels and thermal transfer barcode rolls manufactured with weatherproof synthetic PET film and strong adhesives.",
    image: "/portfolio-stickers.png",
    icon: Settings,
    color: "from-rose-500/10 to-orange-500/5",
  },
  {
    id: "photocards",
    name: "Photocards",
    title: "Premium Custom Printed Brand Photocards",
    description: "High-end custom merchandise photocards calibrated with premium thick cardstocks, glossy UV coatings, and rounded corner cuts.",
    image: "/portfolio-photocards.png",
    icon: Sparkles,
    color: "from-sky-500/10 to-emerald-500/5",
  },
  {
    id: "cotton-tapes",
    name: "Cotton Tapes",
    title: "Organic Cotton Branding Tapes",
    description: "Natural organic woven cotton ribbon rolls and presentation wraps screen-printed with washfast, high-density ink.",
    image: "/portfolio-cotton-tape.png",
    icon: Layers,
    color: "from-emerald-500/10 to-teal-500/5",
  },
  {
    id: "magazines",
    name: "Magazines & Catalogues",
    title: "High-Grade Corporate Magazines & Catalogues",
    description: "Professional editorial booklets and corporate product catalogues finished with soft-touch matte lamination and perfect binding.",
    image: "/portfolio-magazines.png",
    icon: BookOpen,
    color: "from-teal-500/10 to-sky-500/5",
  },
  {
    id: "packing-boxes",
    name: "Packing Boxes",
    title: "Custom Branded Rigid Packing Boxes",
    description: "Heavy-duty custom branded shipping mailers, rigid gift cartons, and corrugated boxes designed for secure retail shipments.",
    image: "/portfolio-packing-boxes.png",
    icon: Package,
    color: "from-orange-500/10 to-amber-500/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

export default function ProductsPage() {
  return (
    <div className="relative bg-slate-50/50 min-h-screen pb-24 isolate">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-sky-150/20 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] bg-indigo-50/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Hero Header */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-slate-800 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-[center_60%] opacity-25 mix-blend-luminosity scale-105"
          style={{ backgroundImage: "url('/v8.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/80 to-slate-950 z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Our Product Range
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            High-Precision <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Custom Brand Products</span>
          </h1>
          <p className="text-slate-350 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed font-medium">
            Explore our curated catalog of custom-printed garment tags, woven labels, high-end packaging containers, and promotional merchandise engineered to meet premium export standards.
          </p>
        </div>
      </section>

      {/* Product Buttons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productsList.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-xl shadow-slate-100/30 hover:shadow-sky-100/40 hover:border-sky-300/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Thumbnail */}
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-50 border-b border-slate-100 isolate">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category icon overlay */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-slate-200/50 flex items-center justify-center text-sky-600 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent size={16} />
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-slate-800 group-hover:text-sky-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full py-3 bg-slate-900 hover:bg-sky-600 text-white hover:shadow-lg hover:shadow-sky-100 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 group-hover:bg-sky-600 cursor-pointer"
                    >
                      <span>View Details & Video</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
