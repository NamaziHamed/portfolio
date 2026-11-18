// All site copy lives here. Update this file when the CV changes.

export const profile = {
  name: "Hamed Namazi",
  fullName: "Hamed Namazi Esfanjani",
  role: "Software & Systems Engineer",
  location: "Tabriz, Iran",
  email: "h.namazi91@gmail.com",
  availability: "Open to remote opportunities",
  siteUrl: "https://hnamazi.vercel.app",
  summary:
    "I build web apps, desktop tools and privacy-preserving systems in TypeScript, Rust and Python. I co-founded zkPrivada, where I lead Privara: a protocol that tells two people whether they are close without revealing where they are. At Mishoosoft I build the internal software and infrastructure the company runs on.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/NamaziHamed", handle: "NamaziHamed" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamed-namazi-85a3573a0",
    handle: "hamed-namazi",
  },
  { label: "Telegram", href: "https://t.me/hamednamazi", handle: "@hamednamazi" },
  { label: "X", href: "https://x.com/hamednamazi7", handle: "@hamednamazi7" },
] as const;

export const stats = [
  { value: "5+", label: "years shipping web apps" },
  { value: "3", label: "languages in production: TS, Rust, Python" },
  { value: "1", label: "privacy-tech startup co-founded" },
];

export type WebApp = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  stack: string[];
  github: string;
  live: string;
};

export const webApps: WebApp[] = [
  {
    title: "Apex Agenda",
    tagline: "Task management that plans your day for you",
    description:
      "A multi-user task manager with custom lists, deadlines and a timezone-aware “My Day” view that pulls in everything due today.",
    highlights: [
      "Timezone-safe due-date logic with Luxon",
      "Server state and optimistic UI with TanStack Query",
      "Google and email sign-in with Auth.js",
    ],
    image: "/apexagenda.png",
    stack: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Prisma", "PostgreSQL", "Auth.js"],
    github: "https://github.com/NamaziHamed/apex-agenda-mk1",
    live: "https://apex-agenda-v1.vercel.app",
  },
  {
    title: "Parch",
    tagline: "A calm place to write things down",
    description:
      "A note-taking app with a rich-text TipTap editor, automatic saving and full-text search across titles and content.",
    highlights: [
      "Rich text: headings, lists, colours, alignment",
      "Notes saved automatically to PostgreSQL",
      "Masonry grid with instant title and content search",
    ],
    image: "/parch.png",
    stack: ["Next.js", "TypeScript", "TipTap", "Prisma", "PostgreSQL", "Auth.js"],
    github: "https://github.com/NamaziHamed/parch",
    live: "https://parch-note-app.vercel.app",
  },
];

export type SystemsProject = {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  status: string;
  visual: "proximity" | "storage" | "remote" | "layers";
  href?: string;
};

export const systemsProjects: SystemsProject[] = [
  {
    title: "Privara",
    kind: "Applied cryptography · zkPrivada",
    description:
      "Implements the GeoHM proximity-testing protocol: two parties learn whether they are near each other and nothing else. ElGamal-based homomorphic prototype in Rust, with Python preprocessing and validation on a real location dataset.",
    stack: ["Rust", "ElGamal HE", "Python"],
    status: "Prototype",
    visual: "proximity",
  },
  {
    title: "zkprivada.com",
    kind: "Company website · zkPrivada",
    description:
      "The public face of an interoperable, privacy-preserving EVM ecosystem built on recursive zero-knowledge proofs. Story-driven pages, per-project layers and a validated contact pipeline.",
    stack: ["Next.js", "Tailwind CSS", "TanStack Form", "Zod", "Supabase"],
    status: "Live",
    visual: "layers",
    href: "https://zkprivada.com",
  },
  {
    title: "MSSM",
    kind: "Desktop app · Mishoosoft",
    description:
      "Cross-platform desktop app for tracking hardware components and complete systems in company storage, from intake to assembly.",
    stack: ["Tauri", "React", "TypeScript", "Drizzle ORM", "SQLite"],
    status: "In development",
    visual: "storage",
  },
  {
    title: "MishooDesk",
    kind: "Internal tooling · Mishoosoft",
    description:
      "A customised, company-branded RustDesk remote-support client with an automated Windows installer for every company machine.",
    stack: ["RustDesk", "Rust", "Windows installer"],
    status: "Deployed",
    visual: "remote",
  },
];

export type Job = {
  role: string;
  company: string;
  companyNote: string;
  href?: string;
  period: string;
  location: string;
  points: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    role: "IT & Systems Engineer",
    company: "Mishoosoft",
    companyNote: "Software development company",
    period: "Feb 2026 – Present",
    location: "Tabriz, Iran",
    current: true,
    points: [
      "Deployed a multi-segment enterprise LAN connecting workstations to on-premise ERP servers and the internal VoIP system.",
      "Built MishooDesk, a branded RustDesk remote-support client with an automated Windows installer.",
      "Designing and building MSSM, a Tauri desktop app for tracking hardware and complete systems in storage.",
      "Wrote internal web tools and Python automation for company data processing and daily operations.",
    ],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "zkPrivada",
    companyNote: "Applied cryptography & privacy technology",
    href: "https://zkprivada.com",
    period: "Jan 2025 – Present",
    location: "Remote",
    current: true,
    points: [
      "Co-leading engineering and architecture for an interoperable, privacy-preserving EVM ecosystem based on recursive zero-knowledge proofs.",
      "Leading Privara: implementing the GeoHM proximity-testing protocol with an ElGamal-based Rust prototype.",
    ],
  },
  {
    role: "Full-Stack Web Developer & Technical Translator",
    company: "Freelance",
    companyNote: "Independent",
    period: "2021 – Jan 2026",
    location: "Remote",
    points: [
      "Designed and built responsive web apps and client interfaces with React, Next.js, TypeScript and Tailwind CSS.",
      "Translated peer-reviewed research in computer science, software architecture, algorithms and cryptography into Persian.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Rust", "Python", "SQL"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Form",
      "React Hook Form",
      "Zustand",
      "TipTap",
    ],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Next.js server actions", "PostgreSQL", "Prisma", "Drizzle ORM", "SQLite", "Supabase", "Auth.js", "Zod"],
  },
  {
    group: "Desktop & systems",
    items: ["Tauri", "RustDesk", "Windows deployment", "Python automation"],
  },
  {
    group: "Cryptography",
    items: ["Homomorphic encryption", "ElGamal", "Zero-knowledge proofs", "Privacy-preserving computation"],
  },
  {
    group: "Infrastructure",
    items: ["Enterprise LAN", "ERP connectivity", "VoIP", "Docker", "Vercel", "Git & GitHub"],
  },
];

export const education = [
  {
    degree: "B.Tech. Engineering in Information Technology",
    school: "University of Applied Sciences & Technology (ACECR), Tabriz",
    period: "2019 – 2021",
    grade: "CGPA 17.33 / 20",
    note: "Data Structures & Algorithms 20/20 · Web Programming 20/20 · Discrete Mathematics 19/20 · Algorithm Design 18.5/20",
  },
  {
    degree: "Associate Degree in English Language Translation",
    school: "University of Applied Sciences & Technology (ACECR), Tabriz",
    period: "2016 – 2018",
    grade: "CGPA 18.80 / 20",
  },
];

export const languages = [
  { name: "Azerbaijani", level: "Native" },
  { name: "Persian", level: "Native" },
  { name: "English", level: "C2 · IELTS Academic 8.0" },
];
