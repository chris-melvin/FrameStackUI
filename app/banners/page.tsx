import { ComponentDisplay } from "@/components/ComponentDisplay";
import { BannerWithCTA } from "@/components/ui/banners/BannerWithCTA";
import { BannerWithCTACode } from "@/components/ui/banners/BannerWithCTA";
import { CenterBannerCode } from "@/components/ui/banners/CenterBanner";
import { CenterBanner } from "@/components/ui/banners/CenterBanner";
import { convertJsxToHtml } from "@/utils/codeConverter";

export default function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        htmlCode={convertJsxToHtml(CenterBannerCode)}
        jsxCode={CenterBannerCode}
        title={"Center Banner"}
        description={"A centered banner with a link to the GitHub repository"}
      >
        <CenterBanner />
      </ComponentDisplay>
      <ComponentDisplay
        htmlCode={convertJsxToHtml(BannerWithCTACode)}
        jsxCode={BannerWithCTACode}
        title={"Banner with CTA"}
        description={"A banner with a CTA"}
      >
        <BannerWithCTA />
      </ComponentDisplay>
    </div>
  );
}
