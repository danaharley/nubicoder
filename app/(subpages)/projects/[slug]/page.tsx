import React from "react";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/mdx-content";
import { NextImage } from "@/components/next-image";
import { TableOfContents } from "@/components/table-of-contents";
import { CustomLink } from "@/components/custom-link";
import { Badge } from "@/components/badge";
import { Icon } from "@/components/icon";

import { getFiles, getFile } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

type DetailProjectPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const projects = await getFiles("projects");

  return projects.map((project) => ({ slug: project.frontmatter.slug }));
};

const DetailProjectPage = async ({ params }: DetailProjectPageProps) => {
  const { slug } = params;

  const project = await getFile("projects", slug);

  if (!project) return notFound();

  return (
    <>
      <div className="col-end-5">
        <h1>{project.frontmatter.title}</h1>
        <p>{project.frontmatter.description}</p>
        <div className="mb-1.5 mt-5 flex flex-wrap items-center">
          <Icon icons={["user"]} className="mr-1" size="h-5 w-5" />
          <span className="text-sm font-semibold">
            {project.frontmatter.author}
          </span>
        </div>

        <div className="flex-wrap space-x-1">
          {project.frontmatter.techs && project.frontmatter.techs.length
            ? project.frontmatter.techs
                .split(", ")
                .map((tech) => <Badge key={tech} title={tech} />)
            : null}
        </div>

        <div className="mt-1.5 flex flex-wrap items-center space-x-2 space-y-2">
          {project.frontmatter.github &&
          project.frontmatter.github.split(", ").length === 1 ? (
            <>
              <Icon icons={["github"]} className="mt-2" size="h-5 w-5" />
              <CustomLink
                dotted
                title="Repository"
                href={project.frontmatter.github}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
              <span>&#8226;</span>
            </>
          ) : project.frontmatter.github &&
            project.frontmatter.github.split(", ").length > 1 ? (
            <>
              <Icon icons={["github"]} className="mt-2" size="h-5 w-5" />
              <CustomLink
                dotted
                title="Client"
                href={project.frontmatter.github.split(", ")[0]}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
              <span>&#8226;</span>
              <Icon icons={["github"]} size="h-5 w-5" />
              <CustomLink
                dotted
                title="Api"
                href={project.frontmatter.github.split(", ")[1]}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
              <span>&#8226;</span>
            </>
          ) : null}

          {project.frontmatter.youtube && project.frontmatter.youtube.length ? (
            <>
              <Icon icons={["youtube"]} size="h-5 w-5" />
              <CustomLink
                dotted
                title="Demo Site"
                href={project.frontmatter.youtube}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
              <span>&#8226;</span>
            </>
          ) : null}

          {project.frontmatter.site_url &&
          project.frontmatter.site_url.length ? (
            <>
              <Icon icons={["link"]} size="h-5 w-5" />
              <CustomLink
                dotted
                title="Open Live Site"
                href={project.frontmatter.site_url}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
            </>
          ) : null}
        </div>

        {project.frontmatter.lastUpdated &&
        project.frontmatter.lastUpdated.length ? (
          <div className="mt-2 flex items-center">
            <span className="text-sm">
              Last updated {formatDate(project.frontmatter.lastUpdated)},
            </span>
            <div className="flex items-center">
              <Icon
                icons={["clockwise"]}
                className="mx-1 mt-0"
                size="h-5 w-5"
              />
              <CustomLink
                dotted
                title="See changes"
                href={project.frontmatter.commit_history}
                target="_blank"
                className="animated-underline cursor-newtab text-sm font-semibold"
              />
            </div>
          </div>
        ) : null}
      </div>

      <NextImage
        src={project.frontmatter.banner}
        alt={project.frontmatter.title}
        width={1200}
        height={670}
        priority
        preview
      />

      <TableOfContents />

      <MDXContent code={project.code} />
    </>
  );
};

export default DetailProjectPage;
