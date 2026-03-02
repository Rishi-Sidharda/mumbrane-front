import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#141413]">
      {/* Font link embedded directly in the component */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=psychiatry"
      />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* This span renders the Material Symbol */}
          <span className="material-symbols-outlined text-[#7197CF] text-3xl transition-transform duration-300 group-hover:scale-110">
            psychiatry
          </span>
          <span className="text-[#FAF9F5] font-bold text-2xl tracking-tight">
            Mumbrane
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-8">
          {[
            { name: "How it works", path: "/how-it-works" },
            { name: "Pricing", path: "/pricing" },
            { name: "About us", path: "/about-us" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[#6A6963] text-sm font-medium transition-colors duration-300 hover:text-[#FAF9F5]">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
