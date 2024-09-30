"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.75], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div ref={ref} className={cn("relative w-full h-full ", className)}>
      <div className="absolute top-32 z-50">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(160, 160, 160, 0.43) 0px 3px 8px",
          }}
          className="ml-[37px] text-gray-400 h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 1920 ${svgHeight}`}
          width="1920"
          height={svgHeight + 30} // Set the SVG height
          className=" block"
          aria-hidden="true"
        >
          <motion.path
            d={`
              M -13 -66 
                l 18 -10 
                q 0 40, 40 40
                V ${svgHeight * 0.34 - 40} 
                q 0 40, 40 40
                h 1340
                q 40 0, 40 40
                V ${svgHeight * 0.5 - 40}
                q 0 40, -40 40 
                h -1340
                q -40 0, -40 40
                V ${svgHeight * 0.7 - 40}
                q 0 40, 40 40
                h 1340
                q 40 0, 40 40
                V ${svgHeight * 0.9}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            // stroke="#000000"
            // strokeOpacity="1"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`
              M -13 -66 
                l 18 -10 
                q 0 40, 40 40
                V ${svgHeight * 0.34 - 40} 
                q 0 40, 40 40
                h 1340
                q 40 0, 40 40
                V ${svgHeight * 0.5 - 40}
                q 0 40, -40 40 
                h -1340
                q -40 0, -40 40
                V ${svgHeight * 0.7 - 40}
                q 0 40, 40 40
                h 1340
                q 40 0, 40 40
                V ${svgHeight * 0.9}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>

          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#ff9900" stopOpacity="0"></stop>
              <stop stopColor="#ff9900"></stop>
              <stop offset="0.325" stopColor="#ff9900"></stop>
              {/* <stop offset="0.325" stopColor="#6344F5"></stop> */}
              <stop offset="1" stopColor="#ff9900" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
