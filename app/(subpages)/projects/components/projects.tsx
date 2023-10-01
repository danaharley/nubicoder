import React from "react";
import Link from "next/link";

import { NextImage } from "@/components/next-image";
import { Icon } from "@/components/icon";

import { ProjectType } from "@/types/mdx";

type ProjectFrontmatter = Omit<ProjectType, "code">;

type ProjectsProps = {
  projects: ProjectFrontmatter[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 xl:-mx-10 xl:grid-cols-2">
      {projects.map((project, i) => (
        <li
          key={i}
          className="project-card rounded border border-slate-400/40 p-3.5"
        >
          <Link href={`projects/${project.frontmatter.slug}`} className="">
            <h3 className="animated-underline w-fit xl:text-lg">
              {project.frontmatter.title}
            </h3>
            <p className="text-sm">{project.frontmatter.description}</p>
            <Icon
              icons={["mongodb", "expressjs", "react", "nodejs"]}
              className="mt-1.5"
            />
            <NextImage
              src={project.frontmatter.banner}
              alt={project.frontmatter.title}
              width={640}
              height={368}
              className="mt-3 shadow"
              priority
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
