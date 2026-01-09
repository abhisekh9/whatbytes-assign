'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { useCart } from '@/context/cartContext';
import { Star } from 'lucide-react';

export default function ProductDetail() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-9xl">{getProductEmoji(product.title)}</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{product.title}</h1>

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-gray-600">({product.rating?.toFixed(1)})</span>
              </div>

              <p className="text-4xl font-bold text-gray-900">${product.price}</p>

              <div>
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Category</h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  {product.category}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#0c5da5] text-white py-4 px-8 rounded-lg hover:bg-[#0a4d8a] transition-colors font-semibold text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function getProductEmoji(title: string): string {
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
