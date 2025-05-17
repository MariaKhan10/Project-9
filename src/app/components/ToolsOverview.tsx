"use client";

import React from "react";

const tools = [
  { name: "Task Manager", emoji: "✅", description: "Organize and track your tasks efficiently." },
  { name: "Budget Tracker", emoji: "💰", description: "Manage your expenses and savings." },
  { name: "Habit Tracker", emoji: "🔥", description: "Build and maintain good habits daily." },
  { name: "Notes Manager", emoji: "🗒️", description: "Keep your notes organized and accessible." },
  { name: "ProWriter AI ✨ (Free Trial)", emoji: "✍️", description: "AI-powered writing assistant." },
  { name: "MediConsult pro 🩺 (Free Trial)", emoji: "🩺", description: "Professional medical consultation tool." },
];

export default function ToolsOverview() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-900 drop-shadow-sm">
          What You Can Do with <span className="text-pink-500">SmartKit</span>
        </h2>
        <p className="text-indigo-700 mb-14 max-w-xl mx-auto">
          Explore the powerful AI tools built to save your time and boost your productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-transform border-2 border-transparent hover:border-pink-400"
              tabIndex={0}
              aria-label={`${tool.name} tool: ${tool.description}`}
            >
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-600 text-white text-3xl shadow-md">
                {tool.emoji}
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">{tool.name}</h3>
              <p className="text-indigo-600 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
