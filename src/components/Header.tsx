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
    <header className="bg-[#0c5da5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-white no-underline whitespace-nowrap"
          >
            Logo  
          </Link>

          {/* Search */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[620px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-200" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-10 rounded-xl bg-white/10 border border-white/20 pl-11 pr-4 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 bg-blue-900/80 hover:bg-blue-900/60 px-4 py-2 rounded-xl text-sm text-white transition"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </header>
  );
}
