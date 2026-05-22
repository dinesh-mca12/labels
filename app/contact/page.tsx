"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle,
  HelpCircle,
  PhoneCall,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInquiry = async (e: React.FormEvent) => {
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
        setSuccess("Inquiry submitted successfully! Our estimating desk will contact you within 2 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setError(result.errors?.[0]?.message || result.message || "Failed to submit. Please review inputs.");
      }
    } catch (err) {
      setError("Network connection issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-sky-50/70 via-white to-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
            Direct Communications
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect With Our <br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Estimating Office
            </span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Need physical material books sent, custom plate sizing resolved, or bulk logistics quotes finalized? Connect directly via phone, WhatsApp, or submit a formal specs inquiry below.
          </p>
        </div>
      </section>

      {/* 2. Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Cards Column (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* HQ Details Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 border border-slate-800 shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                  Manufacturing Plant HQ
                </span>
                <h3 className="text-xl font-bold">Velmurugan Labels</h3>
                
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex gap-3 items-start">
                    <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      Laxmi Nagar, Ram Nagar,<br/>
                      Tiruppur, Tamil Nadu 641602
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone size={18} className="text-sky-400 shrink-0" />
                    <a href="tel:+918220046231" className="hover:text-white transition-colors">
                      +91 82200 46231
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail size={18} className="text-sky-400 shrink-0" />
                    <a href="mailto:sales@velmuruganlabels.com" className="hover:text-white transition-colors">
                      sales@velmuruganlabels.com
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Clock size={18} className="text-sky-400 shrink-0" />
                    <span>Open — Closes 8 PM (Monday - Saturday)</span>
                  </li>
                </ul>

                <hr className="border-slate-800" />

                <div className="grid grid-cols-2 gap-3 text-center">
                  <a
                    href="tel:+918220046231"
                    className="py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall size={14} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919626638614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Illustration Block */}
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-md aspect-video relative flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
                  <path d="M 0 30 Q 50 10 100 30 M 0 60 Q 50 40 100 60 M 30 0 Q 10 50 30 100 M 60 0 Q 40 50 60 100" stroke="#0ea5e9" strokeWidth="2" />
                </svg>
                <div className="relative text-center space-y-3 z-10">
                  <MapPin size={36} className="text-sky-600 mx-auto animate-bounce" />
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-widest">Get Directions</span>
                  <a
                    href="https://maps.app.goo.gl/uJnPfeeD3v7fE1DC7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 shadow-sm transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

            </div>

            {/* Inquiry Form Column (Right) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <div className="space-y-2 mb-8">
                <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Specifications Desk
                </span>
                <h3 className="text-xl font-extrabold text-slate-800">Submit Printing Requirements</h3>
                <p className="text-[10px] text-slate-400 font-semibold leading-normal">
                  Our estimating division reviews and responds with pricing matrices within 2 business hours.
                </p>
              </div>

              <form onSubmit={handleInquiry} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sanjay@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      WhatsApp/Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 82200 46231"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Select Department *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="">Select Department...</option>
                      <option value="Designing">Label Designing</option>
                      <option value="Digital Printing">Digital Printing</option>
                      <option value="Offset Printing">Offset Printing</option>
                      <option value="Stickers">Stickers & Decals</option>
                      <option value="Rotary Label Printing">Rotary Label Printing</option>
                      <option value="Screen Printing">Screen Printing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Message & Custom Dimensions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe material substrates, fold layouts, care instructions, labels roll orientation, and core sizes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>

                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <CheckCircle size={16} />
                      {success}
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold flex gap-2 items-center"
                    >
                      <HelpCircle size={16} />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-sky-100 hover:shadow-lg transition-colors cursor-pointer"
                >
                  {loading ? "Transmitting Specs..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
