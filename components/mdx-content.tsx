"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";

import { Aside } from "@/components/Aside";
import { NextImage } from "@/components/next-image";
import { Split } from "@/components/split";

import { nc } from "@/lib/utils";

export const components = {
  h1: (props: any) => (
    <h1 className={nc("animated-underline w-fit")} {...props} />
  ),

  h2: (props: any) => (
    <h2 className={nc("animated-underline w-fit")} {...props} />
  ),

  h3: (props: any) => (
    <h3 className={nc("animated-underline w-fit")} {...props} />
  ),

  h4: (props: any) => (
    <h4 className={nc("animated-underline w-fit")} {...props} />
  ),

  h5: (props: any) => (
    <h5 className={nc("animated-underline w-fit")} {...props} />
  ),

  a: (props: any) => {
    if (props.href.startsWith("http")) {
      return (
        <a
          href={props.href}
          className="animated-underline cursor-newtab border-b border-dotted border-slate-900 transition-all hover:border-b-0 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 dark:border-white"
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    } else {
      return (
        <Link
          className="-ml-[1em] pl-[1em] before:absolute before:-ml-[1em] before:text-blue-100/0 before:content-['#'] hover:before:text-blue-500"
          href={props.href}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector(props.href)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      );
    }
  },

  pre: (props: any) => (
    <pre
      className="w-full overflow-x-auto rounded py-2 text-sm leading-6"
      {...props}
    />
  ),

  ul: (props: any) => (
    <ul
      className="space-y-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-[0.688rem] before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-slate-500/60"
      {...props}
    />
  ),

  ol: (props: any) => <ol className="list-decimal pl-7" {...props} />,

  blockquote: (props: any) => (
    <blockquote
      className="rounded border-l-2 border-rose-600/70 bg-rose-50/75 p-4 text-sm italic shadow shadow-rose-500/50 backdrop-blur dark:bg-rose-800/10 xl:mt-3 [&>p]:leading-normal"
      {...props}
    />
  ),

  del: (props: any) => (
    <del className="text-blue-100/70 line-through" {...props} />
  ),

  hr: (props: any) => (
    <hr
      className="my-3 border-slate-900/5 dark:border-blue-900/20"
      {...props}
    />
  ),
};

export const MDXContent = ({ code }: { code: string }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Component
      components={{
        Aside,
        NextImage,
        Split,
        ...components,
      }}
    />
  );
};
