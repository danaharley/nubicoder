import React from "react";

import { nc } from "@/lib/utils";

type Aside = {
  children: React.ReactNode;
  position?: "left" | "right";
};

export const Aside = ({ children, position = "left" }: Aside) => {
  return (
    <div
      className={nc(
        "relative h-fit w-full",
        position === "left" ? "xl:!col-start-2" : "xl:!col-start-4",
      )}
    >
      <div className={nc("relative xl:absolute xl:inset-x-0 xl:top-0")}>
        {children}
      </div>
    </div>
  );
};
