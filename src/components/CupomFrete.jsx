import React from "react";

export default function CupomFrete({
  coupon,
  setCoupon,
  zipCode,
  setZipCode,
  onApplyCoupon,
  onCalculateFrete,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <div className="flex-1">
        <h3 className="text-xs font-semibold mb-1">Cupom de Desconto</h3>
        <div className="flex items-center gap-1">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Insira seu código"
            className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm"
          />
          <button
            onClick={onApplyCoupon}
            className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200 cursor-pointer"
          >
            OK
          </button>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xs font-semibold mb-1">Calcular Frete</h3>
        <div className="flex items-center gap-1">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Insira seu CEP"
            className="flex-1 h-12 py-3 px-3 rounded-lg bg-gray-100 text-gray-500 text-sm"
          />
          <button
            onClick={onCalculateFrete}
            className="w-12 h-12 py-3 rounded-lg text-sm font-bold bg-gray-100 text-[#C92071] hover:bg-gray-200 cursor-pointer"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}