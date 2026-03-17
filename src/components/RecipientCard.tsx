"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

interface RecipientCardProps {
  year: string;
  name: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

export default function RecipientCard({ year, name, description, delay = 0, onClick }: RecipientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-pointer card-glow"
    >
      <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-3 flex items-center justify-between">
        <span className="text-white/90 text-sm font-medium">{year} Recipient</span>
        <motion.div
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronRight className="h-3.5 w-3.5 text-white/80 group-hover:text-white transition-colors" />
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="h-6 w-6 text-accent" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-3">{description}</p>
            <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read full story <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
