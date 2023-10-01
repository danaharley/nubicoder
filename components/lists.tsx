import React from "react";
import Link from "next/link";

import { Icon } from "@/components/icon";

import { siteConfig } from "@/config/site";

export const Lists = () => {
  return (
    <ul>
      <li className="border-t border-t-slate-400/40 py-8">
        <Link
          href={siteConfig.links.github}
          className="group flex items-center justify-between hover:cursor-newtab"
          target="_blank"
        >
          <h2 className="text-start transition duration-200 ease-in-out group-hover:text-blue-500/80">
            github
          </h2>
          <Icon icons={["arrow"]} className="-rotate-45" />
        </Link>
      </li>

      <li className="border-t border-t-slate-400/40 py-8">
        <Link
          href={siteConfig.links.twitter}
          className="group flex items-center justify-between hover:cursor-newtab"
          target="_blank"
        >
          <h2 className="text-start transition duration-200 ease-in-out group-hover:text-blue-500/80">
            x
          </h2>
          <Icon icons={["arrow"]} className="-rotate-45" />
        </Link>
      </li>

      <li className="border-t border-t-slate-400/40 py-8">
        <Link
          href={siteConfig.links.instagram}
          className="group flex items-center justify-between hover:cursor-newtab"
          target="_blank"
        >
          <h2 className="text-start transition duration-200 ease-in-out group-hover:text-blue-500/80">
            instagram
          </h2>
          <Icon icons={["arrow"]} className="-rotate-45" />
        </Link>
      </li>
    </ul>
  );
};
