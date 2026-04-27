import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardList, CheckCircle2, Info, ArrowRight } from "lucide-react";
import { psychologicalTestQuestions } from "../constants";

export default function PsychologicalTest() {
  const [pQuizStep, setPQuizStep] = useState(0);
  const [pQuizScore, setPQuizScore] = useState(0);
  const [showPQuizResult, setShowPQuizResult] = useState(false);
  const [selectedPOption, setSelectedPOption] = useState<number | null>(null);
  const [isPAnswered, setIsPAnswered] = useState(false);

  const handlePQuizAnswer = (index: number) => {
    if (isPAnswered) return;
    setSelectedPOption(index);
    setIsPAnswered(true);
    setPQuizScore(prev => prev + psychologicalTestQuestions[pQuizStep].options[index].points);
  };

  const nextPQuizStep = () => {
    if (pQuizStep < psychologicalTestQuestions.length - 1) {
      setPQuizStep(prev => prev + 1);
      setSelectedPOption(null);
      setIsPAnswered(false);
    } else {
      setShowPQuizResult(true);
    }
  };

  const resetPQuiz = () => {
    setPQuizStep(0);
    setPQuizScore(0);
    setShowPQuizResult(false);
    setSelectedPOption(null);
    setIsPAnswered(false);
  };

  return (
    <section id="psychological-test" className="scroll-mt-24 md:scroll-mt-32">
      <div className="bg-brand-primary rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
              <ClipboardList size={28} className="text-brand-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">مقياس الوعي والمرونة النفسية</h2>
            <p className="text-white/70 text-sm md:text-base px-4">توقف قليلاً لتتأمل في عالمك الداخلي. أجب بصدق لتعرف مدى صلابة درعك النفسي.</p>
          </div>

          <AnimatePresence mode="wait">
            {!showPQuizResult ? (
              <motion.div
                key={pQuizStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                  <h3 className="text-lg md:text-2xl font-bold mb-8 leading-relaxed text-center">
                    {psychologicalTestQuestions[pQuizStep].q}
                  </h3>
                  <div className="grid gap-3 md:gap-4">
                    {psychologicalTestQuestions[pQuizStep].options.map((option, idx) => {
                      const isSelected = selectedPOption === idx;
                      
                      let bgColor = "bg-white/10 hover:bg-white/20";
                      let borderColor = "border-white/10";
                      
                      if (isPAnswered) {
                        if (isSelected) {
                          bgColor = "bg-brand-accent/20";
                          borderColor = "border-brand-accent";
                        } else {
                          bgColor = "bg-white/5 opacity-50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isPAnswered}
                          onClick={() => handlePQuizAnswer(idx)}
                          className={`w-full p-4 md:p-5 rounded-xl md:rounded-2xl border text-right transition-all flex items-center justify-between group ${bgColor} ${borderColor}`}
                        >
                          <span className="text-sm md:text-lg">{option.text}</span>
                          {isPAnswered && isSelected && <CheckCircle2 className="text-brand-accent shrink-0" size={20} />}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {isPAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-8 p-6 bg-white/5 rounded-2xl border-r-4 border-brand-accent"
                      >
                        <div className="flex items-start gap-3">
                          <Info className="text-brand-accent mt-1 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-bold text-brand-accent mb-2">منظور نفسي:</p>
                            <p className="text-white/80 leading-relaxed">{psychologicalTestQuestions[pQuizStep].explanation}</p>
                          </div>
                        </div>
                        <button 
                          onClick={nextPQuizStep}
                          className="mt-6 w-full py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                        >
                          <span>{pQuizStep === psychologicalTestQuestions.length - 1 ? "رؤية النتيجة" : "السؤال التالي"}</span>
                          <ArrowRight size={20} className="rotate-180" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex justify-between items-center text-sm text-white/40 font-medium">
                  <span>سؤال {pQuizStep + 1} من {psychologicalTestQuestions.length}</span>
                  <div className="flex gap-1">
                    {psychologicalTestQuestions.map((_, i) => (
                      <div key={i} className={`h-1.5 w-6 rounded-full transition-colors ${i <= pQuizStep ? 'bg-brand-accent' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="relative inline-block">
                  <div className="w-40 h-40 bg-white/10 rounded-full flex flex-col items-center justify-center mx-auto mb-6">
                    <span className="text-sm text-white/50 uppercase tracking-widest mb-1">النتيجة</span>
                    <span className="text-5xl font-bold text-brand-accent">{pQuizScore}</span>
                    <span className="text-xs text-white/40 mt-1">من 12 نقطة</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {pQuizScore >= 10 
                      ? "حصانة نفسية ممتازة" 
                      : pQuizScore >= 6 
                        ? "وعي جيد يحتاج رعاية" 
                        : "بحاجة لتعزيز المقاومة"}
                  </h3>
                  <p className="text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
                    {pQuizScore >= 10 
                      ? "تمتلك وعياً عميقاً بمشاعرك وقدرة عالية على مواجهة التحديات. هذا النضج هو أهم ضمانة لك في المتاهات الصعبة."
                      : pQuizScore >= 6
                        ? "لديك أساس جيد من الفهم الذاتي، ولكن هناك بعض الجوانب التي قد تجعلك عرضة للتأثر بالضغوط. استمر في تطوير مهاراتك النفسية."
                        : "يبدو أنك تمر بفترة من الضغط النفسي أو ضعف في أدوات المواجهة. تذكر أن طلب المساعدة المهنية هو أولى خطوات القوة والتعافي."}
                  </p>
                </div>
                <button 
                  onClick={resetPQuiz}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-primary rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  إعادة المحاولة
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
