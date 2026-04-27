import { motion } from "motion/react";
import { Trophy, Dumbbell, Palette, Users, Compass, Lightbulb } from "lucide-react";
import { scaleIn, fadeIn } from "../constants";

export default function Prevention() {
  const items = [
    {
      icon: <Dumbbell size={28} />,
      title: "النشاط البدني",
      desc: "الرياضة تفرز الأندورفين والسيروتونين طبيعياً، مما يحسن المزاج ويقلل التوتر.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <Palette size={28} />,
      title: "الهوايات الإبداعية",
      desc: "الرسم، الكتابة، أو الأعمال اليدوية تضعك في حالة 'التدفق' الذهني وتبعدك عن الرتابة.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: <Users size={28} />,
      title: "الروابط الاجتماعية",
      desc: "الجلسات الصادقة مع العائلة والأصدقاء تملأ الفراغ العاطفي الذي قد يسدده الإدمان.",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: <Compass size={28} />,
      title: "الاستكشاف والتعلم",
      desc: "تعلم مهارة جديدة أو زيارة أماكن غير مألوفة يوسع آفاقك ويجدد خلايا دماغك.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section id="prevention" className="scroll-mt-24 md:scroll-mt-32">
      <div className="text-center mb-12 md:mb-16">
        <motion.div 
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="inline-flex p-3 bg-brand-secondary/10 rounded-2xl mb-4"
        >
          <Trophy className="text-brand-secondary" size={28} />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 px-4">بدائل ممتعة وحياة متزنة</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-6 text-sm md:text-base">
          الوقاية ليست مجرد ابتعاد عما يضر، بل هي اقتراب مما ينفع ويجلب السعادة الحقيقية والمستدامة.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            variants={fadeIn}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className={`p-3 md:p-4 ${item.bg} ${item.color} rounded-xl md:rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-12 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="p-4 md:p-5 bg-white/10 backdrop-blur-md rounded-full shrink-0">
          <Lightbulb className="text-brand-accent animate-pulse" size={32} />
        </div>
        <div className="flex-1 text-center md:text-right">
          <h4 className="text-xl md:text-2xl font-bold mb-2">القاعدة الذهبية: الوعي بالمحفزات</h4>
          <p className="text-sm md:text-base opacity-80 leading-relaxed italic border-r-2 border-brand-accent/50 pr-4">
            "السعادة الحقيقية هي تلك التي نبنيها بوعينا، وليست تلك التي نستعيرها من مواد خارجية بفوائد باهظة من صحتنا ومستقبلنا."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
