import { ArrowUp } from "lucide-react";
import { Container } from "./Section";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-mono text-xs">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </Container>
    </footer>
  );
}
