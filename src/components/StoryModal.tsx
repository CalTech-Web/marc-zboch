"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, GraduationCap } from "lucide-react";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: {
    name: string;
    title: string;
    paragraphs: string[];
  } | null;
}

export default function StoryModal({ isOpen, onClose, story }: StoryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => modalRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && story && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Story by ${story.name} — ${story.title}`}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden outline-none"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-primary-light to-[#1a4a7a] px-6 sm:px-8 py-6 shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">
                  {story.name}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                &ldquo;{story.title}&rdquo;
              </h2>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6 overflow-y-auto modal-scroll flex-1">
              <div className="space-y-4">
                {story.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-muted text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-gray-100 bg-gray-50/50 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <GraduationCap className="h-4 w-4" />
                  Marc Zboch Academic Scholarship
                </div>
                <a
                  href="/#apply"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary text-sm font-semibold px-5 py-2 rounded-full transition-all hover:-translate-y-0.5 shadow-md"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
