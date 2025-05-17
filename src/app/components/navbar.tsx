"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger/close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md border-b border-indigo-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="SmartKit Logo"
            width={50}
            height={50}
            className="rounded-md shadow-md"
          />
          <span className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 hover:brightness-125 transition">
            SmartKit
          </span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-12">
          {["Home", "About", "Contact", "Pricing"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="relative text-white font-semibold uppercase tracking-wider hover:text-indigo-300 transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-5 py-4 bg-gray-900 bg-opacity-90 backdrop-blur-md">
          {["Home", "About", "Contact", "Pricing"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-white font-semibold uppercase tracking-wide hover:text-indigo-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
