"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  Award,
  Zap,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  Play,
  Cpu,
  Settings,
  Activity,
  Video,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "People-First Motive",
    desc: "Our starting motive is helping others survive and live a good life. We prioritize client and worker livelihoods over pure margins.",
  },
  {
    icon: Users,
    title: "Proud Local Workers",
    desc: "Every tag and sticker is crafted by a team of highly-satisfied, proud local printing professionals working in premium conditions.",
  },
  {
    icon: Award,
    title: "Supreme Premium Craft",
    desc: "We never compromise on standards, delivering international premium quality finishes with pixel-perfect resolution on every run.",
  },
  {
    icon: Compass,
    title: "Satisfied Partnerships",
    desc: "We build transparent relations with global apparel exporters and startups, prioritizing client success and cooperative growth.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    desc: "Velmurugan Labels was established in Tiruppur with a single sheetfed offset press catering to local textile mills.",
  },
  {
    year: "2018",
    title: "Rotary Line Integration",
    desc: "Introduced high-speed rotary roll printing to supply self-adhesive textile barcode stickers and tags.",
  },
  {
    year: "2021",
    title: "ISO 9001:2015 Certification",
    desc: "Upgraded our entire pre-press and printing pipeline to achieve full ISO manufacturing standard accreditation.",
  },
  {
    year: "2024",
    title: "Digital Press & Expansion",
    desc: "Acquired advanced digital printing systems to provide variable data printing with zero setup times.",
  },
  {
    year: "2026",
    title: "Smart Facility Upgrade",
    desc: "Launched real-time machinery tracking and automated order workflows to serve corporate international exports.",
  },
];

