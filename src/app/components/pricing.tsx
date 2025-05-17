"use client";

import React from "react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 mb-12">
          Start free and upgrade anytime to unlock premium AI tools and features.
        </p>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {/* Free Plan */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Free Plan</h3>
            <p className="text-3xl font-bold text-indigo-600 mb-6">
              $0 <span className="text-base font-normal">/ forever</span>
            </p>
            <p className="text-gray-700 mb-6">
              Get access to core tools and start boosting your productivity right away.
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 text-left">
              <li>✅ Task Manager</li>
              <li>✅ Budget Tracker</li>
              <li>✅ Habit Tracker</li>
              <li>✅ Notes Manager</li>
              <li>❌ ProWriter AI</li>
              <li>❌ MediConsult pro</li>
              <li>❌ Smart Helper</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg transition">
              Start Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-indigo-600 shadow-xl rounded-xl p-8 border-4 border-indigo-500 text-white">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-3xl font-bold mb-6">
              $1 <span className="text-base font-normal">/ month</span>
            </p>
            <p className="mb-6">
              Unlock all free features plus premium AI tools with advanced capabilities.
            </p>
            <ul className="space-y-3 text-left">
              <li>✅ All Free Plan features</li>
              <li>✅ ProWriter AI ✨ </li>
              <li>✅ MediConsult pro 🩺 </li>
              <li>✅ Smart Helper 🌐 </li>
              <li>✅ Priority support & updates</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 font-semibold py-3 mt-24 rounded-lg transition">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
