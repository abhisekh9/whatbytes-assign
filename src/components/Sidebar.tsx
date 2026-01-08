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
  const [localPrice, setLocalPrice] = useState(priceRange[1]);

  const handlePriceChange = (value: number) => {
    setLocalPrice(value);
    onPriceChange([0, value]);
  };

  return (
    <aside className="bg-[#0c5da5] text-white rounded-lg p-6 h-fit">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="w-5 h-5 text-blue-600 border-white/30 focus:ring-2 focus:ring-white/50"
              />
              <span className="ml-3 group-hover:text-white/80">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={localPrice}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
