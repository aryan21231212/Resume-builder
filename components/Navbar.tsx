"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 sticky text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        

        <Link href="/" className="text-2xl font-bold text-blue-400">
          ResumeGen
        </Link>


        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/builder" className="hover:text-blue-400">Builder</Link>
          <a href="#how-it-works" className="hover:text-blue-400">How It Works</a>
        </div>


        <Link
          href="/builder"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Start Building
        </Link>
      </div>
    </nav>
  );
}
