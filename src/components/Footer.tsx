import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold tracking-tight">
              Marc Zboch Academic Scholarship
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-white/70">
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
