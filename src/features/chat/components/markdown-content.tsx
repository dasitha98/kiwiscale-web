"use client";

import { useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sh", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("sql", sql);

const SUPPORTED_LANGUAGES = new Set([
  "tsx",
  "typescript",
  "ts",
  "javascript",
  "js",
  "jsx",
  "json",
  "bash",
  "sh",
  "css",
  "html",
  "markup",
  "python",
  "sql",
]);

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const displayLanguage = language.toLowerCase();
  const highlightLanguage = SUPPORTED_LANGUAGES.has(displayLanguage) ? displayLanguage : undefined;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-3 overflow-hidden rounded-lg border border-white/10 bg-[#1e1e2e] text-sm shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="font-mono text-xs text-white/50">{language || "text"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="overflow-x-auto">
        {highlightLanguage ? (
          <SyntaxHighlighter
            language={highlightLanguage}
            style={oneDark}
            customStyle={{ margin: 0, padding: "0.75rem 1rem", background: "transparent", fontSize: "0.8125rem" }}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        ) : (
          <pre className="whitespace-pre-wrap px-4 py-3 font-mono text-[0.8125rem] text-white/90">{code}</pre>
        )}
      </div>
    </div>
  );
}

const components: Components = {
  h1: ({ children }) => <h1 className="mt-4 mb-2 text-lg font-bold first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="mt-4 mb-2 text-base font-bold first:mt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-3 mb-1.5 text-sm font-bold first:mt-0">{children}</h3>,
  h4: ({ children }) => <h4 className="mt-3 mb-1.5 text-sm font-semibold first:mt-0">{children}</h4>,
  p: ({ children }) => <p className="mb-2 leading-relaxed last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => <ul className="mb-2 ml-1 flex flex-col gap-1 last:mb-0">{children}</ul>,
  ol: ({ children }) => (
    <ol className="mb-2 ml-1 flex list-decimal flex-col gap-1 pl-4 last:mb-0">{children}</ol>
  ),
  li: ({ children, className }) => {
    const isTask = className?.includes("task-list-item");
    if (isTask) {
      return <li className="ml-4 flex items-start gap-2 [&>input]:mt-1">{children}</li>;
    }
    return (
      <li className="flex items-start gap-2">
        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-current/60" />
        <span>{children}</span>
      </li>
    );
  },
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 font-medium text-gold underline decoration-gold/40 underline-offset-2 transition-colors hover:decoration-gold"
    >
      {children}
      <ExternalLink className="size-3" />
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-2 rounded-md border-l-4 border-gold/50 bg-gold/5 px-3 py-2 text-sm italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-3 border-border" />,
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/80">{children}</thead>,
  tr: ({ children }) => <tr className="border-b last:border-0 odd:bg-transparent even:bg-muted/30">{children}</tr>,
  th: ({ children }) => <th className="px-3 py-2 text-left font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-3 py-2 align-top">{children}</td>,
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || "");
    const isBlock = Boolean(match);
    const code = String(children).replace(/\n$/, "");

    if (isBlock) {
      return <CodeBlock language={match?.[1] ?? ""} code={code} />;
    }

    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">{children}</code>
    );
  },
};

export default function MarkdownContent({ content, className }: { content: string; className?: string }) {
  return (
    <div className={cn("text-sm", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
