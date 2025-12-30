import React, { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-6xl ${className}`}>
      {children}
    </div>
  );
}
