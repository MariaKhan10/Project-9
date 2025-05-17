"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi"; // React icon for external link/launch

export default function About() {
  // Yahan apna Streamlit SmartKit link daalein
  const smartKitLink = "https://your-streamlit-smartkit-link.app";

  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-28 px-6 text-center rounded-b-3xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">
          Smart<span className="text-yellow-300">Kit</span> 🧰
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          Your All-in-One Productivity Toolkit – AI Tools, Health Assistant, Task Management & More!
        </p>
        <div className="flex justify-center mt-6">
          <a
            href={smartKitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-indigo-900 font-bold mt-4 px-10 py-5 rounded-xl hover:bg-yellow-300 transition flex items-center gap-3 shadow-lg animate-pulse"
            title="Click to launch SmartKit application"
          >
            Launch SmartKit <FiExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
