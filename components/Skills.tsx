"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Technical",
    items: ["Embedded Systems", "Digital Logic", "Verilog", "Python", "C/C++", "MATLAB", "Java", "SQL", "Vue"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Linux", "Raspberry Pi", "Arduino", "Figma"],
  },
  {
    label: "Hardware & Lab",
    items: ["Oscilloscope", "Signal Measurement", "Sensor Calibration"],
  },
  {
    label: "Languages",
    items: ["English (Fluent)", "Arabic (Fluent)", "Azerbaijani (Intermediate)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 space-y-10">
      <h2 className="text-3xl font-bold text-ink section-title">Skills</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            className="card p-6 space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <h3 className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm border border-line rounded text-mute hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
