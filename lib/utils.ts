import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function nc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
  const datetime = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en", options).format(datetime);
};
