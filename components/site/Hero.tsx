import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Container } from "./Section";
import { profile, socials, stats } from "@/lib/content";

export default function Hero() {
  const github = socials.find((s) => s.label === "GitHub")!;
  const linkedin = socials.find((s) => s.label === "LinkedIn")!;

  return (
    <section id="top" className="relative pt-36 pb-16 sm:pt-44 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div data-reveal className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
                <span className="relative flex size-2">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-signal" />
                  <span className="relative size-2 rounded-full bg-signal" />
                </span>
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> {profile.location}
              </span>
            </div>

            <h1
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              I build software that{" "}
              <span className="font-serif font-normal italic text-gradient pr-1">respects people</span>
              , from the browser down to the network.
            </h1>

            <p
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <span className="text-foreground">
                {profile.name}, {profile.role.toLowerCase()}.
              </span>{" "}
              {profile.summary}
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110"
              >
                See my work
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-xl border bg-card/50 px-5 text-sm font-medium transition hover:border-foreground/25 hover:bg-card"
              >
                Contact me
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="grid size-11 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  <FaGithub className="size-5" />
                </a>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid size-11 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  <FaLinkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="relative mx-auto hidden w-72 lg:block xl:w-80"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/30 via-transparent to-signal/20 blur-2xl" />
            <div className="relative rotate-2 overflow-hidden rounded-[2rem] border bg-card p-2 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <Image
                src="/avatar.png"
                alt="Portrait of Hamed Namazi"
                width={640}
                height={640}
                priority
                className="aspect-square rounded-[1.5rem] object-cover"
              />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border bg-background/80 px-3 py-2 backdrop-blur-md">
                <span className="font-mono text-[11px] text-muted-foreground">TS · Rust · Python</span>
                <span className="font-mono text-[11px] text-signal">● online</span>
              </div>
            </div>
          </div>
        </div>

        <dl
          data-reveal
          style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border sm:mt-20 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-4 bg-background/90 px-6 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl text-foreground italic">{s.value}</dd>
              <dd className="text-sm leading-snug text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
