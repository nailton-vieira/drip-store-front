import SidebarMenu from "../components/SidebarMenu";
import OrderCard from "../components/OrderCard";
import sneakers from "../assets/White-Sneakers-PNG-Clipart.png";
import LayoutWrapper from "../components/LayoutWrapper";

const defaultOrder = {
  orderNumber: "232591932",
  productName: "Tênis Nike Revolution 6 Next Nature Masculino",
  imageSrc: sneakers,
};

const orders = [
  { status: "Em trânsito", ...defaultOrder },
  { status: "Finalizado", ...defaultOrder },
  { status: "Cancelado", ...defaultOrder },
  { status: "Finalizado", ...defaultOrder },
  { status: "Finalizado", ...defaultOrder },
];

const MyOrders = () => {
  return (
    <LayoutWrapper>
      <main className="md:pt-[180px] container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <SidebarMenu />

          <section className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <header className="mb-6 flex items-center justify-between border-b border-gray-200 pb-2">
                <h2 className="text-lg font-semibold text-[#474747]">
                  Meus Pedidos
                </h2>
                <span className="text-xs font-semibold text-[#474747] hidden md:block">
                  STATUS
                </span>
              </header>

              <div className="space-y-4">
                {orders.map((order, index) => (
                  <OrderCard
                    key={index}
                    status={order.status}
                    imageSrc={order.imageSrc}
                    orderNumber={order.orderNumber}
                    productName={order.productName}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default MyOrders;