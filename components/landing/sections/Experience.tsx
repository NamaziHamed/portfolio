import { GraduationCap, Languages } from "lucide-react";
import SectionWrapper from "../miniComponents/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";

interface Job {
  period: string;
  location: string;
  role: string;
  company: string;
  link?: string;
  points: string[];
}

interface Degree {
  period: string;
  title: string;
  school: string;
  gpa: string;
}

const jobs: Job[] = [
  {
    period: "Feb 2026 – Present",
    location: "Tabriz, Iran",
    role: "IT & Systems Engineer",
    company: "Mishoosoft",
    points: [
      "Developed MishooDesk, a customised and branded RustDesk remote support client with an automated Windows installer.",
      "Designing and developing MSSM, a desktop inventory system for hardware components and assembled systems, built with Tauri, React, TypeScript, Drizzle ORM and SQLite.",
      "Developed internal web tools and Python automation scripts for company data processing and routine operations.",
      "Set up the office network infrastructure, including racks, switches, wireless access points and VoIP lines, connecting workstations, the server and printers.",
      "Manage the hardware inventory and provide technical support for company hardware, including on site deployments.",
    ],
  },
  {
    period: "Jan 2025 – Present",
    location: "Remote",
    role: "Co-Founder & Software Engineer",
    company: "zkPrivada",
    link: "https://zkprivada.com",
    points: [
      "Implement the team's cryptographic protocols in Rust and Python as part of the engineering team.",
      "Designed the MVP architecture for Privara, a location privacy system based on the GeoHM protocol, which allows two parties to determine whether they are near each other without disclosing their locations.",
      "Developed an ElGamal based Rust prototype of the protocol; Python preprocessing and validation on a real location dataset are in progress.",
    ],
  },
  {
    period: "2021 – Jan 2026",
    location: "Remote",
    role: "Web Developer & Technical Translator",
    company: "Freelance",
    points: [
      "Developed responsive web applications and client interfaces using React, Next.js, TypeScript and Tailwind CSS.",
      "Translated English research papers on computer science, software architecture, algorithms and cryptography into Persian.",
    ],
  },
];

const degrees: Degree[] = [
  {
    period: "2019 – 2021",
    title: "B.Tech. in Information Technology",
    school: "University of Applied Sciences & Technology, ACECR (Tabriz)",
    gpa: "17.33 / 20",
  },
  {
    period: "2016 – 2018",
    title: "Associate Degree in English Language Translation",
    school: "University of Applied Sciences & Technology, ACECR (Tabriz)",
    gpa: "18.80 / 20",
  },
];

const languages = [
  "Azerbaijani (native)",
  "Persian (native)",
  "English (IELTS 8.0)",
  "Spanish (learning)",
];

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col w-full space-y-8 scroll-mt-26"
    >
      <h2 className="heading">Experience</h2>
      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <Card
            key={job.role}
            className="md:flex-row md:gap-0 hover:border-indigo-400/40 transition-colors duration-300"
          >
            <div className="px-6 md:w-52 md:shrink-0 text-sm">
              <p className="font-medium text-indigo-400">{job.period}</p>
              <p className="text-muted-foreground">{job.location}</p>
            </div>
            <div className="flex flex-1 flex-col gap-3 px-6 md:ps-0">
              <div>
                <h3 className="font-outfit font-semibold text-lg lg:text-xl">
                  {job.role}
                </h3>
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    className="text-sm text-purple-400 hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="text-sm text-purple-400">{job.company}</p>
                )}
              </div>
              <ul className="list-disc ps-5 space-y-1.5 text-sm text-gray-300 marker:text-indigo-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="md:col-span-2">
          <CardHeader className="flex items-center gap-4">
            <GraduationCap />
            <CardTitle className="font-outfit text-xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {degrees.map((degree) => (
              <div key={degree.title} className="text-sm">
                <p className="font-semibold text-base">{degree.title}</p>
                <p className="text-muted-foreground">{degree.school}</p>
                <p className="text-muted-foreground">
                  <span className="text-indigo-400">{degree.period}</span> ·
                  GPA {degree.gpa}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <Languages />
            <CardTitle className="font-outfit text-xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <Badge
                key={language}
                variant={"outline"}
                className="bg-gray-900 px-3 py-1"
              >
                {language}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
