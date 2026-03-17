"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stories-that-matter", label: "Stories That Matter" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <GraduationCap className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="text-lg font-bold text-primary tracking-tight group-hover:text-primary-light transition-colors">
              Marc Zboch Scholarship
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
            <a
              href="/#apply"
              className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-light text-primary text-sm font-semibold px-5 py-2 rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg btn-pulse"
            >
              Apply Now
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-primary/5 text-primary"
                        : "text-muted hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/#apply"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-accent hover:bg-accent-light text-primary text-sm font-semibold px-5 py-2.5 rounded-full mx-3 transition-all shadow-md"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
