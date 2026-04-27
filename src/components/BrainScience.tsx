import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Brain, Activity } from "lucide-react";
import { fadeIn } from "../constants";

export default function BrainScience() {
  const brainRef = useRef(null);
  const { scrollYProgress: brainScrollY } = useScroll({
    target: brainRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(brainScrollY, [0, 1], [-100, 100]);
  const blob2Y = useTransform(brainScrollY, [0, 1], [100, -100]);
  const blobRotate = useTransform(brainScrollY, [0, 1], [0, 180]);

  return (
    <section id="brain" ref={brainRef} className="scroll-mt-32 py-16 px-8 rounded-[3rem] bg-gray-900 text-white relative overflow-hidden" >
      {/* Parallax Blobs */}
      <motion.div 
        style={{ y: blob1Y, rotate: blobRotate }}
        className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-accent/20 blur-[100px] rounded-full z-0"
      />
      <motion.div 
        style={{ y: blob2Y, rotate: -blobRotate }}
        className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full z-0"
      />
      
      <div className="relative z-10 grid md:grid-cols-2 gap-24 items-center">
         <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-accent/10 rounded-2xl">
                <Brain className="text-brand-accent" size={40} />
              </div>
              <span className="text-brand-accent font-bold tracking-widest text-xs uppercase">العلم وراء الإدمان</span>
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">كيمياء "نظام المكافأة"</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                دماغنا مبرمج للبحث عن "المكافآت" (مثل الطعام أو الروابط الاجتماعية) من خلال إفراز مادة كيميائية تسمى **الدوبامين**. هذا نظام هو ما يبقينا على قيد الحياة.
              </p>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="border-r-4 border-brand-accent pr-6 bg-white/5 p-4 rounded-xl transition-colors hover:bg-white/10"
              >
                عند تعاطي مادة مدمنة أو ممارسة سلوك إدماني، يفرز الدماغ كميات **هائلة وغير طبيعية** من الدوبامين، مما يخلق "نشوة" قوية.
              </motion.p>
              <p>
                مع الوقت، يحاول الدماغ حماية نفسه بتقليل حساسيته للدوبامين. والنتيجة؟ يحتاج المدمن إلى كميات أكبر (التحمل) ليشعر بالأثر نفسه، ويصبح النشاط اليومي العادي باهتاً وخالياً من المتعة.
              </p>
            </div>
         </motion.div>
         
         <div className="flex justify-center items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative group cursor-crosshair"
            >
              {/* Rotating Orbit */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] border border-dashed border-white/10 rounded-full"
              />
              
              {/* Dopamine Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-brand-accent rounded-full blur-[2px]"
                  animate={{
                    x: [0, (Math.random() - 0.5) * 300, 0],
                    y: [0, (Math.random() - 0.5) * 300, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}

              <div className="w-72 h-72 border-2 border-white/5 rounded-full flex items-center justify-center p-8 relative bg-white/5 backdrop-blur-sm z-10 shadow-2xl group-hover:border-brand-accent/30 transition-colors duration-500">
                 <motion.div
                   whileHover={{ 
                     scale: 1.3, 
                     rotate: [0, -5, 5, 0],
                     filter: "drop-shadow(0 0 20px rgba(255, 188, 4, 0.6))"
                   }}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                 >
                    <Brain size={120} className="text-brand-accent transition-all duration-300" />
                 </motion.div>
                 
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_15px_rgba(255,188,4,0.5)]">
                    DOPAMINE SPIKE
                 </div>
              </div>

              {/* Interaction Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-medium text-brand-accent bg-brand-accent/10 px-4 py-2 rounded-full whitespace-nowrap"
              >
                <Activity size={14} className="animate-bounce" />
                المس الدماغ لتنشيط نظام المكافأة
              </motion.div>
            </motion.div>
         </div>
      </div>
    </section>
  );
}
