import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        // Unlock scroll after loading completes
        document.body.style.overflow = "";
      }}
      className="fixed inset-0 z-[9999] bg-[#050510] flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-white tracking-widest flex items-center"
      >
        <span>S</span>
        <motion.div
          animate={{ width: ["0px", "48px", "0px"] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 bg-[#00BFFF] shadow-[0_0_10px_#00BFFF] w-12 rounded-full mx-2"
        />
        <span>M</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-[#8888AA] font-mono text-sm tracking-widest uppercase"
      >
        Initializing System...
      </motion.p>
    </motion.div>
  );
}
