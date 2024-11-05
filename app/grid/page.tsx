import { ComponentDisplay } from "@/components/ComponentDisplay";
import { ImageGrid } from "@/components/ui/ImageGrid";

export default function Grid() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        htmlCode={""}
        jsxCode={""}
        title={"Image Grid"}
        description={"A grid of images"}
      >
        <ImageGrid />
      </ComponentDisplay>
    </div>
  );
}
