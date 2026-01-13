"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/SideBar";
import Chatbot from "@/components/Chatbot";

import { 
  Star, CheckCircle2, Layout, Video, PenTool, Code, 
  FileDown, GraduationCap, Briefcase, ExternalLink, Github, X 
} from "lucide-react";

const TITLES = ["VIRTUAL ASSISTANT", "BSIT STUDENT", "TECH ENTHUSIAST"];

function LogoSection() {
  const logos = [
    { src: '/logo/1.png', title: 'StudLife' },
    { src: '/logo/2.jpg', title: 'CyberControl' },
    { src: '/logo/5.jpg', title: 'Majestic Bloom Aroma' },
    { src: '/logo/3.jpg', title: 'Pet Patrol' },
    { src: '/logo/4.jpg', title: 'eList Book' },

  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Logos</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              {/* Circle Image Container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-pink-500 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Image
                  src={logo.src}
                  alt={`${logo.title} logo`}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={index < 2} // Load first 2 images faster
                />
              </div>
              
              {/* Title */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                  {logo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
 const [activeGallery, setActiveGallery] = useState<typeof projects[0] | null>(null);
   const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;


      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

  
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

 const projects = [
  {
    title: "Pet Patrol System",
    desc: "Adopters can apply for adoption and fill out the form for the foundation to verify.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
   image: "/projects/petpatrol/a1.png", 
    github: "https://github.com/anna-amari/pet-patrol", 
    screenshots: Array.from({ length: 19 }, (_, i) => `/projects/petpatrol/a${i + 1}.png`),
  },
  {
    title: "StudLife: IT Academic System",
    desc: "It consists of Pomodoro Timer, To-Do List, Calendar, and Career Path descriptions.",
    framework: "CodeIgniter 4",
    tech: ["CodeIgniter", "Vanilla", "PHP", "SQL"],
    image: "/projects/studlife/d1.png",
    github: "https://github.com/anna-amari/studlife",
    screenshots: Array.from({ length: 41 }, (_, i) => `/projects/studlife/d${i + 1}.png`),
  },
  {
    title: "CyberControl",
    desc: "It emphasizes awareness of cyber behavior and device protection.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    image: "/projects/cybercontrol/b1.png",
    github: "https://github.com/anna-amari/cybercontrol",
   
    screenshots: Array.from({ length: 7 }, (_, i) => `/projects/cybercontrol/b${i + 1}.png`),
  }
 
];


const services = [
    { title: "Administrative Excellence", desc: "Expert Calendar & Email Management and meticulous Documentation Organization." },
    { title: "Data & Tech Support", desc: "Accurate Data Entry and IT-aligned support for digital workspace efficiency." },
    { title: "Client & Social Growth", desc: "Professional Client Communications and Social Media Support with consistent follow-ups." },
  ];


const toolCategories = [
  { 
    name: "Productivity", 
    icon: <Layout size={20} />, 
    tools: [
      { name: "MS Word", slug: "ms-word", icon: <Image src="/icons/word.jpg" alt="Word" width={20} height={20} className="w-5 h-5" /> },
      { name: "MS Excel", slug: "ms-excel", icon: <Image src="/icons/excel.jpg" alt="Excel" width={20} height={20} className="w-5 h-5" /> },
      { name: "MS Presentation", slug: "ms-presentation", icon: <Image src="/icons/ppt.jpg" alt="PowerPoint" width={20} height={20} className="w-5 h-5" /> }, 
      { name: "Notion", slug: "notion", icon: <Image src="/icons/notion.jpg" alt="Notion" width={20} height={20} className="w-5 h-5" /> }
    ] 
  },
  { 
    name: "Creative", 
    icon: <PenTool size={20} />, 
    tools: [
      { name: "Canva", slug: "canva", icon: <Image src="/icons/canva.jpg" alt="Canva" width={20} height={20} className="w-5 h-5" /> },
      { name: "Capcut", slug: "capcut", icon: <Image src="/icons/capcut.jpg" alt="Capcut" width={20} height={20} className="w-5 h-5" /> }
    ] 
  },
  { 
    name: "Communication", 
    icon: <Video size={20} />, 
    tools: [
      { name: "Zoom", slug: "zoom", icon: <Image src="/icons/zoom.jpg" alt="Zoom" width={20} height={20} className="w-5 h-5" /> },
      { name: "Google Meet", slug: "googlemeet", icon: <Image src="/icons/gmeet.jpg" alt="Google Meet" width={20} height={20} className="w-5 h-5" /> },
      { name: "Gmail", slug: "gmail", icon: <Image src="/icons/gmail.jpg" alt="Gmail" width={20} height={20} className="w-5 h-5" /> }
    ] 
  },
  { 
    name: "IT Stack", 
    icon: <Code size={20} />, 
    tools: [
      { name: "HTML", slug: "html5", icon: <Image src="/icons/html.jpg" alt="HTML5" width={20} height={20} className="w-5 h-5" /> },
      { name: "CSS3", slug: "css3", icon: <Image src="/icons/css3.jpg" alt="CSS3" width={20} height={20} className="w-5 h-5" /> },
      { name: "Next.js", slug: "nextdotjs", icon: <Image src="/icons/nextjs.jpg" alt="Next.js" width={20} height={20} className="w-5 h-5" /> },
      { name: "SQL", slug: "mysql", icon: <Image src="/icons/sql.jpg" alt="SQL" width={20} height={20} className="w-5 h-5" /> },
      { name: "GitHub", slug: "github", icon: <Image src="/icons/github.jpg" alt="GitHub" width={20} height={20} className="w-5 h-5" /> }
    ] 
  }
];

  return (
    <main className="selection:bg-blush min-h-screen">
      <Sidebar />

<motion.nav
  initial={{ y: 0 }}
  animate={{ y: isVisible ? 0 : -100 }}
  transition={{ duration: 0.3 }}
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/70 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-8"
  }`}
>
  {/* Container to push items to the far edges with padding */}
  <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
    
    {/* Upper Left: Logo */}
    <div className="flex items-center">
      <Image 
        src="/amari1.png" 
        alt="AMARI Logo" 
        width={80}
        height={80}
        className="h-20 md:h-20 w-auto object-contain transition-all"
      />
    </div>

    {/* Upper Right: Links */}
    <div className="hidden md:flex items-center gap-12 text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-black ml-auto">
      <a href="#about" className="hover:text-blush transition-colors relative group">
        About
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush transition-all group-hover:w-full"></span>
      </a>
      <a href="#work" className="hover:text-blush transition-colors relative group">
        Work
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush transition-all group-hover:w-full"></span>
      </a>
      <a href="#services" className="hover:text-blush transition-colors relative group">
        Services
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush transition-all group-hover:w-full"></span>
      </a>
      <a href="#education" className="hover:text-blush transition-colors relative group">
        Education
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush transition-all group-hover:w-full"></span>
      </a>
       <a href="#contact" className="hover:text-blush transition-colors relative group">
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush transition-all group-hover:w-full"></span>
      </a>
    
    </div>
  </div>
</motion.nav>
{/* Hero Section - Text Dead Center, Image on the Right */}
<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-blush/10">
  
  {/* 1. Centered Text Content (z-10 ensures it stays on top) */}
  <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6">
    <motion.p 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      className="text-sm tracking-[0.4em] uppercase text-gray-500 font-bold"
    >
      Hi, I&apos;m
    </motion.p>
    
    <h1 className="text-7xl md:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-none text-black">
      AMARI
    </h1>
    
    <div className="h-16 md:h-20 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={TITLES[titleIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-light tracking-[0.2em] text-gray-400 uppercase"
        >
          {TITLES[titleIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <a 
        href="/Resume.docx" 
        download
        className="mt-8 flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full hover:bg-blush hover:text-black transition-all font-bold tracking-widest text-xs shadow-xl"
      >
        <FileDown size={18} /> DOWNLOAD CV
      </a>
    </motion.div>
  </div>

  {/* 2. Right-Aligned Image (Visible only on Large screens to avoid overlapping text on mobile) */}
  <div className="absolute right-0 lg:right-10 xl:right-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-80 xl:opacity-100">
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
    >
      {/* Decorative Blur behind image */}
      <div className="absolute inset-0 bg-blush/20 blur-[100px] rounded-full -z-10"></div>

      <div className="
        relative
        w-full 
        h-full 
        rounded-full 
        overflow-hidden 
        border-12
        border-white 
        shadow-[0_20px_50px_rgba(0,0,0,0.1)]
      ">
        <Image
          src="/anna.jpg"
          alt="Portrait of Amari"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Small floating accents */}
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blush/30 rounded-full blur-2xl"></div>
    </motion.div>
  </div>

  {/* Mobile Image (Visible only on mobile/tablet, centered below text) */}
  <div className="lg:hidden mt-12">
      {/* If you want the image on mobile, it would go here, 
          otherwise the section remains clean with just centered text on phone */}
  </div>

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
              provides me with a unique edge in understanding the cleint while 
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

  {/* Tools & Platforms Section */}
<section id="tools" className="py-24 bg-white/40">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Tools & Platforms</h3>
      <p className="text-gray-500 uppercase tracking-widest text-[10px] font-sans">Tech stack & Software Expertise</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {toolCategories.map((cat, i) => (
        <div key={i} className="bg-cream p-8 rounded-4xl border border-black/5 hover:border-blush transition-all flex flex-col">
          <div className="bg-black text-blush w-10 h-10 rounded-2xl flex items-center justify-center mb-6">
            {cat.icon}
          </div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-8 border-b border-black/10 pb-2">
            {cat.name}
          </h4>
          
        {/* Visual Grid of Icons */}
<div className="grid grid-cols-2 gap-4">
  {cat.tools.map((t, j) => (
    <div key={j} className="flex flex-col items-center gap-2 group">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-black/5 group-hover:border-blush group-hover:shadow-lg group-hover:shadow-blush/20 transition-all">
        
        {/* THE FIX: Check if we have a local icon first */}
        {t.icon ? (
          /* This renders your <img> from the toolCategories array */
          t.icon
        ) : (
          /* This renders the SimpleIcons only if no local icon is provided */
          <Image 
            src={`https://cdn.simpleicons.org/${t.slug}`} 
            alt={t.name}
            width={24}
            height={24}
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 object-contain"
          />
        )}

      </div>
      <span className="text-[9px] font-bold uppercase tracking-tight text-center opacity-60 group-hover:opacity-100 transition-opacity">
        {t.name}
      </span>
    </div>
  ))}
