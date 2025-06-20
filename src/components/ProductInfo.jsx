import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];

  return (
    <div className="flex-1 h-auto py-5 px-5">
      <h1 className="text-2xl font-bold mb-2">
        Tênis Nike Revolution 6 Next Nature Masculino
      </h1>

      <p className="text-sm text-gray-600 mb-3">Casual | Nike | REF:38416711</p>

      <div className="flex items-center mb-3">
        <div className="text-yellow-400">★★★★☆</div>
        <span className="ml-1 text-sm text-gray-500">(90 avaliações)</span>
      </div>

      <div className="flex flex-row gap-3 items-baseline">
        <span id="preço-atual" className="text-xl font-bold text-gray-800">
          R$ 219,00
        </span>
        <span
          id="preço-antigo"
          className="text-[#CCCCCC] line-through h-[2.5rem] pt-1"
        >
          219,00
        </span>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2 text-[#8F8F8F]">
          Descrição do produto
        </h2>
        <p className="text-sm text-[#474747]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Tamanho</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`cursor-pointer w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray hover:bg-[#C92071] hover:text-white focus:outline-none focus:ring-1 focus:ring-black ${
                selectedSize === size ? "bg-[#C92071] text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-black font-medium mb-2">Cores</h3>
        <div className="font-medium mb-2 space-x-1">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 border-4 rounded-full cursor-pointer focus:outline-none focus:ring-1 hover:ring-gray-600 focus:ring-offset-2 ${
                selectedColor === color ? "ring-1 bg-[#C92071]" : ""
              }`}
              style={{ backgroundColor: color, borderColor: color }}
            />
          ))}
        </div>
      </div>

      <Link
        to="/confirmation"
        className="block w-full md:w-[30%] py-3 bg-[#FFB31F] text-white text-center font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 mt-8 mb-5 cursor-pointer"
      >
        COMPRAR
      </Link>
    </div>
  );
}