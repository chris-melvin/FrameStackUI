"use client";

// Minimal Product Card
export const MinimalProductCard = () => {
  return (
    <div className="group relative w-64 overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="aspect-square w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Product Image</div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">Category</p>
        <h3 className="mt-1 text-lg font-medium">Product Name</h3>
        <p className="mt-2 text-xl font-bold">$99.99</p>
      </div>
      <div className="absolute inset-x-0 -bottom-20  p-4 text-white transition-all group-hover:bottom-0">
        <button className="w-full rounded  py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
