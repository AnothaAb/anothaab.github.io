import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { ProjectsGrid, type Project } from "@/components/ProjectsGrid";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

const navLinks = [
  { href: "#skills",     label: "Skills"     },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="container flex items-center justify-between py-4">
          <Link href="/" className="font-mono font-bold text-accent tracking-tight text-sm">
            Ab Almasri
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2 text-sm text-mute hover:text-accent font-mono transition-colors hidden sm:block"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-4 py-2 text-xs border border-accent text-accent hover:bg-accent hover:text-black font-mono transition-colors rounded"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <div className="container">
        {/* ── Hero ── */}
        <Hero />

        {/* ── Skills ── */}
        <Skills />

        {/* ── Experience ── */}
        <Experience />

        {/* ── Projects ── */}
        <section id="projects" className="py-20 space-y-10">
          <h2 className="text-3xl font-bold text-ink section-title">Projects</h2>
          <ProjectsGrid projects={projects as Project[]} />
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-20 space-y-10">
          <h2 className="text-3xl font-bold text-ink section-title">Education</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card p-6">
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-3">
                Expected May 2027
              </p>
              <h3 className="text-base font-semibold text-ink">Boston University</h3>
              <p className="text-mute text-sm mt-1">
                B.S. Computer Engineering, Robotics Concentration
              </p>
              <p className="text-mute text-xs mt-4 leading-relaxed">
                Logic Design · Electric Circuits · Probability &amp; Statistics ·
                Applied Algorithms · Engineering Mechanics
              </p>
            </div>
            <div className="card p-6">
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-3">
                Jan 2023 - Dec 2024
              </p>
              <h3 className="text-base font-semibold text-ink">Bunker Hill Community College</h3>
              <p className="text-mute text-sm mt-1">A.S. Computer Science</p>
              <p className="text-mute text-xs mt-4 leading-relaxed">
                Data Structures (Honors) · Advanced Java · C++ Programming ·
                Calculus I–III · Linear Algebra
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 space-y-0">
          {/* Big editorial heading */}
          <p className="text-accent font-mono text-xs tracking-[0.25em] uppercase mb-6">
            What&apos;s next?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-ink leading-tight mb-4">
            Let&apos;s build<br />
            <span className="text-accent">something.</span>
          </h2>
          <p className="text-mute text-base max-w-md leading-relaxed mb-12">
            Seeking internship and entry-level roles in embedded systems and software engineering.
            Open to full-time starting May 2027.
          </p>

          {/* Contact links */}
          <div className="border-t border-line max-w-lg">
            <a
              href="mailto:aalmasri@bu.edu"
              className="group flex items-center justify-between border-b border-line py-5 hover:border-accent/40 transition-colors"
            >
              <div>
                <p className="text-xs font-mono text-mute tracking-widest uppercase mb-0.5">Email</p>
                <p className="text-ink font-mono text-sm group-hover:text-accent transition-colors">
                  aalmasri@bu.edu
                </p>
              </div>
              <span className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all font-mono">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ab-almasri-81b007255/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-line py-5 hover:border-accent/40 transition-colors"
            >
              <div>
                <p className="text-xs font-mono text-mute tracking-widest uppercase mb-0.5">LinkedIn</p>
                <p className="text-ink font-mono text-sm group-hover:text-accent transition-colors">
                  ab-almasri-81b007255
                </p>
              </div>
              <span className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all font-mono">↗</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center justify-between border-b border-line py-5 hover:border-accent/40 transition-colors"
            >
              <div>
                <p className="text-xs font-mono text-mute tracking-widest uppercase mb-0.5">Resume</p>
                <p className="text-ink font-mono text-sm group-hover:text-accent transition-colors">
                  Ab_Almasri_Resume.pdf
                </p>
              </div>
              <span className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all font-mono">↓</span>
            </a>
          </div>

          <div className="mt-10">
            <a
              href="mailto:aalmasri@bu.edu"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-black font-semibold font-mono text-sm rounded hover:opacity-90 transition-opacity"
            >
              Say Hello →
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
