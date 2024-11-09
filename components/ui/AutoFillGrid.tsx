export const AutoFillGrid = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bg-gray-200 h-[200px]"></div>
      ))}
    </div>
  );
};

export const AutoFillGridCode = `
{/* You can add this repeat(auto-fit,minmax(200px,1fr)) to your tailwind.config.js */}
{/* change the 200px to whatever width you want the columns to be */}

<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 w-full">
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
  <div className="bg-gray-200 h-[200px]"></div>
</div>
`;
