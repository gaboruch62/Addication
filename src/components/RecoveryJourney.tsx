import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Wind, Trees, Compass, Flame } from "lucide-react";

interface RecoveryJourneyProps {
  showJourney: boolean;
  setShowJourney: (show: boolean) => void;
}

export default function RecoveryJourney({ showJourney, setShowJourney }: RecoveryJourneyProps) {
  const [journeyStep, setJourneyStep] = useState(0);

  const journeyData = [
    {
      title: "المرحلة الأولى: الاعتراف",
      desc: "تبدأ الرحلة بالشجاعة لمواجهة الحقيقة: 'أنا بحاجة للمساعدة'. هذا ليس ضعفاً، بل هو أعظم فعل من أفعال القوة.",
      icon: <Wind className="text-blue-500" size={48} />,
      tips: ["تدرب على قول 'أنا أعاني' لشخص تثق به", "اكتب الأسباب التي تجعلك ترغب في التغيير", "سامح نفسك على الماضي؛ أنت تبدأ اليوم"]
    },
    {
      title: "المرحلة الثانية: الاستكشاف",
      desc: "فهم 'لماذا' نلجأ للإدمان. هل هو هرب من ألم؟ أم فراغ؟ فهم السبب هو نصف الحل.",
      icon: <Compass className="text-brand-accent" size={48} />,
      tips: ["راقب مشاعرك قبل الرغبة في السلوك الإدماني", "حدد 'الفجوات' في حياتك التي تحاول سدها", "اقرأ عن تجارب الآخرين في نفس مسارك"]
    },
    {
      title: "المرحلة الثالثة: التخطيط",
      desc: "بناء بيئة آمنة وتحديد الخطوات العملية. من هم حلفاؤك؟ وما هي أدواتك؟",
      icon: <Trees className="text-green-500" size={48} />,
      tips: ["تخخلص من كل ما يحفزك للعودة", "ابحث عن معالج متخصص أو مجموعة دعم", "ضع روتيناً يومياً جديداً يملأ وقتك"]
    },
    {
      title: "المرحلة الرابعة: المواجهة والتغيير",
      desc: "البدء في تطبيق التغيير، مواجهة الرغبات بشجاعة، وتعلم مهارات جديدة للتعامل مع الحياة.",
      icon: <Flame className="text-red-500" size={48} />,
      tips: ["استخدم تقنيات التنفس عند الشعور بالرغبة", "كافئ نفسك على كل يوم يمر بنجاح", "لا تستسلم إذا حدثت عثرة؛ الهض وصحح المسار"]
    },
    {
      title: "المرحلة الخامسة: الامتلاء والاستمرار",
      desc: "التعافي ليس توقفاً عن شيء، بل هو امتلاء بشيء آخر. حياة جديدة لها معنى وقيمة.",
      icon: <Check className="text-brand-secondary" size={48} />,
      tips: ["ساعد غيرك ممن يمر بنفس رحلتك", "استمر في تطوير هواياتك الجديدة", "حافظ على صلتك بمجتمعك الداعم"]
    }
  ];

  const handleClose = () => {
    setShowJourney(false);
    setJourneyStep(0);
  };

  return (
    <AnimatePresence>
      {showJourney && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white overflow-y-auto font-sans"
        >
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-10">
              <div className="max-w-4xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                <div className="text-brand-primary font-bold text-lg">رحلة التعافي والتحرر</div>
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-100">
              <motion.div 
                className="h-full bg-brand-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((journeyStep + 1) / journeyData.length) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col md:justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={journeyStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:text-right text-center">
                    <div className="p-8 bg-gray-50 rounded-[3rem] shadow-inner shrink-0 scale-125">
                      {journeyData[journeyStep].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">{journeyData[journeyStep].title}</h2>
                      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        {journeyData[journeyStep].desc}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <h4 className="text-lg font-bold text-brand-secondary mb-2">نصائح لهذه المرحلة:</h4>
                    {journeyData[journeyStep].tips.map((tip, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="p-5 bg-brand-primary/5 rounded-2xl flex items-center gap-4 text-brand-primary font-medium text-lg leading-relaxed justify-start"
                      >
                         <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">
                           {i + 1}
                         </div>
                         <span>{tip}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 pt-8">
                    <button 
                      onClick={() => journeyStep === journeyData.length - 1 ? handleClose() : setJourneyStep(prev => prev + 1)}
                      className="flex-1 bg-brand-primary text-white py-6 rounded-3xl font-bold text-xl hover:brightness-110 shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 group transition-all"
                    >
                      <span>{journeyStep === journeyData.length - 1 ? "فهمت، سأبدأ الآن" : "المرحلة التالية"}</span>
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform rotate-180" />
                    </button>
                    {journeyStep > 0 && (
                      <button 
                        onClick={() => setJourneyStep(prev => prev - 1)}
                        className="px-10 py-6 bg-gray-100 text-gray-500 rounded-3xl font-bold hover:bg-gray-200 transition-all"
                      >
                        السابق
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
