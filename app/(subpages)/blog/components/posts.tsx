import React from "react";
import Link from "next/link";

import { formatDate } from "@/lib/utils";

import { BlogType } from "@/types/mdx";

type BlogFrontmatter = Omit<BlogType, "code">;

type PostsProps = {
  posts: BlogFrontmatter[];
};

export const Posts = ({ posts }: PostsProps) => {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i} className="border-t border-t-slate-400/40 py-3">
          <Link
            href={`/blog/${post.frontmatter.slug}`}
            className="group py-3 md:flex"
          >
            <span className="h-auto w-full max-w-[7rem] self-start text-sm font-semibold md:-rotate-12 md:self-center">
              {formatDate(post.frontmatter.publishedAt)}
            </span>
            <h2 className="mt-2 transition duration-200 ease-in-out group-hover:text-blue-500/80 md:mt-0">
              {post.frontmatter.title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
