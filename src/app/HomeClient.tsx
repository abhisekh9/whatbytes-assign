'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { filterProducts, getCategories } from '@/utils/filter';
import { FilterState } from '@/types';

export default function Home() {
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get('category') || 'All',
    priceRange: [0, Number(searchParams.get('price')) || 1000],
    searchQuery: searchParams.get('search') || '',
  });

  const categories = getCategories(products);
  const filteredProducts = filterProducts(products, filters);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category !== 'All') params.set('category', filters.category);
    if (filters.priceRange[1] !== 1000) params.set('price', filters.priceRange[1].toString());
    if (filters.searchQuery) params.set('search', filters.searchQuery);
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/';
    window.history.replaceState({}, '', newUrl);
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={(query) => setFilters({ ...filters, searchQuery: query })}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Sidebar
              categories={categories}
              selectedCategory={filters.category}
              onCategoryChange={(category) => setFilters({ ...filters, category })}
              priceRange={filters.priceRange}
              onPriceChange={(range) => setFilters({ ...filters, priceRange: range })}
            />
          </div>

          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
