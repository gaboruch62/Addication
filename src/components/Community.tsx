import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, ChevronDown, Instagram, MessageSquare } from "lucide-react";

export default function Community() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="community" className="scroll-mt-24 md:scroll-mt-32 pt-8 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 border border-gray-100 shadow-sm">
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="w-full flex items-center justify-between group text-right"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-colors ${isContactOpen ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary border border-gray-100'}`}>
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-brand-primary leading-tight">تواصل معنا</h2>
                <p className="text-gray-500 text-[10px] md:text-sm">انضم لمجتمعنا على انستغرام وديسكورد</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isContactOpen ? 180 : 0 }}
              className="p-2 text-gray-400 group-hover:text-brand-accent transition-colors shrink-0"
            >
              <ChevronDown size={28} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isContactOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start border-t border-gray-100 mt-6 md:mt-8">
                  {/* Instagram Accounts */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3 text-pink-600 mb-4">
                      <Instagram size={24} />
                      <span className="font-bold text-base md:text-lg">حسابات انستغرام</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {[
                        "that_friendly_guy1",
                        "shezam.bn",
                        "_nabilochan_",
                        "ayouuuub_771",
                        "ilyvss_07_"
                      ].map((acc, i) => (
                        <motion.a 
                          key={i}
                          href={`https://instagram.com/${acc}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm font-medium text-gray-700 hover:text-pink-600 hover:border-pink-200 transition-all text-center"
                        >
                          <Instagram size={12} className="text-pink-500 shrink-0" />
                          <span className="truncate">@{acc}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Discord Section */}
                  <div className="flex flex-col items-center justify-center h-full border-t md:border-t-0 md:border-r border-gray-100 pt-8 md:pt-0">
                    <div className="flex items-center justify-center gap-3 text-indigo-600 mb-4 md:mb-6">
                      <MessageSquare size={24} />
                      <span className="font-bold text-base md:text-lg">مجتمع ديسكورد</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-6 md:mb-8 max-w-xs mx-auto text-center leading-relaxed">
                      انضم إلى مجتمعنا على ديسكورد للحصول على دعم مباشر، نقاشات هادفة، ومساحة آمنة للتعبير والنمو المشترك.
                    </p>
                    <motion.a 
                      href="https://discord.gg/invite"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-indigo-100 transition-all text-sm md:text-base"
                    >
                      <MessageSquare size={18} />
                      انضم للسيرفر
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
