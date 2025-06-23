export default function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-2 mb-4 px-1">
      <div className="bg-[#B5B6F2] w-25 h-21 rounded p-4 flex items-center justify-center">
        <img
          src="./src/assets/d52bcba86d839d9bc81eba71990cf69a20c77364 (1).png"
          alt={product.name}
          className="w-50 h-33 object-contain"
        />
      </div>
      <div className="flex-1">
        <p className="font-medium text-sm">{product.name}</p>
        <p className="font-medium text-sm">{product.subtitle}</p>
        <p className="text-xs text-gray-500">Cor: {product.color}</p>
        <p className="text-xs text-gray-500">Tamanho: {product.size}</p>
      </div>
      <div className="w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-center items-center gap-4 mt-2 sm:mt-0">
          {/* Quantidade */}
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <div className="flex items-center mb-1">
              <button
                onClick={onDecrease}
                className="px-2 py-1 bg-gray-200 text-xs cursor-pointer"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-8 text-center mx-1 text-xs"
              />
              <button
                onClick={onIncrease}
                className="px-2 py-1 bg-gray-200 text-xs cursor-pointer"
              >
                +
              </button>
            </div>
            <a
              href="#"
              onClick={onRemove}
              className="text-xs text-blue-500 mt-1 hover:underline"
            >
              Remover
            </a>
          </div>

          {/* Unitário */}
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <span className="text-xs line-through text-gray-400">
              R$ {product.originalPrice}
            </span>
            <span className="text-sm text-[#C92071] font-medium">
              R$ {product.price}
            </span>
          </div>

          {/* Total */}
          <div className="flex flex-col items-center w-full sm:w-20 gap-1">
            <p class="text-xs uppercase text-gray-600 sm:hidden">TOTAL</p>
            <span className="text-xs line-through text-gray-400">
              R$ {product.originalPrice * quantity}
            </span>
            <span className="text-sm font-medium text-[#C92071]">
              R$ {product.price * quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}