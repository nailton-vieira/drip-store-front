import { Link } from "react-router-dom";
import LogoFacebook from "../assets/facebook.login.png";
import LogoHeader from "../assets/logo-header.svg";
import LogoEmail from "../assets/gmail.png";
import TenisLogin4 from "../assets/tenislogin4.png";
import Footer from "../components/Footer";

export default function AccoutCreate() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* A MUDANÇA ESTÁ AQUI: As classes do header foram ajustadas */}
        <header className="flex w-full items-center bg-white p-5 xl:p-10">
          <div className="container mx-auto">
            <Link to="/">
              <img
                src={LogoHeader}
                alt="Digital Store Logo"
                className="w-50 cursor-pointer xl:h-[44px] xl:w-[253px]"
              />
            </Link>
          </div>
        </header>

        <div className="w-full bg-gradient-to-bl from-[#b5b6f2] to-[#efefff] py-10 pb-20">
          <div className="flex items-center justify-center">
            <div className="flex h-auto w-[315px] flex-col gap-5 rounded-lg bg-white p-[30px] shadow-xl md:h-auto md:w-[500px]">
              <div>
                <h2 className="text-center text-2xl">Crie sua conta</h2>
                <h3 className="mb-4 text-center">
                  Já possui uma conta?
                  <Link
                    to="/login"
                    className="cursor-pointer text-[#C92071] underline hover:text-pink-700"
                  >
                    {" "}
                    Entre aqui
                  </Link>
                </h3>
              </div>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Insira seu login ou email"
                  className="w-full rounded border border-gray-200 bg-gray-50 p-2 opacity-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <Link
                  to="/form-create"
                  className="flex h-[40px] w-full cursor-pointer items-center justify-center rounded-lg border border-[#C92071] bg-[#C92071] text-white"
                >
                  Criar conta
                </Link>
              </div>
              <h3 className="flex items-center justify-center">
                Ou faça login com
              </h3>
              <div className="flex h-auto items-center justify-center gap-4">
                <img
                  src={LogoEmail}
                  alt="Login com Gmail"
                  className="cursor-pointer"
                />
                <img
                  src={LogoFacebook}
                  alt="Login com Facebook"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={TenisLogin4}
                alt="Imagem de um tênis"
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}