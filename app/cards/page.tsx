import { ComponentDisplay } from "@/components/ComponentDisplay";
import { BasicCard } from "@/components/ui/BasicCard";
import { ProfileCard } from "@/components/ui/ProfileCard";

export default function Cards() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        htmlCode={""}
        jsxCode={""}
        title={"Card"}
        description={"A card with a title and description"}
      >
        <BasicCard
          title={"Card"}
          description={"A card with a title and description"}
        />
      </ComponentDisplay>
      <ComponentDisplay
        htmlCode={""}
        jsxCode={""}
        title={"Profile Card"}
        description={"A card with a profile image, name, role, and bio"}
      >
        <ProfileCard
          name={"Hugh Williams"}
          bio={"Building Software for the Future. I am the best at what I do."}
          avatarUrl={"https://avatar.iran.liara.run/public/7"}
          role={"Software Engineer"}
        />
      </ComponentDisplay>
    </div>
  );
}
