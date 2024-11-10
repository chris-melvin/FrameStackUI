export const ResponsiveButtonGroupFull = () => {
  return (
    <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden">
      <button className="flex-1 text-sm font-medium focus:relative px-4 py-2 hover:bg-gray-100">
        Follow
      </button>
      <button className="flex-1 px-4 py-2 text-sm font-medium focus:relative hover:bg-gray-100">
        Message
      </button>
      <button className="flex-1 px-4 py-2 text-sm font-medium focus:relative hover:bg-gray-100">
        Share
      </button>
    </div>
  );
};

export const ResponsiveButtonGroupFullCode = `
    <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden">
      <button className="flex-1 text-sm font-medium focus:relative px-4 py-2 hover:bg-gray-100">
        Follow
      </button>
      <button className="flex-1 px-4 py-2 text-sm font-medium focus:relative hover:bg-gray-100">
        Message
      </button>
      <button className="flex-1 px-4 py-2 text-sm font-medium focus:relative hover:bg-gray-100">
        Share
      </button>
    </div>
`;
