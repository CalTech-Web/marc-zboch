"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  PenLine,
  FileText,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RecipientCard from "@/components/RecipientCard";
import ScholarshipForm from "@/components/ScholarshipForm";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-[#1a4a7a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span className="text-white/90 text-sm font-medium">2026 Scholarship Now Open</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Marc Zboch
              <br />
              <span className="text-accent">Academic Scholarship</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              A $1,000 scholarship awarded to a U.S. college or university student who demonstrates
              a commitment to helping others through personal sacrifice.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <PenLine className="h-5 w-5" />
                Apply Now
              </a>
              <Link
                href="/stories-that-matter"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <FileText className="h-5 w-5" />
                Read Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About The Marc Zboch Academic Scholarship"
            subtitle="Supporting students who make a difference."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            <p>
              The Marc Zboch Academic Scholarship recognizes and rewards students who demonstrate a
              genuine commitment to making a positive impact in their communities. Through personal
              sacrifice and service to others, these students embody the values that this scholarship
              was created to celebrate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Key Info Cards ── */}
      <section className="py-20 bg-section-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Award Amount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5">
                <DollarSign className="h-7 w-7 text-green-600 icon-float" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Scholarship Award</h3>
              <p className="text-4xl font-bold text-primary">$1,000</p>
              <p className="text-sm text-muted mt-2">One-time award for 2026</p>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-7 w-7 text-blue-600 icon-float" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Open to any U.S. college or university student
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  No GPA, major, gender, or demographic requirements
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Must be registered for Fall 2026
                </li>
              </ul>
            </motion.div>

            {/* Deadline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
                <Calendar className="h-7 w-7 text-amber-600 icon-float" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Application Deadline</h3>
              <p className="text-2xl font-bold text-primary">February 1, 2027</p>
              <p className="text-sm text-muted mt-2">Applications close at 11:59 PM EST</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Essay Topic ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Scholarship Essay Topic" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-8 sm:p-10 text-center"
          >
            <PenLine className="h-10 w-10 text-primary mx-auto mb-4 icon-hover" />
            <blockquote className="text-xl sm:text-2xl font-semibold text-foreground italic leading-relaxed">
              &ldquo;Describe a time when you made sacrifices to help others.&rdquo;
            </blockquote>
            <p className="mt-4 text-muted">400-word response required</p>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="py-20 bg-section-bg scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Academic Scholarship Form"
            subtitle="Fill out the form below to submit your application."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-10"
          >
            <ScholarshipForm />
          </motion.div>
        </div>
      </section>

      {/* ── Past Recipients ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Past Scholarship Recipients"
            subtitle="Meet the students who have been awarded the Marc Zboch Academic Scholarship."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RecipientCard
              year="2024"
              name="Han Qi Chou"
              description="A combat medic who dedicated his time to mentoring underprivileged children in science, inspiring the next generation of learners through hands-on education and personal sacrifice."
              delay={0}
            />
            <RecipientCard
              year="2022"
              name="Lorenzo Cinalli"
              description="An environmental policy graduate student and AmeriCorps volunteer committed to serving communities through sustainable practices and grassroots advocacy."
              delay={0.1}
            />
            <RecipientCard
              year="2021"
              name="Katrina"
              description="A Human Services student who spent over a year as a caseworker in a refugee camp on the Island of Lesbos, Greece, helping vulnerable women and families who crossed the Aegean Sea."
              delay={0.2}
            />
          </div>
        </div>
      </section>
    </>
  );
}
