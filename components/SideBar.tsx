"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  
  const handleEmailClick = () => {
    // 1. Bot Protection: Keep your email split
    const user = "annamarietaduran44";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;

    // 2. Pre-fill Subject and Body (Optional)
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent("Hi Amari,\n\nI saw your portfolio and would like to connect...");

    // 3. THE FIX: Direct Gmail Web URL
    // This bypasses the computer's "mailto" settings and opens Gmail in the browser
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed left-6 bottom-0 hidden flex-col items-center gap-6 md:flex z-[100]">
      <button 
        onClick={() => handleSocialClick("https://github.com/anna-amari")}
        className="hover:text-blush transition-colors cursor-pointer"
        aria-label="GitHub"
      >
        <Github size={24} strokeWidth={1.5} />
      </button>

      <button 
        onClick={() => handleSocialClick("https://www.linkedin.com/in/anna-marie-taduran-26b9052b3/")}
        className="hover:text-blush transition-colors cursor-pointer"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} strokeWidth={1.5} />
      </button>

      {/* This button now forces Gmail Web */}
      <button 
        onClick={handleEmailClick}
        className="hover:text-blush transition-colors cursor-pointer"
        aria-label="Send Email"
      >
        <Mail size={24} strokeWidth={1.5} />
      </button>

      <div className="h-24 w-[1px] bg-black/20"></div>
    </div>
  );
}