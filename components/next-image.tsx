"use client";

import React, { useState } from "react";
import Image, { type ImageProps } from "next/image";

import { nc } from "@/lib/utils";

type NextImage = {
  height: string | number;
  width: string | number;
  aspect?: {
    width: number;
    height: number;
  };
  preview?: boolean;
  featured?: boolean;
} & ImageProps;

export const NextImage = ({
  aspect,
  height,
  width,
  className,
  preview = false,
  featured = false,
  ...props
}: NextImage) => {
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  return (
    <>
      <figure
        className={nc(
          "overflow-hidden rounded bg-white/[2%] shadow",
          className,
        )}
      >
        <div
          style={{
            position: "relative",
            height: 0,
            paddingTop: aspectRatio
              ? `${aspectRatio * 100}%`
              : `${(+height / +width) * 100}%`,
          }}
          onClick={preview ? () => setIsOpen(true) : undefined}
        >
          <Image
            fill
            sizes="100%"
            className={nc(
              "object-cover duration-700 ease-in-out",
              isLoading
                ? "scale-110 blur-xl grayscale"
                : "scale-100 blur-0 grayscale-0",
              preview ? "cursor-pointer" : "pointer-events-none",
              featured && "object-left",
            )}
            onLoad={() => setLoading(false)}
            {...props}
          />
        </div>
      </figure>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden bg-slate-900/50 outline-none focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-auto w-11/12 lg:w-1/2">
            <figure
              className={nc(
                "overflow-hidden rounded bg-white/[2%] shadow",
                className,
              )}
            >
              <div
                style={{
                  position: "relative",
                  height: 0,
                  paddingTop: aspectRatio
                    ? `${aspectRatio * 100}%`
                    : `${(+height / +width) * 100}%`,
                }}
              >
                <Image
                  fill
                  sizes="100%"
                  className={nc(
                    "object-cover duration-700 ease-in-out",
                    isLoading
                      ? "scale-110 blur-xl grayscale"
                      : "scale-100 blur-0 grayscale-0",
                  )}
                  onLoad={() => setLoading(false)}
                  {...props}
                />
              </div>
            </figure>
          </div>
        </div>
      )}
    </>
  );
};
