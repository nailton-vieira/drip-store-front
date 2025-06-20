import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";


function App () {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white" >
       <HeaderMobile />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
    );
}
 
export default App;