import { Link } from "react-router-dom";

export default function CheckoutForm() {
  return (
    <form className="flex flex-col items-center px-4">
      {/* PESSOAL + ENTREGA */}
      <div className="w-[400px] md:w-[500px] max-w-7xl space-y-6">
        {/* Informações Pessoais */}
        <div className="bg-white w-full rounded-lg shadow p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>

          {["Nome Completo", "CPF", "E-mail", "Celular"].map((label, i) => (
            <div className="mb-4" key={i}>
              <label className="block mb-1 text-gray-700">{label}</label>
              <input
                type="text"
                placeholder={`Insira seu ${label.toLowerCase()}`}
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
              />
            </div>
          ))}
        </div>

        {/* Informações de Entrega */}
        <div className="bg-white w-full rounded-lg shadow p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Informações de Entrega</h3>

          {["Endereço", "Bairro", "Cidade", "CEP", "Complemento"].map(
            (label, i) => (
              <div className="mb-4" key={i}>
                <label className="block mb-1 text-gray-700">{label}</label>
                <input
                  type="text"
                  placeholder={`Insira seu ${label.toLowerCase()}`}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-500 bg-gray-50"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* PAGAMENTO */}
      <div className="mb-10 max-w-7xl md:w-[500px] bg-white rounded-lg shadow p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Informações de Pagamento</h2>

        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">
            Forma de Pagamento
          </span>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formaPagamento"
                className="accent-pink-500"
              />
              <span>Cartão de Crédito</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="formaPagamento"
                className="accent-pink-500"
              />
              <span>Boleto Bancário</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-700" htmlFor="nomeCartao">
            Nome do Cartão *
          </label>
          <input
            type="text"
            id="nomeCartao"
            placeholder="Insira o nome do Cartão"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="numeroCartao">
              Número do Cartão *
            </label>
            <input
              type="text"
              id="numeroCartao"
              placeholder="Insira número do Cartão"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="validade">
              Validade *
            </label>
            <input
              type="text"
              id="validade"
              placeholder="MM/AA"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-gray-700" htmlFor="cvc">
            CVV *
          </label>
          <input
            type="text"
            id="cvc"
            placeholder="CVV"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-200">
          <div>
            <p className="font-semibold text-lg text-gray-800">Total</p>
            <p className="text-sm text-gray-600">
              ou 10x de R$ 21,00 sem juros
            </p>
          </div>
          <Link
            to="/recibo"
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors ml-1 cursor-pointer text-center"
          >
            Realizar Pagamento
          </Link>
        </div>
      </div>
    </form>
  );
}