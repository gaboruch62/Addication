import { useState, useMemo, useEffect, Key } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Brain, Users, Stethoscope, ChevronDown, Info, ArrowRight, Search } from "lucide-react";
import { cbtKeywords } from "../constants";

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function RecoverySteps({ setActiveKeyword }: { setActiveKeyword: (keyword: any) => void }) {
  const steps = [
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
  ];

  return (
    <section id="recovery" className="scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 px-4">خطوات التعافي: الباب دائماً مفتوح</h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg italic px-6">
          "التعافي ليس وجهة نصل إليها، بل هو مسار نختاره كل يوم."
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {steps.map((step, i) => (
          <RecoveryStepItem key={i} step={step} i={i} setActiveKeyword={setActiveKeyword} />
        ))}
      </div>
    </section>
  );
}

interface RecoveryStepItemProps {
  key?: Key;
  step: any;
  i: number;
  setActiveKeyword: (keyword: any) => void;
}

function RecoveryStepItem({ step, i, setActiveKeyword }: RecoveryStepItemProps) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      className={`relative rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand-secondary/30 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col ${isExpanded ? 'lg:col-span-3' : ''}`}
    >
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
}
