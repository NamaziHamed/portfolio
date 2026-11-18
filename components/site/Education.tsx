import { GraduationCap, Languages } from "lucide-react";
import Section from "./Section";
import { education, languages } from "@/lib/content";

export default function Education() {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Education & languages"
      title={
        <>
          A foundation in <span className="font-serif font-normal italic">algorithms</span> and language.
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {education.map((e) => (
            <article key={e.degree} data-reveal className="surface p-6 sm:p-7">
              <div className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border bg-background/60 text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold tracking-tight sm:text-lg">{e.degree}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-4 inline-flex rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    {e.grade}
                  </p>
                  {e.note && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="surface p-6 sm:p-7">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border bg-background/60 text-signal">
              <Languages className="size-5" />
            </span>
            <h3 className="font-semibold tracking-tight sm:text-lg">Languages</h3>
          </div>
          <ul className="divide-y">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                <span className="font-medium">{l.name}</span>
                <span className="text-right text-sm text-muted-foreground">{l.level}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            I&apos;ve also translated peer-reviewed computer science and cryptography research from English into Persian.
          </p>
        </aside>
      </div>
    </Section>
  );
}
