/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import L from 'leaflet';
import { motion } from "motion/react";
import { LifeBuoy, Search, ArrowRight, Lightbulb } from "lucide-react";

// Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import AddictionTypes from "./components/AddictionTypes";
import BrainScience from "./components/BrainScience";
import Symptoms from "./components/Symptoms";
import MythsFacts from "./components/MythsFacts";
import Prevention from "./components/Prevention";
import RecoverySteps from "./components/RecoverySteps";
import BookRecommendations from "./components/BookRecommendations";
import PsychologicalTest from "./components/PsychologicalTest";
import FAQ from "./components/FAQ";
import Community from "./components/Community";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import KeywordPopup from "./components/KeywordPopup";
import RecoveryJourney from "./components/RecoveryJourney";

// Types
import { CBTKeyword } from "./types";

// Leaflet fix
if (typeof window !== 'undefined') {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeKeyword, setActiveKeyword] = useState<CBTKeyword | null>(null);
  const [showJourney, setShowJourney] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white" id="main-container">
      <ThemeSwitcher />
      <Navigation />
      <Hero />

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-20 md:space-y-32">
        <Introduction />
        <AddictionTypes />
        <BrainScience />
        <Symptoms />
        <MythsFacts />
        <Prevention />
        <RecoverySteps setActiveKeyword={setActiveKeyword} />
        <BookRecommendations />
        <PsychologicalTest />
        <FAQ />

        {/* Resource Links / Support Section */}
        <section className="bg-brand-bg rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center" id="support">
           <h3 className="text-xl md:text-2xl font-bold mb-8 text-brand-primary">هل تحتاج للمساعدة الآن؟</h3>
           <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 justify-center">
                 <LifeBuoy className="text-brand-accent shrink-0" size={24} />
                 <span className="font-semibold text-sm md:text-base">خط الدعم النفسي: 12345 (تجريبي)</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 justify-center">
                 <Search className="text-brand-secondary shrink-0" size={24} />
                 <span className="font-semibold text-sm md:text-base">ابحث عن أقرب مركز علاج</span>
              </div>
           </div>
        </section>

        {/* Message of Hope */}
        <section id="hope" className="text-center pt-8 md:pt-16">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-brand-accent text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden"
           >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                 <Lightbulb className="mx-auto mb-6 text-yellow-200" size={48} />
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">رسالة أمل</h2>
                 <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-8 px-4">
                   مهما كان عمق المتاهة، ومهما كانت جدرانها عالية، تذكر دائماً أنك تمتلك القوة بداخل الطلب للمساعدة. التعافي ليس سهلاً، لكنه يستحق كل ثانية من الجد. اليوم هو الوقت المناسب لتبدأ من جديد.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => setShowJourney(true)}
                      className="bg-white text-brand-accent px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg group text-sm md:text-base"
                    >
                      ابدأ رحلتك اليوم
                      <ArrowRight className="inline-block mr-2 group-hover:translate-x-1 transition-transform rotate-180" size={20} />
                    </button>
                    <button 
                      onClick={() => {
                        setIsContactOpen(true);
                        document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-brand-primary/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-sm md:text-base"
                    >
                      تواصل مع مستشار
                    </button>
                 </div>
              </div>
           </motion.div>
        </section>

        <Community />
      </main>

      <Footer />
      
      <KeywordPopup 
        activeKeyword={activeKeyword} 
        onClose={() => setActiveKeyword(null)} 
      />

      <RecoveryJourney 
        showJourney={showJourney} 
        setShowJourney={setShowJourney} 
      />
    </div>
  );
}
