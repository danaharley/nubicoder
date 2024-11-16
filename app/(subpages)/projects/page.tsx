import React from "react";
import { notFound } from "next/navigation";

import { Heading } from "@/components/Heading";
import { Projects } from "./components/projects";

import { getFiles } from "@/lib/mdx";

const ProjectsPage = async () => {
  const projects = await getFiles("projects");

  if (!projects) return notFound();

  const filteredProjectsPublished = projects.filter(
    (project) => project.frontmatter.published,
  );

  if (!filteredProjectsPublished.length) {
    return (
      <div className="mt-10">
        <Heading
          center
          title="No projects yet"
          subtitle="There are no projects to show off"
        />
      </div>
    );
  }

  return (
    <section className="py-10 md:py-16">
      <Projects projects={filteredProjectsPublished} />
    </section>
  );
};

export default ProjectsPage;
