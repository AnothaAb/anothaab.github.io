"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Broad Institute",
    period: "May 2024 - Sept 2024",
    location: "Cambridge, MA",
    bullets: [
      "Designed and implemented a secure data analysis platform enabling visualization, filtering, and comparison of 200+ research cohorts for laboratory administrators and researchers.",
      "Collaborated with researchers and technical staff in iterative feedback cycles to validate requirements, test new features, and align system behavior with real-world analytical workflows.",
    ],
  },
  {
    role: "Restaurant Manager",
    company: "Shake Shack",
    period: "Feb 2024 - Present",
    location: "Wellesley, MA",
    bullets: [
      "Led day-to-day operations for a high-volume, time-critical system, managing staffing, safety, and service quality under tight operational constraints.",
      "Diagnosed and resolved real-time operational failures during peak demand, reducing food waste 25% below company targets.",
    ],
  },
  {
    role: "Event Organizer",
    company: "Code and Coffee",
    period: "Jul 2023 - Present",
    location: "Cambridge, MA",
    bullets: [
      "Organized and facilitated technical workshops for 30–40 participants, translating complex programming concepts into accessible, structured lessons.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 space-y-10">
      <h2 className="text-3xl font-bold text-ink section-title">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            className="card p-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-5">
              <div>
                <h3 className="text-base font-semibold text-ink">{exp.role}</h3>
                <p className="text-accent font-mono text-sm mt-0.5">{exp.company}</p>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-mute text-xs font-mono">{exp.period}</p>
                <p className="text-mute text-xs font-mono">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-mute text-sm flex gap-2.5 leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
