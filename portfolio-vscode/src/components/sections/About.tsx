import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#050510]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00BFFF] to-[#0080FF] shadow-[0_0_10px_#00BFFF]"></div>

            {/* EDIT: Update this paragraph with your own bio */}
            <p className="text-[#E8E8FF] text-lg leading-relaxed mb-6 font-light">
              I'm Shaik Mohammed Mustak, a passionate Computer Science Engineering student with a
              strong foundation in programming, data structures, and web technologies. I thrive on
              turning complex problems into elegant solutions — whether writing clean C code,
              scripting in Python, or crafting responsive web interfaces.
            </p>
            <p className="text-[#E8E8FF] text-lg leading-relaxed font-light">
              I'm constantly learning, building, and pushing the boundaries of what I can create.
              My journey in tech is driven by curiosity and a commitment to continuous improvement.
            </p>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0080FF] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* EDIT: Update these stats */}
            <div className="glass-panel p-6 rounded-xl border border-[rgba(0,128,255,0.1)] hover:border-[rgba(0,128,255,0.4)] transition-colors duration-300">
              <h3 className="text-4xl font-bold text-[#00BFFF] mb-2 neon-text">6+</h3>
              <p className="text-[#8888AA] uppercase tracking-wider text-sm">Core Skills</p>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-[rgba(0,128,255,0.1)] hover:border-[rgba(0,128,255,0.4)] transition-colors duration-300">
              <h3 className="text-4xl font-bold text-[#00BFFF] mb-2 neon-text">5+</h3>
              <p className="text-[#8888AA] uppercase tracking-wider text-sm">Certificates</p>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-[rgba(0,128,255,0.1)] hover:border-[rgba(0,128,255,0.4)] transition-colors duration-300 bg-gradient-to-br from-[rgba(0,128,255,0.05)] to-transparent">
              <h3 className="text-xl font-bold text-white mb-2">Future Builder</h3>
              <p className="text-[#8888AA] text-sm">Always ready for the next challenge.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
