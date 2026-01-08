'use client';

import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cartContext';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { cartCount } = useCart();

  return (
    <header className="bg-[#0c5da5] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-3xl font-bold">
            Logo
          </Link>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>

          <Link
            href="/cart"
            className="flex items-center gap-2 bg-[#003d7a] px-6 py-2 rounded-lg hover:bg-[#002d5a] transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
