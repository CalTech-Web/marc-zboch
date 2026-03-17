"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  PenLine,
  FileText,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RecipientCard from "@/components/RecipientCard";
import ScholarshipForm from "@/components/ScholarshipForm";
import WinnerModal from "@/components/WinnerModal";

const winners = [
  {
    year: "2024",
    name: "Han Qi Chou",
    summary:
      "A combat medic who dedicated his time to mentoring underprivileged children in science, inspiring the next generation of learners through hands-on education and personal sacrifice.",
    fullStory: [
      "My journey of sacrifice and service began during my tenure as a combat medic with the Republic of Singapore Air Force (RSAF). As a medic, I was trained to prioritize the well-being of others above my own, a principle that has since guided every aspect of my life.",
      "Beyond my military service, I dedicated countless hours to mentoring underprivileged children in science. I organized hands-on experiments like liquid chromatography, making complex concepts accessible and fun for young minds. I also planned educational excursions to attractions including the S.E.A Aquarium, providing experiences these children might never have had otherwise.",
      "I participated in community food distribution projects such as Project C.A.N and Project R.I.C.E, helping to ensure that families in need had access to nutritious meals. Each of these efforts required me to sacrifice personal time, comfort, and sometimes financial resources.",
      "Through these experiences, I learned that sacrifice is not just about giving up something; it's about making a meaningful difference in the lives of others. Every hour spent mentoring, every meal distributed, and every lesson taught reinforced my belief that true fulfillment comes from serving those around us.",
    ],
  },
  {
    year: "2022",
    name: "Lorenzo Cinalli",
    summary:
      "An environmental policy graduate student and AmeriCorps volunteer who worked 60-70 hours weekly in disaster relief, committed to public service through conservation and community work.",
    fullStory: [
      "My commitment to public service began long before my graduate studies in environmental policy. As an AmeriCorps volunteer, I learned what it truly means to sacrifice for the greater good.",
      "In the aftermath of Hurricane Michael in Florida, I found myself working 60 to 70 hours per week for a month, helping families whose homes had been destroyed. The work was physically exhausting and emotionally draining, but seeing the relief in people's eyes when they received help made every long day worthwhile.",
      "Throughout my academic and professional journey, I have served in numerous volunteer roles: as an international student ambassador, an aquarium interpreter, a conservation district outreach volunteer, and a National Park Ranger. Each role taught me something new about service and sacrifice.",
      "The experience as a National Park Ranger truly changed my life. It connected me with people from all walks of life and reinforced my belief that environmental stewardship and community service are inseparable. I am committed to continuing this path of public service through my graduate studies in environmental policy.",
    ],
  },
  {
    year: "2021",
    name: "Katrina",
    summary:
      "A Human Services student who spent over a year as a caseworker in a refugee camp on the Island of Lesbos, Greece, helping vulnerable women and families who crossed the Aegean Sea.",
    fullStory: [
      "One of the most life-changing times in my life started in August of 2017. I was 20 years old and was struggling to find a calling and purpose for my life. Through random mutual friends, I ended up flying to the Island of Lesbos Greece, where I spent the next 1.5 years volunteering off and on in a refugee camp. Camp Moria was an old military base converted into a facility to house migrants who had made the 3-mile journey across the Aegean sea from Turkey to Greece for security and a future. The trip was dangerous, the Turkish police would stop and beat refugees if they caught them attempting to cross the sea. It was here that I met some of the most caring, kind, and giving people I could ever hope to meet.",
      "Most of the refugees made it across the sea with only backpacks containing all of their remaining possessions. They had almost nothing. It wasn't uncommon for people to have no more than 1 set of clothing and only flip-flops as footwear. The food they were given was terrible, undercooked rice, potatoes, and meat about 3 times a week. Moria was unique in that it was run primarily by NGO's such as Euro Relief, the organization I volunteered with. At times there were up to 60 different nationalities and 30 languages in camp making it quite difficult to communicate. I would often go to people's tents to distribute blankets, clothing, or help to communicate with authorities. I was always invited in to drink tea, eat whatever food they were having, and hear about their lives back in their countries.",
      "I witnessed families of 6 living in a 10 X 10-foot space, move over and condense their belongings because they realized that others needed a place to sleep. I watched communities form to support others in their grief. I saw fathers working hard to care for their families when they had no money and no way to change their circumstances, it was heartbreaking. Blankets were given to keep children warm at night. Diapers were given to newborn babies living in tents. Safe places were created for women to share the difficulties they were experiencing. I don't want to give the impression that we were out there saving everyone, we weren't. There were so many needs that we couldn't meet.",
      "Later on, in my time on Lesvos, I transitioned into a caseworker for vulnerable women. This included giving safety talks to single women, looking into trafficking problems that arose in daily life in the camp, and reporting what I found to the Greek Social worker and the UN offices. It was the hardest thing I had ever done. I realized then how sheltered I had been. These women came from Afghanistan, Congo, Cameroon, Syria, Somalia, Ghana, and others. The stories they would tell about their countries were horrifying, those things should never happen to anyone.",
      "Their stories and experiences have changed my life forever. I am currently pursuing a degree in Human Services. So many of the people in Camp Moria never had anyone to be their voice. They literally had no one in the world that cared for them. I think it is easy to put it in a box and say it is a 3rd world problem, but I see the same thing happening in America. There are so many people on their own who need to be seen and heard. I want to be in a career where I can interact with those who feel forgotten and show them love and compassion.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const [selectedWinner, setSelectedWinner] = useState<(typeof winners)[0] | null>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] via-primary to-primary-light min-h-[90vh] flex items-center">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8">
                <Sparkles className="h-4 w-4 text-accent icon-float" />
                <span className="text-white/90 text-sm font-medium">2026 Scholarship Now Open</span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Marc Zboch
              <br />
              <span className="gradient-text">Academic Scholarship</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              A $1,000 scholarship awarded to a U.S. college or university student who demonstrates
              a commitment to helping others through personal sacrifice.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 btn-pulse text-base"
              >
                <PenLine className="h-5 w-5" />
                Apply Now
              </a>
              <Link
                href="/stories-that-matter"
                className="inline-flex items-center gap-2 glass hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-base"
              >
                <FileText className="h-5 w-5" />
                Read Stories
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-16"
            >
              <a href="#about" className="inline-flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors">
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About The Scholarship"
            subtitle="Supporting students who make a difference."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
      <section className="py-24 bg-section-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Award Amount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 text-center card-glow"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center mx-auto mb-5"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <DollarSign className="h-8 w-8 text-green-600 icon-float" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2">Scholarship Award</h3>
              <p className="text-5xl font-bold text-primary">$1,000</p>
              <p className="text-sm text-muted mt-2">One-time award for 2026</p>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 card-glow"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mx-auto mb-5"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <CheckCircle className="h-8 w-8 text-blue-600 icon-float" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Open to any U.S. college or university student",
                  "No GPA, major, gender, or demographic requirements",
                  "Must be registered for Fall 2026",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Deadline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 text-center card-glow"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-5"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Calendar className="h-8 w-8 text-amber-600 icon-float" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2">Application Deadline</h3>
              <p className="text-3xl font-bold text-primary">February 1, 2027</p>
              <p className="text-sm text-muted mt-2">Applications close at 11:59 PM EST</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Essay Topic ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Scholarship Essay Topic" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl border border-primary/10 p-10 sm:p-14 text-center overflow-hidden"
          >
            <div className="absolute top-4 right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <motion.div whileHover={{ rotate: -5, scale: 1.1 }} transition={{ type: "spring" }}>
              <PenLine className="h-12 w-12 text-primary mx-auto mb-6" />
            </motion.div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-foreground leading-relaxed relative">
              &ldquo;Describe a time when you made sacrifices to help others.&rdquo;
            </blockquote>
            <p className="mt-5 text-muted text-lg">400 to 500 word response required</p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <PenLine className="h-4 w-4" />
              Start Your Application
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="py-24 bg-section-bg scroll-mt-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Academic Scholarship Form"
            subtitle="Fill out the form below to submit your application."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10"
          >
            <ScholarshipForm />
          </motion.div>
        </div>
      </section>

      {/* ── Past Recipients ── */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Past Scholarship Recipients"
            subtitle="Click on a recipient to read their full story."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, i) => (
              <RecipientCard
                key={winner.year}
                year={winner.year}
                name={winner.name}
                description={winner.summary}
                delay={i * 0.1}
                onClick={() => setSelectedWinner(winner)}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-10 py-4 rounded-full transition-all hover:-translate-y-1 shadow-lg btn-pulse text-base"
            >
              <GraduationCap className="h-5 w-5" />
              Apply for the Scholarship
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Winner Modal ── */}
      <WinnerModal
        isOpen={selectedWinner !== null}
        onClose={() => setSelectedWinner(null)}
        winner={selectedWinner}
      />
    </>
  );
}
