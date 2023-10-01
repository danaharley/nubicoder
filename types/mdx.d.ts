import { ReadTimeResults } from "reading-time";

export type ContentType = "blog" | "projects";

export type GeneralFrontmatter = {
  author: string;
  title: string;
  description: string;
  banner: string;
  slug: string;
  published: boolean;
  publishedAt: string;
  lastUpdated?: string;
  commit_history?: string;
};

export type BlogFrontmatter = {
  tags: string[];
  readingTime: ReadTimeResults;
} & GeneralFrontmatter;

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type ProjectFrontmatter = {
  techs: string;
  github?: string;
  youtube?: string;
  site_url?: string;
  isFeatured?: boolean;
} & GeneralFrontmatter;

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type PickFrontmatter<T extends ContentType> = T extends "blog"
  ? BlogType
  : ProjectType;
