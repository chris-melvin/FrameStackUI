import LoginForm from "@/components/ui/forms/LoginForm";
import { ComponentDisplay } from "@/components/ComponentDisplay";
import { convertJsxToHtml } from "@/utils/codeConverter";
import { LoginFormCode } from "@/components/ui/forms/LoginFormCode";

export default function Login() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <ComponentDisplay
        title="Login Form"
        description="A login form with email and password input fields"
        htmlCode={convertJsxToHtml(LoginFormCode)}
        jsxCode={LoginFormCode}
      >
        <LoginForm />
      </ComponentDisplay>
    </div>
  );
}
