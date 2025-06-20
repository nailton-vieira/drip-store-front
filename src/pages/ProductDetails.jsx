import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ProductDetails() {
  return (
    <LayoutWrapper>
      <div className="md:pt-[160px] bg-light-gray-3 pb-15 bg-gray-50">
        <div className="container mx-auto">
          <div className="mr-8 text-xs text-gray-500 mb-4 pt-3 px-2">
            Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
            Masculino
          </div>
          <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-20 py-4">
            <ProductImages />
            <ProductInfo />
          </div>
          <RelatedProducts />
        </div>
      </div>
    </LayoutWrapper>
  );
}