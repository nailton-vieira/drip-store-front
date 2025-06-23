import { Link } from "react-router-dom";
import TenisFinalizarCompras from "../assets/tenis-finalizar-compras.png";

export default function OrderSummary() {
  return (
    <div className="mb-10 w-full bg-white md:w-[400px] md:relative md:top-[-30px] xl:w-[450px] xl:relative xl:top-[-35px] mt-8 p-6 rounded-lg shadow">
      <h2 className="font-semibold text-gray-800 text-lg mb-4">RESUMO</h2>

      <div className="flex space-x-4 items-center">
        <img
          src={TenisFinalizarCompras}
          alt="Tenis Nike Revolution 6"
          className="object-cover rounded"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h3>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>R$ 219,00</span>
        </div>
        <div className="flex justify-between">
          <span>Frete:</span>
          <span>R$ 0,00</span>
        </div>
        <div className="flex justify-between">
          <span>Desconto:</span>
          <span>R$ 30,00</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <div>
          <p className="font-semibold text-gray-800 text-lg">Total</p>
          <p className="text-sm text-gray-600">ou 10x de R$ 21,00 sem juros</p>
        </div>
        <Link
          to="/recibo"
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded cursor-pointer text-center"
        >
          Realizar Pagamento
        </Link>
      </div>
    </div>
  );
}