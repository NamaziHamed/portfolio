import { Container, LayoutDashboard, Server } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface Tech {
  title: string;
  icon: React.ReactElement;
  list: string[];
}

export default function TechStack() {
  const techStack: Tech[] = [
    {
      title: "Frontend",
      icon: <LayoutDashboard />,
      list: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Zustand",
        "React Query",
        "Framer Motion",
        "Figma",
      ],
    },
    {
      title: "Backend",
      icon: <Server />,
      list: [
        "Node.js",
        "Express",
        "Next.js",
        "Prisma",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Payload CMS",
        "Auth.js",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Container />,
      list: ["Vercel", "Docker", "Git & GitHub", "Postman"],
    },
  ];
  return (
    <SectionWrapper id="techs" className="flex flex-col space-y-8 min-h-150">
      <h2 className="heading">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {techStack.map((tech) => (
          <Card key={tech.title}>
            <CardContent className="space-y-10">
              <CardHeader className="flex items-center gap-4">
                {tech.icon}
                <CardTitle className="font-outfit text-xl lg:text-2xl">
                  {tech.title}
                </CardTitle>
              </CardHeader>
              <div className="grid grid-cols-3 md:grid-cols-2 p-4 gap-1">
                {tech.list.map((item) => (
                  <Badge
                    variant={"outline"}
                    key={item}
                    className="m-1 bg-gray-900 px-4 py-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
