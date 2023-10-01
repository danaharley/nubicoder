import fs from "fs/promises";
import { join } from "path";
import { cache } from "react";
import { bundleMDX } from "mdx-bundler";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { ContentType, PickFrontmatter } from "@/types/mdx";

const ROOT = join(process.cwd());
const FILE_PATH = join(ROOT, "contents");

export const getFiles = cache(async <T extends ContentType>(type: T) => {
  const files = await fs.readdir(join(FILE_PATH, type));

  return Promise.all(
    files
      .filter((file) => /\.mdx$/.test(file))
      .map(async (file) => {
        const filepath = join(FILE_PATH, type, file);
        const slug = file.replace(/\.mdx$/, "");
        const source = await fs.readFile(filepath, "utf-8");
        const { code, frontmatter } = await getCompileMDX(source);

        return {
          code,
          frontmatter: {
            slug,
            readingTime: readingTime(source),
            ...frontmatter,
          },
        } as PickFrontmatter<T>;
      }),
  );
});

export const getFile = async <T extends ContentType>(type: T, slug: string) => {
  const files = await getFiles(type);

  return files.find((file) => file.frontmatter.slug === slug);
};

export const rehypePrettyCodeOptions: Partial<Options> = {
  //@ts-ignore
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

export const getCompileMDX = async (source: string) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe",
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild",
    );
  }
  const remarkPlugins: any[] = [remarkGfm];
  const rehypePlugins: any[] = [
    rehypeSlug,
    [rehypePrettyCode, rehypePrettyCodeOptions],
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ],
  ];

  try {
    return await bundleMDX({
      source,
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];

        return options;
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
