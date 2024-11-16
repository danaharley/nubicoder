import React from "react";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/mdx-content";
import { NextImage } from "@/components/next-image";
import { TableOfContents } from "@/components/table-of-contents";
import { CustomLink } from "@/components/custom-link";
import { Icon } from "@/components/icon";

import { getFiles, getFile } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

type DetailBlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () => {
  const posts = await getFiles("blog");

  return posts.map((post) => ({ slug: post.frontmatter.slug }));
};

const DetailBlogPage = async ({ params }: DetailBlogPageProps) => {
  const { slug } = await params;

  const post = await getFile("blog", slug);

  if (!post) return notFound();

  return (
    <>
      <div className="col-end-5">
        <h1>{post.frontmatter.title}</h1>
        <div className="mt-1.5 space-y-2">
          <span className="text-sm">
            Written on {formatDate(post.frontmatter.publishedAt)} by{" "}
            <span className="font-semibold">{post.frontmatter.author}</span>
          </span>

          {post.frontmatter.lastUpdated &&
          post.frontmatter.lastUpdated.length ? (
            <div className="flex items-center">
              <span className="text-sm">
                Last updated {formatDate(post.frontmatter.lastUpdated)},
              </span>
              <div className="flex items-center">
                <Icon icons={["clockwise"]} className="mx-1" size="h-5 w-5" />
                <CustomLink
                  dotted
                  title="See changes"
                  href={post.frontmatter.commit_history}
                  target="_blank"
                  className="animated-underline cursor-newtab text-sm font-semibold"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <NextImage
        src={post.frontmatter.banner}
        alt={post.frontmatter.title}
        width={1200}
        height={670}
        priority
        preview
      />

      <TableOfContents />

      <MDXContent code={post.code} />
    </>
  );
};

export default DetailBlogPage;
