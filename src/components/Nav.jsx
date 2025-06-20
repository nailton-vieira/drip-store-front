import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-row shadow-lg fixed inset-0 z-index md:hidden top-[5.7rem]  w-full h-[702px]">
      
      <div className="bg-white p-4 z-50 w-3/4 h-full flex flex-col">
        
        <div>
          <p className="font-semibold text-gray-500 mb-2">Páginas</p>
          <div className="py-2">
            <Link to="/" className="text-[#474747] hover:text-[#C92071] cursor-pointer">
              Home
            </Link>
          </div>
          <div className="py-2">
            <Link to="/product-list" className="text-[#474747] hover:text-[#C92071] cursor-pointer">
              Produtos
            </Link>
          </div>
          <div className="py-2">
            <Link to="/categorias" className="text-[#474747] hover:text-[#C92071] cursor-pointer">
              Categorias
            </Link>
          </div>
          <div className="py-2">
            <Link to="/my-orders" className="text-[#474747] hover:text-[#C92071] cursor-pointer">
              Meus Pedidos
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[20rem] justify-center items-center">
          <Link
            to="/login"
            className="flex items-center justify-center w-full h-[40px] rounded-[5px] bg-[#C92071] text-white cursor-pointer hover:bg-pink-700"
          >
            Entrar
          </Link>
          <Link
            to="/create"
            className="text-[#474747] hover:text-[#C92071] cursor-pointer underline"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      
    </div>
  );
}