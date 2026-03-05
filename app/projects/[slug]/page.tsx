import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="container py-16 space-y-10">
      <nav>
        <Link
          className="text-sm font-mono text-mute hover:text-accent transition-colors"
          href="/"
        >
          ← Back to portfolio
        </Link>
      </nav>

      <header className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2 py-1 border border-line rounded text-mute">
            {project.category}
          </span>
          <span className="text-xs font-mono text-mute">{project.year}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-ink">{project.title}</h1>
        <p className="text-mute leading-relaxed">{project.summary}</p>
        <p className="text-mute text-sm font-mono">
          Role: <span className="text-accent">{project.role}</span>
        </p>
      </header>

      <section className="card p-6 space-y-4">
        <h2 className="text-sm font-mono text-accent tracking-[0.2em] uppercase">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-sm px-3 py-1.5 border border-line rounded text-mute hover:border-accent hover:text-accent transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {project.outcome && (
        <section className="card p-6 space-y-3">
          <h2 className="text-sm font-mono text-accent tracking-[0.2em] uppercase">Outcome</h2>
          <p className="text-mute leading-relaxed">{project.outcome}</p>
        </section>
      )}

      {(project.links?.demo || project.links?.source) && (
        <section className="card p-6 flex gap-3">
          {project.links?.demo && (
            <a
              className="px-4 py-2 bg-accent text-black text-sm font-mono rounded hover:opacity-90 transition-opacity"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}
          {project.links?.source && (
            <a
              className="px-4 py-2 border border-line text-ink text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors"
              href={project.links.source}
              target="_blank"
              rel="noreferrer"
            >
              Source Code ↗
            </a>
          )}
        </section>
      )}
    </main>
  );
}
