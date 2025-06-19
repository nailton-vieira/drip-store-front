import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; 
import logoFooter from "../assets/logo-footer.svg";
import React from "react";

const infoLinks = [
  "Sobre Drip Store",
  "Segurança",
  "Wishlist",
  "Blog",
  "Trabalhe Conosco",
  "Meus Pedidos",
];

const categoryLinks = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];

const address = [
  "Av. Humberto Monte, 2929 - 11° andar, Torre Norte - Salas 1101 à 1107",
  "Pici, Fortaleza - CE, 60440-593",
];

const phone = "(85) 9999-9999";

  const socialLinks = [
    { icon: faFacebook, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faTwitter, href: "#" },
  ];

const Footer = () => {
  return (
    <footer className="mx-auto w-full bg-[#1F1F1F] py-10 text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col justify-center gap-8 px-4 py-1 md:flex-row md:gap-20 md:px-8 lg:px-28">
        <div className="mr-8">
          <img className="w-[11rem]" src={logoFooter} alt="logotipo-footer" />
          <div className="mb-4 text-[0.9rem] font-light">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Recusandae, cum quasi numquam ullam hic maiores.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-2xl text-gray-600 transition-colors duration-200 hover:text-white"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full md:w-auto">
          <div className="w-1/2 space-y-4">
            <h2 className="mb-4 text-lg font-semibold">Informações</h2>
            <ul className="space-y-2">
              {infoLinks.map((label, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="font-light text-gray-400 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/2">
            <h2 className="mb-4 px-6 text-lg font-semibold">Categorias</h2>
            <ul className="space-y-2">
              {categoryLinks.map((label, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="px-6 font-light text-gray-400 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Contato</h2>
          <address className="not-italic text-gray-400">
            {address.map((line, i) => (
              <p key={i} className="mb-4">
                {line}
              </p>
            ))}
            <p>{phone}</p>
          </address>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-800 px-4 pt-2 pb-0 text-center font-light text-gray-400">
        <p className="text-sm sm:text-base">
          © 2025 Digital College -<br className="sm:hidden" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;