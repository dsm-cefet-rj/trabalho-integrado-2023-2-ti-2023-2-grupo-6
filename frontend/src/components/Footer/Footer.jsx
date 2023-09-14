//import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import {AiFillGithub} from 'react-icons/ai'


const socialLinks = [
  {
    path:"https://github.com/dsm-cefet-rj/trabalho-integrado-2023-2-ti-2023-2-grupo-6",
    icon:<AiFillGithub className='group-hover:text-black w-4 h-5 decoration-black' />
  }
]

/*const quickLinks01 = [
  {
    path:'/home',
    display:"Página Inicial",
  },
  {
    path:'/contact',
    display:"Contato",
  },
  {
    path:'/blog',
    display:"Blog",
  },
]

const quickLinks02 = [
  {
    path:'/encontre-seu-professor',
    display:"Encontre seu Professor",
  },
  {
    path:'/',
    display:"Marque uma aula",
  },
  {
    path:'/',
    display:"Resolva uma questão",
  },
]

const quickLinks01 = [
  {
    path:'/',
    display:"Seja um Professor",
  },
  {
    path:'/',
    display:"Entre em Contato",
  },
]
*/
const Footer = () => {

  const year = new Date().getFullYear()

  return (<footer className='pb-12 pt-4 border-t-2 mt-[50px]'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} className='pt-8 ' />
          <p className='text-[12px] leading-7 font-[400] text-textColor mt-4'>
            Copyright ® {year} desenvolvido pelo Grupo 6 - PSW
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index)=> (
            <Link 
            to={link.path} 
            key={index} 
            className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center 
            justify-center group hover:bg-primaryColor hover:border-none'
            >
              {link.icon}
            </Link>))}
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
