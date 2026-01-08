'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/cartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-gray-200 flex items-center justify-center">
          <span className="text-6xl">{getProductEmoji(product.category, product.title)}</span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <p className="text-xl font-bold text-gray-900 mb-3">
          ${product.price}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#0c5da5] text-white py-2 px-4 rounded-lg hover:bg-[#0a4d8a] transition-colors font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function getProductEmoji(category: string, title: string): string {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('shoe')) return '👟';
  if (lowerTitle.includes('headphone')) return '🎧';
  if (lowerTitle.includes('backpack')) return '🎒';
  if (lowerTitle.includes('watch')) return '⌚';
  if (lowerTitle.includes('sunglasses')) return '🕶️';
  if (lowerTitle.includes('camera')) return '📷';
  if (lowerTitle.includes('shirt')) return '👕';
  if (lowerTitle.includes('phone')) return '📱';
  
  return '📦';
}
