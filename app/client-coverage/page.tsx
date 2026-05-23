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
  Sparkles,
  Layers,
  Activity,
  Package,
} from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  hubName: string;
  type: string;
  leadTime: string;
  volume: string;
  networks: string;
  accuracy: string;
  description: string;
  cities: string[];
}

const regionsData: RegionInfo[] = [
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    hubName: "Tamil Nadu Manufacturing Hub",
    type: "Primary Core Zone",
    leadTime: "Same-Day / Next-Day Fulfillment",
    volume: "60% of Operational Distribution Volume",
    networks: "150+ Connected Manufacturing Units",
    accuracy: "99.9% Dispatch Accuracy",
    description: "Our primary operational corridor supporting textile industries, export garment factories, and high-volume retail branding networks.",
    cities: ["Tiruppur (HQ)", "Chennai", "Coimbatore", "Salem", "Karur", "Madurai", "Erode"],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    hubName: "Karnataka Distribution Hub",
    type: "Major Tech & Retail Zone",
    leadTime: "24-48 Hours Fulfillment",
    volume: "20% of Operational Distribution Volume",
    networks: "80+ Connected Manufacturing Units",
    accuracy: "99.8% Dispatch Accuracy",
    description: "An essential industrial logistics corridor servicing large e-commerce hubs, tech park packaging networks, and high-speed garment manufacturing clusters.",
    cities: ["Bengaluru Hub", "Mysuru", "Mangaluru", "Hubballi"],
  },
  {
    id: "kerala",
    name: "Kerala",
    hubName: "Kerala FMCG Corridor",
    type: "FMCG & Food Processing",
    leadTime: "24-48 Hours Fulfillment",
    volume: "10% of Operational Distribution Volume",
    networks: "50+ Connected Manufacturing Units",
    accuracy: "99.9% Dispatch Accuracy",
    description: "A specialized packaging corridor servicing dense FMCG processing clusters, moisture-proof food packaging networks, and export retail brands.",
    cities: ["Kochi Hub", "Alleppey", "Thiruvananthapuram", "Kozhikode"],
  },
  {
    id: "andhra-telangana",
    name: "Andhra & Telangana",
    hubName: "Andhra & Telangana Bio-Core",
    type: "Textile & Pharmaceutical Core",
    leadTime: "36-72 Hours Fulfillment",
    volume: "10% of Operational Distribution Volume",
    networks: "60+ Connected Manufacturing Units",
    accuracy: "99.7% Dispatch Accuracy",
    description: "A fast-growing trade route delivering heavy-duty pharmaceutical barcode labels, medical packaging covers, and regional retail apparel depots.",
    cities: ["Hyderabad Hub", "Vijayawada", "Visakhapatnam", "Warangal"],
  },
];

