import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed left-6 bottom-0 hidden flex-col items-center gap-6 md:flex">
      <a href="https://github.com" className="hover:text-blush transition-colors"><Github size={24} /></a>
      <a href="https://linkedin.com" className="hover:text-blush transition-colors"><Linkedin size={24} /></a>
      <a href="mailto:your@email.com" className="hover:text-blush transition-colors"><Mail size={24} /></a>
      <div className="h-24 w-[1px] bg-black"></div>
    </div>
  );
}