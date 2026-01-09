"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Beep boop! 🤖 I'm Amari's Logic Bot. Ask me about her projects like StudLife or Pet Patrol, or her IT skills!" }
  ]);
  
  const scrollRef = useRef(null);
  const botGif = "/bot.gif";

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- UPDATED LOGIC ENGINE ---
  const getBotResponse = (question) => {
    const q = question.toLowerCase();
    
    // Project Specifics
    if (q.includes("studlife")) {
      return "StudLife is an IT Academic System built with CodeIgniter 4. It features a Pomodoro Timer, To-Do List, and Career Path descriptions to help students stay organized!";
    }
    if (q.includes("pet patrol")) {
      return "Pet Patrol is a full-stack adoption system where I used PHP and SQL. It allows foundations to verify adopters and manage pet listings efficiently.";
    }
    if (q.includes("cybercontrol")) {
      return "CyberControl is a project focused on cybersecurity awareness. It teaches users about device protection and safe cyber behavior.";
    }

    // Skills & Stack
    if (q.includes("skill") || q.includes("tool") || q.includes("stack")) {
      return "Amari's IT stack includes HTML5, CSS3, JavaScript, Python, Node.js, and SQL. For VA work, she is an expert in Notion, MS Office 365, Canva, and Figma!";
    }

    // Education
    if (q.includes("education") || q.includes("school") || q.includes("gwa")) {
      return "Amari is a BSIT student at PSU Bicol with a 1.69 GWA. She graduated SHS from ACLC College with High Honors!";
    }

    // Contact
    if (q.includes("contact") || q.includes("email") || q.includes("hire")) {
      return "You can reach Amari at annamarietaduran44@gmail.com or by using the contact form right here on the website.";
    }

    if (q.includes("hello") || q.includes("hi")) {
      return "Hi there! I'm Amari's AI. Want to hear about her 'StudLife' project or her 'IT Skills'?";
    }
    
    return "I'm still learning! 🧠 Try asking about 'StudLife', 'Pet Patrol', or her 'Tech Stack'.";
  };

  const handleSendMessage = async (e, manualText = null) => {
    if (e) e.preventDefault();
    const messageText = manualText || input;
    if (!messageText.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: messageText }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotResponse(messageText) }]);
      setIsTyping(false);
    }, 8000); // 0.8s delay for "thinking"
  };

  // Quick helper for suggestion buttons
  const SuggestionBtn = ({ text }) => (
    <button 
      onClick={() => handleSendMessage(null, text)}
      className="text-[9px] bg-white border border-black/10 px-3 py-1.5 rounded-full hover:bg-blush transition-colors uppercase font-bold tracking-tighter"
    >
      {text}
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 h-[480px] bg-white border border-black/10 shadow-2xl rounded-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-black p-5 text-cream flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden border border-white/20">
               <img src={botGif} alt="AI" className="w-full h-full object-contain scale-125" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Amari's AI</p>
              <p className="text-[8px] opacity-60 uppercase mt-1">Ready to assist</p>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50/50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${
                  msg.role === "user" ? "bg-black text-white rounded-tr-none" : "bg-white border border-black/5 text-gray-700 rounded-tl-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="bg-white border border-black/5 p-2 px-3 rounded-full w-fit text-[10px] text-gray-400 animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          {/* SUGGESTION BUTTONS */}
          <div className="px-4 py-2 bg-gray-50/50 flex flex-wrap gap-2 border-t border-black/5">
            <SuggestionBtn text="Tell me about StudLife" />
            <SuggestionBtn text="What is your Tech Stack?" />
            <SuggestionBtn text="How to contact you?" />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input 
              type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..." 
              className="flex-1 text-xs focus:outline-none bg-gray-100 rounded-full px-4 py-2"
            />
            <button type="submit" className="bg-black text-white p-2 rounded-full hover:bg-blush hover:text-black transition-colors">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="group relative w-20 h-20 rounded-full active:scale-95 transition-all">
        {!isOpen && <span className="absolute inset-0 rounded-full bg-blush animate-ping opacity-20"></span>}
        <div className={`w-full h-full rounded-full overflow-hidden border-2 ${isOpen ? 'border-black' : 'border-blush'} transition-colors bg-white shadow-2xl flex items-center justify-center`}>
          {isOpen ? <X size={24} /> : <img src={botGif} alt="Bot" className="w-full h-full object-contain p-1" />}
        </div>
      </button>
    </div>
  );
}