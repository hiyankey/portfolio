"use client"; // @NOTE: add in case you are using Next.js

import { PropsWithChildren, useState } from "react";
import { motion } from "motion/react";

import { cn } from "../lib/utils";

export function ButtonWithTooltip({children, className}: PropsWithChildren & {className?: string}) {
  return (
    <Tooltip text="WhatsApp">
      <button className={cn("rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-2 text-sm font-medium", className)}>
        {children}
      </button>
    </Tooltip>
  );
}

type TooltipProps = {
  text: string;
} & React.ComponentProps<"div">;

function Tooltip({ text, children, className }: TooltipProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsToastVisible(true)}
      onMouseLeave={() => setIsToastVisible(false)}
      className="relative inline-block"
    >
      <motion.div
        className={cn(
          "absolute -top-4 left-1/2 whitespace-nowrap rounded-[.8rem] border border-black/[.05] bg-[#25D366] px-[.4rem] py-[.2rem] text-[10px] text-white shadow [translate:-50%_-50%]",
          className,
        )}
        initial={{ opacity: 0, y: 5, filter: "blur(4px)", scale: 0.9 }}
        animate={{
          opacity: isToastVisible ? 1 : 0,
          y: isToastVisible ? 0 : 5,
          filter: isToastVisible ? "blur(0px)" : "blur(4px)",
          scale: isToastVisible ? 1 : 0.9,
        }}
        transition={{ ease: "easeInOut", duration: 0.15 }}
      >
        <span>{text}</span>
      </motion.div>

      {children}
    </div>
  );
}
