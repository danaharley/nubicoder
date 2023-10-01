import React from "react";
import { notFound } from "next/navigation";

import { Heading } from "@/components/Heading";
import { Posts } from "./components/posts";

import { getFiles } from "@/lib/mdx";

const BlogPage = async () => {
  const posts = await getFiles("blog");

  if (!posts) return notFound();

  const filteredPosts = posts.filter(
    (post) => post.frontmatter.published !== false,
  );

  if (!filteredPosts.length) {
    return (
      <div className="mt-10">
        <Heading
          center
          title="No posts yet"
          subtitle="This author is still working away on his first piece!"
        />
      </div>
    );
  }

  return (
    <section className="py-10 md:py-16">
      <Posts posts={filteredPosts} />
    </section>
  );
};

export default BlogPage;
