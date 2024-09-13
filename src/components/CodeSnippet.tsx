import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/lib/utils";

export const CodeSnippet = ({
  className = "",
  code,
  language,
}: {
  code: string;
  language: string;
  className?: string;
}) => {
  return (
    <ReactSyntaxHighlighter
      className={cn("border text-[10px]", className)}
      language={language}
      style={oneLight}
      wrapLines={true}
      wrapLongLines={true}
    >
      {code}
    </ReactSyntaxHighlighter>
  );
};
