// src/app/components/FaqAccordion.jsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// faqs: [{ q, a }] — answer DOM me hamesha rahta hai (SEO), sirf CSS se hide hota hai
export default function FaqAccordion({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
      {faqs.map((item, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            className="rounded-[16px] bg-white border border-[#EAEAEA] overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left"
            >
              <h3 className="font-capriola text-[15px] sm:text-[17px] text-[#21324A] leading-snug">
                {index + 1}. {item.q}
              </h3>

              <ChevronDown
                size={20}
                className={`shrink-0 text-[#F15D87] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <p
              className={`px-5 sm:px-7 pb-4 sm:pb-5 text-[15px] sm:text-base text-[#5F5F5F] leading-7 ${
                isOpen ? "" : "hidden"
              }`}
            >
              {item.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
