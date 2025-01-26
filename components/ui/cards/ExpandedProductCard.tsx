"use client";

import { ChevronDown, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

// Expanded Product Card
export const ExpandedProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Product Image</div>
        </div>
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
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`mt-2 overflow-hidden transition-all ${
              isExpanded ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-sm text-gray-600">
              This premium product features high-quality materials and expert
              craftsmanship. Perfect for those who appreciate fine details and
              superior performance.
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
