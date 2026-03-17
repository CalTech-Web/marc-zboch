"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

const stories = [
  {
    name: "Cori H.",
    title: "Mentoring Elementary Kids",
    description:
      "Elementary school mentor who worked closely with a student named Yarita, who speaks English as a second language. Cori discovered how mentoring one child can create meaningful, lasting impact, inspiring her to pursue early childhood education and special education certification.",
  },
  {
    name: "Niayla B.",
    title: "Starting My Own Representation Organization",
    description:
      'Niayla addressed the lack of representation in predominantly white schools by founding "Young Womxn of Color," a support group for cis and trans women focused on mental health, educational goals, and building community for students who lacked access to such resources.',
  },
  {
    name: "Sandeep S.",
    title: "Leaders of Consequence",
    description:
      "An entrepreneur whose startup faced Hurricane Harvey destruction in 2017. Rather than prioritize company recovery, Sandeep and his team provided employee housing, secured federal funding for wages, and coordinated with the Red Cross and food banks, demonstrating social responsibility during crisis.",
  },
  {
    name: "Heidy M.",
    title: "Fundraising For Good",
    description:
      "Heidy overcame social anxiety and feelings of being an outsider through fundraising participation. Initially fearful, she gained confidence through successful fundraising events and eventually became a district coordinator, working with strangers to raise money for meaningful causes.",
  },
  {
    name: "Kaiyi Z.",
    title: "Studying to Change the World",
    description:
      "A first-year doctoral student in Civil and Environmental Engineering, researching water safety using ferrate oxidation. Kaiyi also works as a Graduate Student DEI Programming Specialist, supporting faculty professional development in diversity, equity, and inclusion.",
  },
  {
    name: "Zoe E.",
    title: "Community Service, Moore Than Just Coordinating",
    description:
      "A community service coordinator who organized monthly trips to the Tarrant Area Food Bank Learning Garden. Zoe recruited volunteers, organized work days, and witnessed students from ages 12 to 18 working together toward a shared charitable purpose.",
  },
  {
    name: "Alexis R.",
    title: "Travelling For Good",
    description:
      "An aspiring veterinarian who volunteered at New Heights Therapy, a horse facility serving individuals with autism, cancer, depression, anxiety, paralysis, mental illness, and PTSD. Alexis documented her work with a nine-year-old autistic boy named Nathan, tracking his progress and growing independence.",
  },
  {
    name: "Katrina M.",
    title: "My Time In a Refugee Camp",
    description:
      "A volunteer who spent 1.5 years at Camp Moria on the Island of Lesbos, Greece, helping refugees who crossed the Aegean Sea. Katrina later transitioned to a caseworker role for vulnerable women, handling safety issues and trafficking concerns, before pursuing a Human Services degree.",
  },
  {
    name: "Cannon B.",
    title: "Voices Can Be Heard And Read",
    description:
      'A sophomore who helped create their school\'s literary magazine called "Voices" with five colleagues. The magazine accepted student submissions in poetry, photography, and comics, providing publication opportunities at no cost to student contributors.',
  },
  {
    name: "Sara C.",
    title: "The Power of Forgiving",
    description:
      "A summer camp counselor who worked with middle-school campers from diverse racial, cultural, and economic backgrounds. Through vulnerability and sharing personal adoption experiences, Sara facilitated emotional connection among initially segregated cabin groups.",
  },
];

const pastelColors = [
  "from-blue-50 to-indigo-50 border-blue-100",
  "from-rose-50 to-pink-50 border-rose-100",
  "from-amber-50 to-yellow-50 border-amber-100",
  "from-emerald-50 to-green-50 border-emerald-100",
  "from-violet-50 to-purple-50 border-violet-100",
  "from-cyan-50 to-sky-50 border-cyan-100",
  "from-orange-50 to-red-50 border-orange-100",
  "from-teal-50 to-emerald-50 border-teal-100",
  "from-fuchsia-50 to-pink-50 border-fuchsia-100",
  "from-lime-50 to-green-50 border-lime-100",
];

export default function StoriesThatMatterPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-[#1a4a7a] py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <BookOpen className="h-12 w-12 text-accent mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Stories That Matter
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Featured stories from past finalists who demonstrated extraordinary sacrifice and
              compassion for others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Stories From Past Finalists"
            subtitle="Each story represents a unique act of selflessness and dedication to community service."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-gradient-to-br ${pastelColors[index]} border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                      <Heart className="h-5 w-5 text-primary icon-hover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-primary">{story.name}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        &ldquo;{story.title}&rdquo;
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">{story.description}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
