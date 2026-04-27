import { NavLink, CBTKeyword, PsychologicalQuestion, FAQItem } from "./types";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "backOut" }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const listItemVariant = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4 }
};

export const navLinks: NavLink[] = [
  { name: "البداية", href: "#hero" },
  { name: "عن الإدمان", href: "#intro" },
  { name: "الأنواع", href: "#types" },
  { name: "الدماغ", href: "#brain" },
  { name: "اختبار الوعي", href: "#psychological-test" },
  { name: "كتب ملهمة", href: "#books" },
  { name: "بدائل ممتعة", href: "#prevention" },
  { name: "التعافي", href: "#recovery" },
  { name: "الأسئلة الشائعة", href: "#faq" }
];

export const cbtKeywords: Record<string, CBTKeyword> = {
  "الأفكار": { title: "الأفكار التلقائية", content: "هي الأفكار التي تخطر ببالنا فوراً وتؤثر على شعورنا، وغالباً ما تكون غير دقيقة في حالات الإدمان." },
  "المشاعر": { title: "التنظيم العاطفي", content: "القدرة على فهم وإدارة المشاعر القوية بدلاً من الهروب منها عبر السلوك الإدماني." },
  "السلوكيات": { title: "الأنماط السلوكية", content: "الأفعال المتكررة التي نقوم بها استجابة لمحفزات معينة، ويهدف العلاج لتغيير هذه الاستجبة." },
  "المحفزات": { title: "المحفزات (Triggers)", content: "أماكن، أشخاص، أو مشاعر معينة تثير الرغبة الشديدة في العودة للسلوك الإدماني." }
};

export const psychologicalTestQuestions: PsychologicalQuestion[] = [
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

export const faqItems: FAQItem[] = [
  { q: "هل الإدمان وراثي؟", a: "الأبحاث تشير إلى وجود استعداد وراثي، لكن الجينات ليست هي العامل الوحيد؛ البيئة والنشأة تلعبان دوراً حاسماً أيضاً." },
  { q: "كم تستغرق رحلة التعافي؟", a: "التعافي رحلة مستمرة وتختلف مدتها من شخص لآخر. التركيز يجب أن يكون على 'اليوم' والتقدم خطوات صغيرة ومستمرة." },
  { q: "هل يمكن الشفاء تماماً من الإدمان؟", a: "يصنف الإدمان كمرض مزمن، لذا يفضل استخدام مصطلح 'التعافي المستمر'. بمرور الوقت، تصبح إدارة الحالة أسهل بكثير وتعود الحياة لطبيعتها." },
  { q: "كيف أساعد صديقاً يعاني من الإدمان دون إشعاره بالوصم؟", a: "ابدأ بالتعبير عن قلقك بلطف، استمع دون إصدار أحكام، واعرض مرافقتهم لزيارة مختص. الدعم غير المشروط هو المفتاح." }
];
