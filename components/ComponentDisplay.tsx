"use client";
import React, { useState } from "react";
import { Copy, Code } from "lucide-react";

interface ComponentDisplayProps {
  children: React.ReactNode;
  htmlCode: string;
  jsxCode: string;
  title: string;
  description: string;
}

const viewportSizes = [
  { name: "Mobile", width: "320px", height: "640px" },
  { name: "Tablet", width: "768px", height: "1024px" },
  { name: "Desktop", width: "1024px", height: "768px" },
  { name: "Full", width: "100%", height: "auto" },
];

export function ComponentDisplay({
  children,
  htmlCode,
  jsxCode,
  title,
  description,
}: ComponentDisplayProps) {
  const [currentSize, setCurrentSize] = useState(viewportSizes[3]); // Default to full width
  const [codeType, setCodeType] = useState<"html" | "jsx">("jsx");
  const [showCode, setShowCode] = useState(false);

  const copyCode = async () => {
    const codeToCopy = codeType === "html" ? htmlCode : jsxCode;
    await navigator.clipboard.writeText(codeToCopy);
    // You might want to add a toast notification here
  };

  return (
    <div className="border rounded-lg p-4 space-y-4">
      {/* Title and Description */}
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {viewportSizes.map((size) => (
            <button
              key={size.name}
              onClick={() => setCurrentSize(size)}
              className={`px-3 py-1 rounded ${
                currentSize.name === size.name
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <select
            value={codeType}
            onChange={(e) => setCodeType(e.target.value as "html" | "jsx")}
            className="border rounded px-2 py-1"
          >
            <option value="html">HTML</option>
            <option value="jsx">JSX</option>
          </select>

          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1"
          >
            <Code size={16} />
            <span className="hidden md:block">
              {showCode ? "Hide Code" : "Show Code"}
            </span>
          </button>

          <button onClick={copyCode} className="flex items-center gap-1">
            <Copy size={16} />
            <span className="hidden md:block">Copy Code</span>
          </button>
        </div>
      </div>

      {/* Component Preview */}
      <div className="border rounded-lg p-4 overflow-auto">
        <div
          className={`mx-auto transition-all duration-200 @container flex justify-center p-4 ${
            currentSize.name !== "Full" ? "border-2 rounded-lg shadow-lg" : ""
          }`}
          style={{
            width: currentSize.width,
            height: "auto",
            overflow: "auto",
            // resize: currentSize.name === "Full" ? "none" : "both",
            maxWidth: "100%",
          }}
        >
          <div className={currentSize.name !== "Full" ? "scale-[1] " : ""}>
            {children}
          </div>
        </div>
      </div>

      {/* Code Display */}
      {showCode && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <pre className="overflow-x-auto">
            <code>{codeType === "html" ? htmlCode : jsxCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
