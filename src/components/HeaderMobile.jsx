import { useState } from "react";
import logoHeader from "../assets/logo-header.svg";
import MenuNav from "./Nav";
import Cart from "./MyCart";
import Glass from "./Glass";
import { Link } from "react-router-dom";


export default function HeaderMobile() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGlassOpen, setIsGlassOpen] = useState(false);

  function handleOpenOrCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOpenOrCloseCart() {
    setIsCartOpen(!isCartOpen);
  }

  function handleOpenOrGlassCart() {
    setIsGlassOpen(!isGlassOpen);
  }

return(

<header className="fixed top-0 left-0 w-full z-50 drop-shadow-md p-6 md:h-[160px] bg-white">
      <div className="flex items-center">
        {/* Botão do menu */}
        <div className="absolute z-50">
          <button
            id="menu-button"
            onClick={handleOpenOrCloseMenu}
            className=" md:hidden cursor-pointer"
          >
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
          </button>
          {isMenuOpen && <MenuNav />}
        </div>

        <nav
          id="menu"
          className="hidden md:flex md:flex-row md:mt-30 md:top-[px] md:left-[60px] absolute top-0  mt-12 mr-4 "
        >
          <ul className="flex flex-col items-start gap-10 md:flex-row">
            <li>
              <Link
                to="/home"
                className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]"
              >
                Home
              </Link>
             </li>  
            <li>
              <Link
                to="/product-list"
                className="text-[#474747] hover:border-b-2 hover:border-[#C92071] hover:text-[#C92071]"
              >
                Produtos
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]"
              >
                Categorias
              </a>
            </li>
            <li>
              <Link
                to="/my-orders"
                className="hover:border-b-2 hover:border-[#C92071] text-[#474747] hover:text-[#C92071]"
              >
                Meus Pedidos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Área central com logo  */}
        <div className="flex items-center justify-center flex-1 space-x-4 ">
          {/* Logo */}
          <Link to="/">
  <img
    src={logoHeader}
    alt="Logo"
    className="cursor-pointer md:absolute md:top-[42px] md:left-[60px] md:h-[44px] md:w-[253px]"
  />
</Link>

          {/* Área de busca e ações */}
          <div className="absolute right-5 flex items-center space-x-4 md:top-[42px] md:left-[350px] xl:left-[450px] ">
            {/* Campo de busca */}
            <div className="p-4 flex gap-4 w-full xl:w-[550px] md:h-[50px] md:bg-gray-50 md:rounded-[5px] ">
              <input
                className="text-[1.2rem] focus:outline-none hidden md:block w-full"
                type="text"
                name="pesquisar"
                id="pesquisar"
                placeholder="Pesquisar produtos..."
              />
              {/* Ícone de busca */}

              <label htmlFor="name">
                <i
                  onClick={handleOpenOrGlassCart}
                  className="fas fa-magnifying-glass hidden md:flex md:ml-15 opacity-50 hover:text-[#C92071] cursor-pointer"
                ></i>
                {isGlassOpen && <Glass />}
              </label>
            </div>
            {/* Links de cadastro */}
            <Link
              to="/create"
              className="hidden text-[#474747] hover:border-b-2 hover:border-[#C92071] hover:text-[#C92071] md:block "
            >
              Cadastre-se
            </Link>
            {/* Botão de login */}
            <Link to="/login">
              <button className="hidden h-[40px] w-[114px] cursor-pointer rounded-[5px] bg-[#C92071] text-white md:block">
                Entrar
              </button>
            </Link>
            {/* Ícone de carrinho */}
            <div>
              <Link to="#">
              <i className="fas fa-cart-shopping cursor-pointer text-[#C92071]"  onClick={handleOpenOrCloseCart}></i>
                          {isCartOpen && <Cart />}

            </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );


}