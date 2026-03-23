"use client";

import { handleLineClick } from "@/lib/lineConversion";

export default function LineImageLink({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <a href="#" onClick={handleLineClick} className="block cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        style={{ display: "block" }}
      />
    </a>
  );
}
