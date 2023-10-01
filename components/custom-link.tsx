import React from "react";
import Link from "next/link";

import { nc } from "@/lib/utils";

type CustomLinkProps = {
  title?: string;
  circle?: boolean;
  dotted?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    {
      circle = false,
      dotted = false,
      children,
      href,
      title,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        href={href!}
        className={nc(
          "flex items-center",
          dotted && "underline decoration-dotted underline-offset-4",
          circle &&
            "h-full w-full flex-col-reverse justify-center rounded-full text-xs font-semibold ring-2",
          className,
        )}
        {...rest}
      >
        {children}
        {title}
      </Link>
    );
  },
);

CustomLink.displayName = "CustomLink";
