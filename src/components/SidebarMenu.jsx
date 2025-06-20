import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarMenu = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const baseClasses = "block border-b border-gray-200 pb-2 text-gray-600 hover:text-[#C92071] cursor-pointer font-medium";
    const activeClasses = "text-[#C92071] font-bold";

    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses}`;
    }
    return baseClasses;
  };

  return (
    <div className="hidden md:block bg-white rounded-lg shadow-sm p-6 md:w-1/4 h-fit">
      <ul className="space-y-4">
        <li className="border-b border-gray-200 pb-2 font-bold text-gray-700">
          Meu Perfil
        </li>
        <li>
          <Link to="/my-orders" className={getLinkClassName('/my-orders')}>
            Meus Pedidos
          </Link>
        </li>
        <li>
          <Link to="/my-information" className={getLinkClassName('/my-information')}>
            Minhas Informações
          </Link>
        </li>
        <li>
          <Link to="#" className={getLinkClassName('/metodos-de-pagamento').replace('border-b border-gray-200 pb-2', '')}>
            Métodos de Pagamento
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;