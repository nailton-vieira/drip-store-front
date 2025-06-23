import React from "react";
import { useNavigate } from "react-router-dom";
import TenisCarrinho from "../assets/tenis-finalizar-compras.png";

const ReciboCompra = ({ dados }) => {
  const navigate = useNavigate();

  const {
    nome = "Francisco Antonio Pereira",
    cpf = "123.485.913-35",
    email = "francisco@gmail.com",
    celular = "(85) 5555-5555",
    endereco = "Rua João Pessoa, 333",
    bairro = "Centro",
    cidade = "Fortaleza, Ceará",
    cep = "43388-000",
    cartao = "FRANCISCO A P",
    finalCartao = "**2020",
    produto = "Tênis Nike Revolution 6 Next Nature",
    genero = "Masculino",
    preco = "R$ 219,00",
    parcelas = "10x de R$ 21,90 sem juros",
  } = dados || {};

  return (
    <div className="bg-[#F9F8FE] pt-[180px] flex flex-col items-center mt-8 px-4">
      <div className="bg-white w-full max-w-3xl p-6 rounded-md">
        <div className="flex flex-col items-center border-b border-gray-200 pb-4 mb-4">
          <div className="text-6xl mb-2">🎉</div>
          <span className="text-2xl font-bold text-center">
            Compra Realizada
          </span>
          <span className="text-2xl font-bold text-center">com sucesso!</span>
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="font-bold mb-2">Informações Pessoais</h3>
          <div className="space-y-1 text-sm break-words">
            <p>
              <span className="font-medium text-gray-400">Nome:</span>{" "}
              <span className="font-semibold">{nome}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">CPF:</span>{" "}
              <span className="font-semibold">{cpf}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">Email:</span>{" "}
              <span className="font-semibold">{email}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">Celular:</span>{" "}
              <span className="font-semibold">{celular}</span>
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="font-bold mb-2">Informações de Entrega</h3>
          <div className="space-y-1 text-sm break-words">
            <p>
              <span className="font-medium text-gray-400">Endereço:</span>{" "}
              <span className="font-semibold">{endereco}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">Bairro:</span>{" "}
              <span className="font-semibold">{bairro}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">Cidade:</span>{" "}
              <span className="font-semibold">{cidade}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">CEP:</span>{" "}
              <span className="font-semibold">{cep}</span>
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="font-bold mb-2">Informações de Pagamento</h3>
          <div className="space-y-1 text-sm break-words">
            <p>
              <span className="font-medium text-gray-400">
                Titular do Cartão:
              </span>{" "}
              <span className="font-semibold">{cartao}</span>
            </p>
            <p>
              <span className="font-medium text-gray-400">Final:</span>{" "}
              <span className="font-semibold">{finalCartao}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="font-bold mb-2">Resumo da compra</h2>
          <div className="flex items-center gap-3">
            <img
              src={TenisCarrinho}
              alt="Tênis Nike"
              className="bg-[#E2E3FF] w-16 h-12 object-contain rounded"
            />
            <p className="text-sm font-bold text-gray-800 break-words">
              {produto}
              <br />
              {genero}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#F6AA1C0D] border-[#F6AA1C26] border p-4 rounded">
          <span className="font-bold text-lg">Total</span>
          <div className="text-right">
            <p className="text-xl font-bold">{preco}</p>
            <p className="text-xs text-gray-500">ou {parcelas}</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => window.print()}
            className="text-sm text-gray-600 hover:underline hover:text-gray-800 cursor-pointer"
          >
            Imprimir Recibo
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-6 mb-20 px-4">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#F6AA1C] hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-md cursor-pointer"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default ReciboCompra;