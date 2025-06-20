import TenisCarrinho from "../assets/tenis-finalizar-compras.png"
import { Link } from 'react-router-dom';

export default function MyCart() { 
  return (
    <div className="z-50" >
      <div className="absolute bg-white w-[315.43px] h-[454px] top-[50px] left-[-280px] p-[30px] gap-[20px] md:left-[500px] shadow-lg rounded-md">
        <h2 className="text-xl font-semibold mb-2">Meu Carrinho</h2>
        <div className="border-t border-gray-300 mb-4"></div>
        
        <div className="flex space-x-4 mb-4">
          <img src={TenisCarrinho} alt="Tênis Nike" className=" h-10 object-cover" />
          <div>
            <p className="font-semibold text-sm">Tênis Nike Revolution<br/>6 Next Nature Masculino</p>
            <p className="font-bold">R$ 219,00</p>
          </div>
        </div>
        <div className="flex space-x-4 mb-4">
          <img src={TenisCarrinho} alt="Tênis Nike" className=" h-10 object-cover" />
          <div>
            <p className="font-semibold text-sm">Tênis Nike Revolution<br/>6 Next Nature Masculino</p>
            <p className=" font-bold">R$ 219,00</p>
          </div>
        </div>

        <div className="border-t border-gray-300 mb-4"></div>
        <div className="flex justify-between font-semibold mb-4">
          <span className="text-gray-700">Valor total:</span>
          <span className="text-[#C92071]">R$ 219,00</span>
        </div>
        
        {/* Botões */}
        <div className="flex flex-row justify-center items-center gap-7">
          <a href="#" className=" hover:border-[#C92071] text-[#474747] hover:text-[#C92071]  cursor-pointer underline ">
            Esvaziar
          </a>
          
          <Link
            to="/cart" // Corrigido de "/page-cart" para "/cart"
            className="block w-[150px] h-[40px] leading-[40px] text-center bg-[#C92071] text-white rounded-[5px] font-semibold hover:bg-pink-700 cursor-pointer"
          >
            Ver Carrinho
          </Link>
        </div>
      </div>
    </div>
  );
}