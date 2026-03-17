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
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`mt-5 h-1 rounded-full bg-gradient-to-r from-accent to-accent-light ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
