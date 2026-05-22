"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Briefcase,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail,
  User,
  Building,
} from "lucide-react";

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "11:30 AM - 12:30 PM",
  "02:00 PM - 03:00 PM",
  "03:30 PM - 04:30 PM",
  "05:00 PM - 06:00 PM",
];

// Generate selectable next 14 days (excluding Sundays)
const generateSelectableDays = () => {
  const days = [];
  const start = new Date();
  
  for (let i = 1; i <= 21; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    // Exclude Sundays (day 0)
    if (d.getDay() !== 0) {
      days.push({
        iso: d.toISOString().split("T")[0],
        dateObj: d,
        formatted: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      });
    }
    if (days.length >= 10) break; // Limit to 10 selectable days
  }
  return days;
};

export default function ScheduleMeeting() {
  const days = generateSelectableDays();
  const [selectedDate, setSelectedDate] = useState<string>(days[0]?.iso || "");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [whatsappSIM, setWhatsappSIM] = useState<any>(null);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setError("Please choose a preferred time slot.");
      return;
    }

    setLoading(true);
    setSuccess(null);
    setError(null);
    setWhatsappSIM(null);

    const payload = {
      ...formData,
      date: selectedDate,
      timeSlot: selectedSlot,
    };

    try {
      const res = await fetch("/api/meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess("Meeting booked successfully! Check your inbox for confirmation.");
        setWhatsappSIM(result.whatsappSimulated);
        setFormData({ name: "", company: "", email: "", phone: "", purpose: "" });
        setSelectedSlot("");
      } else {
        setError(result.message || "Failed to book meeting. The slot may have been taken.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
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
            Reserve Planning Slot
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Schedule Production & <br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Technical Consultations
            </span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Reserve direct face-to-face or video planning sessions with our pre-press designers and machinery engineers. Lock in scheduling blocks before initiating high-volume runs.
          </p>
        </div>
      </section>

      {/* 2. Scheduler Block */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Calendar & Slot Picker (Left) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Day selection */}
              <div className="space-y-4">
                <div className="flex gap-2 items-center text-sm font-bold text-slate-800">
                  <CalendarIcon size={18} className="text-sky-600" />
                  Select Business Day
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {days.map((day) => (
                    <button
                      key={day.iso}
                      type="button"
                      onClick={() => {
                        setSelectedDate(day.iso);
                        setSelectedSlot("");
                        setSuccess(null);
                        setError(null);
                      }}
                      className={`p-3.5 rounded-xl border font-semibold text-xs text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                        selectedDate === day.iso
                          ? "bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-100"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="block font-bold">{day.formatted.split(",")[0]}</span>
                      <span className="block text-[10px] font-medium opacity-80">{day.formatted.split(",")[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hourly Slot selection */}
              <div className="space-y-4">
                <div className="flex gap-2 items-center text-sm font-bold text-slate-800">
                  <Clock size={18} className="text-sky-600" />
                  Select Hourly Time Slot
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setSelectedSlot(slot);
                        setSuccess(null);
                        setError(null);
                      }}
                      className={`p-4 rounded-xl border text-xs font-bold text-left cursor-pointer transition-all flex items-center justify-between ${
                        selectedSlot === slot
                          ? "bg-sky-50 border-sky-300 text-sky-700 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock size={14} className={selectedSlot === slot ? "text-sky-600" : "text-slate-400"} />
                        {slot}
                      </span>
                      {selectedSlot === slot && <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Warnings or success status */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-semibold space-y-2 shadow-inner"
                  >
                    <div className="flex gap-2 items-center font-bold">
                      <CheckCircle size={18} />
                      {success}
                    </div>
                    {whatsappSIM && (
                      <div className="p-3.5 bg-white rounded-xl border border-emerald-100 text-[10px] text-slate-500 font-mono space-y-1 mt-3">
                        <span className="font-bold text-emerald-600 block mb-1 uppercase tracking-wider">Simulated WhatsApp Hook Triggered:</span>
                        <p>Recipient: {whatsappSIM.to}</p>
                        <p>Template ID: {whatsappSIM.template.name}</p>
                        <p>Params: [{whatsappSIM.template.components[0].parameters.map((p: any) => p.text).join(", ")}]</p>
                      </div>
                    )}
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-5 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-xs font-semibold flex gap-2.5 items-center shadow-inner"
                  >
                    <HelpCircle size={18} className="shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Corporate Info Fields (Right) */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Company Info
                </span>
                <h3 className="text-lg font-bold text-slate-800">Your Business Details</h3>
                <p className="text-[10px] text-slate-400 font-semibold leading-normal">
                  All appointments trigger safe transactional emails and Simulated WhatsApp reminders.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karthik Raman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Organic Apparel Hub"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. karthik@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    WhatsApp/Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 82200 46231"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Purpose of Planning Consultation *
                  </label>
                  <div className="relative">
                    <Briefcase size={16} className="absolute left-3.5 top-4 text-slate-400" />
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. Roll stickers alignment checks, care instructions label sizing compliance..."
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-sky-100 hover:shadow-lg transition-colors cursor-pointer"
                >
                  {loading ? "Registering Slot..." : "Confirm Schedule Block"}
                </button>
              </div>

            </div>

          </form>
        </div>
      </section>

    </div>
  );
}
