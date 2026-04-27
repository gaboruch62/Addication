import { motion } from "motion/react";
import { Heart, Pill, Smartphone, Gamepad2, Dice5, Beer, ShoppingBag } from "lucide-react";
import { staggerContainer, fadeIn, slideInRight } from "../constants";

export default function Introduction() {
  return (
    <section id="intro" className="scroll-mt-24 md:scroll-mt-32">
      <motion.div 
        className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <motion.div variants={fadeIn} className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary mb-6 shadow-sm">
            <Heart size={18} className="text-brand-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider">نظرة إنسانية</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary leading-tight">الإدمان: اضطراب لا خلل أخلاقي</h2>
          <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed text-right">
            <p>
              لسنوات طويلة، نُظر إلى الإدمان بصفته "ضعفاً في الشخصية" أو "فشلاً أخلاقياً". لكن العلم الحديث يؤكد أن الإدمان هو **اضطراب تكراري معقد** يؤثر بشكل مباشر على وظائف الدماغ وسلوكه.
            </p>
            <p>
              إنه حالة تجعل الشخص يفقد السيطرة على استخدامه للمواد أو انخراطه في سلوكيات معينة، رغم علمه التام بآثارها الضارة. الاعتراف بأنه مرض هو الخطوة الأولى والأساسية نحو رحلة التعافي.
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-50 shadow-2xl flex items-center justify-center p-8 md:p-12 order-1 md:order-2 w-full max-w-[400px] md:max-w-none mx-auto"
          variants={slideInRight}
        >
           <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-white to-brand-primary/10"></div>
           <div className="relative z-10 w-full h-full">
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-64 h-64">
                   <motion.div className="absolute top-0 left-1/2 -translate-x-1/2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                      <Pill size={48} className="text-red-500/40" />
                   </motion.div>
                   <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
                      <Smartphone size={48} className="text-blue-500/40" />
                   </motion.div>
                   <motion.div className="absolute left-0 top-1/2 -translate-y-1/2" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
                      <Gamepad2 size={48} className="text-purple-500/40" />
                   </motion.div>
                   <motion.div className="absolute right-0 top-1/2 -translate-y-1/2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}>
                      <Dice5 size={48} className="text-amber-500/40" />
                   </motion.div>
                   <motion.div className="absolute top-10 left-10" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}>
                      <Beer size={40} className="text-yellow-600/30" />
                   </motion.div>
                   <motion.div className="absolute bottom-10 right-10" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3.8, repeat: Infinity, delay: 2.5 }}>
                      <ShoppingBag size={40} className="text-pink-500/30" />
                   </motion.div>
                </div>
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Heart size={140} className="text-brand-primary/20" />
                </motion.div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-brand-accent/30"
                      animate={{ 
                        scale: [1, 2, 1],
                        opacity: [0.1, 0.4, 0.1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                    />
                  ))}
                </div>
              </div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
