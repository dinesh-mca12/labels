"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Printer,
  Shirt,
  Tag,
  Package,
  Layers,
  Settings,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Scissors,
  BookOpen,
  FileText,
} from "lucide-react";

interface ProductInfo {
  name: string;
  title: string;
  icon: any;
  mainImage: string;
  additionalImages: string[];
  description: string;
  specifications: string[];
  industries: string;
  video?: string;
}

const productsData: Record<string, ProductInfo> = {
  "wash-care-labels": {
    name: "Wash Care Labels",
    title: "Premium Garment Wash Care Labels",
    icon: Printer,
    mainImage: "/portfolio-wash-care.png",
    additionalImages: [
      "/washcare-1.png",
      "/washcare-2.png",
      "/washcare-3.png",
      "/washcare-4.png",
      "/washcare-5.png"
    ],
    description: "High-quality satin and cotton wash care labels designed for export garment manufacturing with durable print precision. Our care tags are engineered to resist fading across thousands of washing cycles, matching strict garment compliance regulations for skin contact.",
    specifications: [
      "Material: Premium Double-Face Washfast Satin & Soft Cotton Tapes",
      "Finish: Ultrasonic Cut & Seam (Fray-Free borders)",
      "Print: High-contrast, wash-proof black and PMS color inks",
      "Customization: Dual-sided parameters, fabric composition details, wash symbols, and brand logo integration"
    ],
    industries: "Garments, Textiles, Apparel Exports, Retail",
    video: "/FlexGraphics label printing.mp4",
  },
  "woven-labels": {
    name: "Woven Labels",
    title: "High-Density Woven Brand Labels",
    icon: Shirt,
    mainImage: "/portfolio-woven-labels.png",
    additionalImages: [
      "/portfolio-woven-labels.png",
      "/woven-labels-1.png",
      "/woven-labels-2.png",
      "/woven-labels-3.png"
    ],
    description: "Premium woven branding labels crafted for luxury fashion garments with long-lasting durability and elegant texture. Unlike printed tags, woven labels are created by interlacing premium damask threads to form your brand emblem directly inside the weave.",
    specifications: [
      "Material: Ultra-Fine 50D Damask Weave Micro-Threads",
      "Finish: Luxurious End-Fold Soft-Edge Neck Finish",
      "Durability: Lifetime washproof performance, resists fraying",
      "Customization: Customizable borders, size loops, and branding weaves"
    ],
    industries: "Garments, Luxury Apparel, Outerwear Exports",
    video: "/label printing.mp4",
  },
  "hang-tags": {
    name: "Hang Tags",
    title: "Luxury Apparel Hang Tags",
    icon: Tag,
    mainImage: "/portfolio-hang-tags.png",
    additionalImages: [
      "/srv-designing.png",
      "/portfolio-tag-gold.png",
      "/portfolio-hang-tags.png",
      "/gallery-fsc-raw-materials.jpg",
      "/gallery-fsc-storage.jpg"
    ],
    description: "Modern barcode hang tags and premium garment branding accessories designed for retail and export apparel industries. Boost retail shelf-appeal with premium thick cardboards, customized shapes, and luxury hot foil accents.",
    specifications: [
      "Material: 400 gsm FSC-Certified Recycled Cardboards",
      "Finish: Matte Contrast Varnish, Eyelet Drills & Cotton Strings",
      "Features: High-accuracy scannable barcodes (UPC/EAN) & QR codes",
      "Options: Hot foil stamping, spot-UV coating, rounded die-cut shapes"
    ],
    industries: "Garments, Retail, Apparel Brands, Footwear",
    video: "/Board Storage Area.mp4",
  },
  "price-tags": {
    name: "Price Tags",
    title: "Stylish Barcode Price Cards",
    icon: Tag,
    mainImage: "/portfolio-hang-tags.png",
    additionalImages: [
      "/portfolio-tag-satin.png",
      "/portfolio-hang-tags.png",
      "/gallery-fsc-raw-materials.jpg",
      "/gallery-fsc-storage.jpg"
    ],
    description: "Customized retail price cards and barcode labels engineered with point-of-sale barcodes for automated inventory tracking. Tailored to withstand high-volume retail handling.",
    specifications: [
      "Material: 350-400 gsm Premium Card Stock",
      "Finish: Double-sided matte or gloss protective coat",
      "Features: Real-time logistics code printing, clean drill holes",
      "Fasteners: Cotton loop strings, safety pins, or locking plastic pins"
    ],
    industries: "Garments, Retail, Footwear, Fashion Accessories",
    video: "/Board Storage Area.mp4",
  },
  "stickers": {
    name: "Stickers",
    title: "Industrial Adhesive Brand Stickers",
    icon: Settings,
    mainImage: "/portfolio-stickers.png",
    additionalImages: [
      "/portfolio-sticker-vinyl.png",
      "/portfolio-sticker-barcode.png",
      "/portfolio-stickers.png",
      "/gallery-cutting-machine.png",
      "/gallery-trust-satisfaction.png"
    ],
    description: "Custom adhesive stickers and thermal transfer barcode rolls manufactured for industrial branding, packaging, and logistics. Engineered with strong acrylic adhesives to stick to diverse textures.",
    specifications: [
      "Material: UV-Stable Weatherproof Synthetic PET Film & Vinyl",
      "Finish: Scannable Matte Contrast Barrier Lamination",
      "Adhesive: Custom permanent or clean-removable acrylic adhesive layers",
      "Format: Roll-form winding for automatic dispensers or die-cut sheets"
    ],
    industries: "Manufacturing, FMCG, Logistics, Retail",
    video: "/v1.mp4",
  },
  "photocards": {
    name: "Photocards",
    title: "Premium Custom Printed Brand Photocards",
    icon: Tag,
    mainImage: "/portfolio-photocards.png",
    additionalImages: [
      "/portfolio-photocards.png",
      "/portfolio-tag-gold.png",
      "/gallery-trust-satisfaction.png",
      "/gallery-fsc-storage.jpg"
    ],
    description: "Premium custom printed photocards manufactured for merchandise branding, high-end collectives, and artist promotional material. Calibrated with high gloss laminations, thick card substrates, and rounded edges.",
    specifications: [
      "Material: 350-400 gsm High-Bulk Premium Art Cardstocks",
      "Finish: Double-sided high gloss UV coating or soft-touch matte",
      "Features: High density color reproduction & precision rounded edge-cuts",
      "Options: Holographic laminate overlay, hot foil stamping, custom backing textures"
    ],
    industries: "Merchandising, Entertainment, Fashion, Luxury Brands",
    video: "/v2.mp4",
  },
  "magazines": {
    name: "Magazines & Catalogues",
    title: "High-Grade Corporate Magazines & Catalogues",
    icon: BookOpen,
    mainImage: "/portfolio-magazines.png",
    additionalImages: [
      "/portfolio-magazines.png",
      "/srv-offset-services.png",
      "/gallery-offset-press.jpg",
      "/Board Storage Area.mp4"
    ],
    description: "Professional editorial magazines and corporate catalogues produced with perfect binding. Engineered for premium company portfolios, product line displays, and luxury branding showcases.",
    specifications: [
      "Material: 170 gsm Inner Art Paper, 300 gsm Gloss/Matte Cover Card",
      "Finish: Perfect-bound spine, saddle-stitch or wire-o coil binding",
      "Coating: Soft-touch matte lamination or high contrast UV spots",
      "Page Count: Scalable from 8-page booklets to thick catalog spreads"
    ],
    industries: "Corporate, Manufacturing, Retail Exports, Publishing",
    video: "/Board Storage Area.mp4",
  },
  "packing-boxes": {
    name: "Packing Boxes",
    title: "Custom Branded Rigid Packing Boxes",
    icon: Package,
    mainImage: "/portfolio-packing-boxes.png",
    additionalImages: [
      "/portfolio-packing-boxes.png",
      "/gallery-work-cartoons.png",
      "/gallery-fsc-storage.jpg",
      "/Board finishing area.jpeg"
    ],
    description: "Heavy-duty custom branded packaging boxes, corrugated shipping mailers, and premium rigid gift cases fabricated for export shipments and retail presentation.",
    specifications: [
      "Material: Recyclable High-Strength Kraft & 3-Ply Corrugated Boards",
      "Finish: Branded flexographic logo prints, high density offset prints",
      "Sizes: Fully customizable dimensional layouts and thickness profiles",
      "Assembly: Easy-fold tabs, self-adhesive sealing options, flat-pack shipping"
    ],
    industries: "Garments, Logistics, E-commerce, Manufacturing, Retail",
    video: "/v5.mp4",
  },
  "cotton-tapes": {
    name: "Cotton Tapes",
    title: "Organic Cotton Branding Tapes",
    icon: Shirt,
    mainImage: "/portfolio-cotton-tape.png",
    additionalImages: [
      "/portfolio-tag-satin.png",
      "/portfolio-cotton-tape.png",
      "/gallery-oeko-tex-raw-materials.jpg",
      "/officearea.png"
    ],
    description: "Custom cotton branding tapes designed for premium apparel packaging, gift boxes, and luxury presentation ribbon wraps.",
    specifications: [
      "Material: Natural Organic Woven Cotton Ribbon Rolls",
      "Finish: Screen-Printed Washfast High-Density Ink",
      "Widths: Available from 10mm to 50mm widths",
      "Texture: Soft herringbone or plain weave textures"
    ],
    industries: "Apparel Brands, Packaging, Gift & Luxury Retail",
    video: "/v7.mp4",
  },
  "dtf-stickers": {
    name: "DTF Stickers",
    title: "DTF Heat Transfer Stickers",
    icon: Layers,
    mainImage: "/portfolio-dtf-stickers.png",
    additionalImages: [
      "/portfolio-stickers.png",
      "/portfolio-dtf-stickers.png",
      "/gallery-cutting-machine.png",
      "/gallery-trust-satisfaction.png"
    ],
    description: "Premium DTF transfer stickers for fashion branding with high-definition vibrant color curing and elastic heat transfers.",
    specifications: [
      "Material: Premium Cured Hot-Melt Elastic PET Film",
      "Finish: Stretchproof Washfast Vibrant Color Curing",
      "Temp: Standard heat press transfer curing range (150-160°C)",
      "Lifespan: 50+ wash cycles without cracking or peeling"
    ],
    industries: "Garments, Custom Merchandising, Apparel Brands",
    video: "/v6.mp4",
  },
  "offset-printing": {
    name: "Offset Printing",
    title: "Precision Offset Printing Services",
    icon: Layers,
    mainImage: "/srv-offset-services.png",
    additionalImages: [
      "/portfolio-production.png",
      "/srv-offset-services.png",
      "/gallery-offset-press.jpg",
      "/Board finishing area.jpeg"
    ],
    description: "High-volume sheetfed offset printing lines manufacturing premium apparel cards, packaging boxes, and custom care manuals. We match corporate Pantone PMS color targets perfectly across thousands of impressions, featuring high precision vector details and robust material weights.",
    specifications: [
      "Material: Heavy premium cardboards & textured cardstocks",
      "Calibration: Pantone PMS color-matching precision",
      "Systems: Double-sided high-density color press systems",
      "Finishing: Custom die-cutting, folding box fabrication, and creasing"
    ],
    industries: "Garments, Retail Exporters, Packaging, Luxury Brands",
    video: "/LabelPrinting 4 + 2.mp4",
  },
  "cut-seal": {
    name: "Cut & Seal",
    title: "Precision Label Cut & Seal Services",
    icon: Scissors,
    mainImage: "/portfolio-tag-satin.png",
    additionalImages: [
      "/portfolio-tag-satin.png",
      "/portfolio-wash-care.png",
      "/gallery-cutting-machine.png",
      "/Board finishing area.jpeg"
    ],
    description: "Continuous ultrasonic label cut-and-seal lines that eliminate frayed borders and unraveling threads. We trim ribbon care labels, satin loops, and cotton wash tapes with precision warm blades, melting and sealing tag borders cleanly so they stay smooth, uniform, and comfortable next to skin.",
    specifications: [
      "Method: Ultrasonic warm blade melting & sealing",
      "Finishing: Fray-free border edges, loop folding, center folding",
      "Compatibility: Satin, cotton, and polyester ribbon materials",
      "Standards: Smooth touch profiles suitable for neck contact"
    ],
    industries: "Garments, Neck Tags, Care Instructions, Textiles",
    video: "/FlexGraphics label printing 1.mp4",
  }
};

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const product = productsData[id];

  // Form Submission State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: product ? product.name : "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Active Image State
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-6 text-center">
        <HelpCircle size={48} className="text-slate-400 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800">Product Not Found</h1>
        <p className="text-slate-500 mt-2">The product category you are looking for does not exist.</p>
        <Link href="/" className="mt-6 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-bold text-xs uppercase tracking-wider">
          Go Back Home
        </Link>
      </div>
    );
  }

  // Pre-fill default image
  const displayImage = activeImage || product.mainImage;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: product.name, // Enforce current product name
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(`Thank you! Your quote request for ${product.name} has been sent successfully.`);
        setFormData({ name: "", email: "", phone: "", service: product.name, message: "" });
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-slate-50/50 min-h-screen pb-20">
      
      {/* Dynamic mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 -z-10" />

      {/* Header bar back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 hover:text-sky-600 text-xs font-bold transition-all shadow-sm cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to previous</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              layoutId="productMainImg"
              className="aspect-square w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200/60 shadow-xl relative isolate"
            >
              <img
                src={displayImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md rounded-full uppercase tracking-wider">
                  Product Showcase
                </span>
              </div>
            </motion.div>

            {/* Thumbnail Selectors */}
            {product.additionalImages && product.additionalImages.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.additionalImages.map((img, idx) => {
                  const isSelected = displayImage === img;
                  return (
                    <button
                      key={`${img}-${idx}`}
                      onClick={() => setActiveImage(img)}
                      className={`aspect-square w-20 rounded-xl overflow-hidden bg-white border shadow-sm shrink-0 transition-all cursor-pointer ${
                        isSelected ? "border-sky-500 ring-2 ring-sky-500/20 scale-102" : "border-slate-200/80 hover:border-slate-350"
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Local Video Demonstration */}
            {product.video && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-slate-850 uppercase tracking-wider">
                  Production & Machine Demonstration
                </h3>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <video
                    src={product.video}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Details & Quote Form */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Title & Description Block */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[10px] sm:text-xs font-bold text-sky-700 uppercase tracking-wider">
                <Sparkles size={12} />
                VML Production Floor
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h1>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Section */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {product.specifications.map((spec) => (
                  <div key={spec} className="flex gap-3 items-start">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-semibold">{spec}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 mt-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Primary Industries</span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">{product.industries}</span>
              </div>
            </div>

            {/* Product-Specific Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">Inquire Department</span>
                <h3 className="text-xl font-extrabold text-slate-900">Request a Bulk Quote for {product.name}</h3>
                <p className="text-xs text-slate-500">Provide your custom requirements below and our estimating leads will reply with pricing within 2 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. company@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                    WhatsApp/Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                    Production Specifications & Approximate Quantities *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe sizes, paper substrates (e.g. Satin, cotton, tags), design details, and quantity needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <CheckCircle size={14} />
                      {success}
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <HelpCircle size={14} />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-350 font-bold rounded-xl text-slate-900 text-xs uppercase tracking-wider shadow-lg shadow-emerald-100 hover:shadow-xl hover:-translate-y-[1px] transition-all cursor-pointer"
                >
                  {loading ? "Transmitting specs..." : "Request Price Estimate"}
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>

      {/* Related Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-slate-200/60">
        <div className="space-y-6">
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider">
            Explore Other Product Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-4">
            {Object.keys(productsData)
              .filter((key) => key !== id)
              .slice(0, 7)
              .map((key) => {
                const prod = productsData[key];
                return (
                  <Link
                    key={key}
                    href={`/products/${key}`}
                    className="group bg-white rounded-2xl p-2 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-sky-300/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
                  >
                    <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-50 relative isolate">
                      <img
                        src={prod.mainImage}
                        alt={prod.name}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="py-2.5 px-1 border-t border-slate-100 rounded-b-2xl mt-2">
                      <span className="text-[9px] sm:text-[10px] font-black text-sky-600 tracking-wider group-hover:text-sky-700 transition-colors block whitespace-normal">
                        {prod.name.toUpperCase()}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

    </div>
  );
}
