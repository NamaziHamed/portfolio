import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Container } from "./Section";
import CopyEmail from "./CopyEmail";
import { profile, socials } from "@/lib/content";

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedin, Telegram: FaTelegram, X: FaXTwitter };

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Container>
        <div data-reveal className="surface relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="glow absolute inset-0 opacity-80" />
          <div aria-hidden className="bg-grid absolute inset-0" />
          <div className="relative">
            <p className="eyebrow mb-5">
              <span className="text-muted-foreground">05 /</span> Contact
            </p>
            <h2 id="contact-title" className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Have a project, a role or a hard problem?{" "}
              <span className="font-serif font-normal italic text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              {profile.availability}. I usually reply within a day.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
              >
                {profile.email}
                <ArrowUpRight className="size-4" />
              </a>
              <CopyEmail email={profile.email} />
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-2">
              {socials.map((s) => {
                const Icon = icons[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm text-muted-foreground transition hover:border-foreground/25 hover:text-foreground"
                    >
                      <Icon className="size-4" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
