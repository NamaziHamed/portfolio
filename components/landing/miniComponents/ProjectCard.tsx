import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  projectLinks: {
    github?: string;
    liveDemo?: string;
  };
}

export default function ProjectCard(data: ProjectCardProps) {
  return (
    <Card className="flex flex-col md:flex-row gap-3 items-center">
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={300}
        height={300}
        className="rounded-md object-contain object-center ms-4 w-50 h-50 md:w-74 md:h-74
          hover:scale-105 transition-transform duration-300
          "
      />
      <div className="flex flex-1 flex-col gap-7">
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-1">
              {data.techStack.map((item) => (
                <Badge key={item} variant={"outline"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            {data.projectLinks.github && (
              <Button variant={"outline"} asChild>
                <Link href={data.projectLinks.github} target="_blank">
                  <FaGithub className="w-4 h-4" />
                  View Code
                </Link>
              </Button>
            )}
            {data.projectLinks.liveDemo && (
              <Button variant={"default"} asChild>
                <Link href={data.projectLinks.liveDemo} target="_blank">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
