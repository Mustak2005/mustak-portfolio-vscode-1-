import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-[rgba(0,128,255,0.1)] bg-[#050510]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 text-center"
        >
          {/* EDIT: Replace with your name */}
          <p className="text-xl font-bold text-white neon-text tracking-wider">
            Shaik Mohammed Mustak
          </p>
          <p className="text-[#8888AA] text-sm uppercase tracking-widest">Student Developer</p>
          <p className="text-[#8888AA] text-xs mt-2">
            © {currentYear} Shaik Mohammed Mustak. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
