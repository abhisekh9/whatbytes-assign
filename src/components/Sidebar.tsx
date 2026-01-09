'use client';

import { useState } from 'react';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export default function Sidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: SidebarProps) {
  const [sliderPrice, setSliderPrice] = useState(priceRange[1]);
  const [inputPrice, setInputPrice] = useState(priceRange[1]);

  const handleSliderChange = (value: number) => {
    setSliderPrice(value);
    onPriceChange([0, value]);
  };

  const handleInputChange = (value: number) => {
    setInputPrice(value);
    onPriceChange([0, value]);
  };

  return (
    <aside className="space-y-6 w-full">
      
      {/* 🔵 PRIMARY FILTER (BLUE CARD) */}
      <div className="bg-[#0c5da5] text-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Category */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-4">Category</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="primary-category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="w-4 h-4 accent-white"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div>
          <h3 className="text-base font-semibold mb-4">Price</h3>
          <input
            type="range"
            min={priceRange[0]}
            max={priceRange[1]}
            value={sliderPrice}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none bg-white/30 accent-white cursor-pointer"
          />
          <div className="flex justify-between text-sm mt-3">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* ⚪ SECONDARY FILTER (WHITE CARD) */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-6 text-gray-900">
          Caryroy
        </h2>

        {/* Category */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 text-gray-700">
            Category
          </h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer text-gray-700"
              >
                <input
                  type="radio"
                  name="secondary-category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Input */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-700">
            Price
          </h3>
          <input
            type="number"
            value={inputPrice}
            onChange={(e) => handleInputChange(Number(e.target.value))}
            className="
              w-[85%]
              h-10
              px-3
              rounded-md
              border
              border-gray-300
              text-sm
              text-gray-800
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          />

        </div>
      </div>
    </aside>
  );
}
