"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-accent ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
