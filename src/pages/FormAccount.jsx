import { Link } from "react-router-dom"; 
import LogoHeader from "../assets/logo-header.svg";

export default function FormAccount() {
  return (
    <div className="bg-linear-to-bl from-[#b5b6f2] to-[#efefff]">
      <header className="bg-white p-5 xl:p-6 shadow-md mb-10">
        <div className="container mx-auto flex items-center justify-start">
          <Link to="/">
            <img
              src={LogoHeader}
              alt="Digital Store Logo"
              className="w-50 cursor-pointer xl:w-[253px] xl:h-[44px]"
            />
          </Link>
        </div>
      </header>
      <div className="flex justify-center items-cente m-5 xl:ml-[-825px]">
        <h2 className=" font-bold text-3xl  ">Criar Conta</h2>
      </div>
      <form className="flex justify-center items-cente  ">
        <div className="space-y-2">
          <div className="bg-white w-[350px] h-[538px] space-y-6 md:w-[700px] xl:w-[1000px]">
            <div className="pt-5">
              <p className="ml-6">Informações Pessoais</p>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>

            <p className="ml-6">Nome Completo </p>
            <div className="flex flex-col items-center ">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu nome"
                className=" border-2 border-gray-50 focus:border-[#C92071]
                 outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">CPF </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu CPF"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">E-mail </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu email"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Celular</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu celular"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>
          </div>

          <div className="bg-white w-[350px] h-[680px] space-y-6 md:w-[700px] xl:w-[1000px]">
            <div className="pt-5">
              <p className="ml-6">Informações de Entrega</p>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>

            <p className="ml-6">Endereço </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu endereço"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Bairro</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu bairro"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Cidade </p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira sua cidade"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">CEP</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu cep"
                className="border-2 border-gray-50 focus:border-[#C92071] 
               outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>

            <p className="ml-6">Complemento</p>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Insira complemento"
                className="border-2 border-gray-50 focus:border-[#C92071]
                 outline-none w-[300px] bg-gray-50 p-2 rounded-[4px] md:w-[650px]  xl:w-[950px]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-[60px] ">
        <div className="w-[350px] h-[48px] gap-[30px] md:w-[700px]  xl:w-[1000px]">
          <label>
            <input type="checkbox" className="cursor-pointer" />
            <span>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </span>
          </label>
        </div>
        <div className="mb-[30px]">
          <Link
            to="/"
            className="flex items-center justify-center text-white bg-[#C92071] cursor-pointer w-[350px] h-[48px] rounded-lg md:w-[700px] xl:w-[950px] hover:bg-pink-700"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
}