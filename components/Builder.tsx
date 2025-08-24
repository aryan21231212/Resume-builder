"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = ["Personal Info", "Education", "Experience", "Skills", "Summary"];

const Builder = () => {
  const [step, setStep] = useState(0);
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    summary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const nextStep = () => step < steps.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Progress Bar */}
      <div className="flex justify-center space-x-4 p-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              i === step ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-6xl mx-auto w-full gap-6 p-6">
        {/* Left Form */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 bg-gray-950 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">{steps[step]}</h2>

          {step === 0 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={resume.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={resume.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={resume.phone}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
            </>
          )}

          {step === 1 && (
            <textarea
              name="education"
              placeholder="Education details"
              value={resume.education}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {step === 2 && (
            <textarea
              name="experience"
              placeholder="Experience details"
              value={resume.experience}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {step === 3 && (
            <textarea
              name="skills"
              placeholder="Skills (comma separated)"
              value={resume.skills}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {step === 4 && (
            <textarea
              name="summary"
              placeholder="Professional summary"
              value={resume.summary}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => alert("Exporting to PDF...")}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600"
              >
                Export PDF
              </button>
            )}
          </div>
        </motion.div>

        {/* Right Preview */}
        <div className="flex-1 bg-gray-950 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
          <div className="space-y-3 text-gray-300">
            <p><span className="font-bold text-white">Name:</span> {resume.name}</p>
            <p><span className="font-bold text-white">Email:</span> {resume.email}</p>
            <p><span className="font-bold text-white">Phone:</span> {resume.phone}</p>
            <p><span className="font-bold text-white">Education:</span> {resume.education}</p>
            <p><span className="font-bold text-white">Experience:</span> {resume.experience}</p>
            <p><span className="font-bold text-white">Skills:</span> {resume.skills}</p>
            <p><span className="font-bold text-white">Summary:</span> {resume.summary}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-5 bg-white"></div>
    </div>
  );
};

export default Builder;
