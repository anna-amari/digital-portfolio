"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/SideBar";
import { 
  Star, CheckCircle2, Layout, Video, PenTool, Code, 
  FileDown, GraduationCap, Briefcase, MessageSquare, ExternalLink 
} from "lucide-react";

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["VIRTUAL ASSISTANT", "BSIT STUDENT", "TECH ENTHUSIAST"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { title: "Administrative Excellence", desc: "Expert Calendar & Email Management and meticulous Documentation Organization." },
    { title: "Data & Tech Support", desc: "Accurate Data Entry and IT-aligned support for digital workspace efficiency." },
    { title: "Client & Social Growth", desc: "Professional Client Communications and Social Media Support with consistent follow-ups." },
  ];

  const toolCategories = [
    { name: "Productivity", icon: <Layout size={20} />, tools: ["MS Office 365", "Notion"] },
    { name: "Creative", icon: <PenTool size={20} />, tools: ["Canva", "CapCut", "Figma"] },
    { name: "Communication", icon: <Video size={20} />, tools: ["Zoom", "Google Meet", "Gmail", "Social Media Platform"] },
    { name: "IT Stack", icon: <Code size={20} />, tools: ["Vanila: HTML, CSS, Javascript", "Node.js", "Python", "SQL", "Git/GitHub"] }
  ];

  return (
    <main className="selection:bg-blush min-h-screen">
      <Sidebar />

      {/* Navigation */}
      <nav className="fixed top-0 w-full flex justify-between p-8 z-50 mix-blend-difference text-white">
        <div className="font-bold text-xl uppercase tracking-tighter">AMARI.</div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest">
          <a href="#about" className="hover:text-blush transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-blush transition-colors">SERVICES</a>
          <a href="#education" className="hover:text-blush transition-colors">EDUCATION</a>
          <a href="#contact" className="hover:text-blush transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-sm tracking-[0.4em] uppercase mb-4 text-gray-500 font-bold"
        >
          Welcome to my Portfolio
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">AMARI</h1>
        
        <div className="h-20">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titles[titleIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-light tracking-[0.2em] text-black"
            >
              {titles[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <a 
          href="/resume.pdf" download
          className="mt-12 flex items-center gap-3 bg-black text-cream px-10 py-4 rounded-full hover:bg-blush hover:text-black transition-all font-bold tracking-widest text-xs"
        >
          <FileDown size={18} /> DOWNLOAD CV
        </a>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-blush p-12 rounded-[40px] text-black shadow-2xl shadow-blush/20">
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <GraduationCap /> Education
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-black/20 pl-6">
                <p className="font-black text-xl leading-tight uppercase">Polytechnic State University of Bicol</p>
                <p className="text-sm font-bold opacity-70">Nabua, Camarines Sur | College</p>
                <div className="mt-2 inline-block bg-black text-cream text-[10px] px-3 py-1 rounded-full font-bold">
                  GWA: 1.69
                </div>
              </div>

              <div className="border-l-2 border-black/20 pl-6">
                <p className="font-black text-xl leading-tight uppercase">ACLC College of Iriga</p>
                <p className="text-sm font-bold opacity-70">Senior High School</p>
                <p className="text-sm mt-1">Accountancy and Business Management (ABM)</p>
                <div className="mt-2 inline-block bg-white text-black text-[10px] px-3 py-1 rounded-full font-black border border-black">
                  WITH HIGH HONORS
                </div>
              </div>
            </div>
          </div>

          <div className="py-6" id="education">
            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Professional Profile</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              A results-driven professional balancing the organizational precision of a 
              <strong> Virtual Assistant</strong> with the technical logic of an 
              <strong> IT Student</strong>. My background in Business Management (ABM) 
              provides me with a unique edge in understanding client ROI while 
              implementing tech-focused solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-black rounded-2xl">
                <Star className="mb-4 text-blush fill-blush" />
                <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Philosophy</h4>
                <p className="text-sm opacity-70">Efficiency through Technology.</p>
              </div>
              <div className="p-6 bg-black text-cream rounded-2xl">
                <Briefcase className="mb-4 text-blush" />
                <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Availability</h4>
                <p className="text-sm opacity-70">Open for Freelance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-4xl font-black uppercase mb-16 tracking-tighter">Tools & Platforms</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolCategories.map((cat, i) => (
              <div key={i} className="bg-cream p-8 rounded-3xl border border-black/5 hover:border-blush transition-all">
                <div className="bg-black text-blush w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  {cat.icon}
                </div>
                <h4 className="font-black uppercase text-xs tracking-widest mb-6 border-b border-black/10 pb-2">{cat.name}</h4>
                <ul className="space-y-3">
                  {cat.tools.map((t, j) => (
                    <li key={j} className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blush" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h3 className="text-4xl font-black mb-12 uppercase tracking-tighter">My Expertise</h3>
          <div className="grid gap-6">
            {services.map((s, i) => (
              <div key={i} className="group p-8 border-l-4 border-black bg-white/50 hover:bg-blush transition-all">
                <h4 className="text-xl font-black uppercase mb-2 group-hover:tracking-widest transition-all">{s.title}</h4>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black text-cream p-10 rounded-[40px] h-fit sticky top-24">
          <h4 className="text-xl font-black mb-8 flex items-center gap-3"><Star className="text-blush" fill="#F3C6D3"/> Competencies</h4>
          <ul className="space-y-6">
            {["Adaptability", "Time Management", "Technical Troubleshooting", "Client Relations"].map((skill, i) => (
              <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4 last:border-0">
                <CheckCircle2 size={16} className="text-blush" /> {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-4">Get In Touch</h3>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Let's build something efficient together</p>
        </div>
        <form className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest">Name</label>
              <input type="text" className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest">Email</label>
              <input type="email" className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest">Message</label>
            <textarea rows={4} className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors resize-none" />
          </div>
          <button className="bg-black text-cream py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-blush hover:text-black transition-all text-xs">
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">
          © {new Date().getFullYear()} — AMARI DIGITAL PORTFOLIO
        </p>
      </footer>
    </main>
  );
}