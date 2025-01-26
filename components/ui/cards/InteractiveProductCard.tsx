"use client";

import { useState } from "react";

// Interactive Product Card
export const InteractiveProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const colorMap = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };

  const colors: Array<keyof typeof colorMap> = [
    "blue",
    "red",
    "green",
    "purple",
  ];

  return (
    <div className="w-72 rounded-3xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
      <div className="relative mb-4 aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-4 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Product Image</div>
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
                className={`h-6 w-6 rounded-full ${colorMap[color]} ${
                  selectedColor === color ? "ring-2 ring-offset-2" : ""
                }`}
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
