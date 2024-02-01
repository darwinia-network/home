import { useEffect, useState } from "react";
import { MAX_HEIGHT_ON_DESKTOP } from "../config/constant";

type BreakpointPrefix = "sm" | "md" | "lg" | "xl" | "2xl" | "max_h_pc";

const mapping: Record<BreakpointPrefix, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "max_h_pc": `${MAX_HEIGHT_ON_DESKTOP}px`,
};

/**
 * Check if media query matches. Refer to https://tailwindcss.com/docs/responsive-design
 * @param breakpoint "sm" | "md" | "lg" | "xl" | "2xl"
 * @returns boolean
 */
export default function useMediaQuery(
  breakpoint: BreakpointPrefix,
  direction: "horizontal" | "vertical" = "horizontal"
) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql =
      direction === "horizontal"
        ? window.matchMedia(`(min-width: ${mapping[breakpoint]})`)
        : window.matchMedia(`(min-height: ${mapping[breakpoint]})`);
    setMatches(mql.matches);
    mql.onchange = (ev) => setMatches(ev.matches);
  }, [breakpoint, direction]);

  return matches;
}
