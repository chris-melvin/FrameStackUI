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
          count={4}
        />
        <Card
          title="Grid"
          description="A grid of images"
          href="/grid"
          count={2}
        />
        <Card
          title="Buttons"
          description="A collection of buttons with different styles"
          href="/buttons"
          count={3}
        />
        <Card
          title="Inputs"
          description="A collection of inputs with different styles"
          href="/inputs"
          count={3}
        />
        <Card
          title="Forms"
          description="A collection of forms with different styles"
          href="/forms"
          count={1}
        />
        <Card
          title="Banners"
          description="A collection of banners with different styles"
          href="/banners"
          count={2}
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
            <span className="">{count > 1 ? "components" : "component"}</span>
          </p>
        )}
      </div>
    </Link>
  );
};
