import type { SystemsProject } from "@/lib/content";

// Small SVG illustrations for projects that have no public screenshot.
// They use currentColor and theme tokens so they sit naturally on the cards.

const primary = "var(--primary)";
const signal = "var(--signal)";
const line = "oklch(1 0 0 / 14%)";
const faint = "oklch(1 0 0 / 6%)";

function Proximity() {
  return (
    <svg viewBox="0 0 600 144" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {[18, 36, 54].map((r, i) => (
        <circle key={`a${r}`} cx="170" cy="72" r={r} fill="none" stroke={primary} strokeOpacity={0.5 - i * 0.14} />
      ))}
      {[18, 36, 54].map((r, i) => (
        <circle key={`b${r}`} cx="430" cy="72" r={r} fill="none" stroke={signal} strokeOpacity={0.5 - i * 0.14} />
      ))}
      <circle cx="170" cy="72" r="6" fill={primary} />
      <circle cx="430" cy="72" r="6" fill={signal} />
      <line x1="230" y1="72" x2="370" y2="72" stroke={line} strokeDasharray="4 6" className="transition-[stroke-dashoffset] duration-[2s] group-hover:[stroke-dashoffset:-60]" />
      <rect x="282" y="56" width="36" height="32" rx="8" fill="var(--card)" stroke={line} />
      <path d="M292 70v-4a8 8 0 0 1 16 0v4" fill="none" stroke="var(--foreground)" strokeOpacity="0.7" strokeWidth="2" />
      <rect x="290" y="70" width="20" height="12" rx="3" fill="var(--foreground)" fillOpacity="0.7" />
      <text x="40" y="26" fill="var(--muted-foreground)" fontSize="11" fontFamily="var(--font-mono)">Enc(x₁,y₁)</text>
      <text x="480" y="130" fill="var(--muted-foreground)" fontSize="11" fontFamily="var(--font-mono)">near? → 1 bit</text>
    </svg>
  );
}

function Layers() {
  return (
    <svg viewBox="0 0 300 144" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {[0, 1, 2].map((i) => {
        const y = 92 - i * 26;
        const color = i === 2 ? primary : i === 1 ? signal : "var(--muted-foreground)";
        return (
          <g key={i}>
            <path
              d={`M150 ${y - 20} L220 ${y} L150 ${y + 20} L80 ${y} Z`}
              fill={color}
              fillOpacity={0.08 + i * 0.05}
              stroke={color}
              strokeOpacity="0.6"
            />
          </g>
        );
      })}
      <text x="232" y="96" fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">EVM</text>
      <text x="232" y="70" fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">ZK</text>
      <text x="232" y="44" fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">apps</text>
    </svg>
  );
}

function Storage() {
  const cells = Array.from({ length: 24 }, (_, i) => i);
  const lit = new Set([3, 8, 9, 14, 19, 22]);
  return (
    <svg viewBox="0 0 300 144" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {cells.map((i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const on = lit.has(i);
        return (
          <rect
            key={i}
            x={34 + col * 30}
            y={26 + row * 32}
            width="24"
            height="24"
            rx="5"
            fill={on ? (i % 2 ? signal : primary) : faint}
            fillOpacity={on ? 0.35 : 1}
            stroke={on ? (i % 2 ? signal : primary) : line}
            strokeOpacity={on ? 0.8 : 1}
          />
        );
      })}
    </svg>
  );
}

function Remote() {
  return (
    <svg viewBox="0 0 600 144" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {[150, 370].map((x, i) => (
        <g key={x}>
          <rect x={x} y="30" width="80" height="56" rx="8" fill={faint} stroke={i ? signal : primary} strokeOpacity="0.6" />
          <rect x={x + 10} y="40" width={i ? 44 : 60} height="6" rx="3" fill={i ? signal : primary} fillOpacity="0.5" />
          <rect x={x + 10} y="52" width="36" height="6" rx="3" fill={line} />
          <rect x={x + 30} y="92" width="20" height="10" fill={line} />
          <rect x={x + 18} y="102" width="44" height="4" rx="2" fill={line} />
        </g>
      ))}
      <path d="M240 58 C 290 30, 320 86, 360 58" fill="none" stroke={line} strokeWidth="2" strokeDasharray="3 6" />
      <circle cx="300" cy="58" r="4" fill={signal} />
    </svg>
  );
}

export default function ProjectVisual({ kind }: { kind: SystemsProject["visual"] }) {
  return (
    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
      {kind === "proximity" && <Proximity />}
      {kind === "layers" && <Layers />}
      {kind === "storage" && <Storage />}
      {kind === "remote" && <Remote />}
    </div>
  );
}
