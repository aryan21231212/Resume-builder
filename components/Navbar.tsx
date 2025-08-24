"use client";
import { useState } from "react";
import Link from "next/link";
import Home from "./Home";
import HowitWorks from "./HowitWorks";
import Builder from "./Builder";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleScrollTo = (id: string) => {
    setMenuOpen(false); 
    

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {

        const navbarHeight = 70; 
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    }, 100);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-400"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ResumeGen
          </Link>


          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => handleScrollTo('home')} 
              className="hover:text-blue-400 transition"
            >
              Home
            </button>
            <button 
              onClick={() => handleScrollTo('builder')} 
              className="hover:text-blue-400 transition"
            >
              Builder
            </button>
            <button 
              onClick={() => handleScrollTo('how-it-works')} 
              className="hover:text-blue-400 transition"
            >
              How It Works
            </button>
          </div>


          <button
            onClick={() => handleScrollTo('builder')}
            className="hidden md:inline bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Start Building
          </button>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none text-xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>


        {menuOpen && (
          <div className="md:hidden bg-gray-800 text-center py-4 space-y-4">
            <button
              onClick={() => handleScrollTo('home')}
              className="block hover:text-blue-400 w-full py-2 text-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('builder')}
              className="block hover:text-blue-400 w-full py-2 text-lg"
            >
              Builder
            </button>
            <button
              onClick={() => handleScrollTo('how-it-works')}
              className="block hover:text-blue-400 w-full py-2 text-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => handleScrollTo('builder')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mx-auto w-40"
            >
              Start Building
            </button>
          </div>
        )}
      </nav>



      

      <section id="home" >
        <Home/>
      </section>
      
      <section id="builder">
        <Builder/>
      </section>
      
      <section id="how-it-works" >
        <HowitWorks/>
      </section>
    </>
  );
}