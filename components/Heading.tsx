import React from "react";

import { nc } from "@/lib/utils";

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={nc("text-start", center && "text-center")}>
      <h2 className="">{title}</h2>
      <p className="mt-2 font-light">{subtitle}</p>
    </div>
  );
};
