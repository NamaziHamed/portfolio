import { Binary, Code2, Database, HardDrive, Layout, Network } from "lucide-react";
import Section from "./Section";
import { skills } from "@/lib/content";

const icons = [Code2, Layout, Database, HardDrive, Binary, Network];

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Toolbox"
      title={
        <>
          The stack I <span className="font-serif font-normal italic">reach for</span>.
        </>
      }
      intro="TypeScript for the product, Rust where correctness and speed matter, Python for data and glue."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={group.group}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
              className="surface p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border bg-background/60 text-primary">
                  <Icon className="size-4" />
                </span>
                <h3 className="font-medium">{group.group}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
