import React, { useEffect, useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ResumoPedido from "../components/ResumoPedido";
import CupomFrete from "../components/CupomFrete";
import RelatedProducts from "../components/RelatedProducts";
import axios from "axios";
import CartItem from "../components/CartItem";

export default function PageCart() {
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [frete, setFrete] = useState(0);
  const [desconto, setDesconto] = useState(0);

  const [cartPage, setCartPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const product = {
    name: "Tênis Nike Revolution 6",
    subtitle: "Next Nature Masculino",
    color: "Vermelho / Branco",
    size: 42,
    price: 219,
    originalPrice: 299,
    image: "https://via.placeholder.com/80",
  };

  useEffect(() => {
    axios
      .get("http://localhost:5173/page-cart")
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data.slice(0, 4)
          : [];
        setCartPage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar dados do carrinho:", error);
        setError("Falha ao carregar produtos do carrinho");
        setLoading(false);
      });
  }, []);

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleRemove = () => setQuantity(0);

  const handleApplyCoupon = () => {
    if (coupon === "DESCONTO10") {
      setDesconto(20);
    }
  };

  const handleCalculateFrete = () => {
    if (zipCode) {
      setFrete(15);
    }
  };
  <h2 className="text-lg sm:text-xl font-bold mb-4">Meu Carrinho</h2>;
  return (
    <LayoutWrapper>
      <main className="bg-[#F5F5F5] pt-45 pb-10 ">
        <div className="container mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 min-h-[300px]">
              {/* Títulos das colunas */}
              <div className="hidden sm:flex items-center text-gray-600 text-xs uppercase border-b border-gray-200 pb-2 mb-4 px-1">
                <div className="flex-1">Produto</div>
                <div className="w-24 text-center">Quantidade</div>
                <div className="w-24 text-center">Unitário</div>
                <div className="w-24 text-center">Total</div>
              </div>

              <div class="hidden sm:flex text-center text-gray-600 text-xs uppercase gap-4"></div>
              {quantity > 0 ? (
                <>
                  <CartItem
                    product={product}
                    quantity={quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                  />
                  <CupomFrete
                    coupon={coupon}
                    setCoupon={setCoupon}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    onApplyCoupon={handleApplyCoupon}
                    onCalculateFrete={handleCalculateFrete}
                  />
                </>
              ) : (
                <p className="text-sm text-gray-500">Carrinho vazio.</p>
              )}
            </div>
            <ResumoPedido
              subtotal={product.price * quantity}
              frete={frete}
              desconto={desconto}
            />
          </div>
        </div>
        <RelatedProducts />
      </main>
    </LayoutWrapper>
  );
}