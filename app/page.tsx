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
    href: "/services#wash-care",
    tag: "Garment Care",
    icon: Printer,
  },
  {
    title: "High-Density Woven Labels",
    desc: "Luxury woven garment labels crafted with precision threading for long-lasting premium apparel branding.",
    href: "/services#woven-labels",
    tag: "Luxury Weaving",
    icon: Shirt,
  },
  {
    title: "Retail Hang Tags & Barcode Labels",
    desc: "Premium retail branding tags designed with barcode integration, elegant finishes, and durable print quality.",
    href: "/services#hang-tag",
    tag: "Retail Brands",
    icon: Tag,
  },
  {
    title: "Industrial Offset Printing",
    desc: "High-speed precision offset printing solutions powered by advanced production systems and color accuracy control.",
    href: "/services#offset-printing",
    tag: "High Volume",
    icon: Layers,
  },
  {
    title: "Custom Poly Packaging Solutions",
    desc: "Transparent garment packaging covers and eco-friendly protective bags manufactured for modern apparel industries.",
    href: "/services#poly-covers",
    tag: "Packaging",
    icon: Package,
  },
  {
    title: "Precision Label Cutting & Sealing",
    desc: "Automated ultrasonic cutting and heat-sealing technology delivering clean edges and superior finishing quality.",
    href: "/services#cut-seal",
    tag: "Fray-Free Edges",
    icon: Scissors,
  },
];

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

const workGalleryItems = [
  {
    id: "work-minymo",
    title: "Organic Cotton Board Tag",
    category: "Eco & Organic",
    description: "FSC-certified biodegradable raw board tag with customized debossed brand printing and organic cotton hanger threads, fabricated for sustainable Scandinavian export fashion.",
    image: "/gallery-work-minymo.png",
  },
  {
    id: "work-brands",
    title: "Premium Die-Cut Paperboard Tags",
    category: "Licensed Brands",
    description: "Premium die-cut paperboard tags displaying high-fidelity Pantone color consistency, soft-touch matte lamination, and back-side pricing structures.",
    image: "/gallery-work-brands.png",
  },
  {
    id: "work-pret",
    title: "Sports Club Tags & Unique Bottle-Shaped",
    category: "Licensed Brands",
    description: "Licensed sports club tags and unique bottle-shaped Pret 100% recycled fabric certifications, made under stringent anti-counterfeit print controls.",
    image: "/gallery-work-pret.png",
  },
  {
    id: "work-cartoons",
    title: "Glossy High-Saturation Spot Varnish Finish",
    category: "Licensed Brands",
    description: "Glossy high-saturation spot varnish finish, and back-side pricing structures printed for global youth wear collections.",
    image: "/gallery-work-cartoons.png",
  },
  {
    id: "work-kids",
    title: "Labels Featuring Rich Glossy Seal Coats",
    category: "Licensed Brands",
    description: "Intricately die-cut shield profiles and cartoon merchandise labels featuring rich glossy seal coats and high-grade safety grommets.",
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
    title: "Professional High-Density Woven Neck Labels",
    category: "Wash Care & Woven",
    description: "Professional high-density woven neck labels and multi-language wash instruction ribbons with integrated safety barcodes and Decathlon compliance standards.",
    image: "/gallery-work-decathlon.jpg",
  },
  {
    id: "trust-quality",
    title: "Oeko-Tex® Standard 100 Certification",
    category: "Eco & Organic",
    description: "Our premium white satin and organic cotton labels are fully certified to be 100% free of harmful substances, meeting international safety standards for skin contact in global garment exports.",
    image: "/gallery-trust-quality.png",
  },
  {
    id: "trust-satisfaction",
    title: "FSC® & ISO 9001:2015 Standards",
    category: "Eco & Organic",
    description: "Crafted in Tiruppur using 100% sustainable paperboard and manufactured under certified ISO 9001 quality audits, ensuring absolute compliance and traceability for export brands.",
    image: "/gallery-trust-satisfaction.png",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
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

  const filteredWorkItems = activeCategory === "All" ? workGalleryItems : workGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative overflow-hidden bg-slate-50/50">
      {/* Hero & content simplified: keep existing structure from original file (omitted here for brevity) */}

      {/* Our Work Gallery Section */}
      <section className="py-16 bg-white relative overflow-hidden isolate border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {["All", "Licensed Brands", "Wash Care & Woven", "Eco & Organic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-950/10 scale-105" : "bg-white/80 backdrop-blur-md border-slate-200 text-slate-650 hover:bg-slate-50 hover:border-slate-350"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredWorkItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(workGalleryItems.findIndex((w) => w.id === item.id))}
                  className="group bg-white rounded-3xl p-3 border border-slate-200/50 hover:border-sky-300/40 shadow-sm hover:shadow-2xl hover:shadow-sky-100/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 relative isolate border border-slate-100 flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover scale-[1.2] group-hover:scale-[1.28] transition-transform duration-500 ease-out origin-center" />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md text-slate-800 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-widest bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full">{item.category}</span>
                    </div>
                  </div>

                  <div className="p-4 text-left space-y-2 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors duration-250">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">{item.description}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-2 flex justify-between items-center text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Certified Quality</span>
                      <span className="text-sky-600 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">Maximize <ArrowRight size={10} /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
