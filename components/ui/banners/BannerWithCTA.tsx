export const BannerWithCTA = () => {
  return (
    <div className="bg-blue-600 px-4 py-3 text-white @sm:flex @sm:items-center @sm:justify-between @sm:px-6 @lg:px-8 w-full">
      <p className="text-center font-medium @sm:text-left">
        Enjoying FrameStackUI?
        <br className="@sm:hidden" />
        Consider giving us a star on GitHub!
      </p>

      <a
        className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
        href="https://github.com/chris-melvin/FrameStackUI"
      >
        Give a Star
      </a>
    </div>
  );
};

export const BannerWithCTACode = `
    <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p className="text-center font-medium sm:text-left">
        Enjoying FrameStackUI?
        <br className="sm:hidden" />
        Consider giving us a star on GitHub!
      </p>

      <a
        className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
        href="https://github.com/chris-melvin/FrameStackUI"
      >
        Give a Star
      </a>
    </div>
`;
