import { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ListProducts from "../components/ListProducts";
import RelatedProducts from "../components/RelatedProducts"
import SidebarFilters from "../components/SidebarFilters";

export default function ProductList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para abrir/fechar o filtro lateral no mobile

  return (
    <LayoutWrapper>
      <div className="bg-[#F9F8FE] pt-[180px] mx-auto px-4 py-6 pb-30">
        <div className="flex flex-col-reverse w-full md:flex-row justify-between md:items-center mb-6 gap-8">
          <h2 className="font-bold">
            Resultados para “Tênis” -{" "}
            <span className="font-extralight">389 produtos</span>
          </h2>

          <div className="flex justify-between gap-7">
            <div className="border-2 p-2 rounded border-[#000000]">
              <label className="font-bold">Ordenar por:</label>
              <select className="bg-[#F9F8FE] font-extralight px-2 py-1 cursor-pointer">
                <option>Mais relevantes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
              </select>
            </div>

            {/* Botão rosa (filtro mobile) */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-4 rounded bg-pink-600 text-white md:hidden inline-flex cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 14.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-2.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar recebendo props para abrir/fechar no mobile */}
          <SidebarFilters
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Lista de produtos */}
          <div className="w-full md:w-3/4">
            <ListProducts />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}