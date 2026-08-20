import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#050510]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,128,255,0.3)] to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Contact" subtitle="Let's connect and build something great together." />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 max-w-lg mx-auto"
        >
          <p className="text-[#8888AA] text-lg text-center">
            I'm open to opportunities, collaborations, and connecting with fellow developers.
            Reach out on LinkedIn!
          </p>

          {/* EDIT: Replace the href below with your real LinkedIn profile URL */}
          <a
            href="https://www.linkedin.com/in/smd-mustak-29606432b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[rgba(0,128,255,0.1)] border border-[rgba(0,128,255,0.3)] hover:bg-[rgba(0,128,255,0.2)] hover:border-[#00BFFF] hover:shadow-[0_0_20px_rgba(0,128,255,0.3)] transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-[#00BFFF] group-hover:text-white transition-colors" />
            <span className="text-white font-medium tracking-wide">Connect on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
