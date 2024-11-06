import Image from "next/image";
import Github from "@/assets/github.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold">FrameStackUI</h1>{" "}
        </Link>
        <p className="text-sm text-gray-500">
          A collection of UI components for your next project
        </p>
      </div>

      <Link href="https://github.com/chris-melvin/FrameStackUI">
        <Image src={Github} alt="GitHub" />
      </Link>
    </nav>
  );
};
