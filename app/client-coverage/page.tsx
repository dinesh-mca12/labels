"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Truck,
  Globe2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  type: string;
  leadTime: string;
  volume: string;
  description: string;
  cities: string[];
}

const regionsData: RegionInfo[] = [
  {
    id: "tamilnadu",
    name: "Tamil Nadu Hub Zone",
    type: "Primary Core Zone",
    leadTime: "Same-Day / Next-Day Delivery",
    volume: "60% of Total Fleet Volume",
    description: "Our home state and dense commercial textile network. Seamless delivery routes spanning major industrial corridors.",
    cities: ["Tiruppur (HQ)", "Chennai", "Coimbatore", "Salem", "Karur", "Madurai", "Erode"],
  },
  {
    id: "karnataka",
    name: "Karnataka Region",
    type: "Major Tech & Retail Zone",
    leadTime: "24-48 Hours Delivery",
    volume: "20% of Total Fleet Volume",
    description: "Servicing massive e-commerce packaging, electronics assembly lines, and retail distribution centers.",
    cities: ["Bengaluru Hub", "Mysuru", "Mangaluru", "Hubballi"],
  },
  {
    id: "kerala",
    name: "Kerala Hub Zone",
    type: "FMCG & Food Processing",
    leadTime: "24-48 Hours Delivery",
    volume: "10% of Total Fleet Volume",
    description: "High-volume moisture-proof food packaging, cosmetics wrapping stickers, and organic export goods.",
    cities: ["Kochi Hub", "Alleppey", "Thiruvananthapuram", "Kozhikode"],
  },
  {
    id: "andhra-telangana",
    name: "Andhra & Telangana Zone",
    type: "Textile & Pharmaceutical Core",
    leadTime: "36-72 Hours Delivery",
    volume: "10% of Total Fleet Volume",
    description: "Bulk shipments of care labels for apparel clusters and high-precision barcode asset tracking for pharma plants.",
    cities: ["Hyderabad Hub", "Vijayawada", "Visakhapatnam", "Warangal"],
  },
];

