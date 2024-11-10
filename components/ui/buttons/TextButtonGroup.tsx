export const TextButtonGroup = () => {
  return (
    <div className="flex  border border-gray-300 rounded-lg overflow-hidden">
      <button className=" text-sm font-medium focus:relative px-4 py-2 hover:bg-gray-100   ">
        Follow
      </button>
      <button className=" px-4 py-2 text-sm font-medium  focus:relative hover:bg-gray-100">
        Message
      </button>
      <button className=" px-4 py-2 text-sm font-medium  focus:relative hover:bg-gray-100">
        Share
      </button>
    </div>
  );
};

export const TextButtonGroupCode = `
    <div className="flex  border border-gray-300 rounded-lg overflow-hidden">
      <button className=" text-sm font-medium focus:relative px-4 py-2 hover:bg-gray-100   ">
        Follow
      </button>
      <button className=" px-4 py-2 text-sm font-medium  focus:relative hover:bg-gray-100">
        Message
      </button>
      <button className=" px-4 py-2 text-sm font-medium  focus:relative hover:bg-gray-100">
        Share
      </button>
    </div>
`;
