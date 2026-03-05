"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type Project = {
  slug: string;
  title: string;
  category: "Software" | "Hardware" | "Other";
  year: string;
  summary: string;
  stack: string[];
  role: string;
  outcome?: string;
  links?: { demo?: string; source?: string };
};

type Props = { projects: Project[] };

const categories = ["All", "Software", "Hardware", "Other"] as const;

export function ProjectsGrid({ projects }: Props) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 border font-mono text-xs tracking-widest uppercase rounded transition-colors ${
              filter === c
                ? "bg-accent text-black border-accent"
                : "border-line text-mute hover:border-accent hover:text-accent"
            }`}
            aria-pressed={filter === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Numbered row list */}
      <div className="border-t border-line">
        {filtered.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Link href={`/projects/${p.slug}`} className="block group">
              <div className="project-row border-b border-line py-7 pl-4 pr-0 flex items-start gap-6 hover:bg-white/[0.02] transition-colors">
                {/* Index number */}
                <span className="text-3xl md:text-4xl font-bold font-mono text-line group-hover:text-accent/40 transition-colors select-none w-10 shrink-0 leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-base md:text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] font-mono text-mute">{p.category}</span>
                      <span className="text-[11px] font-mono text-mute">{p.year}</span>
                    </div>
                  </div>
                  <p className="text-mute text-sm leading-relaxed">{p.summary}</p>
                  <p className="text-[11px] font-mono text-mute/60 pt-1">
                    {p.stack.join(" · ")}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-mute group-hover:text-accent transition-colors font-mono text-lg shrink-0 self-center pr-1">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
