import { ComponentDisplay } from "@/components/ComponentDisplay";
import {
  TextButtonGroup,
  TextButtonGroupCode,
} from "@/components/ui/buttons/TextButtonGroup";
import { TabButtons } from "@/components/ui/buttons/TabButtons";
import { TabButtonsCode } from "@/components/ui/buttons/TabButtonsCode";
import { convertJsxToHtml } from "@/utils/codeConverter";
import {
  ResponsiveButtonGroupFull,
  ResponsiveButtonGroupFullCode,
} from "@/components/ui/buttons/ResponsiveButtonFull";

export default function Buttons() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        htmlCode={convertJsxToHtml(TabButtonsCode)}
        jsxCode={TabButtonsCode}
        title={"Tab Buttons"}
        description={"A group of interactive tab buttons"}
      >
        <TabButtons tabs={["Tab 1", "Tab 2", "Tab 3"]} />
      </ComponentDisplay>

      <ComponentDisplay
        htmlCode={convertJsxToHtml(TextButtonGroupCode)}
        jsxCode={TextButtonGroupCode}
        title={"Text Button Group"}
        description={"A group of text buttons"}
      >
        <TextButtonGroup />
      </ComponentDisplay>

      <ComponentDisplay
        htmlCode={convertJsxToHtml(ResponsiveButtonGroupFullCode)}
        jsxCode={ResponsiveButtonGroupFullCode}
        title={"Responsive Full Width Button Group"}
        description={"A group of responsive full width buttons"}
      >
        <ResponsiveButtonGroupFull />
      </ComponentDisplay>
    </div>
  );
}
