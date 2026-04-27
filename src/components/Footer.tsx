import { navLinks } from "../constants";

export default function Footer() {
  return (
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
          
          <div className="pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-gray-400">
             <div className="max-w-md text-center md:text-right">
                هذا الموقع للأغراض التثقيفية والتوعوية فقط. المعلومات المقدمة ليست بديلاً عن المشورة الطبية المتخصصة.
             </div>
             <div>
               © 2026 جميع الحقوق محفوظة - معاً نحو مجتمع واعٍ.
             </div>
          </div>
       </div>
    </footer>
  );
}
