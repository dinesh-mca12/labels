"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919626638614";
  const defaultMessage = encodeURIComponent(
    "Hello Velmurugan Labels, I would like to inquire about your premium printing services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Velmurugan Labels on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors duration-200"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 group-hover:hidden" />
        
        {/* WhatsApp Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.411 2.439 1.109 3.393l-.724 2.645 2.716-.712c.915.586 2.002.934 3.17.934 3.182 0 5.767-2.585 5.767-5.766 0-3.18-2.585-5.766-5.767-5.766zm3.435 8.167c-.201.564-1.18 1.096-1.637 1.137-.417.037-.962.062-2.73-.67-2.261-.937-3.693-3.237-3.805-3.39-.112-.149-.912-1.21-.912-2.31 0-1.1.573-1.637.774-1.862.202-.226.44-.282.588-.282.148 0 .296.002.422.009.135.006.315-.052.493.38.188.457.643 1.571.7 1.684.056.113.093.245.018.395-.075.15-.112.245-.224.376-.113.131-.237.293-.338.394-.112.112-.229.234-.098.46.131.226.582.962 1.25 1.56.862.77 1.585 1.008 1.81 1.121.226.112.357.094.488-.056.131-.15.564-.658.714-.883.15-.225.301-.188.508-.113.207.075 1.315.62 1.54.732.226.113.376.169.433.263.057.094.057.545-.144 1.109z" />
        </svg>

        {/* Hover label */}
        <span className="absolute right-16 scale-0 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md group-hover:scale-100 origin-right transition-all duration-200 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
