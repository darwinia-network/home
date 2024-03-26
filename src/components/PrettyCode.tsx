import { CSSProperties, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  language: "solidity" | "typescript" | "javascript" | "rust" | "go";
  code: string;
  className?: string;
  customStyle?: CSSProperties | undefined;
}

export default function PrettyCode({ code, language, className, customStyle }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (ev: WheelEvent) => {
      const scrollableDiv = ref.current?.children[0] as Element;

      if (ev.deltaY > 0) {
        if (scrollableDiv.scrollTop >= scrollableDiv.scrollHeight - scrollableDiv.clientHeight - 1) {
          // Scrollbar is at the bottom
          console.log("Scrolled to end");
        } else {
          ev.stopPropagation();
        }
      } else {
        if (scrollableDiv.scrollTop === 0) {
          // Scrollbar is at the bottom
          console.log("Scrolled to start");
        } else {
          ev.stopPropagation();
        }
      }
    };
    ref.current?.addEventListener("wheel", listener, false);
    return () => {
      ref.current?.removeEventListener("wheel", listener, false);
    };
  }, []);

  return (
    <div ref={ref}>
      <SyntaxHighlighter
        language={language}
        style={xonokai}
        customStyle={{ border: "none", padding: "1.25rem", borderRadius: "0.625rem", ...customStyle }}
        className={className}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
