import React, { useState } from "react";
import sneakerImg from "../assets/White-Sneakers-PNG-Clipart.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const colorsBg = ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"];
const sneakersByColor = [
  sneakerImg,
  sneakerImg,
  sneakerImg,
  sneakerImg,
  sneakerImg,
];

export default function ProductImages() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => setSelectedIndex(index);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? colorsBg.length - 1 : prev - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev === colorsBg.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center p-8 pt-2 px-10 h-fit drop-shadow-md">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-[-2rem] z-10 text-gray-600 hover:text-black cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>

        <div
          className="p-4 rounded-lg max-w-md w-fit"
          style={{ backgroundColor: colorsBg[selectedIndex] }}
        >
          <img
            src={sneakersByColor[selectedIndex]}
            alt="Tênis Nike Revolution 6"
            className="h-auto w-full object-contain p-8"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-2rem] z-10 text-gray-600 hover:text-black cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      
      <div className="flex gap-2 mt-4 flex-nowrap justify-center drop-shadow-md">
        {colorsBg.map((bgColor, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`box-border size-24 border-2 ${
              index === selectedIndex
                ? "border-[#C92071]"
                : "border-transparent"
            } p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
            style={{ backgroundColor: bgColor }}
          >
            <img
              className="cursor-pointer"
              src={sneakersByColor[index]}
              alt={`Miniatura ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}