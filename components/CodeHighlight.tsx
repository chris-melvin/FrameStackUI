"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";

interface CodeHighlightProps {
  code: string;
  language: string;
}

export function CodeHighlight({ code, language }: CodeHighlightProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="rounded-lg bg-[#2d2d2d] p-4 overflow-x-auto">
      <pre className="text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
