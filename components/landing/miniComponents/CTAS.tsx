"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../../ui/button";

export default function CTAS() {
  return (
    <div className="flex items-center gap-5">
      <Button className="font-semibold" size={"lg"} variant={"default"} asChild>
        <Link
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in touch
        </Link>
      </Button>
      <Button className="" size={"lg"} variant={"outline"} asChild>
        <Link
          href="#featured-projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("featured-projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View projects
        </Link>
      </Button>
    </div>
  );
}
