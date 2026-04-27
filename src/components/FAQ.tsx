import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { fadeIn, staggerContainer, faqItems } from "../constants";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 md:scroll-mt-32">
       <motion.div 
         className="text-center mb-12 md:mb-16"
         variants={fadeIn}
         initial="initial"
         whileInView="whileInView"
       >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 px-6 text-sm md:text-base">إجابات سريعة على تساؤلات قد تدور في ذهنك.</p>
       </motion.div>
       
       <motion.div 
         className="max-w-3xl mx-auto space-y-4"
         variants={staggerContainer}
         initial="initial"
         whileInView="whileInView"
       >
          {faqItems.map((item, i) => (
            <motion.details 
              key={i} 
              variants={fadeIn}
              className="group p-6 bg-white rounded-2xl border border-gray-100 open:shadow-md transition-all hover:border-brand-primary/20"
            >
               <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                  <span className="text-gray-800">{item.q}</span>
                  <Plus className="group-open:hidden transition-transform text-brand-secondary" size={24} />
                  <Minus className="hidden group-open:block transition-transform text-brand-secondary" size={24} />
               </summary>
               <motion.p 
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="mt-4 text-gray-600 leading-relaxed border-r-2 border-brand-accent pr-4"
               >
                  {item.a}
               </motion.p>
            </motion.details>
          ))}
       </motion.div>
    </section>
  );
}
