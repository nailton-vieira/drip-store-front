import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";


export default function LayoutWrapper({ children }) {
  return (

    <>
      <HeaderMobile />
      <main>{children}</main>
      <Footer />
    </>
    
  );
}