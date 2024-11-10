import { ComponentDisplay } from "@/components/ComponentDisplay";
import { EmailInputCode } from "@/components/ui/input/EmailInput";
import { EmailInput } from "@/components/ui/input/EmailInput";
import {
  SimpleTextInput,
  SimpleTextInputCode,
} from "@/components/ui/input/SimpleTextInput";
import { convertJsxToHtml } from "@/utils/codeConverter";
import { ResponsiveSelect } from "@/components/ui/input/ResponsiveSelect";
import { ResponsiveSelectCode } from "@/components/ui/input/ResponsiveSelectCode";

export default function Inputs() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 space-y-4">
      <ComponentDisplay
        title="Simple Text Input"
        description="A basic text input with label and error state support"
        htmlCode={convertJsxToHtml(SimpleTextInputCode)}
        jsxCode={SimpleTextInputCode}
      >
        <div className="space-y-4 w-full">
          <SimpleTextInput label="Default Input" placeholder="Enter text..." />
          <SimpleTextInput
            label="Error State"
            placeholder="Enter text..."
            error="This field is required"
          />
          <SimpleTextInput
            label="Disabled State"
            placeholder="Enter text..."
            disabled
          />
        </div>
      </ComponentDisplay>

      <ComponentDisplay
        title="Email Input"
        description="A basic email input with label and error state support"
        htmlCode={convertJsxToHtml(EmailInputCode)}
        jsxCode={EmailInputCode}
      >
        <div className="space-y-4 w-full">
          <EmailInput label="Email" placeholder="Enter email address" />
          <EmailInput
            label="Error State"
            placeholder="Enter email address"
            error="This field is required"
          />
          <EmailInput
            label="Disabled State"
            placeholder="Enter email address"
            disabled
          />
        </div>
      </ComponentDisplay>

      <ComponentDisplay
        title="Responsive Select"
        description="A basic select input with label and error state support"
        htmlCode={convertJsxToHtml(ResponsiveSelectCode)}
        jsxCode={ResponsiveSelectCode}
      >
        <div className="space-y-4 w-full">
          <ResponsiveSelect
            label="Select Option"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
          <ResponsiveSelect
            label="Error State"
            error="This field is required"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
          />
          <ResponsiveSelect
            label="Disabled State"
            disabled
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
          />
        </div>
      </ComponentDisplay>
    </div>
  );
}
