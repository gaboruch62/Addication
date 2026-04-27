import { HelpCircle } from "lucide-react";

export default function MythsFacts() {
  const items = [
    { m: "المدمن شخص 'سيء' يحتاج إلى العقاب.", f: "المدمن شخص 'مريض' يحتاج إلى العلاج والدعم." },
    { m: "التوقف عن الإدمان هو مسألة 'قوة إرادة' فقط.", f: "الإرادة مهمة، لكن الإدمان يغير كيمياء الدماغ ويتطلب علاجاً متخصصاً." },
    { m: "المرور بانتكاسة يعني فشل رحلة العلاج.", f: "الانتكاسة جزء من مسار التعافي لبعض الأشخاص وتتطلب مراجعة الخطة العلاجية." },
    { m: "الإدمان الكيميائي فقط هو الإدمان 'الحقيقي'.", f: "الإدمان السلوكي له نفس الأثر المدمر على مراكز المكافأة في الدماغ." }
  ];

  return (
    <section id="myths" className="scroll-mt-24 md:scroll-mt-32">
       <div className="bg-brand-bg rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 border-2 border-brand-primary/5">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 flex items-center justify-center gap-3 font-sans">
               <HelpCircle className="text-brand-accent shrink-0" size={28} />
               خرافات وحقائق
            </h2>
          </div>
          
          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-6">
            {items.map((row, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand-primary/5 shadow-sm text-right space-y-4">
                <div>
                  <div className="text-red-500 font-bold text-xs uppercase tracking-widest mb-1">الخرافة</div>
                  <p className="text-gray-500 italic text-sm">"{row.m}"</p>
                </div>
                <div className="pt-4 border-t border-gray-50">
                  <div className="text-green-600 font-bold text-xs uppercase tracking-widest mb-1">الحقيقة</div>
                  <p className="text-gray-800 font-medium leading-relaxed text-sm">{row.f}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-secondary/20">
                  <th className="py-4 px-6 text-red-600 font-bold text-xl">الخرافة</th>
                  <th className="py-4 px-6 text-green-600 font-bold text-xl">الحقيقة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((row, i) => (
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
  );
}
