import React from "react";
import { Link } from "react-router-dom"; 

export default function ResumoPedido({ subtotal, frete, desconto }) {
  const total = subtotal + frete - desconto;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-80 min-h-[250px]">
      <h3 className="text-lg font-bold mb-3">Resumo</h3>
      <div className="flex justify-between mb-2 text-sm">
        <span>Subtotal</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span>Frete</span>
        <span>R$ {frete.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span>Desconto</span>
        <span>R$ {desconto.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-base border-t pt-2 mb-3">
        <span>Total</span>
        <span className="text-[#C92071]">R$ {total.toFixed(2)}</span>
      </div>
      <p className="mt-2 text-xs text-gray-500 text-right">
        ou 10x de R$ {(total / 10).toFixed(2)} sem juros
      </p>

      <Link
        to="/confirmation"
        className="block bg-[#F6AA1C] text-white text-center px-4 py-2 mt-8 rounded-md hover:bg-gray-800 focus:outline-none w-full text-sm cursor-pointer"
      >
        Continuar
      </Link>
    </div>
  );
}