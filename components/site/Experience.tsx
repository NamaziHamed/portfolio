import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve been <span className="font-serif font-normal italic">building</span>.
        </>
      }
    >
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-linear-to-b before:from-primary/60 before:via-border before:to-transparent md:before:left-[calc(14rem+7px)]">
        {experience.map((job) => (
          <li key={job.company} data-reveal className="relative grid gap-4 pl-8 md:grid-cols-[14rem_1fr] md:gap-10 md:pl-0">
            <span
              aria-hidden
              className="absolute top-2 left-0 grid size-[15px] place-items-center rounded-full border border-primary/50 bg-background md:left-56"
            >
              <span className={job.current ? "size-[7px] rounded-full bg-signal" : "size-[7px] rounded-full bg-muted-foreground/50"} />
            </span>

            <div className="md:pt-1 md:pr-8 md:text-right">
              <p className="font-mono text-xs text-foreground">{job.period}</p>
              <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
            </div>

            <div className="surface p-6 sm:p-7 md:ml-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
                {job.current && (
                  <span className="rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 text-[11px] font-medium text-signal">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                  >
                    {job.company}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : (
                  <span className="font-medium text-primary">{job.company}</span>
                )}
                <span className="text-muted-foreground"> · {job.companyNote}</span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
