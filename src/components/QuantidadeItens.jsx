import React, { useState } from "react";

function QuantityButton({ initialQuantity = 1, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(newQuantity);
      }
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white border border-gray-300 shadow-sm">
      <button
        onClick={handleDecrement}
        className="px-4 py-2 text-gray-700 rounded-l-lg hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity <= 1}
        aria-label="Diminuir quantidade"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>

      <span className="px-5 py-2 text-lg font-semibold text-gray-800 border-l border-r border-gray-300">
        {quantity}
      </span>

      <button
        onClick={handleIncrement}
        className="px-4 py-2 text-gray-700 rounded-r-lg hover:bg-gray-100"
        aria-label="Aumentar quantidade"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}

// Componente principal exportado
export default function QuantidadeItens({ quantity, setQuantity }) {
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <QuantityButton
      initialQuantity={quantity}
      onQuantityChange={handleQuantityChange}
    />
  );
}