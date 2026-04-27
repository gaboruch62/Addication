import { motion } from "motion/react";
import { Activity, Brain, Users } from "lucide-react";
import { staggerContainer, fadeIn } from "../constants";

export default function Symptoms() {
  const symptomBoxes = [
    { 
      icon: <Activity className="text-orange-500" />, 
      title: "أعراض جسدية", 
      list: ["تغيرات مفاجئة في الوزن أو النوم", "شحوب الوجه أو احمرار العينين", "رعشة في اليدين أو تعرق غير عادي"]
    },
    { 
      icon: <Brain className="text-purple-500" />, 
      title: "أعراض نفسية", 
      list: ["تقلبات مزاجية حادة وعصبية", "فقدان الاهتمام بالهوايات القديمة", "القلق المستمر والاكتئاب"]
    },
    { 
      icon: <Users className="text-blue-500" />, 
      title: "أعراض اجتماعية", 
      list: ["العزلة عن العائلة والأصدقاء", "إهمال المسؤوليات المهنية أو الدراسية", "الغموض والسرية المبالغ فيها"]
    }
  ];

  return (
    <section id="symptoms" className="scroll-mt-24 md:scroll-mt-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">علامات التحذير: متى يجب الانتباه؟</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base">الإدمان يتسلل إلى كافة جوانب الحياة، تاركاً خلفه آثاراً واضحة.</p>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="grid md:grid-cols-3 gap-6 md:gap-8"
      >
        {symptomBoxes.map((box, i) => (
          <motion.div 
            key={i}
            variants={fadeIn}
            className="p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{box.icon}</div>
            <h3 className="text-lg md:text-xl font-bold mb-4">{box.title}</h3>
            <ul className="space-y-3">
              {box.list.map((item, j) => (
                <li key={j} className="text-gray-600 text-xs md:text-sm flex gap-2 text-right">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0"></span>
                   {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
