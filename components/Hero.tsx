"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";

const titles = ["VIRTUAL ASSISTANT", "BSIT STUDENT", "TECH ENTHUSIAST"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h2 className="text-xl font-light tracking-widest mb-4">HELLO, IM A</h2>
      <div className="h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black text-black"
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
      
      <p className="max-w-md mt-6 text-gray-700">
        Bridging the gap between administrative excellence and technical innovation.
      </p>

      <a 
        href="/resume.pdf" 
        download 
        className="mt-10 flex items-center gap-2 bg-black text-cream px-8 py-3 rounded-full hover:bg-blush hover:text-black transition-all font-bold"
      >
        <FileDown size={20} /> DOWNLOAD CV
      </a>
    </section>
  );
}