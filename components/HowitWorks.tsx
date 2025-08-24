"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Enter Your Details",
    description:
      "Fill in your personal info, education, skills, and work experience with our easy-to-use form.",
  },
  {
    id: 2,
    title: "Choose a Template",
    description:
      "Pick from modern, professional, and creative resume templates designed to impress recruiters.",
  },
  {
    id: 3,
    title: "Customize & Preview",
    description:
      "Adjust layouts, fonts, and colors in real time to match your style and preferences.",
  },
  {
    id: 4,
    title: "Download Your Resume",
    description:
      "Export your resume instantly as a PDF and share it with employers hassle-free.",
  },
];

const HowitWorks = () => {
  return (
    <section className="w-full py-16 bg-gray-900 text-gray-100 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Build your professional resume in just a few easy steps. No design
          skills required – we make it simple and fast.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-4 p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <CheckCircle className="w-8 h-8 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowitWorks;
