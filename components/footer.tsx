import React from "react";

import { CustomLink } from "@/components/custom-link";
import { CircularText, Icon } from "@/components/icon";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mb-5 mt-20">
        <div className="flex justify-center">
          <div className="flex h-40 w-40 items-center justify-center">
            <CustomLink circle href="/about#contactme" className="group">
              <CircularText />
              <Icon
                icons={["arrow"]}
                className="absolute transition duration-500 ease-in-out group-hover:text-blue-500 group-hover:duration-300"
                size="h-14 w-14"
              />
            </CustomLink>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-5">
          <CustomLink
            href={siteConfig.links.email}
            target="_blank"
            className="group"
          >
            <Icon
              icons={["email"]}
              className="cursor-newtab transition duration-300 ease-in-out group-hover:text-blue-500"
              size="h-8 w-8"
            />
          </CustomLink>
          <CustomLink
            href={siteConfig.links.github}
            target="_blank"
            className="group"
          >
            <Icon
              icons={["github"]}
              className="cursor-newtab transition duration-300 ease-in-out group-hover:text-blue-500"
              size="h-7 w-7"
            />
          </CustomLink>
          <CustomLink
            href={siteConfig.links.twitter}
            target="_blank"
            className="group"
          >
            <Icon
              icons={["x"]}
              className="cursor-newtab transition duration-300 ease-in-out group-hover:text-blue-500"
              size="h-7 w-7"
            />
          </CustomLink>
        </div>
        <p className="mt-5 text-center text-sm">
          &copy; nubicoder | M. Harliansyah Wardana {currentYear}
        </p>
      </div>
    </footer>
  );
};
