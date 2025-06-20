import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiTenis from "./ContainerCardsTenis";

const ListProducts = () => {
  const [produtos, setListProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/produtos")
      .then((response) => {
        setListProducts(response.data.slice(0, 15));
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div className="max-w-72xl mx-auto">
      {/* Cabeçalho e ordenação */}

      <ApiTenis produtos={produtos} />
    </div>
  );
};

export default ListProducts;