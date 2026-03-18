import Link from "next/link";
import { Home, PenLine } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-section-bg">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-3 text-muted text-lg max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/#apply"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <PenLine className="h-4 w-4" />
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
