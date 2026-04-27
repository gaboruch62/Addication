import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-brand-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="hero">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight" id="main-title">
            متاهة الإدمان: <br />
            <span className="text-brand-secondary">الفهم، المواجهة، والتحرر</span>
          </h1>
          <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed" id="hero-subtitle">
            رحلة تبدأ بالوعي، وتستمر بالشجاعة، وتنتهي بالحرية. لأنك لست وحدك، ولأن التغيير ممكن دائماً.
          </p>
        </motion.div>
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a 
            href="#intro" 
            whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
            className="animate-bounce p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
