import SectionWrapper from "../miniComponents/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { GraduationCap, Languages } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col w-full space-y-8 scroll-mt-26"
    >
      <h2 className="heading">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card>
          <CardHeader className="flex items-center gap-3">
            <GraduationCap />
            <CardTitle className="font-outfit text-lg">
              B.Tech. in Information Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-300">
            <p>University of Applied Sciences & Technology, Tabriz</p>
            <p className="text-muted-foreground">2019 - 2021 · CGPA 17.33 / 20</p>
            <p className="text-muted-foreground">
              Data Structures & Algorithms 20/20 · Web Programming 20/20 ·
              Discrete Mathematics 19/20
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-3">
            <Languages />
            <CardTitle className="font-outfit text-lg">Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-300">
            <p>English: C2 · Academic IELTS 8.0</p>
            <p>Azerbaijani & Persian: Native</p>
            <p className="text-muted-foreground">
              Associate Degree in English Translation · CGPA 18.80 / 20
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
