import { motion, useScroll, useTransform } from "motion/react";
import { Gamepad2 } from "lucide-react";

export default function ThemeSwitcher() {
  const { scrollYProgress } = useScroll();
  const gamepadY = useTransform(scrollYProgress, [0, 1], ["10vh", "80vh"]);
  const gamepadRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const gamepadX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 0]);

  return (
    <motion.div
      style={{ top: gamepadY, rotate: gamepadRotate, x: gamepadX }}
      className="fixed left-10 z-[100] hidden xl:block pointer-events-none"
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-auto"
      >
        <motion.button
          whileHover={{ 
            scale: 1.2, 
            filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))",
          }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            const colors = ["#FFBC04", "#3B82F6", "#10B981"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.documentElement.style.setProperty('--brand-accent', randomColor);
          }}
          title="تفاعل معي! (تغيير لون الثيم)"
          className="p-4 bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/30 text-brand-primary shadow-[0_20px_50px_rgba(0,0,0,0.1)] group relative"
        >
          <Gamepad2 size={40} className="group-hover:text-brand-accent transition-colors duration-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full animate-ping" />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-primary text-white text-[10px] py-1 px-2 rounded-full whitespace-nowrap font-bold">
            تغيير الثيم
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