export default function ClientCoverage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(regionsData[0]);

  return (
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800 text-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: "url('/coverage-hero.png')" }}
        />
        {/* Sky-Blue Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-bold text-sky-400 uppercase tracking-widest">
            Logistics & Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Distribution Network & <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Client Coverage
            </span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            With integrated freight corridors and daily logistics departures from Tiruppur, we ship premium commercial label assets built with pride and satisfaction to major industrial zones throughout South India.
          </p>
        </div>
      </section>

      {/* 2. Interactive SVG Map & Region Inspector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Map Column (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 block">
                Interactive Distribution Corridor
              </span>
              
              {/* Elegant South India vector illustration */}
              <div className="w-full aspect-[4/5] bg-slate-50 border border-slate-100 rounded-3xl p-6 relative flex items-center justify-center shadow-inner">
                <svg className="w-full h-full text-slate-200" viewBox="0 0 100 120">
                  {/* Grid lines */}
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="#f1f5f9" strokeWidth="0.5" />
                  <line x1="0" y1="90" x2="100" y2="90" stroke="#f1f5f9" strokeWidth="0.5" />
                  
                  {/* Abstract Peninsular India outline path */}
                  <path
                    d="M 10 10 Q 50 15 90 10 L 80 40 L 70 70 L 50 110 L 48 112 Q 47 115 45 110 L 30 70 L 15 40 Z"
                    fill="#f8fafc"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />

                  {/* Highlight regions */}
                  {/* Tamil Nadu Zone Path (Right/Bottom) */}
                  <path
                    d="M 50 60 Q 65 65 75 70 L 70 85 L 50 110 Z"
                    fill={selectedRegion.id === "tamilnadu" ? "#e0f2fe" : "#f1f5f9"}
                    stroke={selectedRegion.id === "tamilnadu" ? "#0ea5e9" : "#94a3b8"}
                    strokeWidth={selectedRegion.id === "tamilnadu" ? "2" : "1"}
                    className="cursor-pointer transition-colors duration-200"
                    onClick={() => setSelectedRegion(regionsData[0])}
                  />

                  {/* Karnataka Zone Path (Left/Center) */}
                  <path
                    d="M 30 50 Q 50 48 55 60 L 45 78 L 32 65 Z"
                    fill={selectedRegion.id === "karnataka" ? "#e0f2fe" : "#f1f5f9"}
                    stroke={selectedRegion.id === "karnataka" ? "#0ea5e9" : "#94a3b8"}
                    strokeWidth={selectedRegion.id === "karnataka" ? "2" : "1"}
                    className="cursor-pointer transition-colors duration-200"
                    onClick={() => setSelectedRegion(regionsData[1])}
                  />

                  {/* Kerala Zone Path (Bottom Left Edge) */}
                  <path
                    d="M 32 65 L 45 78 L 48 110 L 45 110 Z"
                    fill={selectedRegion.id === "kerala" ? "#e0f2fe" : "#f1f5f9"}
                    stroke={selectedRegion.id === "kerala" ? "#0ea5e9" : "#94a3b8"}
                    strokeWidth={selectedRegion.id === "kerala" ? "2" : "1"}
                    className="cursor-pointer transition-colors duration-200"
                    onClick={() => setSelectedRegion(regionsData[2])}
                  />

                  {/* Andhra/Telangana Path (North East) */}
                  <path
                    d="M 55 25 Q 70 30 85 28 L 75 70 L 50 60 Z"
                    fill={selectedRegion.id === "andhra-telangana" ? "#e0f2fe" : "#f1f5f9"}
                    stroke={selectedRegion.id === "andhra-telangana" ? "#0ea5e9" : "#94a3b8"}
                    strokeWidth={selectedRegion.id === "andhra-telangana" ? "2" : "1"}
                    className="cursor-pointer transition-colors duration-200"
                    onClick={() => setSelectedRegion(regionsData[3])}
                  />

                  {/* Tiruppur HQ Pointer */}
                  <circle cx="53" cy="74" r="4.5" fill="#0ea5e9" className="animate-ping" style={{ transformOrigin: "53px 74px" }} />
                  <circle cx="53" cy="74" r="3.5" fill="#0284c7" />
                  
                  {/* Bengaluru Pointer */}
                  <circle cx="43" cy="58" r="2.5" fill="#64748b" />

                  {/* Chennai Pointer */}
                  <circle cx="68" cy="62" r="2.5" fill="#64748b" />

                  {/* Hyderabad Pointer */}
                  <circle cx="58" cy="40" r="2.5" fill="#64748b" />

                  {/* Kochi Pointer */}
                  <circle cx="39" cy="90" r="2.5" fill="#64748b" />
                </svg>

                <div className="absolute bottom-4 left-4 bg-white/95 border border-slate-100 rounded-xl p-3 shadow-sm text-[10px] space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    Velmurugan Labels HQ (Tiruppur)
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    Major Corporate Hubs
                  </div>
                </div>
              </div>
            </div>

            {/* Inspector Column (Right) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex gap-2">
                {regionsData.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3.5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors border ${
                      selectedRegion.id === reg.id
                        ? "bg-sky-50 border-sky-200 text-sky-700"
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {reg.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6"
                >
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest block">{selectedRegion.type}</span>
                    <h3 className="text-xl font-extrabold text-slate-800">{selectedRegion.name}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {selectedRegion.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-5 rounded-2xl border border-slate-100">
                    <div className="flex gap-3 items-center">
                      <Truck size={18} className="text-sky-600 shrink-0" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Est. Delivery Time</span>
                        <span className="text-xs font-bold text-slate-800 mt-0.5 block">{selectedRegion.leadTime}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Globe2 size={18} className="text-sky-600 shrink-0" />
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Production Share</span>
                        <span className="text-xs font-bold text-slate-800 mt-0.5 block">{selectedRegion.volume}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Key Industrial Municipalities</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.cities.map((city) => (
                        <div key={city} className="flex gap-1.5 items-center px-3 py-1.5 bg-white border border-slate-150 rounded-lg text-xs font-bold text-slate-700">
                          <MapPin size={12} className="text-sky-500 shrink-0" />
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Shipping Guarantees */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                <Truck size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Weather-Sealed Packing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                All finished tags and label stickers are packaged in heavy-gauge shrink wrap sleeves and moisture-proof export cartons to protect them against coastal rains.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800">100% Tracking Integrity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our logistics coordinators assign automated dispatch slips and live digital tracking codes to ensure delivery pipelines are transparent at all stages.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                <Zap size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Same-Day Tiruppur Courier</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Apparel units located inside Ram Nagar, Lakshmi Nagar, and main Tiruppur sectors enjoy instant factory delivery routes within hours of audit release.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
