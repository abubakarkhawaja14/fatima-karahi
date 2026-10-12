"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open popup smoothly on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Thanksgiving Notice"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-xs transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative max-h-[90dvh] max-w-[min(92vw,460px)] overflow-hidden rounded-2xl border border-gold/40 bg-emerald-deep shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close 'X' Button - Touch friendly & prominent */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-2.5 top-2.5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gold/60 bg-emerald-deep/90 text-ivory shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-gold hover:text-ink active:scale-95 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Thanksgiving Image */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src="/thanksgiving.jpg"
            alt="Thanksgiving Special"
            width={1320}
            height={1620}
            priority
            className="h-auto max-h-[82dvh] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
