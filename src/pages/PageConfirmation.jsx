import LayoutWrapper from "../components/LayoutWrapper";
import TenisFinalizarCompras from "../assets/tenis-finalizar-compras.png";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import PaymentInfoForm from "../components/PaymentInfoForm";

export default function PageConfirmation() {
  return (
    <div className="bg-linear-to-bl from-[#b5b6f2] to-[#efefff]">
      <LayoutWrapper>
        <div className="pt-8 md:pt-[160px] px-6 flex justify-center md:justify-start">
          <h2 className="mb-5 mt-5 font-bold text-2xl md:text-3xl text-center md:text-left">
            Finalizar compra
          </h2>
        </div>
        <div className="md:flex md:flex-row md:space-x-60">
          <CheckoutForm />

          <div className="px-11 md:-ml-60 xl:-ml-6">
            <OrderSummary />{" "}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}