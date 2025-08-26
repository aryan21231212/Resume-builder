"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center text-white max-w-4xl mx-auto">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            404
          </h1>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-10 sm:-left-20 text-6xl"
          >
            🚀
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -8, 8, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -top-10 -right-10 sm:-right-20 text-5xl"
          >
            🌌
          </motion.div>
        </div>

        {/* Main Message */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
        >
          Oops! Lost in Space?
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
        >
          The page you are looking for seems to have drifted off into the cosmos. 
          Do not worry, we will help you navigate back home.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => router.back()}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            ← Go Back
          </button>
          
          <button
            onClick={() => router.push("/")}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            🏠 Return Home
          </button>
        </motion.div>

        {/* Search Bar for Fun */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-12"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search the galaxy..."
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-300"
            />
            <button className="absolute right-2 top-2 bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition-colors">
              🔍
            </button>
          </div>
        </motion.div>

        {/* Fun Facts/Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-cyan-400">∞</div>
            <p className="text-sm text-gray-400">Possibilities</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <p className="text-sm text-gray-400">Chance to Explore</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-pink-400">404</div>
            <p className="text-sm text-gray-400">Pages Not Found</p>
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-400 text-sm"
        >
          <p>While you are here, enjoy the view of the digital cosmos 🌠</p>
        </motion.div>

        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}