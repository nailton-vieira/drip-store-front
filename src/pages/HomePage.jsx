import { Link } from "react-router-dom"; 
import React, { useEffect, useState } from "react";
import axios from "axios";

import LayoutWrapper from "../components/LayoutWrapper"
import Carrossel from "../components/Carrossel";
import ApiTenis from "../components/ContainerCardsTenis";

import FundoTenis from "../assets/fundoDesign.png";
import FundoCamisa from "../assets/fundoDesignCamisa.png";
import FundoFone from "../assets/fundoDesignFone.png";
import Camisa1 from "../assets/camisa1.svg";
import Camisa2 from "../assets/camisa2.svg";
import Calca1 from "../assets/calca1.svg";
import Calca2 from "../assets/calca2.svg";
import Calca3 from "../assets/calca3.svg";
import Calca4 from "../assets/calca4.svg";
import Fone1 from "../assets/fone1.svg";
import Fone2 from "../assets/fone2.svg";
import Tenis1 from "../assets/tenis1.svg";
import Tenis2 from "../assets/tenis2.svg";
import TenisProdutos from "../assets/tenisProdutos.png";
import TenisJordan from "../assets/laye.png";

export default function HomePage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data.slice(0, 8));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <LayoutWrapper>
        <Carrossel />
        <div
          className="  pt-[160px] flex flex-col-reverse justify-center items-center 
     bg-gray-100 gap-4 md:flex md:flex-row md:w-[1440] md:h-[1440] "
        ></div>

        <div className=" bg-[#f9f9ff] text-[#474747] flex justify-center items-center font-sans">
          <div className="px-4 p-[15rem] sm:px-8  w-full">
            <h2 className="text-base font-bold mb-6 text-[#474747]">
              Coleções em Destaque
            </h2>
            <div className=" flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-row lg:flex-nowrap  justify-center">
              <div className=" relative w-full sm:w-[20rem] md:w-[25.3125rem]">
                <img
                  src={FundoCamisa}
                  alt="Background 1"
                  className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
                />
                <div className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5">
                  <div className="flex flex-col ml-4 justify-center">
                    <span className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2">
                      30% OFF
                    </span>
                    <h3 className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans">
                      Novo drop
                      <br />
                      Supreme
                    </h3>
                    <button
                      className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] h-[3rem] 
              rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative w-full sm:w-[20rem] md:w-[25.3125rem]">
                <img
                  src={FundoTenis}
                  alt="Background 2"
                  className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
                />
                <div className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5">
                  <div className="flex flex-col ml-4 justify-center">
                    <span className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2">
                      30% OFF
                    </span>
                    <h3 className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans">
                      Coleção
                      <br />
                      Adidas
                    </h3>
                    <button
                      className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] h-[3rem] 
              rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative w-full sm:w-[20rem] md:w-[25.3125rem]">
                <img
                  src={FundoFone}
                  alt="Background 3"
                  className="w-full h-[15.6875rem] object-contain absolute top-0 left-0 z-1"
                />
                <div className="relative z-2 h-[15.6875rem] flex flex-row justify-between p-5">
                  <div className="flex flex-col ml-4 justify-center">
                    <span className="text-base font-bold bg-[#E7FF86] text-[#474747] w-28 h-10 rounded-full px-3.5 py-1.5 inline-flex items-center justify-center gap-2.5 mt-2">
                      30% OFF
                    </span>
                    <h3 className="mt-3 leading-9 text-4xl font-bold text-[#1f1f1f] tracking-tight font-sans">
                      Novo
                      <br />
                      Beats Bass
                    </h3>
                    <button
                      className="mt-4 bg-[#F5F5F5] text-[#C92071] w-[9.5625rem] 
              h-[3rem] rounded-lg hover:bg-[#e5e5e5] font-sans font-bold text-base leading-6 tracking-wider text-center cursor-pointer"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-center text-xl font-bold mb-6 text-[#474747] font-sans">
              Coleções em Destaque
            </h2>
            <div className=" flex items-center justify-center p-6">
              <div className=" flex flex-row gap-4 sm:flex-row sm:gap-8 justify-center">
                <div>
                  <div className=" relative w-20 h-20 sm:w-24 sm:h-24 group">
                    <button className=" w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={Camisa1}
                        alt="Camiseta 1"
                        className="cursor-pointer absolute w-[400px] h-[200px] sm:w-14 sm:h-14 object-contain
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                transition-opacity duration-500 ease-in-out 
                group-hover:opacity-0"
                      />
                      <img
                        src={Camisa2} 
                        alt="Camiseta 2"
                        className="cursor-pointer absolute w-[400px] h-[200px] sm:w-14 sm:h-14 object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                  <p
                    className="text-center mt-2 text-sm sm:text-base font-bold
             text-[#474747] font-sans"
                  >
                    Camiseta
                  </p>
                </div>

                <div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                    <button className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={Calca3}
                        alt="Calça 1"
                        className="cursor-pointer absolute w-[150px] h-[85px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 transition-opacity duration-500 
                ease-in-out group-hover:opacity-0"
                      />
                      <img
                        src={Calca4}
                        alt="Calça 2"
                        className="cursor-pointer absolute w-[150px] h-[85px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 transition-opacity duration-500 
                ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                  <p
                    className="text-center mt-2 text-sm sm:text-base 
             font-bold text-[#474747] font-sans"
                  >
                    Calça
                  </p>
                </div>

                <div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                    <button className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={Calca1}
                        alt="Jaqueta 1"
                        className="cursor-pointer absolute w-[150px] h-[85px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 transition-opacity duration-500 
                ease-in-out group-hover:opacity-0"
                      />
                      <img
                        src={Calca2}
                        alt="Jaqueta 2"
                        className="cursor-pointer absolute w-[150px] h-[85px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2
                 -translate-y-1/2 transition-opacity duration-500 
                 ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                  <p
                    className="text-center mt-2 text-sm sm:text-base font-bold 
             text-[#474747] font-sans"
                  >
                    Jaqueta
                  </p>
                </div>

                <div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                    <button className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={Fone1}
                        alt="Acessório 1"
                        className="cursor-pointer absolute w-[200px] h-[100px] sm:w-14 
                sm:h-14 object-contain left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2 transition-opacity
                 duration-500 ease-in-out group-hover:opacity-0"
                      />
                      <img
                        src={Fone2}
                        alt="Acessório 2"
                        className="cursor-pointer absolute -[200px] h-[100px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 transition-opacity duration-500 
                ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                  <p
                    className="text-center mt-2 text-sm sm:text-base
             font-bold text-[#474747] font-sans"
                  >
                    Acessório
                  </p>
                </div>

                <div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 group">
                    <button className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={Tenis1}
                        alt="Tênis"
                        className="cursor-pointer absolute w-[200px] h-[100px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2 
                -translate-y-1/2 transition-opacity duration-500
                 ease-in-out group-hover:opacity-0"
                      />
                      <img
                        src={Tenis2}
                        alt="Tênis"
                        className="cursor-pointer absolute w-[200px] h-[100px] sm:w-14 sm:h-14 
                object-contain left-1/2 top-1/2 -translate-x-1/2
                 -translate-y-1/2 transition-opacity duration-500 
                 ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                  <p
                    className="text-center mt-2 text-sm sm:text-base 
             font-bold text-[#474747] font-sans"
                  >
                    Tênis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 bg-[#F9F8FE]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Produtos em alta
            </h2>
            <Link
              to="/product-list"
              className="text-lg sm:text-sm text-pink-500 hover:underline"
            >
              Ver todos →
            </Link>
          </div>

          <ApiTenis produtos={produtos} />
        </div>

        <section className="bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-8">
              <div className="relative w-64 h-64 flex-shrink-0 mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#4200FF]/20 to-white/20">
                  <img
                    src={TenisJordan}
                    alt="Air Jordan"
                    className="w-full h-full object-contain transform -rotate-12"
                  />
                </div>
              </div>

              <div className="md-w-md text-left flex-shrink-0 mx-auto md:mx-0">
                <span className="text-[#C92071] font-semibold">
                  Oferta especial
                </span>
                <h2 className="text-4xl font-bold text-[#474747] mt-3">
                  Air Jordan edição{" "}
                  <span className="block">de colecionador</span>
                </h2>
                <div className="font-light text-gray-700  mt-6 md:text-balance">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                  <p>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim
                  </p>
                  <p>
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut
                  </p>
                  <p>aliquip</p>
                </div>
                <button className="bg-[#C92071] text-white mt-4 px-8 py-3 rounded-lg hover:bg-[#a81a5f] transition cursor-pointer">
                  Ver Oferta
                </button>
              </div>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </div>
  );
}