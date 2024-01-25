import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  language: "solidity" | "typescript" | "javascript" | "rust" | "go";
  code: string;
  className?: string; // !important
}

export default function PrettyCode({ code, language, className }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{ padding: "1.25rem", borderRadius: "1.25rem" }}
      className={className}
    >
      {code}
    </SyntaxHighlighter>
  );
}
