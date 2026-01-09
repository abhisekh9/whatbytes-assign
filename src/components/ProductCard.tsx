'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/cartContext';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  variant?: 'normal' | 'featured';
}

export default function ProductCard({
  product,
  variant = 'normal',
}: ProductCardProps) {
  const { addToCart } = useCart();

  /* =======================
     ⭐ FEATURED (LAST CARD)
     ======================= */
  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
        <div className="relative aspect-square bg-gray-100 rounded-lg mb-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>

        <p className="text-xl font-semibold mb-2">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating ?? 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Category: <span className="font-medium">{product.category}</span>
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-[#0c5da5] text-white py-3 rounded-lg hover:bg-[#0a4d8a] transition font-semibold"
        >
          Add to Cart
        </button>
      </div>
    );
  }

  /* =======================
     🟦 NORMAL PRODUCT CARD
     ======================= */
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
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
