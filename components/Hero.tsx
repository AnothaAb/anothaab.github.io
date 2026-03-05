"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Embedded Systems Engineer",
  "Robotics Student @ BU",
  "Software Developer",
  "Hardware Tinkerer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll-driven transforms on the heading
  const { scrollY } = useScroll();
  const headingY       = useTransform(scrollY, [0, 500], [0, -110]);
  const headingOpacity = useTransform(scrollY, [0, 360], [1, 0]);
  const headingScale   = useTransform(scrollY, [0, 420], [1, 0.82]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else if (!isDeleting) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        75
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        38
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-24 pt-32">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 max-w-2xl"
      >
        <p className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
          Hello, World.
        </p>

        {/* ── Scroll-animated heading ── */}
        <motion.h1
          style={{ y: headingY, opacity: headingOpacity, scale: headingScale }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-ink leading-none origin-left"
        >
          I&apos;m{" "}
          <span className="text-accent">Ab</span>{" "}
          Almasri
        </motion.h1>

        <div className="text-xl md:text-2xl font-mono text-mute h-8 flex items-center">
          <span>{displayed}</span>
          <span className="cursor" />
        </div>

        <p className="text-mute text-base md:text-lg leading-relaxed max-w-xl">
          Computer Engineering (Robotics) student at Boston University.
          I build embedded devices, hardware–software systems, and tools that solve real problems.
        </p>

        <div className="flex gap-4 flex-wrap pt-2">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-black font-semibold font-mono text-sm rounded hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-line text-ink text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/ab-almasri-81b007255/"
            target="_blank"
            rel="noreferrer"
            className="text-mute text-xs font-mono hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:aalmasri@bu.edu"
            className="text-mute text-xs font-mono hover:text-accent transition-colors"
          >
            aalmasri@bu.edu ↗
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-mute text-xs font-mono hover:text-accent transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}
