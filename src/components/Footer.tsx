import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0f2744] via-primary to-primary-light text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Marc Zboch Academic Scholarship
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/stories-that-matter" className="hover:text-white transition-colors">Stories</Link>
            <a href="/#apply" className="hover:text-white transition-colors">Apply</a>
          </nav>
          <div className="flex flex-col items-center md:items-end gap-1.5 text-sm text-white/50">
            <p>Copyright {currentYear} &copy; Marc Zboch Academic Scholarship</p>
            <p>
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors underline underline-offset-2"
              >
                CalTech Web
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
