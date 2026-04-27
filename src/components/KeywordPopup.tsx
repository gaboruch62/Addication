import { motion, AnimatePresence } from "motion/react";
import { Lightbulb } from "lucide-react";
import { CBTKeyword } from "../types";

interface KeywordPopupProps {
  activeKeyword: CBTKeyword | null;
  onClose: () => void;
}

export default function KeywordPopup({ activeKeyword, onClose }: KeywordPopupProps) {
  return (
    <AnimatePresence>
      {activeKeyword && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
              onClick={onClose}
              className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold hover:brightness-110 transition-all"
            >
              فهمت
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
