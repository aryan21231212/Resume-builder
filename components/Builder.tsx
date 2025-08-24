"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import MinimalTemplate from "./Minimal";
import ModernTemplate from "./Modern";
import CreativeTemplate from "./Creative";

type Step =
  | "Personal Info"
  | "Education"
  | "Experience"
  | "Skills"
  | "Summary";

interface Experience {
  role: string;
  company: string;
  years: string;
  details: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
}

type TemplateId = "classic" | "modern" | "creative";

const steps: Step[] = [
  "Personal Info",
  "Education",
  "Experience",
  "Skills",
  "Summary",
];

const templates: { id: TemplateId; name: string; previewColor: string }[] = [
  { id: "classic", name: "Classic", previewColor: "bg-blue-500" },
  { id: "modern", name: "Modern", previewColor: "bg-green-500" },
  { id: "creative", name: "Creative", previewColor: "bg-purple-500" },
];

const Builder: React.FC = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("classic");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    summary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  const prevStep = () => setStepIndex((i) => (i > 0 ? i - 1 : i));

  const normalizedData: ResumeData = useMemo(() => {
    const eduText = form.education.trim();
    const expText = form.experience.trim();
    const skillsArr = form.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean) || [];

    const education: Education[] = eduText ? [{ degree: eduText, institution: "", year: "" }] : [];
    const experience: Experience[] = expText
      ? [{ role: expText, company: "", years: "", details: form.summary || "" }]
      : [];

    return {
      name: form.name || "",
      email: form.email || "",
      phone: form.phone || "",
      education,
      experience,
      skills: skillsArr,
    };
  }, [form]);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <MinimalTemplate data={normalizedData} />;
      case "modern":
        return <ModernTemplate data={normalizedData} />;
      case "creative":
        return <CreativeTemplate data={normalizedData} />;
      default:
        return <MinimalTemplate data={normalizedData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Steps */}
      <div className="flex justify-center gap-3 p-6 flex-wrap">
        {steps.map((label, i) => (
          <div
            key={label}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              i === stepIndex ? "bg-blue-500" : "bg-gray-700 text-gray-300"
            }`}
          >
            {label}
          </div>
        ))}
      </div>


      <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-6 p-6 items-start">

        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full md:w-1/2 bg-gray-950 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">{steps[stepIndex]}</h2>

          {stepIndex === 0 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              />
            </>
          )}

          {stepIndex === 1 && (
            <textarea
              name="education"
              placeholder="Education (free text for now)"
              value={form.education}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {stepIndex === 2 && (
            <textarea
              name="experience"
              placeholder="Experience (free text for now)"
              value={form.experience}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {stepIndex === 3 && (
            <textarea
              name="skills"
              placeholder="Skills (comma separated)"
              value={form.skills}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}

          {stepIndex === 4 && (
            <textarea
              name="summary"
              placeholder="Professional summary"
              value={form.summary}
              onChange={handleChange}
              className="w-full p-3 h-40 rounded-lg bg-gray-800 text-white"
            />
          )}


          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={prevStep}
              disabled={stepIndex === 0}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
            >
              Back
            </button>

            {stepIndex < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={() => alert("PDF generation triggered!")}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600"
              >
                Generate PDF
              </button>
            )}
          </div>
        </motion.div>


        <div className="w-full md:w-1/2 bg-gray-950 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Choose Template</h2>
          <div className="flex gap-3 mb-6 flex-wrap">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                onClick={() => setSelectedTemplate(tpl.id)}
                className={`w-20 h-20 rounded-lg flex items-center justify-center text-xs font-bold border-2 transition ${
                  selectedTemplate === tpl.id ? "border-white" : "border-gray-700"
                } ${tpl.previewColor}`}
                aria-pressed={selectedTemplate === tpl.id}
              >
                {tpl.name}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
          <div
            className="shadow-md"
            style={{
              minHeight: "150mm",
              background: "black",
            }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>
      <div className="w-full h-5 bg-white"> </div>
    </div>
  );
};

export default Builder;
