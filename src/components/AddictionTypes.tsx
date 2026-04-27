import { motion } from "motion/react";
import { ShieldAlert, Activity, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeIn, slideInLeft, slideInRight, listItemVariant } from "../constants";

export default function AddictionTypes() {
  return (
    <section id="types" className="scroll-mt-24 md:scroll-mt-32">
      <motion.div 
        className="text-center mb-12 md:mb-16"
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">تعددت الوجوه والجوهر واحد</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base">ينقسم الإدمان إلى فئتين رئيسيتين، كلاهما يشتركان في السيطرة القهرية على الفرد.</p>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        {/* Chemical Addiction */}
        <motion.div 
          className="p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          variants={slideInLeft}
          id="chemical-addiction"
        >
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0] }}
            className="w-12 h-12 md:w-16 md:h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6"
          >
            <ShieldAlert className="text-red-500" size={28} />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">الإدمان الكيميائي</h3>
          <p className="text-gray-600 mb-6 italic text-sm md:text-base">يتعلق بالمواد التي تدخل الجسم وتغير من كيميائه.</p>
          <motion.ul className="space-y-4" variants={staggerContainer}>
            {[
              { title: "المخدرات", desc: "بأنواعها المختلفة الطبيعية والمصنعة." },
              { title: "الكحول", desc: "أحد أكثر أنواع الإدمان انتشاراً وتأثيراً." },
              { title: "النيكوتين", desc: "المادة الفعالة في التبغ ومنتجات التدخين." },
              { title: "الأدوية الموصوفة", desc: "سوء استخدام المسكنات أو المهدئات." }
            ].map((item, idx) => (
              <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariant}>
                <div className="mt-1 p-1 rounded-full bg-brand-secondary/10">
                  <CheckCircle2 size={14} className="text-brand-secondary flex-shrink-0 md:w-[16px] md:h-[16px]" />
                </div>
                <div>
                  <span className="font-bold text-gray-700 text-sm md:text-base">{item.title}:</span>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Behavioral Addiction */}
        <motion.div 
          className="p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex-1"
          variants={slideInRight}
          id="behavioral-addiction"
        >
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0] }}
            className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"
          >
            <Activity className="text-blue-500" size={28} />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">الإدمان السلوكي</h3>
          <p className="text-gray-600 mb-6 italic text-sm md:text-base">يتمحور حول أفعال قهرية تعطي شعوراً مؤقتاً بالراحة.</p>
          <motion.ul className="space-y-4" variants={staggerContainer}>
            {[
              { title: "الإنترنت والألعاب", desc: "الهروب من الواقع إلى العالم الرقمي لساعات." },
              { title: "القمار", desc: "الرهان القهري رغم التبعات المالية المدمرة." },
              { title: "الشراء القهري", desc: "استخدام التسوق كوسيلة للتعامل مع المشاعر." },
              { title: "إدمان العمل", desc: "تغليب العمل على كافة جوانب الحياة الاجتماعية والصحية." }
            ].map((item, idx) => (
              <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariant}>
                <div className="mt-1 p-1 rounded-full bg-brand-secondary/10">
                  <CheckCircle2 size={14} className="text-brand-secondary flex-shrink-0 md:w-[16px] md:h-[16px]" />
                </div>
                <div>
                  <span className="font-bold text-gray-700 text-sm md:text-base">{item.title}:</span>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
