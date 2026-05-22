"use client";

import { motion } from "framer-motion";
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
    desc: "Acquired advanced digital printing systems (HP Indigo) to provide variable data printing with zero setup times.",
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

export default function About() {
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
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-all duration-1000"
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

      {/* 4.5. Factory Floor Live Operations Showcase */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200/30 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-sky-100/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header Title with Live Pulse */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-600 uppercase tracking-widest">
              <Activity size={12} className="text-sky-500 animate-pulse" />
              Live Operations Feed
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Factory Floor Live Operations Showcase
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Explore authentic high-definition video loops captured directly from our primary printing machinery departments in Tiruppur. 100% genuine footage highlighting our modern technology pipeline.
            </p>
          </div>

          {/* Featured Widescreen Showcase - Video 1 */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden hover:border-sky-200/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Video Player */}
              <div className="lg:col-span-7 relative bg-slate-950 aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[420px] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200/50">
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Featured Line Feed
                </div>
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Text Spec Panel */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-600 uppercase tracking-widest">
                    <Cpu size={12} />
                    Primary Press Sector
                  </span>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
                    High-Speed Rotary Apparel Care Tag Lines
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Our high-speed rotary printing system operates continuously to supply luxury garment care cards, woven tags, and double-sided self-adhesive labels for major clothing exporter hubs. Runs up to 120 meters per minute with precision registration control.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Active Calibration Parameters
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Rated Speed</span>
                      <span className="text-xs font-bold text-slate-700">120 m/min</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Material Input</span>
                      <span className="text-xs font-bold text-slate-700">Satin / Woven</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Ink Quality</span>
                      <span className="text-xs font-bold text-slate-700">OEKO-TEX Washproof</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Max Width</span>
                      <span className="text-xs font-bold text-slate-700">220 mm Web</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-grid of 6 specialized machines - Videos 2 to 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 2 - Digital Press */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  VDP Print Run
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">HP Indigo Digital Press Line</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Variable Data Printing (VDP) enabling micro-variable barcodes, QR codes, and bespoke label designs without plates or startup times.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Digital Sticker Roll
                </span>
              </div>
            </div>

            {/* Card 3 - Die Cutting */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  Kiss-Cutting
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v3.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Precision Rotary Die-Cutting</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Integrated rotary magnetic cylinder tools executing perfect kiss-cutting and continuous waste matrix stripping on adhesive stickers.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Continuous Matrix Stripping
                </span>
              </div>
            </div>

            {/* Card 4 - Offset Packaging */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  Sheetfed Line
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v4.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Sheetfed Offset Press Line</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Heavy-duty, high-performance offset press folding and forming luxury duplex card boxes, cosmetics packages, and hang tags.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Paperboard Carton Press
                </span>
              </div>
            </div>

            {/* Card 5 - Thermal Rewinder */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  Slit & Rewind
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v5.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Thermal Barcode Roll Slitting</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Automated high-speed slitting, rewinding, and core tensioning of blank thermal barcode rolls used in retail shipping systems.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Logistics Barcodes
                </span>
              </div>
            </div>

            {/* Card 6 - Spot UV Varnishing */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  High-Build Gloss
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v6.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">Spot UV & Screen Varnishing</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Applying premium tactile high-build spot gloss varnishes and matte textured screens over high-end apparel card inserts and cosmetic cartons.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Luxury Finishes
                </span>
              </div>
            </div>

            {/* Card 7 - QA Optical Inspection */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/50 hover:border-sky-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group text-left">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-bold text-sky-400 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-50 animate-pulse" />
                  QA Camera Check
                </div>
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/v7.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-800">100% Quality Inspection Line</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    High-resolution linear sensor cameras performing optical character verification (OCV) and micro-defect detection in active slitting operations.
                  </p>
                </div>
                <span className="inline-flex self-start px-2 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Zero Defects
                </span>
              </div>
            </div>

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

    </div>
  );
}
