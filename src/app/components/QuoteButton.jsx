// src/app/components/QuoteButton.jsx
"use client";

import { FileText, Mail } from "lucide-react";
import { OPEN_POPUP_EVENT } from "./EnquiryPopup";

const variants = {
  quote: { icon: FileText, colors: "bg-[#FDBE46] hover:bg-[#f3b129]" },
  enquiry: { icon: Mail, colors: "bg-[#F15D87] hover:bg-[#e04578]" },
};

// Click pe layout wala EnquiryPopup khulta hai (same web3forms keys)
export default function QuoteButton({ label = "Get Quotation", variant = "quote" }) {
  const { icon: Icon, colors } = variants[variant];

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_POPUP_EVENT))}
      className={`inline-flex items-center justify-center gap-2 rounded-full ${colors} transition text-white text-sm sm:text-base font-bold tracking-wide px-8 py-3`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
