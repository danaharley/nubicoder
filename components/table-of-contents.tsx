"use client";

import React, { useEffect, useState } from "react";

import { TOCLink } from "@/components/toc-link";

import { useHeadsObserver } from "@/hooks/useHeadsObserver";

import { nc } from "@/lib/utils";

export type HeadingScrollProps = Array<{
  id: string;
  level: number;
  text: string;
}>;

export const TableOfContents = () => {
  const [toc, setToc] = useState<HeadingScrollProps>([]);

  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements: HTMLElement[] = Array.from(
      document.querySelectorAll("h2, h3"),
    );

    const headingsArr: HeadingScrollProps = [];

    elements.forEach((element) => {
      const id = element.id;
      const level = Number(element.nodeName.charAt(1));
      const text = element.innerText;

      headingsArr.push({ id, level, text });
    });

    setToc(headingsArr);
  }, []);

  return (
    <aside className="sticky top-7 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
      <h1 className="text-lg">Table of Contents</h1>
      <nav className="mt-2">
        <ul>
          {toc.map(({ id, level, text }) => (
            <li
              key={id}
              className={nc(
                "px-4 py-0.5",
                activeId === id
                  ? "w-full rounded border-l-2 border-purple-600/70 bg-purple-300/10 shadow-sm shadow-purple-500/50"
                  : "",
              )}
            >
              <TOCLink
                id={id}
                level={level}
                text={text}
                activeSection={activeId}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${id}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
