import SectionWrapper from "../miniComponents/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import Link from "next/link";
import experience from "@/lib/experience.json";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col w-full space-y-8 scroll-mt-26"
    >
      <h2 className="heading">Experience</h2>
      <div className="flex flex-col gap-5">
        {experience.data.map((job) => (
          <Card
            key={job.company}
            className="hover:border-indigo-400/40 transition-colors duration-300"
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <CardTitle className="font-outfit text-lg md:text-xl">
                  {job.role}
                </CardTitle>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <CardDescription>
                {"link" in job && job.link ? (
                  <Link
                    href={job.link}
                    target="_blank"
                    className="text-indigo-400 hover:underline"
                  >
                    {job.company}
                  </Link>
                ) : (
                  <span className="text-indigo-400">{job.company}</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="list-disc ps-5 space-y-2 text-sm text-gray-300">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {job.techStack.map((item) => (
                  <Badge key={item} variant={"outline"}>
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
