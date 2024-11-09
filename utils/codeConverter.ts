export function convertJsxToHtml(jsxCode: string): string {
  // Replace common JSX patterns with HTML equivalents
  return (
    jsxCode
      // Replace className with class
      .replace(/className=/g, "class=")
      // Replace self-closing tags with proper HTML
      .replace(/(\s*)<([a-z]+)\s*\/>/g, "$1<$2></$2>")
      // Replace onClick with onclick
      .replace(/onClick=/g, "onclick=")
      // Replace camelCase style properties with kebab-case
      .replace(/style={\s*{([^}]+)}\s*}/g, (match, styles) => {
        const convertedStyles = styles
          .split(",")
          .map((style: string) => {
            const [key, value] = style.split(":").map((s) => s.trim());
            const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            return `${kebabKey}: ${value.replace(/'/g, "")}`;
          })
          .join("; ");
        return `style="${convertedStyles}"`;
      })
      // Replace {} with actual values for attributes
      .replace(/=\{([^}]+)\}/g, '="$1"')
      // Remove React-specific imports and exports
      .replace(/import[^;]+;/g, "")
      .replace(/export\s+default\s+/g, "")
      // Remove TypeScript interfaces and types
      .replace(/interface\s+\w+\s*{[^}]+}/g, "")
      .replace(/type\s+\w+\s*=\s*[^;]+;/g, "")
      // Convert JSX comments to HTML comments
      .replace(/{\s*\/\*(.*?)\*\/\s*}/g, "<!-- $1 -->")
      // Convert single-line JSX comments to HTML comments
      .replace(/{\s*\/\/(.*?)}/g, "<!-- $1 -->")
  );
}
