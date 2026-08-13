import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { Code2 } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0A0A20]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,128,255,0.3)] to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Projects"
          subtitle="Hands-on work that demonstrates my skills and creativity."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px]"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,128,255,0.03)] to-transparent"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border border-[rgba(0,128,255,0.1)]"
          />

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-[rgba(0,128,255,0.1)] flex items-center justify-center mx-auto mb-6 border border-[rgba(0,128,255,0.2)]">
              <Code2 size={36} className="text-[#00BFFF]" />
            </div>
            {/* EDIT: Update this section once you have projects to showcase */}
            <h3 className="text-2xl font-bold text-white mb-3">Projects Coming Soon</h3>
            <p className="text-[#8888AA] max-w-md">
              Currently working on exciting projects. Stay tuned — they'll be here soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
