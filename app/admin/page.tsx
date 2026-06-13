"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Trash2,
  CheckCircle,
  Clock3,
  AlertTriangle,
  TrendingUp,
  LogOut,
  RefreshCw,
  Eye,
  Activity,
  Briefcase,
  Layers,
  Search,
  Filter,
} from "lucide-react";

interface InquiryData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "Pending" | "Contacted" | "Resolved";
  createdAt: string;
}



export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  // Dashboard Data State
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter & Search State
  const [inquirySearch, setInquirySearch] = useState("");
  const [inquiryFilter, setInquiryFilter] = useState<"All" | "Pending" | "Contacted" | "Resolved">("All");

  // Detailed Modal/Drawer State for viewing messages
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryData | null>(null);

  // Notification Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Check Session Storage on Mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("admin_authenticated");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch Dashboard Data
  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const inqResponse = await fetch("/api/admin/inquiries");
      const inqData = await inqResponse.json();

      if (inqData.success) {
        setInquiries(inqData.inquiries);
        setIsOffline(inqData.offline);
      } else {
        showToast("Error loading data from servers", "error");
      }
    } catch (err) {
      showToast("Could not connect to admin APIs. Serving local sandboxed data.", "info");
      setIsOffline(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAuth(true);
    setAuthError("");

    setTimeout(() => {
      if (username === "admin" && password === "Velmurugan@2026") {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_authenticated", "true");
        showToast("Authenticated successfully. Welcome back!", "success");
      } else {
        setAuthError("Invalid username or password. Please try again.");
        showToast("Authentication Failed", "error");
      }
      setIsSubmittingAuth(false);
    }, 800);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setUsername("");
    setPassword("");
    showToast("Logged out successfully", "info");
  };

  // Update Inquiry Status
  const handleStatusChange = async (id: string, newStatus: "Pending" | "Contacted" | "Resolved") => {
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((inq) => (inq._id === id ? { ...inq, status: newStatus } : inq))
        );
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
        showToast(`Inquiry status updated to ${newStatus}`, "success");
      } else {
        showToast("Failed to update status", "error");
      }
    } catch (err) {
      showToast("Network error updating status", "error");
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this customer inquiry? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((inq) => inq._id !== id));
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry(null);
        }
        showToast("Inquiry deleted successfully", "success");
      } else {
        showToast("Failed to delete inquiry", "error");
      }
    } catch (err) {
      showToast("Network error during deletion", "error");
    }
  };

  // Filter & Search Logic
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.phone.includes(inquirySearch) ||
      inq.service.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.message.toLowerCase().includes(inquirySearch.toLowerCase());

    const matchesFilter = inquiryFilter === "All" || inq.status === inquiryFilter;

    return matchesSearch && matchesFilter;
  });

  // Calculate Statistics
  const totalInquiriesCount = inquiries.length;
  const pendingInquiriesCount = inquiries.filter((i) => i.status === "Pending").length;
  const resolvedInquiriesCount = inquiries.filter((i) => i.status === "Resolved").length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border text-sm font-semibold backdrop-blur-md ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700"
                : toast.type === "error"
                ? "bg-rose-500/10 border-rose-500/20 text-rose-700"
                : "bg-sky-500/10 border-sky-500/20 text-sky-700"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle size={18} className="text-emerald-500 shrink-0" />
            ) : toast.type === "error" ? (
              <AlertTriangle size={18} className="text-rose-500 shrink-0" />
            ) : (
              <Activity size={18} className="text-sky-500 shrink-0" />
            )}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offline Resiliency Banner */}
      {isAuthenticated && isOffline && (
        <div className="bg-amber-500/10 border-b border-amber-500/25 text-amber-800 text-xs px-4 py-2 flex items-center justify-center gap-2 font-medium backdrop-blur-md">
          <AlertTriangle size={14} className="text-amber-600 animate-pulse" />
          <span>
            <strong>Offline Sandbox Mode active.</strong> MONGODB_URI is disconnected. Displaying cached static logs & persisting adjustments in active RAM memory.
          </span>
        </div>
      )}

      {/* Header Panel */}
      <header className="bg-white border-b border-slate-200/60 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Velmurugan Labels Logo" className="h-14 w-auto object-contain" />
            <div className="border-l border-slate-200 pl-3">
              <h1 className="font-extrabold text-slate-800 text-sm tracking-tight leading-none">
                Admin Panel
              </h1>
              <p className="text-[8px] font-bold text-sky-600 tracking-widest uppercase mt-0.5">
                Control Station
              </p>
            </div>
          </div>

          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <button
                onClick={fetchDashboardData}
                disabled={isLoading}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-700 transition-all duration-200 flex items-center justify-center"
                title="Sync Database"
              >
                <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-rose-100 font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {!isAuthenticated ? (
          /* Login Screen Card */
          <div className="max-w-md mx-auto my-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl border border-slate-200/50 shadow-2xl p-8 relative overflow-hidden backdrop-blur-3xl"
            >
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-500" />
              
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-sky-600">
                  <Lock size={26} className="stroke-[1.75]" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800">Secure Access</h2>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Enter authorized administrator credentials to manage inquires, bookings, and live production queues.
                </p>
              </div>

              {authError && (
                <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold p-4 rounded-xl mb-6 flex items-center gap-2">
                  <AlertTriangle size={15} className="shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-1">
                    Username
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingAuth}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg shadow-sky-100 hover:shadow-xl hover:shadow-sky-200 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  {isSubmittingAuth ? (
                    <RefreshCw size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Lock size={15} />
                      Verify Credentials
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          /* Authenticated Dashboard Workspace */
          <div className="space-y-8">
            {/* Live Analytics Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Total Inquiries */}
              <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex items-center gap-5 relative overflow-hidden">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
                  <Layers size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Total Inquiries
                  </span>
                  <span className="block text-3xl font-extrabold text-slate-800 mt-1">
                    {isLoading ? "..." : totalInquiriesCount}
                  </span>
                </div>
                <div className="absolute right-4 bottom-2 text-slate-100 select-none pointer-events-none font-bold text-7xl opacity-40">
                  #1
                </div>
              </div>

              {/* Card 2: Pending Follow-ups */}
              <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex items-center gap-5 relative overflow-hidden">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <Clock3 size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Pending Inquiries
                  </span>
                  <span className="block text-3xl font-extrabold text-slate-800 mt-1">
                    {isLoading ? "..." : pendingInquiriesCount}
                  </span>
                </div>
                <div className="absolute right-4 bottom-2 text-slate-100 select-none pointer-events-none font-bold text-7xl opacity-40">
                  #2
                </div>
              </div>

              {/* Card 3: Resolved Inquiries */}
              <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex items-center gap-5 relative overflow-hidden">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Resolved Inquiries
                  </span>
                  <span className="block text-3xl font-extrabold text-slate-800 mt-1">
                    {isLoading ? "..." : resolvedInquiriesCount}
                  </span>
                </div>
                <div className="absolute right-4 bottom-2 text-slate-100 select-none pointer-events-none font-bold text-7xl opacity-40">
                  #3
                </div>
              </div>
            </div>

            {/* Dynamic Panel Controls & Filters */}
            <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-xs space-y-6">

              {/* Filters & Actions Bar */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search name, phone, request..."
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Filter size={14} className="text-slate-400" />
                  <select
                    value={inquiryFilter}
                    onChange={(e: any) => setInquiryFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden text-slate-600"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>

              {/* Data Table Grid */}
              {isLoading ? (
                /* Loading Slate */
                <div className="py-20 flex flex-col items-center justify-center gap-3">
                  <RefreshCw size={32} className="text-sky-500 animate-spin" />
                  <p className="text-xs text-slate-400 font-medium">Synchronizing latest database logs...</p>
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl">
                  <TrendingUp size={36} className="text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-500">No matching inquiries found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-100">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50/70 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="py-4 px-5">Client Info</th>
                        <th className="py-4 px-5">Request Service</th>
                        <th className="py-4 px-5">Dated</th>
                        <th className="py-4 px-5">Status</th>
                        <th className="py-4 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {filteredInquiries.map((inq) => (
                        <tr key={inq._id} className="hover:bg-slate-50/40 transition-colors duration-150">
                          <td className="py-4 px-5">
                            <span className="block font-bold text-slate-900 text-sm">{inq.name}</span>
                            <span className="block text-[11px] text-slate-400 mt-1">{inq.email}</span>
                            <span className="block text-[11px] text-slate-400 mt-0.5">{inq.phone}</span>
                          </td>
                          <td className="py-4 px-5">
                            <span className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-bold">
                              {inq.service}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-slate-500 text-xs">
                            {new Date(inq.createdAt).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                          <td className="py-4 px-5">
                            <select
                              value={inq.status}
                              onChange={(e: any) => handleStatusChange(inq._id, e.target.value)}
                              className={`px-2 py-1.5 rounded-lg text-[10px] font-extrabold uppercase border tracking-wider focus:outline-hidden ${
                                inq.status === "Pending"
                                  ? "bg-amber-50 border-amber-200 text-amber-700"
                                  : inq.status === "Contacted"
                                  ? "bg-sky-50 border-sky-200 text-sky-700"
                                  : "bg-emerald-50 border-emerald-200 text-emerald-700"
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                            </select>
                          </td>
                          <td className="py-4 px-5 text-right flex items-center justify-end gap-2.5">
                            <button
                              onClick={() => setSelectedInquiry(inq)}
                              className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center cursor-pointer"
                              title="View Message details"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteInquiry(inq._id)}
                              className="p-2 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors flex items-center justify-center cursor-pointer"
                              title="Delete Log"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Inquiry Detail Sidebar / Drawer Drawer Overlay */}
      <AnimatePresence>
        {selectedInquiry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInquiry(null)}
              className="fixed inset-0 bg-black z-45"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[500px] max-w-full bg-white shadow-2xl z-50 p-8 border-l border-slate-100 overflow-y-auto flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <span className="block text-[9px] font-bold text-sky-600 tracking-widest uppercase">
                      Inquiry Details
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg mt-1">
                      {selectedInquiry.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="p-2 hover:bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-600 rounded-xl transition-all"
                  >
                    ✕
                  </button>
                </div>

                {/* Info List */}
                <div className="space-y-6">
                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${selectedInquiry.email}`}
                        className="mt-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:underline break-all"
                      >
                        <Mail size={13} />
                        {selectedInquiry.email}
                      </a>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Phone Number
                      </span>
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="mt-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:underline"
                      >
                        <Phone size={13} />
                        {selectedInquiry.phone}
                      </a>
                    </div>
                  </div>

                  {/* Requested Service & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Requested Category
                      </span>
                      <span className="mt-1.5 block text-xs sm:text-sm font-bold text-slate-800">
                        {selectedInquiry.service}
                      </span>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Submitted Dated
                      </span>
                      <span className="mt-1.5 block text-xs text-slate-500 font-medium">
                        {new Date(selectedInquiry.createdAt).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Message Detail Box */}
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Customer Description
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-white p-4 rounded-xl border border-slate-100 whitespace-pre-wrap">
                      {selectedInquiry.message}
                    </p>
                  </div>

                  {/* Status Toggle Box */}
                  <div className="p-6 border border-slate-200/60 rounded-2xl bg-white flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Operational Status
                      </span>
                      <span className="block text-xs font-semibold text-slate-500 mt-0.5">
                        Update client processing step
                      </span>
                    </div>
                    <select
                      value={selectedInquiry.status}
                      onChange={(e: any) => handleStatusChange(selectedInquiry._id, e.target.value)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase border tracking-wider focus:outline-hidden ${
                        selectedInquiry.status === "Pending"
                          ? "bg-amber-50 border-amber-200 text-amber-700"
                          : selectedInquiry.status === "Contacted"
                          ? "bg-sky-50 border-sky-200 text-sky-700"
                          : "bg-emerald-50 border-emerald-200 text-emerald-700"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Delete Block */}
              <div className="border-t border-slate-100 pt-6">
                <button
                  onClick={() => handleDeleteInquiry(selectedInquiry._id)}
                  className="w-full py-4 bg-rose-50 hover:bg-rose-100 border border-rose-200/50 hover:border-rose-300 text-rose-700 font-bold rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <Trash2 size={14} />
                  Delete Inquiry Log
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
