import { useEffect, useState } from "react";

type BreakpointPrefix = "sm" | "md" | "lg" | "xl" | "2xl";

const widthMapping: Record<BreakpointPrefix, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/**
 * Check if media query matches. Refer https://tailwindcss.com/docs/responsive-design
 * @param breakpoint "sm" | "md" | "lg" | "xl" | "2xl"
 * @returns boolean
 */
export default function useMediaQuery(breakpoint: BreakpointPrefix) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${widthMapping[breakpoint]})`);
    setMatches(mql.matches);
    mql.onchange = (ev) => setMatches(ev.matches);
  }, [breakpoint]);

  return matches;
}