const indianReviews = [
  {
    name: "Senthil Kumar",
    company: "Tiruppur Tex-Craft Exporters",
    text: "Velmurugan Labels cares about our survival and livelihoods more than their margins. Their proud workers treat our tags as high-quality pieces of art.",
  },
  {
    name: "Anitha Selvam",
    company: "Kovai Organic Foods",
    text: "Stunning self-adhesive food label stickers. We chose them because they value people over profit and always deliver premium masterpieces.",
  },
  {
    name: "Karthikeyan Ramasamy",
    company: "Kongu Garments Hub",
    text: "The premium hanging tag materials are robust and print-consistent because they value their proud workforce and client satisfaction over everything.",
  },
  {
    name: "Muthusamy Palanisamy",
    company: "Tiruppur Pack Solutions",
    text: "Their starting motive to uplift the local Tiruppur industry shines through in every order. Extremely transparent scheduling built on mutual trust.",
  },
  {
    name: "Soundararajan Krishnan",
    company: "Vasantham Retail Group",
    text: "Over 10 million barcodes printed with zero errors. Behind every sheet is a team of proud, highly-satisfied workers crafting quality art.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const gallerySlides = [
  {
    id: "fsc-storage",
    title: "FSC Finished Goods Storage Area",
    description: "Organized inventory storage facility ensuring rigorous compliance and absolute traceability for FSC-certified paperboards and Oeko-Tex Standard 100 textile labels.",
    image: "/gallery-fsc-storage.jpg",
    tagline: "Quality & Compliance",
  },
  {
    id: "fsc-raw-materials",
    title: "FSC Mix & Recycled Raw Material Storage",
    description: "Designated inventory racks housing certified mix and recycled raw materials, maintaining structural purity and compliance under international FSC forest stewardship rules.",
    image: "/gallery-fsc-raw-materials.jpg",
    tagline: "Eco-Raw Materials",
  },
  {
    id: "oeko-tex-raw-materials",
    title: "Oeko-Tex® Standard 100 Raw Material Storage",
    description: "Strictly segregated storing area housing certified premium cotton tapes, polyester yarns, and non-toxic dyes, certified to be 100% free of harmful substances.",
    image: "/gallery-oeko-tex-raw-materials.jpg",
    tagline: "Eco-Friendly Materials",
  },
  {
    id: "offset-press",
    title: "RYOBI 660 High-Speed Offset Press",
    description: "Our heavy-duty precision offset machinery producing multi-color tags, paperboard packaging, and high-density labels with perfect ink consistency.",
    image: "/gallery-offset-press.jpg",
    tagline: "Precision Presswork",
  },
  {
    id: "cutting-machine",
    title: "JMC II 500 Precision Guillotine Cutter",
    description: "High-accuracy heavy-duty hydraulic paper cutting machine executing clean micro-precise edges for export hang tags and apparel cards.",
    image: "/gallery-cutting-machine.png",
    tagline: "Post-Press Operations",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 6, ease: "easeOut" as const },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [lightboxSlide, setLightboxSlide] = useState<number | null>(null);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const handlePrevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev === gallerySlides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative bg-slate-50/50 min-h-screen overflow-hidden isolate">
      {/* Premium glowing ambient orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-2/4 right-[10%] w-[450px] h-[450px] bg-indigo-50/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-sky-50/30 rounded-full blur-[140px] -z-10 pointer-events-none" />
      
      {/* Fine technical blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-60 -z-10 pointer-events-none" />
      
      {/* 1. Page Hero */}
      <section className="relative py-28 bg-slate-950 overflow-hidden border-b border-slate-800 text-center">
        {/* Background Image Layer - Upgraded to real high-fidelity factory photo */}
        <div 
          className="absolute inset-0 bg-cover bg-[center_60%] opacity-40 mix-blend-luminosity scale-105 transition-all duration-1000"
          style={{ backgroundImage: "url('/v8.jpeg')" }}
        />
        {/* Sky-Blue Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/80 to-slate-950 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-400 uppercase tracking-widest">
            <Sparkles size={12} />
            About Velmurugan Labels
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Pioneering High-Precision <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Industrial Label Printing
            </span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Headquartered in Tiruppur, Tamil Nadu, Velmurugan Labels has been the premier partner for commercial apparel tags, barcode sticker rolls, luxury spot-UV screen prints, and premium offset packaging since 2015.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-md shadow-slate-100/30 space-y-4 hover:border-sky-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100/50 flex items-center justify-center text-sky-600 transition-transform group-hover:scale-105">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Strategic Vision</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                To nurture a sustainable industrial ecosystem where our proud craftsmen and workers earn an excellent livelihood, and our clients receive world-class, premium label styling that empowers their own brand communities with people-first values.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-md shadow-slate-100/30 space-y-4 hover:border-sky-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100/50 flex items-center justify-center text-sky-600 transition-transform group-hover:scale-105">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Everyday Mission</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We manufacture premium-quality labels not for mere margins, but to uplift the local Tiruppur textile community, guaranteeing total client satisfaction, zero defects, and absolute livelihood security for our proud workforce.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-transparent relative z-10 border-y border-slate-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Standards That Drive Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const IconComp = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/50 shadow-sm space-y-4 hover:shadow-md hover:border-sky-200/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100/50 flex items-center justify-center text-sky-600 transition-transform duration-300 group-hover:scale-105">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{value.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Infrastructure & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                Compliance & Quality
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Global Certifications & Manufacturing Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our machinery facility adheres strictly to both environmental safety standards and rigorous quality calibration parameters. We are proud partners to global brands with strict audits.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-center">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    ISO 9001:2015 Quality Management System
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    OEKO-TEX Standard 100 Compliance (Apparel tags input)
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    FSC Certified Sustainably-Sourced Paper Products
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Photo Frame showing the real facility floor */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
                
                {/* Tech Badge overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Continuous Facility Operations
                </div>
                
                {/* Large high-fidelity photo */}
                <img 
                  src="/v8.jpeg" 
                  alt="Velmurugan Labels Factory Floor Overview" 
                  className="w-full aspect-[16/10] object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Description card at the bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-left">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                    Tiruppur Manufacturing Hub
                  </span>
                  <h4 className="text-base font-extrabold text-white">
                    Velmurugan Labels Production Facility
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Equipped with advanced sheetfed offset, digital press lines, and rotary print systems operating under rigorous ISO guidelines.
                  </p>
                </div>
              </div>

              {/* Sub-grid of performance parameters */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:bg-sky-50/10 transition-all duration-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">ISO 9001:2015</span>
                    <span className="text-[10px] text-slate-500 font-medium">Calibrated Facility Standards</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:bg-sky-50/10 transition-all duration-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">OEKO-TEX 100</span>
                    <span className="text-[10px] text-slate-500 font-medium">Apparel Safe Print Inputs</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:bg-sky-50/10 transition-all duration-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Zero-Defect</span>
                    <span className="text-[10px] text-slate-500 font-medium">Precise Registration Ratio</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:bg-sky-50/10 transition-all duration-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">24/7 Production</span>
                    <span className="text-[10px] text-slate-500 font-medium">Continuous Rotational Shifts</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Factory Floor Live Operations Showcase removed per request */}

      {/* 4.5. Manufacturing Gallery Slideshow */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-600 uppercase tracking-widest">
              <Sparkles size={12} className="animate-pulse" />
              Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              High-Precision <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Manufacturing Gallery</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Take a visual tour through our production floors, state-of-the-art machinery, and high-fidelity product output engineered for global garments exports.
            </p>
          </div>

          {/* Slideshow Core Container */}
          <div className="max-w-6xl mx-auto rounded-[36px] bg-gradient-to-tr from-slate-200/50 via-white to-sky-200/40 p-2 sm:p-3 border border-white/50 shadow-2xl relative">
            <div className="relative aspect-[16/10] md:aspect-[21/9] min-h-[320px] bg-slate-950 rounded-[28px] overflow-hidden group/slider">
              
              {/* Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40 z-10 pointer-events-none" />
              
              {/* Ken Burns Slides with Framer Motion */}
              <div className="absolute inset-0">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.img
                      src={gallerySlides[activeSlide].image}
                      alt={gallerySlides[activeSlide].title}
                      className="w-full h-full object-cover origin-center"
                      initial={{ scale: 1.06 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Slide Tagline - Top Left */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full">
                  {gallerySlides[activeSlide].tagline}
                </span>
              </div>

              {/* Floating Action Buttons - Top Right */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                <button
                  onClick={() => setLightboxSlide(activeSlide)}
                  title="Fullscreen Lightbox"
                  className="w-10 h-10 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-slate-950/80 hover:scale-105 transition-all active:scale-95 animate-duration-300 cursor-pointer"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Center Navigation Arrows */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
                <button
                  onClick={handlePrevSlide}
                  className="w-11 h-11 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-slate-950/80 hover:scale-105 active:scale-95 transition-all pointer-events-auto shadow-lg cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-11 h-11 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-slate-950/80 hover:scale-105 active:scale-95 transition-all pointer-events-auto shadow-lg cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Bottom Details Panel - Left Aligned */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto z-20 max-w-lg">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-slate-950/75 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-left space-y-2 shadow-2xl"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {gallerySlides[activeSlide].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {gallerySlides[activeSlide].description}
                  </p>
                </motion.div>
              </div>

              {/* Progress Indicator Dots - Embedded bottom-right */}
              <div className="hidden md:flex absolute bottom-6 right-6 z-20 gap-1.5 px-3 py-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10">
                {gallerySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeSlide ? 1 : -1);
                      setActiveSlide(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeSlide ? "w-6 bg-sky-400" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Premium Bottom Thumbnail Navigation Strip */}
          <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {gallerySlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setDirection(index > activeSlide ? 1 : -1);
                  setActiveSlide(index);
                }}
                className={`group text-left rounded-2xl p-2.5 transition-all duration-300 border cursor-pointer ${
                  index === activeSlide
                    ? "bg-white border-sky-400/80 shadow-md shadow-sky-100/40"
                    : "bg-transparent border-slate-200/50 hover:bg-white/40 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/40">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index === activeSlide ? "filter-none" : "grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  <div className="hidden sm:block min-w-0">
                    <div className="text-[10px] font-bold text-sky-600 uppercase tracking-wider leading-none">
                      {slide.tagline}
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 truncate mt-1">
                      {slide.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Timeline */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Velmurugan Labels Chronology
            </h2>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
            {milestones.map((ms) => (
              <div key={ms.year} className="relative pl-8 md:pl-12 group">
                {/* Year tag for large screens */}
                <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                  <span className="text-lg font-black text-sky-600">{ms.year}</span>
                </div>
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-sky-600 group-hover:bg-sky-600 transition-colors" />
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-sky-600 block md:hidden">{ms.year}</span>
                  <h3 className="text-lg font-bold text-slate-800">{ms.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">{ms.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section with Indian Names */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Partnerships
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Reviewed by Tiruppur Export Authorities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianReviews.map((rev) => (
              <div
                key={rev.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <div className="pt-4 mt-6 border-t border-slate-200/50 flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold shrink-0">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{rev.name}</h4>
                    <span className="text-[10px] text-slate-400 block font-semibold uppercase">{rev.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Fullscreen Lightbox Portal Modal */}
      <AnimatePresence>
        {lightboxSlide !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar controls */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10 pt-2">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                Slide {lightboxSlide + 1} of {gallerySlides.length}
              </span>
              <button
                onClick={() => setLightboxSlide(null)}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Viewport */}
            <div className="relative flex-grow flex items-center justify-center max-w-7xl mx-auto w-full p-2">
              <motion.img
                key={lightboxSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                src={gallerySlides[lightboxSlide].image}
                alt={gallerySlides[lightboxSlide].title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-2xl sm:rounded-[24px] object-contain shadow-2xl border border-white/5"
              />

              {/* Navigation arrows inside lightbox */}
              <button
                onClick={() => {
                  setLightboxSlide((prev) => (prev! === 0 ? gallerySlides.length - 1 : prev! - 1));
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-850 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  setLightboxSlide((prev) => (prev! === gallerySlides.length - 1 ? 0 : prev! + 1));
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-850 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom details inside lightbox */}
            <div className="w-full max-w-3xl mx-auto text-center space-y-2 pb-6 z-10">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
                {gallerySlides[lightboxSlide].tagline}
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                {gallerySlides[lightboxSlide].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {gallerySlides[lightboxSlide].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
