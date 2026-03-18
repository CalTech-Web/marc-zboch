"use client";

import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-section-bg">
      <div className="text-center px-4">
        <p className="text-6xl font-bold text-primary/20">Oops</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-muted text-lg max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
