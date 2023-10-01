import React from "react";
import Link from "next/link";

import { nc } from "@/lib/utils";

type TOCLink = {
  id: string;
  level: number;
  text: string;
  activeSection: string | null;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const TOCLink = ({
  id,
  level,
  text,
  activeSection,
  onClick,
}: TOCLink) => {
  return (
    <Link
      href={`#${id}`}
      onClick={onClick}
      className={nc(
        "text-sm hover:text-slate-900 focus:outline-none focus-visible:text-slate-700 dark:hover:text-slate-200 dark:focus-visible:text-slate-200",
        level === 3 ? "ml-3" : "",
        activeSection === id
          ? "font-semibold text-slate-800"
          : "text-slate-700/60 dark:text-slate-400/60",
      )}
    >
      {text}
    </Link>
  );
};
