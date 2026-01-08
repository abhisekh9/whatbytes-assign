import { Product, FilterState } from '@/types';

export const filterProducts = (
  products: Product[],
  filters: FilterState
): Product[] => {
  return products.filter((product) => {
    // Category filter
    const categoryMatch =
      filters.category === 'All' || product.category === filters.category;

    // Price range filter
    const priceMatch =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    // Search query filter
    const searchMatch =
      filters.searchQuery === '' ||
      product.title.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return categoryMatch && priceMatch && searchMatch;
  });
};

export const getCategories = (products: Product[]): string[] => {
  const categories = products.map((product) => product.category);
  return ['All', ...Array.from(new Set(categories))];
};
