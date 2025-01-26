export const ExpandedProductCardCode = `
const ExpandedProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative">
        <img
          src="/api/placeholder/400/300"
          alt="Product"
          className="h-48 w-full object-cover"
        />
        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Premium Product</h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
            New
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold">$149.99</p>
          <p className="text-sm text-gray-500">4.8 ★★★★★</p>
        </div>
        <div className="mt-4">
          <button 
            className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-left"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>Product Details</span>
            <ChevronDown className={\`h-5 w-5 transition-transform \${isExpanded ? 'rotate-180' : ''}\`} />
          </button>
          <div className={\`mt-2 overflow-hidden transition-all \${isExpanded ? 'max-h-40' : 'max-h-0'}\`}>
            <p className="text-sm text-gray-600">
              This premium product features high-quality materials and expert craftsmanship.
              Perfect for those who appreciate fine details and superior performance.
            </p>
          </div>
        </div>
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
`;

export const InteractiveProductCardCode = `
const InteractiveProductCard = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const colors = ['blue', 'red', 'green', 'purple'];
  const colorMap = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className="w-72 rounded-3xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
      <div className="relative mb-4 aspect-square rounded-2xl bg-gray-100 p-4">
        <img
          src="/api/placeholder/300/300"
          alt="Product"
          className="h-full w-full object-contain"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
          Best Seller
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Modern Product</h3>
          <p className="text-lg font-bold">$199.99</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Available in multiple colors
        </p>
        <div className="mt-4">
          <p className="text-sm font-medium">Color</p>
          <div className="mt-2 flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className={\`h-6 w-6 rounded-full \${colorMap[color]} \${
                  selectedColor === color ? 'ring-2 ring-offset-2' : ''
                }\`}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <button className="mt-6 w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
`;

// Code strings for display
export const MinimalProductCardCode = `
const MinimalProductCard = () => {
  return (
    <div className="group relative w-64 overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="aspect-square w-full bg-gray-100">
        <img
          src="/api/placeholder/400/400"
          alt="Product"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">Category</p>
        <h3 className="mt-1 text-lg font-medium">Product Name</h3>
        <p className="mt-2 text-xl font-bold">$99.99</p>
      </div>
      <div className="absolute inset-x-0 -bottom-20 bg-black p-4 text-white transition-all group-hover:bottom-0">
        <button className="w-full rounded bg-white py-2 text-sm font-medium text-black hover:bg-gray-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
`;
