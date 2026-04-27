import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100" id="top-nav">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="text-brand-primary font-bold text-lg md:text-xl shrink-0">متاهة الإدمان</div>
        
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
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-brand-primary/20 backdrop-blur-sm lg:hidden z-[-1]"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-brand-accent transition-colors py-3 px-4 rounded-xl hover:bg-gray-50 font-medium text-lg text-right"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
