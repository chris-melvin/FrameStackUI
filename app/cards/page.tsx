import { ComponentDisplay } from "@/components/ComponentDisplay";
import { BasicCard, BasicCardCode } from "@/components/ui/BasicCard";
import {
  ExpandedProductCardCode,
  InteractiveProductCardCode,
  MinimalProductCardCode,
} from "@/components/ui/cards/code";
import { ExpandedProductCard } from "@/components/ui/cards/ExpandedProductCard";
import { InteractiveProductCard } from "@/components/ui/cards/InteractiveProductCard";
import { MinimalProductCard } from "@/components/ui/cards/MinimalProductCard";

import { convertJsxToHtml } from "@/utils/codeConverter";

export default function Cards() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        htmlCode={convertJsxToHtml(BasicCardCode)}
        jsxCode={BasicCardCode}
        title={"Card"}
        description={"A card with a title and description"}
      >
        <BasicCard
          title={"Card"}
          description={"A card with a title and description"}
        />
      </ComponentDisplay>

      <ComponentDisplay
        htmlCode={convertJsxToHtml(ExpandedProductCardCode)}
        jsxCode={ExpandedProductCardCode}
        title={"Expanded Product Card"}
        description={"A product card with expandable component"}
      >
        <ExpandedProductCard />
      </ComponentDisplay>
      <ComponentDisplay
        htmlCode={convertJsxToHtml(MinimalProductCardCode)}
        jsxCode={MinimalProductCardCode}
        title={"Miniman Product Card"}
        description={"A product card with basic styling"}
      >
        <MinimalProductCard />
      </ComponentDisplay>
      <ComponentDisplay
        htmlCode={convertJsxToHtml(InteractiveProductCardCode)}
        jsxCode={InteractiveProductCardCode}
        title={"Interactive Product Card"}
        description={"A product card with colors"}
      >
        <InteractiveProductCard />
      </ComponentDisplay>
    </div>
  );
}
