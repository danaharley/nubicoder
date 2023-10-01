"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { NextImage } from "@/components/next-image";

import { nc } from "@/lib/utils";

const routes = [
  {
    title: "Blog",
    href: "/blog",
    active: "/blog",
  },
  {
    title: "Project",
    href: "/projects",
    active: "/projects",
  },
  {
    title: "About",
    href: "/about",
    active: "/about",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 col-start-2 w-full rounded-bl-3xl rounded-br-3xl bg-slate-950/95 px-4 py-2.5 shadow backdrop-blur will-change-transform xl:!col-start-3 [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
      <section className="flex items-center justify-between">
        <Link href="/">
          <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/40">
            <NextImage
              src="https://res.cloudinary.com/nubicoder/image/upload/q_auto,f_auto,w_300,h_300,c_thumb,g_faces,z_0.75/v1692811821/danaharley/dana.jpg"
              alt="Dana Harliansyah | nubicoder"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <nav>
          <ul className="inline-flex items-center space-x-4">
            {routes.map((route, i) => (
              <li key={i}>
                <Link
                  href={route.href}
                  className={nc(
                    "text-sm md:text-base",
                    pathname === route.active && "underline underline-offset-8",
                  )}
                >
                  {route.title}
                </Link>
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </nav>
      </section>
    </header>
  );
};
