import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Section from "./Section";
import ProjectVisual from "./ProjectVisual";
import { systemsProjects, webApps, type SystemsProject, type WebApp } from "@/lib/content";
import { cn } from "@/lib/utils";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded-md border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}

function WebAppCard({ app, flip }: { app: WebApp; flip: boolean }) {
  return (
    <article data-reveal className="surface group grid overflow-hidden md:grid-cols-2">
      <div className={cn("relative aspect-4/3 overflow-hidden border-b md:aspect-auto md:border-b-0", flip ? "md:order-2 md:border-l" : "md:border-r")}>
        <Image
          src={app.image}
          alt={`${app.title} screenshot`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card/70 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="eyebrow mb-3">Full-stack web app</p>
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{app.title}</h3>
        <p className="mt-1 font-serif text-lg text-muted-foreground italic">{app.tagline}</p>
        <p className="mt-5 leading-relaxed text-muted-foreground">{app.description}</p>
        <ul className="mt-5 space-y-2">
          {app.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-signal" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Tags items={app.stack} />
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          <a
            href={app.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Live demo <ArrowUpRight className="size-4" />
          </a>
          <a
            href={app.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition hover:bg-accent"
          >
            <FaGithub className="size-4" /> Source
          </a>
        </div>
      </div>
    </article>
  );
}

function SystemsCard({ project, wide, delay }: { project: SystemsProject; wide: boolean; delay: number }) {
  const statusTone =
    project.status === "Live" || project.status === "Deployed"
      ? "text-signal border-signal/30 bg-signal/10"
      : "text-primary border-primary/30 bg-primary/10";

  const body = (
    <>
      <div className="relative h-36 overflow-hidden border-b bg-background/40">
        <ProjectVisual kind={project.visual} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">{project.kind}</p>
          <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium", statusTone)}>
            {project.status}
          </span>
        </div>
        <h3 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight">
          {project.title}
          {project.href && (
            <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          )}
        </h3>
        <p className="mt-3 mb-6 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-auto">
          <Tags items={project.stack} />
        </div>
      </div>
    </>
  );

  const className = cn("surface group flex flex-col overflow-hidden", wide && "lg:col-span-2");
  const style = { "--reveal-delay": `${delay}ms` } as React.CSSProperties;

  return project.href ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer" data-reveal style={style} className={className}>
      {body}
    </a>
  ) : (
    <article data-reveal style={style} className={className}>
      {body}
    </article>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title={
        <>
          Things I&apos;ve <span className="font-serif font-normal italic">designed, built</span> and shipped.
        </>
      }
      intro="Full-stack web apps on one side, systems and cryptography on the other. Both are live, deployed or in active use."
    >
      <div className="space-y-6">
        {webApps.map((app, i) => (
          <WebAppCard key={app.title} app={app} flip={i % 2 === 1} />
        ))}
      </div>

      <h3 data-reveal className="mt-20 mb-6 flex items-center gap-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Systems, tooling &amp; research
        <span className="h-px flex-1 bg-border" />
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {systemsProjects.map((p, i) => (
          <SystemsCard key={p.title} project={p} wide={i === 0 || i === 3}delay={(i % 3) * 80} />
        ))}
      </div>
    </Section>
  );
}