export default function ClientCoverage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(regionsData[0]);

  return (
    <div className="relative bg-slate-50/50 min-h-screen overflow-hidden isolate">
      
      {/* Soft luxurious background elements */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none -z-10 bg-[linear-gradient(to_right,#20458c_1px,transparent_1px),linear-gradient(to_bottom,#20458c_1px,transparent_1px)] bg-[size:10px_10px]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-50/20 rounded-full blur-[130px] -z-10 pointer-events-none" />

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
            INTERACTIVE DISTRIBUTION CORRIDOR
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            South India Textile <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Distribution Intelligence Network
            </span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Strategically positioned from Tiruppur, our logistics infrastructure enables rapid industrial fulfillment, export-ready packaging, and seamless delivery coverage across major textile manufacturing corridors.
          </p>
        </div>
      </section>

      {/* 2. Interactive SVG Map & Region Inspector */}
      <section className="py-20 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Map Column (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-stretch relative">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-left block">
                INTELLIGENT ROUTE MAP
              </span>
              
              {/* Elegant South India vector illustration */}
              <div className="w-full aspect-[4/5] bg-slate-50 border border-slate-200/60 rounded-3xl p-6 relative flex items-center justify-center shadow-inner overflow-hidden">
                
                {/* Microscopic dashboard coordinates grid lines */}
                <svg className="absolute inset-0 w-full h-full text-slate-100 pointer-events-none" viewBox="0 0 100 120">
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="0" y1="100" x2="100" y2="100" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="20" y1="0" x2="20" y2="120" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="40" y1="0" x2="40" y2="120" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="60" y1="0" x2="60" y2="120" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                  <line x1="80" y1="0" x2="80" y2="120" stroke="#f1f5f9" strokeWidth="0.4" strokeDasharray="2 2" />
                </svg>

                <svg className="w-full h-full text-slate-200 relative z-10" viewBox="0 0 100 120">
                  {/* Abstract Peninsular India outline path */}
                  <path
                    d="M 10 10 Q 50 15 90 10 L 80 40 L 70 70 L 50 110 L 48 112 Q 47 115 45 110 L 30 70 L 15 40 Z"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                  />

                  {/* Highlight regions */}
                  {/* Tamil Nadu Zone Path (Right/Bottom) */}
                  <path
                    d="M 50 60 Q 65 65 75 70 L 70 85 L 50 110 Z"
                    fill={selectedRegion.id === "tamilnadu" ? "#e1e9f8" : "#f8fafc"}
                    stroke={selectedRegion.id === "tamilnadu" ? "#20458c" : "#cbd5e1"}
                    strokeWidth={selectedRegion.id === "tamilnadu" ? "2.5" : "1"}
                    className="cursor-pointer transition-all duration-300 hover:fill-sky-50/50"
                    onClick={() => setSelectedRegion(regionsData[0])}
                  />

                  {/* Karnataka Zone Path (Left/Center) */}
                  <path
                    d="M 30 50 Q 50 48 55 60 L 45 78 L 32 65 Z"
                    fill={selectedRegion.id === "karnataka" ? "#e1e9f8" : "#f8fafc"}
                    stroke={selectedRegion.id === "karnataka" ? "#20458c" : "#cbd5e1"}
                    strokeWidth={selectedRegion.id === "karnataka" ? "2.5" : "1"}
                    className="cursor-pointer transition-all duration-300 hover:fill-sky-50/50"
                    onClick={() => setSelectedRegion(regionsData[1])}
                  />

                  {/* Kerala Zone Path (Bottom Left Edge) */}
                  <path
                    d="M 32 65 L 45 78 L 48 110 L 45 110 Z"
                    fill={selectedRegion.id === "kerala" ? "#e1e9f8" : "#f8fafc"}
                    stroke={selectedRegion.id === "kerala" ? "#20458c" : "#cbd5e1"}
                    strokeWidth={selectedRegion.id === "kerala" ? "2.5" : "1"}
                    className="cursor-pointer transition-all duration-300 hover:fill-sky-50/50"
                    onClick={() => setSelectedRegion(regionsData[2])}
                  />

                  {/* Andhra/Telangana Path (North East) */}
                  <path
                    d="M 55 25 Q 70 30 85 28 L 75 70 L 50 60 Z"
                    fill={selectedRegion.id === "andhra-telangana" ? "#e1e9f8" : "#f8fafc"}
                    stroke={selectedRegion.id === "andhra-telangana" ? "#20458c" : "#cbd5e1"}
                    strokeWidth={selectedRegion.id === "andhra-telangana" ? "2.5" : "1"}
                    className="cursor-pointer transition-all duration-300 hover:fill-sky-50/50"
                    onClick={() => setSelectedRegion(regionsData[3])}
                  />

                  {/* Animated glowing route lines from HQ to hub nodes */}
                  {selectedRegion.id === "tamilnadu" && (
                    <motion.path
                      d="M 53 74 L 68 62" // Tiruppur to Chennai
                      stroke="#20458c"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ strokeDashoffset: 20 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                    />
                  )}
                  {selectedRegion.id === "karnataka" && (
                    <motion.path
                      d="M 53 74 L 43 58" // Tiruppur to Bengaluru
                      stroke="#20458c"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ strokeDashoffset: 20 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                    />
                  )}
                  {selectedRegion.id === "kerala" && (
                    <motion.path
                      d="M 53 74 L 39 90" // Tiruppur to Kochi
                      stroke="#20458c"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ strokeDashoffset: 20 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                    />
                  )}
                  {selectedRegion.id === "andhra-telangana" && (
                    <motion.path
                      d="M 53 74 L 58 40" // Tiruppur to Hyderabad
                      stroke="#20458c"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ strokeDashoffset: 20 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                    />
                  )}

                  {/* Tiruppur HQ Pointer with ping pulse */}
                  <circle cx="53" cy="74" r="5.5" fill="#20458c" className="animate-ping" style={{ transformOrigin: "53px 74px" }} />
                  <circle cx="53" cy="74" r="4" fill="#20458c" />
                  
                  {/* Major Hub Pointers */}
                  <circle cx="43" cy="58" r="3" fill="#64748b" />
                  <circle cx="68" cy="62" r="3" fill="#64748b" />
                  <circle cx="58" cy="40" r="3" fill="#64748b" />
                  <circle cx="39" cy="90" r="3" fill="#64748b" />
                </svg>

                {/* Floating Map Indicators & Stats Overlay */}
                <div className="absolute top-4 left-4 bg-white/85 backdrop-blur-md border border-slate-200/50 px-3 py-2 rounded-xl shadow-sm text-center select-none pointer-events-none z-20">
                  <span className="block text-xs font-black text-sky-600 leading-none">25M+</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 block">Labels Distributed</span>
                </div>

                <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md border border-slate-200/50 px-3 py-2 rounded-xl shadow-sm text-center select-none pointer-events-none z-20">
                  <span className="block text-xs font-black text-sky-600 leading-none">500+</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 block">Active Clients</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-md border border-slate-200/50 px-3 py-2 rounded-xl shadow-sm text-center select-none pointer-events-none z-20">
                  <span className="block text-xs font-black text-sky-600 leading-none">24hr</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 block">Dispatch Network</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/85 backdrop-blur-md border border-slate-200/50 px-3 py-2 rounded-xl shadow-sm text-center select-none pointer-events-none z-20">
                  <span className="block text-xs font-black text-sky-600 leading-none">Export</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 block">Ready Logistics</span>
                </div>

                {/* HQ Legend */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-4 py-1.5 shadow-md text-[9px] text-white flex items-center gap-2 select-none pointer-events-none z-20">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="font-extrabold uppercase tracking-wider">Velmurugan HQ (Tiruppur)</span>
                </div>

              </div>
            </div>

            {/* Inspector Column (Right) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* State Selection Tabs */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
                {regionsData.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 border relative ${
                      selectedRegion.id === reg.id
                        ? "bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-100 scale-102"
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    <span className="relative z-10">{reg.name}</span>
                    {selectedRegion.id === reg.id && (
                      <motion.div
                        layoutId="activeRegionGlow"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 -z-0 opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* State Dashboard Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-10 space-y-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-sky-300/40 hover:shadow-2xl hover:shadow-sky-100/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-2 relative z-10">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                      {selectedRegion.type}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      {selectedRegion.hubName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {selectedRegion.description}
                    </p>
                  </div>

                  {/* 2x2 Metric Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    
                    {/* Est. Delivery */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200/60 transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <Truck size={18} className="stroke-[2]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">ESTIMATED DELIVERY</span>
                        <span className="text-xs font-bold text-slate-800 leading-normal block">{selectedRegion.leadTime}</span>
                      </div>
                    </div>

                    {/* Production Share */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200/60 transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <Layers size={18} className="stroke-[2]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">PRODUCTION SHARE</span>
                        <span className="text-xs font-bold text-slate-800 leading-normal block">{selectedRegion.volume}</span>
                      </div>
                    </div>

                    {/* Active Networks */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200/60 transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <Activity size={18} className="stroke-[2]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">ACTIVE INDUSTRIAL NETWORKS</span>
                        <span className="text-xs font-bold text-slate-800 leading-normal block">{selectedRegion.networks}</span>
                      </div>
                    </div>

                    {/* Accuracy Rate */}
                    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200/60 transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <ShieldCheck size={18} className="stroke-[2]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">LOGISTICS RESPONSE RATE</span>
                        <span className="text-xs font-bold text-slate-800 leading-normal block">{selectedRegion.accuracy}</span>
                      </div>
                    </div>

                  </div>

                  {/* City Interactive Location Pills */}
                  <div className="space-y-3 relative z-10 pt-4 border-t border-slate-200/40">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Key Industrial Municipalities</span>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedRegion.cities.map((city) => {
                        const isHq = city.includes("HQ");
                        return (
                          <div
                            key={city}
                            className={`flex items-center gap-1.5 px-3 py-1.5 bg-white border ${
                              isHq
                                ? "border-sky-300 shadow-sm shadow-sky-100/60 ring-2 ring-sky-500/10 text-sky-700 font-black"
                                : "border-slate-200/60 text-slate-700 font-bold"
                            } rounded-xl text-[11px] sm:text-xs transition-all duration-300 hover:scale-105 hover:border-sky-350 hover:shadow-md cursor-default`}
                          >
                            <MapPin size={12} className={isHq ? "text-sky-600 animate-bounce" : "text-slate-400"} />
                            <span>{city}</span>
                            {isHq && <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Shipping Guarantees (Bottom Feature Cards) */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-2xl hover:shadow-sky-100/40 hover:-translate-y-1.5 hover:border-sky-300/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-sm">
                  <Package size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-850 group-hover:text-sky-600 transition-colors leading-snug">Weather-Sealed Industrial Packaging</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Every label shipment is protected using moisture-resistant industrial packaging engineered for export transportation durability.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider relative z-10">
                <span>Material Protection</span>
                <span className="h-2 w-2 rounded-full bg-slate-300"></span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-2xl hover:shadow-sky-100/40 hover:-translate-y-1.5 hover:border-sky-300/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-sm">
                  <Compass size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-850 group-hover:text-sky-600 transition-colors leading-snug">Real-Time Tracking Integrity</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Automated dispatch tracking and operational monitoring systems ensure complete visibility across every logistics stage.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider relative z-10">
                <span>Transit Transparency</span>
                <span className="h-2 w-2 rounded-full bg-slate-300"></span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-2xl hover:shadow-sky-100/40 hover:-translate-y-1.5 hover:border-sky-300/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-sm">
                  <Zap size={20} className="stroke-[2.2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-850 group-hover:text-sky-600 transition-colors leading-snug">Rapid Tiruppur Fulfillment Network</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Priority dispatch routes within Tiruppur’s textile corridor enable ultra-fast manufacturing delivery operations.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100/60 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider relative z-10">
                <span>Priority Logistics</span>
                <span className="h-2 w-2 rounded-full bg-slate-300"></span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
