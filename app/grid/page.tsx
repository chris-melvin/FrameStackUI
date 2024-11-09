import { ComponentDisplay } from "@/components/ComponentDisplay";
import { AutoFillGrid, AutoFillGridCode } from "@/components/ui/AutoFillGrid";
import { ImageGrid, ImageGridCode } from "@/components/ui/ImageGrid";
import { convertJsxToHtml } from "@/utils/codeConverter";

export default function Grid() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        title={"Image Grid"}
        description={"A grid of images"}
        htmlCode={convertJsxToHtml(ImageGridCode)}
        jsxCode={ImageGridCode}
      >
        <ImageGrid />
      </ComponentDisplay>

      <ComponentDisplay
        title={"Auto Fill Grid"}
        description={"A grid that fills the width of the container"}
        htmlCode={convertJsxToHtml(AutoFillGridCode)}
        jsxCode={AutoFillGridCode}
      >
        <AutoFillGrid />
      </ComponentDisplay>
    </div>
  );
}
