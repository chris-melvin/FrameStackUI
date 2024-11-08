import Link from "next/link";

export const HomePage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div className="mb-4 flex flex-col items-center">
        <h2 className="text-4xl font-semibold">StackFrameUI</h2>
        <p className="text-lg text-gray-500 max-w-xl text-center">
          Build beautiful, responsive websites faster with our free collection
          of TailwindCSS components. Whether you&apos;re designing a landing
          page, an e-commerce site, or a blog, this collection gives you the
          essentials to get started and customize for any project.
        </p>
      </div>
      <div className="grid grid-cols-autofill gap-4 ">
        <Card
          title="Cards"
          description="A collection of cards with different styles"
          href="/cards"
          count={2}
        />
        <Card
          title="Image Grid"
          description="A grid of images"
          href="/grid"
          count={1}
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  href,
  count,
}: {
  title: string;
  description: string;
  href: string;
  count?: number;
}) => {
  return (
    <Link
      href={href}
      className="rounded-lg overflow-hidden border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
    >
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {count && (
          <p className="text-sm text-gray-500 mt-2">
            {count}{" "}
            <span className="hidden md:inline">
              {count > 1 ? "components" : "component"}
            </span>
          </p>
        )}
      </div>
    </Link>
  );
};
