import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const phoneNumber = "+8801521102885";
  const emailAddress = "mdrehmant@gmail.com";

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    toast.success(message, {
      position: "bottom-center",
      style: {
        background: "#fff7ed", // light orange tone
        color: "#1c1c1c", // dark text
        border: "1px solid #ea580c", // orange-500
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      },
    });
  };

  return (
    <>
      <Toaster />
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#93c5fd] text-black py-4 px-6 text-center rounded-t-xl shadow-lg relative overflow-hidden"
      >
        {/* Animated top border */}
        <div className="absolute inset-0 border-t border-[#f97316] animate-pulse pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-6">
            {/* Email */}
            <button
              onClick={() => copyToClipboard(emailAddress, "Email copied!")}
              className="flex items-center group text-sm sm:text-base cursor-pointer"
              title="Click to copy email"
            >
              <FaEnvelope className="mr-2 text-black/90" />
              <span className="relative pb-[1px]">
                {emailAddress}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>

            {/* Copyright */}
            <p className="text-xs sm:text-sm font-light">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-black font-semibold">Toufique</span> — All rights reserved.
            </p>

            {/* Phone */}
            <button
              onClick={() => copyToClipboard(phoneNumber, "Phone number copied!")}
              className="flex items-center group text-sm sm:text-base cursor-pointer"
              title="Click to copy phone number"
            >
              <FaPhone className="mr-2 text-black/90" />
              <span className="relative pb-[1px]">
                {phoneNumber}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
