import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ScrollDown() {
  return (
    <Button
      variant={"ghost"}
      title="read more"
      className="absolute bottom-10 animate-bounce animation-duration-2000"
      asChild
    >
      <Link href={"#techs"}>
        <ChevronDown className={cn("w-20 h-5")} />
      </Link>
    </Button>
  );
}
