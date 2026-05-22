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
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800 text-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('/about-hero.png')" }}
        />
        {/* Sky-Blue Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 z-0" />
        
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Strategic Vision</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                To nurture a sustainable industrial ecosystem where our proud craftsmen and workers earn an excellent livelihood, and our clients receive world-class, premium label styling that empowers their own brand communities with people-first values.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
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
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
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
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
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

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-2">
                <Award size={32} className="text-sky-600 mx-auto" />
                <span className="block text-xs font-bold text-slate-800">ISO 9001</span>
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Calibrated Facility</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-2">
                <ShieldCheck size={32} className="text-sky-600 mx-auto" />
                <span className="block text-xs font-bold text-slate-800">OEKO-TEX</span>
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Apparel Certified</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-2">
                <TrendingUp size={32} className="text-sky-600 mx-auto" />
                <span className="block text-xs font-bold text-slate-800">Zero Defect</span>
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Registration Ratio</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-2">
                <Users size={32} className="text-sky-600 mx-auto" />
                <span className="block text-xs font-bold text-slate-800">24/7 Support</span>
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Continuous Shifts</span>
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
