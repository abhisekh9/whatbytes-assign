'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/cartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
        {getProductEmoji(item.title)}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="w-5 h-5" />
      </button>
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
