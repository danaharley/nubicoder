import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Posts } from "../(subpages)/blog/components/posts";
import { NextImage } from "@/components/next-image";
import { CustomLink } from "@/components/custom-link";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/icon";

import { getFiles } from "@/lib/mdx";

import { siteConfig } from "@/config/site";

export default async function Home() {
  const posts = await getFiles("blog");
  const projects = await getFiles("projects");

  if (!posts || !projects) return notFound();

  const filteredPostsPublished = posts.filter(
    (post) => post.frontmatter.published,
  );

  const filteredProjectsPublished = projects.filter(
    (project) =>
      project.frontmatter.isFeatured && project.frontmatter.published,
  );

  return (
    <>
      <section className="mx-auto w-fit py-24">
        <p className="mb-2 text-end font-mono text-sm md:text-lg">
          👋 there! I&apos;m Dana Harliansyah
        </p>
        <h1 className="text-end font-mono text-5xl font-bold md:text-7xl">
          front-end
        </h1>
        <h2 className="block text-end font-mono text-2xl font-thin md:text-4xl">
          web developer
        </h2>
        <span className="mt-1 flex items-center justify-end font-mono text-sm md:text-base">
          <Icon icons={["pin"]} className="mr-2" size="h-5 w-5" />
          Surabaya | Indonesia
        </span>

        <div className="mt-2 flex flex-wrap justify-end gap-2.5 font-mono text-sm">
          {/* <CustomLink
            title="Resume"
            href={siteConfig.links.resume}
            target="_blank"
          >
            <Icon icons={["file"]} className="mr-1" size="h-4 w-4" />
          </CustomLink> */}
          <CustomLink
            title="@danaharliansyah"
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <Icon icons={["x"]} className="mr-1" size="h-3.5 w-3.5" />
          </CustomLink>
          <CustomLink
            title="@danaharley"
            href={siteConfig.links.github}
            target="_blank"
          >
            <Icon icons={["github"]} className="mr-1" size="h-4 w-4" />
          </CustomLink>
        </div>
      </section>

      {filteredProjectsPublished.length ? (
        <>
          <div className="flex items-center justify-between">
            <h2>Featured Projects</h2>
            <div className="group h-24 w-24">
              <CustomLink circle title="All Projects" href="projects">
                <Icon
                  icons={["arrow"]}
                  className="mt-0.5 transition duration-200 ease-in-out group-hover:translate-x-3"
                  size="h-7 w-7"
                />
              </CustomLink>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-4 xl:!col-start-2 xl:col-end-5 xl:grid-cols-2 xl:gap-x-20 xl:[&>*:nth-child(even)]:mt-20 [&>div]:mb-8">
            {filteredProjectsPublished.map((project, idx) => (
              <Link
                key={`${project.frontmatter.slug}-${idx}`}
                href={`projects/${project.frontmatter.slug}`}
              >
                <div className="group space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 opacity-10 transition duration-300 group-hover:opacity-80 group-hover:blur-lg group-hover:duration-200" />
                    <NextImage
                      src={project.frontmatter.banner}
                      alt={project.frontmatter.title}
                      width={400}
                      height={460}
                      className="rounded-none"
                      featured
                      priority
                    />
                  </div>
                  <h1 className="duration-500 group-hover:text-blue-500/90 group-hover:duration-200">
                    {project.frontmatter.title}
                  </h1>
                  <p>{project.frontmatter.description}</p>
                </div>
              </Link>
            ))}
          </section>
        </>
      ) : null}

      <h2 className="mt-10 text-center xl:mt-20">
        Some recents studies I want to share with you
      </h2>

      <div className="flex justify-end">
        <div className="group h-24 w-24">
          <CustomLink circle title="All Posts" href="blog">
            <Icon
              icons={["arrow"]}
              className="mt-0.5 transition duration-200 ease-in-out group-hover:translate-x-3"
              size="h-7 w-7"
            />
          </CustomLink>
        </div>
      </div>

      <section>
        {!filteredPostsPublished.length ? (
          <Heading
            center
            title="No posts yet"
            subtitle="This author is still working away on his first piece!"
          />
        ) : (
          <Posts posts={filteredPostsPublished} />
        )}
      </section>
    </>
  );
}
