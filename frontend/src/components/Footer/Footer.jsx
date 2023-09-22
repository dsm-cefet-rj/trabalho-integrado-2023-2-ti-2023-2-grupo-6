//import React from 'react';
import { Link } from "react-router-dom";
import logoBranca from "../../assets/images/logo-branca.svg";
import { AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/dsm-cefet-rj/trabalho-integrado-2023-2-ti-2023-2-grupo-6",
    icon: (
      <AiFillGithub className="group-hover:text-black w-4 h-5 " color="white" />
    ),
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Página Inicial",
  },
  {
    path: "/contact",
    display: "Entre em Contato",
  },
];

const quickLinks02 = [
  {
    path: "/teachers",
    display: "Encontre seu Professor",
  },
  {
    path: "/blog",
    display: "Trilhas de Conhecimento",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-12 pt-4 border-t-2 mt-[50px] bg-[#1D1F26]">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logoBranca} className="pt-8 " />
            <p className="text-[12px] leading-7 font-[400] text-white mt-4">
              O lugar ideal para achar um especialista que irá te ajudar a
              alcançar resultados excelentes no campo que mais importa para
              você.
            </p>
            <p className="text-[12px] leading-7 font-[400] text-textColor mt-4">
              Copyright ® {year} desenvolvido pelo Grupo 6 - PSW
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-white rounded-full flex items-center 
            justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Adicionais
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Funcionalidades
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
