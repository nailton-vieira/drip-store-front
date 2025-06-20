const OrderCard = ({ status, imageSrc, orderNumber, productName }) => {
  const statusStyles = {
    "Em trânsito": "bg-yellow-100 text-yellow-800",
    Finalizado: "bg-green-100 text-green-800",
    Cancelado: "bg-red-100 text-red-800",
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <img
            src={imageSrc}
            alt={productName}
            className="w-16 h-16 rounded bg-green-100 p-1 mr-3"
          />
          <div>
            <p className="text-sm text-[#8F8F8F]">Pedido nº {orderNumber}</p>
            <p className="font-bold text-[#1F1F1F] cursor-pointer">
              {productName}
            </p>
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:self-center">
          <span className={`rounded px-2 py-1 text-xs ${statusStyles[status]}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;