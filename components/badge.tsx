import React from "react";

type Badge = {
  title: string;
};

export const Badge = ({ title }: Badge) => {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-400/60 bg-slate-400/50 px-2.5 py-0.5 text-xs font-semibold text-inherit transition-colors focus:outline-none dark:border-slate-200/40">
      {title}
    </div>
  );
};
