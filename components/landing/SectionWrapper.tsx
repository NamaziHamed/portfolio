import React, { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`max-w-6xl p-4 mx-auto ${className}`}>
      {children}
    </div>
  );
}
