import { CSSProperties } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  language: "solidity" | "typescript" | "javascript" | "rust" | "go";
  code: string;
  className?: string; // !important
  customStyle?: CSSProperties | undefined;
}

export default function PrettyCode({ code, language, className, customStyle }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={xonokai}
      customStyle={{ border: "none", padding: "1.25rem", borderRadius: "0.625rem", ...customStyle }}
      className={className}
    >
      {code}
    </SyntaxHighlighter>
  );
}
