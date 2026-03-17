"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface RecipientCardProps {
  year: string;
  name: string;
  description: string;
  delay?: number;
}

export default function RecipientCard({ year, name, description, delay = 0 }: RecipientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-3">
        <span className="text-white/90 text-sm font-medium">{year} Recipient</span>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Award className="h-6 w-6 text-accent icon-hover" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <p className="mt-2 text-muted text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
