"use client";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">

      <section className="w-full bg-gray-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Build Your Resume in Minutes 
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          A simple, fast, and professional resume builder powered by modern design.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="bg-indigo-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 px-6  w-full text-center">
        <h2 className="text-3xl font-bold text-indigo-500 mb-12">Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Easy to Use", desc: "No complex setup – build your resume in minutes." },
            { title: "Modern Templates", desc: "Pick from stylish and professional designs." },
            { title: "Export PDF", desc: "Download your resume instantly, ready to share." }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Create Your Resume?
        </h2>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition">
          Start Now
        </button>
      </section>

      <div className="w-full h-5 bg-white">

      </div>
    </div>
  );
};

export default Home;
