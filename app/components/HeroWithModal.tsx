"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

export default function HeroWithModal({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block cursor-pointer"
        style={{ display: "block" }}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <p className="text-gray-800 font-bold text-lg mb-6 mt-2">
              まずはお気軽にご相談ください
            </p>

            <a
              href="/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full"
            >
              <img
                src="/pic/icon/line_logo.jpg"
                alt="LINE"
                className="w-6 h-6 rounded-md object-contain border border-white/50"
              />
              LINEで相談する
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
