"use client";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface FilterBlockProps {
  filterForPage: string;
  like: string;
  setLike: Dispatch<SetStateAction<string>>;
}
const FilterBlocks = ({ filterForPage, like, setLike }: FilterBlockProps) => {
  const blocks = "abcdefghijklmnopqrstuvwxyz".split("");
  const activeBlockStyle =
    "bg-zinc-900 text-white";
  ("bg-zinc-900 text-white");

  const commonBlockStyle = `flex size-6 cursor-pointer items-center justify-center border border-muted-foreground p-2 
  flex size-6 cursor-pointer items-center justify-center border border-muted-foreground p-2  sm:size-10 
   sm:size-10 lg:size-12 2xl:size-14
  lg:size-12 2xl:size-14 hover:bg-zinc-900 hover:text-white transition-colors duration-300 ease-in-out`;

  return (
    <div className="mx-8 flex flex-col items-center gap-4 border border-muted-foreground p-2 py-1 lg:mx-12 lg:items-start">
      <h3 className="text-xl  text-muted-foreground">
        Browse by{" "}
        <span className="first-letter:uppercase">
          {filterForPage.charAt(0).toUpperCase() + filterForPage.slice(1)}
        </span>
      </h3>
      <div className="mb-1 flex flex-wrap gap-2 place-self-center text-lg sm:text-xl lg:place-self-start">
        {
          <>
            <div
              className={cn(
                `${commonBlockStyle} text-base sm:text-xl `,
                !like && activeBlockStyle,
              )}
              onClick={() => {
                setLike("");
              }}
            >
              <p>All</p>
            </div>
            {blocks.map((block) => {
              return (
                <div
                  key={block}
                  className={cn(
                    `${commonBlockStyle} `,
                    like === block && activeBlockStyle,
                  )}
                  onClick={() => {
                    setLike(block);
                  }}
                >
                  <p>{block.charAt(0).toUpperCase()}</p>
                </div>
              );
            })}
          </>
        }
      </div>
    </div>
  );
};

export default FilterBlocks;