</div>
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
            {["Adaptability", "Time Management", "Flexibility", "Client Relations"].map((skill, i) => (
              <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4 last:border-0">
                <CheckCircle2 size={16} className="text-blush" /> {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

{/* Featured Work Section */}
<section id="work" className="py-24 px-6 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h3 className="text-4xl font-serif uppercase tracking-tighter mb-2 italic">Featured Work</h3>
    <p className="text-gray-500 uppercase tracking-widest text-[10px] font-sans">Academic & Development Projects</p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((proj, i) => (
      <div key={i} className="group bg-white border border-black/5 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full">
        {/* Project Thumbnail */}
        <div className="relative h-64 overflow-hidden">
          <Image src={proj.image} alt={proj.title} width={400} height={256} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
             <a href={proj.github} target="_blank" className="bg-white p-3 rounded-full hover:bg-blush transition-colors text-black">
                <Github size={20} />
             </a>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1">
          <h4 className="text-xl font-black uppercase mb-3">{proj.title}</h4>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">{proj.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {proj.tech?.map((t, j) => (
              <span key={j} className="text-[9px] bg-black text-white px-3 py-1 rounded-full font-bold uppercase tracking-tighter">{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button 
              onClick={() => setActiveGallery(proj)}
              className="flex items-center justify-center gap-2 bg-gray-100 text-black py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blush transition-all"
            >
              <Layout size={14} /> Screenshots
            </button>
            <a 
              href={proj.github} 
              target="_blank"
              className="flex items-center justify-center gap-2 bg-black text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blush hover:text-black transition-all"
            >
              <ExternalLink size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>

  <AnimatePresence>
    {activeGallery && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 bg-black/95 flex flex-col p-6 md:p-12"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-white text-2xl font-serif italic">{activeGallery.title}</h2>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">{activeGallery.screenshots.length} Images</p>
          </div>
          <button onClick={() => setActiveGallery(null)} className="text-white hover:text-blush transition-colors">
            <X size={32} />
          </button>
        </div>

        {/* Scrollable Gallery Grid */}
        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {activeGallery.screenshots.map((src, idx) => (
              
             <motion.div key={idx}>
              <Image 
                src={src}
                alt={`Screenshot ${idx + 1}`}
                width={600}
                height={400}
                className="w-full rounded-2xl border border-white/10 bg-white"
              />
            </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

 <LogoSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-serif uppercase tracking-tighter mb-4">Get In Touch</h3>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-sans">Let&apos;s build something efficient together</p>
        </div>

        {/* 1. Add the Action URL */}
        <form action="https://api.web3forms.com/submit" method="POST" className="grid gap-8">
          
          {/* 2. Add your Access Key here */}
          <input type="hidden" name="access_key" value="66fbfefa-4a9d-403c-8963-7f29f436a7af" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest">Name</label>
              <input name="name" required type="text" className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest">Email</label>
              <input name="email" required type="email" className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest">Message</label>
            <textarea name="message" required rows={4} className="bg-transparent border-b-2 border-black p-3 focus:outline-none focus:border-blush transition-colors resize-none" />
          </div>
          
          <input type="hidden" name="redirect" value="https://yourportfolio.com/thanks" />

          <button type="submit" className="bg-black text-cream py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-blush hover:text-black transition-all text-xs">
            Send Message
          </button>
        </form>
      </section>

 <Chatbot />


      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">
          © {new Date().getFullYear()} — Amari&apos;s Portfolio
        </p>
      </footer>
    </main>
  );
}