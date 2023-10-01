import React from "react";

type SplitProps = React.ComponentPropsWithoutRef<"div">;

export const Split = ({ children }: SplitProps) => {
  return (
    <div className="grid grid-cols-1 gap-1 xl:grid-cols-2">{children}</div>
  );
};
