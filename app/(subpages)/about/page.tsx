import React from "react";

import { NextImage } from "@/components/next-image";
import { Lists } from "@/components/lists";
import { Icon } from "@/components/icon";

const AboutPage = () => {
  return (
    <section className="py-10 md:py-16">
      <h2>About Me</h2>
      <h1>Dana Harliansyah</h1>
      <div className="space-y-5">
        <div className="float-right mx-3 mb-1 h-48 w-44 xl:h-80 xl:w-72">
          <NextImage
            src="https://res.cloudinary.com/nubicoder/image/upload/q_auto,f_auto,w_500,h_500,c_thumb,g_faces,z_0.75/v1692813203/danaharley/dana-harli.jpg"
            alt="Dana Harliansyah | nubicoder"
            width={500}
            height={500}
            preview
          />
        </div>
        <p>Hello..! I'm Dana. I currently reside in Surabaya, Indonesia.</p>
        <p>
          I'm front-end web developer who is passionate about
          <strong className="text-blue-500"> REACT</strong>, build interactive
          applications and great user experiences on the web, fighting for
          simplicity over complexity and constantly learning.
        </p>
        <p>
          There are a lot of things and technologies to learn in front-end
          development and i am motivated to learn as much as possible. I know
          coding is hard, but i loved, i enjoy learning something new, and i
          promised myself that i would keep learning to make myself better and
          grow.
        </p>
        <p>
          On this website i will share knowledge and what i have learned
          recently about web development, especially front-end development and
          also showcase my projects.
        </p>
        <p>
          Other than coding, I spend most of my free time watching movies, so
          feel free to reach out to me if you have any good movie
          recommendations. ^_^
        </p>
        <p>
          I'am interested in remote work as well as freelance work. If you have
          an idea for a website or want to upgrade your current website contact
          me. I'am happiest when i'am using my passions to help you pursue your!
        </p>
      </div>

      <div id="contact_me" className="mt-20">
        <h2>Current Favorite Tech Stack</h2>
        <div className="mt-2 flex items-center text-slate-900/90 dark:text-[#d1d9df] md:space-x-4">
          <Icon
            icons={[
              "react",
              "nextjs",
              "typescript",
              "tailwindcss",
              "nodejs",
              "prisma",
              "mongodb",
              "vercel",
            ]}
            className="gap-3"
            size="h-8 w-8 md:h-10 md:w-10"
          />
        </div>
      </div>

      <div id="contactme" className="mt-28 text-center">
        <h2 className="mb-5">GET IN TOUCH</h2>
        <p>
          Thanks so much for stopping by! If you have any questions or just want
          to say '<strong className="tracking-wider">hi</strong>', please feel
          free to get in touch with me. I'll get back to you as soon as
          possible.
        </p>
        <h3 className="mb-10 mt-5 text-blue-500/80 dark:text-blue-500/80">
          danaharley00@gmail.com
        </h3>
        <Lists />
      </div>
    </section>
  );
};

export default AboutPage;
