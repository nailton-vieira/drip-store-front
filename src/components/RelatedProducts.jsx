import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import ApiTenis from "../components/ContainerCardsTenis";

const RelatedProducts = () => {
  const [produtos, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setRelatedProducts(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div className="md:block hidden mt-6 px-6 pb-10 space-x-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#474747]">
          Produtos Relacionados
        </h2>
        
        {/* 2. O link <a> foi substituído pelo componente <Link> */}
        <Link to="/product-list" className="text-[#C92071] hover:underline">
          Ver todos →
        </Link>
      </div>

      <ApiTenis produtos={produtos} />
    </div>
  );
};

export default RelatedProducts;