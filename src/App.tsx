/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for Leaflet default icon issue
// @ts-ignore
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}
import { 
  Heart, 
  Brain, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb,
  ArrowRight,
  Search,
  Users,
  Stethoscope,
  ChevronDown,
  Info,
  LifeBuoy,
  ClipboardList,
  AlertTriangle,
  Menu,
  X,
  Instagram,
  MessageSquare,
  Pill,
  Smartphone,
  Gamepad2,
  Dice5,
  ShoppingBag,
  Beer
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "backOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const listItemVariant = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4 }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax for Brain Section
  const brainRef = useRef(null);
  const { scrollYProgress: brainScrollY } = useScroll({
    target: brainRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(brainScrollY, [0, 1], [-100, 100]);
  const blob2Y = useTransform(brainScrollY, [0, 1], [100, -100]);
  const blobRotate = useTransform(brainScrollY, [0, 1], [0, 180]);

  // Psychological Test State
  const [pQuizStep, setPQuizStep] = useState(0);
  const [pQuizScore, setPQuizScore] = useState(0);
  const [showPQuizResult, setShowPQuizResult] = useState(false);
  const [selectedPOption, setSelectedPOption] = useState<number | null>(null);
  const [isPAnswered, setIsPAnswered] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeKeyword, setActiveKeyword] = useState<{title: string, content: string} | null>(null);

  const cbtKeywords = useMemo(() => ({
    "الأفكار": { title: "الأفكار التلقائية", content: "هي الأفكار التي تخطر ببالنا فوراً وتؤثر على شعورنا، وغالباً ما تكون غير دقيقة في حالات الإدمان." },
    "المشاعر": { title: "التنظيم العاطفي", content: "القدرة على فهم وإدارة المشاعر القوية بدلاً من الهروب منها عبر السلوك الإدماني." },
    "السلوكيات": { title: "الأنماط السلوكية", content: "الأفعال المتكررة التي نقوم بها استجابة لمحفزات معينة، ويهدف العلاج لتغيير هذه الاستجابة." },
    "المحفزات": { title: "المحفزات (Triggers)", content: "أماكن، أشخاص، أو مشاعر معينة تثير الرغبة الشديدة في العودة للسلوك الإدماني." }
  }), []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  /* Previous quiz sections removed as requested */

  const navLinks = [
    { name: "البداية", href: "#hero" },
    { name: "عن الإدمان", href: "#intro" },
    { name: "الأنواع", href: "#types" },
    { name: "الدماغ", href: "#brain" },
    { name: "اختبار الوعي", href: "#psychological-test" },
    { name: "التعافي", href: "#recovery" },
    { name: "الأسئلة الشائعة", href: "#faq" }
  ];

  const psychologicalTestQuestions = [
    {
      q: "كيف تصف علاقتك بمشاعرك الصعبة (القلق، الحزن، الغضب)؟",
      options: [
        { text: "أتقبلها وأحاول فهم أسبابها والتعامل معها بهدوء", points: 3 },
        { text: "أحاول تجاهلها أو الهروب منها بأي نشاط ملهٍ", points: 1 },
        { text: "أشعر بالعجز التام أمامها وتسيطر عليّ لفترات طويلة", points: 0 }
      ],
      explanation: "الوعي بالمشاعر وتقبلها هو حجر الزاوية في الصحة النفسية والوقاية من السلوكيات الهروبية."
    },
    {
      q: "عندما تواجه فشلاً أو انتكاسة، ما هو رد فعلك الأول؟",
      options: [
        { text: "أعتبرها فرصة للتعلم وأحاول البدء من جديد", points: 3 },
        { text: "أغرق في لوم نفسي وجلد الذات لفترة طويلة", points: 1 },
        { text: "أشعر برغبة شديدة في التخلي عن كل شيء", points: 0 }
      ],
      explanation: "المرونة النفسية تعني القدرة على النهوض بعد السقوط، وهي مهارة تكتسب بالتدريب والصبر."
    },
    {
      q: "ما مدى شعورك بالسيطرة على قراراتك اليومية؟",
      options: [
        { text: "أشعر أنني صاحب القرار وأتحمل مسؤولية اختياراتي", points: 3 },
        { text: "أشعر أن الظروف المحيطة هي من تقودني غالباً", points: 1 },
        { text: "أشعر أنني مسير تماماً ولا أملك إرادة حقيقية", points: 0 }
      ],
      explanation: "استعادة الشعور بالقدرة (Agency) هو هدف أساسي في رحلة التعافي وتطوير الذات."
    },
    {
      q: "كيف تصف نظام الدعم الاجتماعي المحيط بك؟",
      options: [
        { text: "لدي أشخاص أثق بهم ويمكنني اللجوء إليهم عند الحاجة", points: 3 },
        { text: "لدي معارف ولكن لا أشعر بالراحة في مشاركة مشاكلي", points: 1 },
        { text: "أشعر بالوحدة التامة ولا يوجد من يدعمني", points: 0 }
      ],
      explanation: "الدعم الاجتماعي والروابط الإنسانية الصادقة هي أقوى درع يحمي الإنسان من المتاهات النفسية."
    }
  ];

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
    <div className="min-h-screen selection:bg-brand-accent selection:text-white" id="main-container">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100" id="top-nav">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-brand-primary font-bold text-xl">متاهة الإدمان</div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-brand-accent transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-brand-primary text-white pt-40 pb-24 px-6 overflow-hidden" id="hero">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" id="main-title">
              متاهة الإدمان: <br />
              <span className="text-brand-secondary">الفهم، المواجهة، والتحرر</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed" id="hero-subtitle">
              رحلة تبدأ بالوعي، وتستمر بالشجاعة، وتنتهي بالحرية. لأنك لست وحدك، ولأن التغيير ممكن دائماً.
            </p>
          </motion.div>
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a 
              href="#intro" 
              whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
              className="animate-bounce p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronDown size={32} />
            </motion.a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-32">
        
        {/* Introduction Section */}
        <section id="intro" className="scroll-mt-32">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary mb-6 shadow-sm">
                <Heart size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">نظرة إنسانية</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary leading-tight">الإدمان: اضطراب لا خلل أخلاقي</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  لسنوات طويلة، نُظر إلى الإدمان بصفته "ضعفاً في الشخصية" أو "فشلاً أخلاقياً". لكن العلم الحديث يؤكد أن الإدمان هو **اضطراب تكراري معقد** يؤثر بشكل مباشر على وظائف الدماغ وسلوكه.
                </p>
                <p>
                  إنه حالة تجعل الشخص يفقد السيطرة على استخدامه للمواد أو انخراطه في سلوكيات معينة، رغم علمه التام بآثارها الضارة. الاعتراف بأنه مرض هو الخطوة الأولى والأساسية نحو رحلة التعافي.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-50 shadow-2xl flex items-center justify-center p-12"
              variants={slideInRight}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-white to-brand-primary/10"></div>
               <div className="relative z-10 w-full h-full">
                  {/* Mixed Addiction Icons Composition */}
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
                  
                  {/* Central Heart - unifying element */}
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

        {/* Types of Addiction Section */}
        <section id="types" className="scroll-mt-32">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-4">تعددت الوجوه والجوهر واحد</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ينقسم الإدمان إلى فئتين رئيسيتين، كلاهما يشتركان في السيطرة القهرية على الفرد.</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Chemical Addiction */}
            <motion.div 
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              variants={slideInLeft}
              id="chemical-addiction"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6"
              >
                <ShieldAlert className="text-red-500" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">الإدمان الكيميائي</h3>
              <p className="text-gray-600 mb-6 italic">يتعلق بالمواد التي تدخل الجسم وتغير من كيميائه.</p>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {[
                  { title: "المخدرات", desc: "بأنواعها المختلفة الطبيعية والمصنعة." },
                  { title: "الكحول", desc: "أحد أكثر أنواع الإدمان انتشاراً وتأثيراً." },
                  { title: "النيكوتين", desc: "المادة الفعالة في التبغ ومنتجات التدخين." },
                  { title: "الأدوية الموصوفة", desc: "سوء استخدام المسكنات أو المهدئات." }
                ].map((item, idx) => (
                  <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariant}>
                    <div className="mt-1 p-1 rounded-full bg-brand-secondary/10">
                      <CheckCircle2 size={16} className="text-brand-secondary flex-shrink-0" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">{item.title}:</span>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Behavioral Addiction */}
            <motion.div 
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              variants={slideInRight}
              id="behavioral-addiction"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"
              >
                <Activity className="text-blue-500" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">الإدمان السلوكي</h3>
              <p className="text-gray-600 mb-6 italic">يتمحور حول أفعال قهرية تعطي شعوراً مؤقتاً بالراحة.</p>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {[
                  { title: "الإنترنت والألعاب", desc: "الهروب من الواقع إلى العالم الرقمي لساعات." },
                  { title: "القمار", desc: "الرهان القهري رغم التبعات المالية المدمرة." },
                  { title: "الشراء القهري", desc: "استخدام التسوق كوسيلة للتعامل مع المشاعر." },
                  { title: "إدمان العمل", desc: "تغليب العمل على كافة جوانب الحياة الاجتماعية والصحية." }
                ].map((item, idx) => (
                  <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariant}>
                    <div className="mt-1 p-1 rounded-full bg-brand-secondary/10">
                      <CheckCircle2 size={16} className="text-brand-secondary flex-shrink-0" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">{item.title}:</span>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Brain Mechanism Section */}
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
                    دماغنا مبرمج للبحث عن "المكافآت" (مثل الطعام أو الروابط الاجتماعية) من خلال إفراز مادة كيميائية تسمى **الدوبامين**. هذا النظام هو ما يبقينا على قيد الحياة.
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

        {/* Symptoms Section */}
        <section id="symptoms" className="scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">علامات التحذير: متى يجب الانتباه؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">الإدمان يتسلل إلى كافة جوانب الحياة، تاركاً خلفه آثاراً واضحة.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
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
            ].map((box, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{box.icon}</div>
                <h3 className="text-xl font-bold mb-4">{box.title}</h3>
                <ul className="space-y-3">
                  {box.list.map((item, j) => (
                    <li key={j} className="text-gray-600 text-sm flex gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Myths and Facts Section */}
        <section id="myths" className="scroll-mt-32">
           <div className="bg-brand-bg rounded-[3rem] p-8 md:p-16 border-2 border-brand-primary/5">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-primary mb-4 flex items-center justify-center gap-3">
                   <HelpCircle className="text-brand-accent " />
                   خرافات وحقائق
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-secondary/20">
                      <th className="py-4 px-6 text-red-600 font-bold text-xl">الخرافة</th>
                      <th className="py-4 px-6 text-green-600 font-bold text-xl">الحقيقة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { m: "المدمن شخص 'سيء' يحتاج إلى العقاب.", f: "المدمن شخص 'مريض' يحتاج إلى العلاج والدعم." },
                      { m: "التوقف عن الإدمان هو مسألة 'قوة إرادة' فقط.", f: "الإرادة مهمة، لكن الإدمان يغير كيمياء الدماغ ويتطلب علاجاً متخصصاً." },
                      { m: "المرور بانتكاسة يعني فشل رحلة العلاج.", f: "الانتكاسة جزء من مسار التعافي لبعض الأشخاص وتتطلب مراجعة الخطة العلاجية." },
                      { m: "الإدمان الكيميائي فقط هو الإدمان 'الحقيقي'.", f: "الإدمان السلوكي له نفس الأثر المدمر على مراكز المكافأة في الدماغ." }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-brand-primary/5 transition-colors">
                        <td className="py-6 px-6 text-gray-500 italic">"{row.m}"</td>
                        <td className="py-6 px-6 text-gray-800 font-medium leading-relaxed">{row.f}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>
        </section>

        {/* Recovery Steps Section */}
        <section id="recovery" className="scroll-mt-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-6">خطوات التعافي: الباب دائماً مفتوح</h2>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              "التعافي ليس وجهة نصل إليها، بل هو مسار نختاره كل يوم."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {[
              { 
                id: "cbt",
                icon: <Brain className="text-blue-500" size={32} />, 
                title: "العلاج المعرفي السلوكي (CBT)", 
                desc: "يهدف لمساعدة الفرد على التعرف على أفكاره وسلوكياته الهدامة وتغييرها واستبدالها بأنماط صحية.",
                details: "يركز هذا النوع من العلاج على العلاقة بين الأفكار والمشاعر والسلوكيات. يتعلم الشخص كيفية تحديد 'المحفزات' (Triggers) التي تدفعه للسلوك الإدماني وكيفية تطوير استراتيجيات بديلة للتعامل مع التوتر أو المشاعر السلبية دون اللجوء للإدمان.",
                link: "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral",
                linkText: "تعرف أكثر على العلاج السلوكي",
                color: "blue"
              },
              { 
                id: "support",
                icon: <Users className="text-green-500" size={32} />, 
                title: "مجموعات الدعم", 
                desc: "التواجد وسط أشخاص مروا بنفس التجربة يقلل من مشاعر الوحدة والوصم، ويوفر بيئة آمنة للمشاركة.",
                details: "توفر مجموعات الدعم (مثل مجموعات الـ 12 خطوة) شعوراً بالانتماء والقبول غير المشروط. المشاركة في التجارب الشخصية تسمح للأفراد برؤية أن التعافي ممكن من خلال قصص نجاح الآخرين، مما يوفر الدعم العاطفي اللازم خلال الفترات الصعبة.",
                link: "https://www.aa.org/",
                linkText: "استكشف مجموعات الدعم العالمية",
                hasSearch: true,
                color: "green"
              },
              { 
                id: "medical",
                icon: <Stethoscope className="text-red-500" size={32} />, 
                title: "التدخل الطبي والدوائي", 
                desc: "في حالات كثيرة، يحتاج الدماغ لتدخل طبي لتخفيف أعراض الانسحاب وإعادة التوازن الكيميائي تحت إشراف متخصصين.",
                details: "قد يشمل التدخل الطبي عملية 'إزالة السموم' (Detox) تحت رقابة طبية صارمة لضمان سلامة المريض. كما توجد أدوية تساعد في تقليل الرغبة الملحة (Cravings) أو علاج الاضطرابات النفسية المصاحبة مثل الاكتئاب والقلق التي غالباً ما تكون سبباً خلف الإدمان.",
                link: "https://www.samhsa.gov/medication-assisted-treatment",
                linkText: "معلومات عن العلاج بمساعدة الأدوية",
                color: "red"
              }
            ].map((step, i) => {
              const [isExpanded, setIsExpanded] = useState(false);
              const [searchQuery, setSearchQuery] = useState("");

              const localGroups = useMemo(() => [
                { name: "مجموعة الأمل", city: "القاهرة", country: "مصر", coords: [30.0444, 31.2357] as [number, number] },
                { name: "خطوة بخطوة", city: "الرياض", country: "السعودية", coords: [24.7136, 46.6753] as [number, number] },
                { name: "طريق النجاة", city: "عمان", country: "الأردن", coords: [31.9454, 35.9284] as [number, number] },
                { name: "يدا بيد", city: "الدار البيضاء", country: "المغرب", coords: [33.5731, -7.5898] as [number, number] },
                { name: "فجر جديد", city: "دبي", country: "الإمارات", coords: [25.2048, 55.2708] as [number, number] },
                { name: "حياة أفضل", city: "بيروت", country: "لبنان", coords: [33.8938, 35.5018] as [number, number] },
              ], []);

              const filteredGroups = useMemo(() => 
                localGroups.filter(g => 
                  g.city.includes(searchQuery) || g.country.includes(searchQuery) || g.name.includes(searchQuery)
                ), 
              [searchQuery, localGroups]);

              const mapCenter = useMemo(() => {
                if (filteredGroups.length > 0 && searchQuery.length > 0) {
                  return filteredGroups[0].coords;
                }
                return [25, 40] as [number, number]; // Regional center Default
              }, [filteredGroups, searchQuery]);

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`relative rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand-secondary/30 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col ${isExpanded ? 'lg:col-span-3' : ''}`}
                >
                  {/* Decorative corner element */}
                  <div className={`absolute top-0 left-0 w-24 h-24 -translate-x-12 -translate-y-12 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`p-5 bg-gray-50 rounded-[1.5rem] group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner`}
                      >
                        {step.icon}
                      </motion.div>
                      <button 
                         onClick={() => setIsExpanded(!isExpanded)}
                         className={`p-3 rounded-full transition-colors ${isExpanded ? 'bg-brand-primary text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                      >
                         <ChevronDown className={`transition-transform duration-500 rounded-full ${isExpanded ? 'rotate-180' : ''}`} size={20} />
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{step.desc}</p>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-8 border-t border-gray-100 mt-2"
                        >
                          <div className={step.hasSearch ? "grid lg:grid-cols-2 gap-12" : ""}>
                            <div className="space-y-6">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {step.id === "cbt" ? (
                                  <>
                                    يركز هذا النوع من العلاج على العلاقة بين {" "}
                                    <button onClick={(e) => { e.stopPropagation(); setActiveKeyword(cbtKeywords["الأفكار"]); }} className="text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:bg-brand-accent/5 px-1 rounded transition-colors cursor-help">الأفكار</button> {" "}و{" "}
                                    <button onClick={(e) => { e.stopPropagation(); setActiveKeyword(cbtKeywords["المشاعر"]); }} className="text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:bg-brand-accent/5 px-1 rounded transition-colors cursor-help">المشاعر</button> {" "}و{" "}
                                    <button onClick={(e) => { e.stopPropagation(); setActiveKeyword(cbtKeywords["السلوكيات"]); }} className="text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:bg-brand-accent/5 px-1 rounded transition-colors cursor-help">السلوكيات</button>. 
                                    يتعلم الشخص كيفية تحديد {" "}
                                    <button onClick={(e) => { e.stopPropagation(); setActiveKeyword(cbtKeywords["المحفزات"]); }} className="text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:bg-brand-accent/5 px-1 rounded transition-colors cursor-help">المحفزات</button> {" "}
                                    (Triggers) التي تدفعه للسلوك الإدماني وكيفية تطوير استراتيجيات بديلة للتعامل مع التوتر أو المشاعر السلبية دون اللجوء للإدمان.
                                  </>
                                ) : step.details}
                              </p>
                              
                              <a 
                                href={step.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-brand-primary font-bold hover:text-brand-accent transition-all group/link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="p-2 bg-brand-primary/10 rounded-lg group-hover/link:bg-brand-accent/10 transition-colors">
                                  <Info size={18} className="group-hover/link:text-brand-accent transition-colors" />
                                </div>
                                <span>{step.linkText}</span>
                                <ArrowRight size={18} className="rotate-180 group-hover/link:translate-x-1 transition-transform" />
                              </a>
                            </div>

                            {step.hasSearch && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="p-3 bg-brand-primary text-white rounded-xl shadow-lg ring-4 ring-brand-primary/10">
                                    <Search size={22} />
                                  </div>
                                  <h4 className="font-bold text-brand-primary text-lg">ابحث عن مجموعة دعم قريبة منك</h4>
                                </div>
                                <input 
                                  type="text"
                                  placeholder="أدخل اسم المدينة أو الدولة..."
                                  className="w-full p-5 rounded-2xl border-2 border-gray-100 focus:border-brand-accent/50 focus:outline-none bg-white transition-all text-sm mb-6 shadow-sm"
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                
                                {/* Interactive Map */}
                                <div className="w-full h-72 rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-xl rtl-map">
                                  <MapContainer 
                                    center={mapCenter} 
                                    zoom={searchQuery.length > 0 ? 8 : 3} 
                                    className="w-full h-full z-0"
                                    scrollWheelZoom={false}
                                  >
                                    <ChangeView center={mapCenter} zoom={searchQuery.length > 0 ? 8 : 3} />
                                    <TileLayer
                                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {filteredGroups.map((group, idx) => (
                                      <Marker key={idx} position={group.coords}>
                                        <Popup>
                                          <div className="text-right font-sans p-1">
                                            <div className="font-bold text-brand-primary mb-1">{group.name}</div>
                                            <div className="text-xs text-gray-500">{group.city} - {group.country}</div>
                                          </div>
                                        </Popup>
                                      </Marker>
                                    ))}
                                  </MapContainer>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-60 overflow-y-auto pr-3 custom-scrollbar">
                                  {filteredGroups.length > 0 ? filteredGroups.map((group, idx) => (
                                    <motion.div 
                                      key={idx}
                                      whileHover={{ scale: 1.02 }}
                                      className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-between group/item transition-all hover:border-brand-accent/20"
                                    >
                                      <div>
                                        <div className="font-bold text-gray-800 text-sm group-hover/item:text-brand-primary transition-colors">{group.name}</div>
                                        <div className="text-xs text-gray-400">{group.city}</div>
                                      </div>
                                      <div className="p-2 bg-gray-50 rounded-lg text-gray-300 group-hover/item:text-brand-accent group-hover/item:bg-brand-accent/5 transition-all">
                                        <ArrowRight size={16} className="rotate-180" />
                                      </div>
                                    </motion.div>
                                  )) : (
                                    <div className="col-span-full py-8 text-center text-gray-400 text-sm italic">
                                      لا توجد مجموعات مسجلة في هذا الموقع حالياً...
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Psychological Test Section */}
        <section id="psychological-test" className="scroll-mt-32">
          <div className="bg-brand-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
                  <ClipboardList size={32} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">مقياس الوعي والمرونة النفسية</h2>
                <p className="text-white/70">توقف قليلاً لتتأمل في عالمك الداخلي. أجب بصدق لتعرف مدى صلابة درعك النفسي.</p>
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
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                      <h3 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed text-center">
                        {psychologicalTestQuestions[pQuizStep].q}
                      </h3>
                      <div className="grid gap-4">
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
                              className={`w-full p-5 rounded-2xl border text-right transition-all flex items-center justify-between group ${bgColor} ${borderColor}`}
                            >
                              <span className="text-lg">{option.text}</span>
                              {isPAnswered && isSelected && <CheckCircle2 className="text-brand-accent" size={24} />}
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

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-32">
           <motion.div 
             className="text-center mb-16"
             variants={fadeIn}
             initial="initial"
             whileInView="whileInView"
           >
              <h2 className="text-3xl font-bold text-brand-primary mb-4">الأسئلة الشائعة</h2>
              <p className="text-gray-600">إجابات سريعة على تساؤلات قد تدور في ذهنك.</p>
           </motion.div>
           
           <motion.div 
             className="max-w-3xl mx-auto space-y-4"
             variants={staggerContainer}
             initial="initial"
             whileInView="whileInView"
           >
              {[
                { q: "هل الإدمان وراثي؟", a: "الأبحاث تشير إلى وجود استعداد وراثي، لكن الجينات ليست هي العامل الوحيد؛ البيئة والنشأة تلعبان دوراً حاسماً أيضاً." },
                { q: "كم تستغرق رحلة التعافي؟", a: "التعافي رحلة مستمرة وتختلف مدتها من شخص لآخر. التركيز يجب أن يكون على 'اليوم' والتقدم خطوات صغيرة ومستمرة." },
                { q: "هل يمكن الشفاء تماماً من الإدمان؟", a: "يصنف الإدمان كمرض مزمن، لذا يفضل استخدام مصطلح 'التعافي المستمر'. بمرور الوقت، تصبح إدارة الحالة أسهل بكثير وتعود الحياة لطبيعتها." },
                { q: "كيف أساعد صديقاً يعاني من الإدمان دون إشعاره بالوصم؟", a: "ابدأ بالتعبير عن قلقك بلطف، استمع دون إصدار أحكام، واعرض مرافقتهم لزيارة مختص. الدعم غير المشروط هو المفتاح." }
              ].map((item, i) => (
                <motion.details 
                  key={i} 
                  variants={fadeIn}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 open:shadow-md transition-all hover:border-brand-primary/20"
                >
                   <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                      <span className="text-gray-800">{item.q}</span>
                      <PlusIcon className="group-open:rotate-45 transition-transform text-brand-secondary" />
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

        {/* Resource Links / Contact (Optional) */}
        <section className="bg-brand-bg rounded-[3rem] p-8 md:p-12 text-center" id="support">
           <h3 className="text-2xl font-bold mb-6 text-brand-primary">هل تحتاج للمساعدة الآن؟</h3>
           <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
                 <LifeBuoy className="text-brand-accent" size={20} />
                 <span className="font-medium">خط الدعم النفسي: 12345 (تجريبي)</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
                 <Search className="text-brand-secondary" size={20} />
                 <span className="font-medium">ابحث عن أقرب مركز علاج</span>
              </div>
           </div>
        </section>

        {/* Message of Hope */}
        <section id="hope" className="text-center pt-16">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-brand-accent text-white p-12 rounded-[4rem] relative overflow-hidden"
           >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                 <Lightbulb className="mx-auto mb-6 text-yellow-200" size={48} />
                 <h2 className="text-4xl font-bold mb-6">رسالة أمل</h2>
                 <p className="text-xl max-w-2xl mx-auto leading-relaxed font-light mb-8">
                   مهما كان عمق المتاهة، ومهما كانت جدرانها عالية، تذكر دائماً أنك تمتلك القوة بداخل الطلب للمساعدة. التعافي ليس سهلاً، لكنه يستحق كل ثانية من الجد. اليوم هو الوقت المناسب لتبدأ من جديد.
                 </p>
                 <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-brand-accent px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg group">
                      ابدأ رحلتك اليوم
                      <ArrowRight className="inline-block mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button className="bg-brand-primary/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                      تواصل مع مستشار
                    </button>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Social Media & Community Section (Expandable) */}
        <section id="community" className="scroll-mt-32 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl transition-colors ${isContactOpen ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary border border-gray-100'}`}>
                    <Users size={28} />
                  </div>
                  <div className="text-right">
                    <h2 className="text-2xl font-bold text-brand-primary">تواصل معنا</h2>
                    <p className="text-gray-500 text-sm">انضم لمجتمعنا على انستغرام وديسكورد</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isContactOpen ? 180 : 0 }}
                  className="p-2 text-gray-400 group-hover:text-brand-accent transition-colors"
                >
                  <ChevronDown size={32} />
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
                    <div className="pt-12 grid md:grid-cols-2 gap-12 items-start border-t border-gray-100 mt-8">
                      {/* Instagram Accounts */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-center gap-3 text-pink-600 mb-4">
                          <Instagram size={28} />
                          <span className="font-bold text-lg">حسابات انستغرام</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                              className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:border-pink-200 transition-all"
                            >
                              <Instagram size={14} className="text-pink-500" />
                              @{acc}
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Discord Section */}
                      <div className="flex flex-col items-center justify-center h-full border-t md:border-t-0 md:border-r border-gray-100 pt-8 md:pt-0">
                        <div className="flex items-center justify-center gap-3 text-indigo-600 mb-6">
                          <MessageSquare size={28} />
                          <span className="font-bold text-lg">مجتمع ديسكورد</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-8 max-w-xs mx-auto text-center leading-relaxed">
                          انضم إلى مجتمعنا على ديسكورد للحصول على دعم مباشر، نقاشات هادفة، ومساحة آمنة للتعبير والنمو المشترك.
                        </p>
                        <motion.a 
                          href="https://discord.gg/invite" // Replace with actual discord invite link
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-indigo-100 transition-all"
                        >
                          <MessageSquare size={20} />
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

      </main>

      {/* Keyword Definition Popup */}
      <AnimatePresence>
        {activeKeyword && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveKeyword(null)}
              className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-lg">
                  <Lightbulb className="text-brand-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-primary">{activeKeyword.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {activeKeyword.content}
              </p>
              <button 
                onClick={() => setActiveKeyword(null)}
                className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold hover:brightness-110 transition-all"
              >
                فهمت
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-32" id="footer">
         <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="text-brand-primary font-bold text-2xl" id="footer-logo">
                 متاهة الإدمان
               </div>
               <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
                  {navLinks.map((link, i) => (
                    <a key={i} href={link.href} className="hover:text-brand-accent transition-colors">
                      {link.name}
                    </a>
                  ))}
               </div>
            </div>
            
            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
               <div className="max-w-md text-center md:text-right">
                  هذا الموقع للأغراض التثقيفية والتوعوية فقط. المعلومات المقدمة ليست بديلاً عن المشورة الطبية المتخصصة.
               </div>
               <div>
                 © 2026 جميع الحقوق محفوظة - معاً نحو مجتمع واعٍ.
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
