import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { SiC, SiPython, SiHtml5, SiJavascript } from "react-icons/si";
import { Database, Palette } from "lucide-react";

export function Skills() {
  // EDIT: Add, remove, or change skills and their proficiency percentages
  const skills = [
    { name: "C Programming", percent: 75, icon: <SiC className="w-8 h-8" /> },
    { name: "Python", percent: 70, icon: <SiPython className="w-8 h-8" /> },
    { name: "HTML", percent: 90, icon: <SiHtml5 className="w-8 h-8" /> },
    { name: "CSS", percent: 85, icon: <Palette className="w-8 h-8" /> },
    { name: "JavaScript", percent: 80, icon: <SiJavascript className="w-8 h-8" /> },
    { name: "Data Structures", percent: 65, icon: <Database className="w-8 h-8" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0A0A20]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,128,255,0.3)] to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Technical Skills"
          subtitle="Languages and technologies I've mastered on my journey."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 group border border-[rgba(255,255,255,0.05)] hover:border-[#00BFFF] hover:shadow-[0_0_20px_rgba(0,128,255,0.2)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[rgba(0,128,255,0.1)] text-[#00BFFF] group-hover:bg-[#00BFFF] group-hover:text-[#050510] transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#E8E8FF] group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8888AA]">Proficiency</span>
                  <span className="text-[#00BFFF] font-mono">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#0080FF] to-[#00BFFF] rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.3)] w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
