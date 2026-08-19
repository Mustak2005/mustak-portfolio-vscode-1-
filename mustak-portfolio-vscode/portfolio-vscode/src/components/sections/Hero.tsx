import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
// EDIT: Replace with your own profile photo path if you change the image filename
import profilePhoto from "../../assets/profile.png";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  // EDIT: Change these titles to match your roles/skills
  const titles = ["CSE Student", "Programmer", "Web Development Learner", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00BFFF] rounded-full shadow-[0_0_10px_#00BFFF]"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, Math.random() * 0.8 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.4)] p-1 flex items-center justify-center overflow-hidden bg-[#0A0A20] group">
            {/* EDIT: Replace profile.png in src/assets/ to change your photo */}
            <img
              src={profilePhoto}
              alt="Shaik Mohammed Mustak"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Glowing ring animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#00BFFF]/30"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          {/* EDIT: Replace with your full name */}
          Shaik Mohammed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0080FF] to-[#00BFFF] neon-text">
            Mustak
          </span>
        </motion.h1>

        {/* Animated Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-10 w-full max-w-lg mb-10 overflow-hidden flex items-center justify-center"
        >
          {titles.map((title, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: titleIndex === i ? 0 : titleIndex > i ? -40 : 40,
                opacity: titleIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute text-xl md:text-2xl font-mono text-[#E8E8FF]"
            >
              {title}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button
            onClick={() => handleNavClick("#certificates")}
            className="px-8 py-3 rounded-full bg-[#0080FF]/10 text-[#00BFFF] border border-[#00BFFF] shadow-[0_0_15px_rgba(0,128,255,0.3)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:bg-[#0080FF]/20 transition-all duration-300 font-medium tracking-wide flex items-center justify-center"
          >
            View Certificates
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-8 py-3 rounded-full bg-transparent text-[#E8E8FF] border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 font-medium tracking-wide flex items-center justify-center"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#8888AA] animate-bounce"
      >
        <span className="text-sm mb-2 uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="text-[#00BFFF]" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
