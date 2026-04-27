import { motion } from "motion/react";
import { BookOpen, Heart, Brain, Activity, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import { fadeIn, scaleIn } from "../constants";

export default function BookRecommendations() {
  const books = [
    {
      title: "الجسد يحافظ على السجل",
      author: "بيسيل فان دير كولك",
      desc: "كتاب ثوري يشرح كيف تغير الصدمات النفسية هيكلية الدماغ تماماً، وكيف أن التعافي الحقيقي يتطلب فهم لغة الجسد قبل لغة العقل.",
      icon: <Heart className="text-red-500" size={24} />,
      cover: "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg",
      buyUrl: "https://www.neelwafurat.com/itempage.aspx?id=lbb379963-376510&search=books"
    },
    {
      title: "في عالم الأشباح الجائعة",
      author: "غابور ماتيه",
      desc: "يقدم نظرة إنسانية متعاطفة جداً للإدمان، معتبراً إياه وسيلة للهروب من الألم النفسي الناتج عن الصدمات المبكرة والبيئة الاجتماعية.",
      icon: <Brain className="text-purple-500" size={24} />,
      cover: "https://covers.openlibrary.org/b/isbn/9781556438806-L.jpg",
      buyUrl: "https://www.neelwafurat.com/itempage.aspx?id=lbb373300-369680&search=books"
    },
    {
      title: "أمة الدوبامين",
      author: "آنا ليمبكي",
      desc: "يستعرض التحديات التي نواجهها في عصر الوفرة الرقمية، وكيف نجد التوازن في عالم مهووس بالمتعة السريعة والمكافآت الفورية.",
      icon: <Activity className="text-blue-500" size={24} />,
      cover: "https://covers.openlibrary.org/b/isbn/9781524746728-L.jpg",
      buyUrl: "https://www.jarir.com/arabic-books-585897.html"
    },
    {
      title: "عادات ذرية",
      author: "جيمس كلير",
      desc: "الدليل العملي الأنجح لبناء حياة جديدة؛ يعلمك كيف تفكك العادات السيئة وتبني عادات صحية مستدامة من خلال تغييرات بسيطة جداً.",
      icon: <Lightbulb className="text-amber-500" size={24} />,
      cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
      buyUrl: "https://www.jarir.com/arabic-books-525992.html"
    },
    {
      title: "الكتاب الكبير (AA)",
      author: "مجهولو الهوية",
      desc: "المرجع الكلاسيكي لبرنامج الـ 12 خطوة، لا يزال حتى اليوم بمثابة منارة أمل لملايين الأشخاص حول العالم في رحلة تعافيهم.",
      icon: <ShieldCheck className="text-indigo-500" size={24} />,
      cover: "https://covers.openlibrary.org/b/isbn/9781893007161-L.jpg",
      buyUrl: "https://www.aa.org/the-big-book"
    }
  ];

  return (
    <section id="books" className="scroll-mt-24 md:scroll-mt-32">
      <div className="text-center mb-12 md:mb-16">
        <motion.div 
          variants={scaleIn}
          initial="initial"
          whileInView="whileInView"
          className="inline-flex p-3 bg-brand-primary/5 rounded-2xl mb-4"
        >
          <BookOpen className="text-brand-primary" size={32} />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">مكتبة الوعي والتعافي</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-6 text-sm md:text-base">
          القراءة هي نافذة تطل منها على تجارب الآخرين وعمق العلم، اخترنا لك مجموعة من أهم الكتب التي قد تنير طريقك.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto px-4 md:px-0">
        {books.map((book, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 group items-center bg-white p-6 md:p-10 rounded-[3rem] border border-gray-100/50 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6 leading-tight group-hover:text-brand-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-brand-secondary font-black text-lg md:text-2xl mb-6 md:mb-8 flex items-center justify-center md:justify-start gap-3">
                <span className="hidden md:block w-10 h-[3px] bg-brand-primary/20 rounded-full" />
                تأليف: {book.author}
              </p>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-8 md:mb-12 line-clamp-4 md:line-clamp-none">
                {book.desc}
              </p>
              <a 
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div 
                  whileHover={{ x: -10 }}
                  className="inline-flex items-center gap-4 text-brand-primary font-black text-lg md:text-xl hover:text-brand-accent transition-colors cursor-pointer group/link py-3 px-6 md:py-4 md:px-8 border-2 border-brand-primary/10 rounded-[1.5rem] hover:bg-brand-primary/5"
                >
                  <span>احصل على الكتاب</span>
                  <div className="p-2 bg-brand-primary/10 rounded-xl group-hover/link:bg-brand-primary group-hover/link:text-white transition-all transform rotate-180">
                    <ArrowRight size={24} />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className="relative w-full md:w-1/3 aspect-[2/3] rounded-[2rem] overflow-hidden shadow-xl group-hover:shadow-brand-primary/20 transition-all duration-700 bg-gray-100 flex-shrink-0 order-1 md:order-2">
              <img 
                src={book.cover} 
                alt={book.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute top-6 left-6 p-4 bg-white/20 backdrop-blur-xl rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                {book.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
