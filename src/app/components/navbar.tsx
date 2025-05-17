import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md border-b border-indigo-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left: Logo + Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="SmartKit Logo"
            width={50}
            height={50}
            className="rounded-md shadow-md"
          />
          <span className="md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 hover:brightness-125 transition">
            SmartKit
          </span>
        </Link>

        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center space-x-10 md:space-x-12">
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
      </div>
    </nav>
  );
}
