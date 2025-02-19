"use client";

import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";

export default function Home() {

  const sobreRef = useRef(null);
  const habilidadeRef = useRef(null);
  const projetoRef = useRef (null);
  const contatoRef = useRef (null); 

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-[#121212] flex flex-col justify-center items-center overflow-x-hidden">

        <div className="relative w-full h-[650px] flex flex-col items-center justify-between">
          
          <Image src="/imagens/ia.png" alt="Tela de Fundo" fill className="z-0 opacity-40 hidden md:block"/>

          <Image src="/imagens/ia - Copia.png" alt="Tela de Fundo" fill className="z-0 opacity-40 md:hidden"/>
          
          <div className="w-full h-[50px] bg-black/75 backdrop-blur-none flex justify-center sm:justify-end items-center space-x-3 md:space-x-5 p-2 z-50 ">
            <button className="bg-transparente transform transition hover:scale-110">Ínicio</button>
            <button className="bg-transparente transform transition hover:scale-110" onClick={() => scrollToSection(sobreRef)}>Sobre</button>
            <button className="bg-transparente transform transition hover:scale-110" onClick={() => scrollToSection(habilidadeRef)}>Habilidades</button>
            <button className="bg-transparente transform transition hover:scale-110" onClick={() => scrollToSection(projetoRef)}>Projetos</button>
            <button className="bg-transparente transform transition hover:scale-110" onClick={() => scrollToSection(contatoRef)}>Contatos</button>
          </div>

          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-5xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-50">Hi, I'm Alvaro</h1>
            <h2 className="border-b-2 text-center text-2xl mt-2 font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-50 italic">A Front-End Developer</h2>
          </div>
        </div>

        <div ref={sobreRef} className="w-[1100px] sm:h-[450px] h-[850px] flex flex-col justify-center items-center space-y-8 ">
          
            <h1 className="text-3xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] border-b-2">Sobre Mim</h1>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center ">

            <Image src="/imagens/alvaro.png" alt="Tela de Fundo" width="250" height="250" className="rounded-full"/> 

              <span className="w-[300px]  sm:w-[600px] text-justify text-xl">Possuo uma sólida formação em hardware e tecnologia da informação,
                    aliada a um foco contínuo no aprofundamento de conhecimentos em
                    programação. Estou comprometido com o desenvolvimento pessoal e
                    profissional, buscando consolidar minha atuação como um profissional
                    versátil e preparado para enfrentar os desafios do setor de tecnologia,
                    contribuindo para projetos inovadores e de alto impacto.</span>
            </div>
        </div>

        <div ref={habilidadeRef} className="w-[1100px] sm:h-[550px] h-[1250px] flex flex-col justify-center items-center gap-5">

          <h1 className="text-3xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] border-b-2">Habilidades</h1>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="w-[320px] h-[380px] p-3 rounded-xl bg-[#202020] flex flex-col justify-center items-center gap-3">
              <div className="flex items-center gap-2">
                <FaHtml5 className="text-8xl text-[#F35D15]"/>
                <FaCss3Alt className="text-8xl text-[#2BB7E5]"/>
              </div>  
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">HTML & CSS</span>
              <span className="w-[220px] h-[160px] text-center">Linguagens responsáveis pela estrutura e estilização de sites.
                    Fundamentais para a construção de layouts responsivos e acessíveis.
                    Possuo amplo domínio.</span>
            </div>

            <div className="w-[320px] h-[380px] p-3 rounded-xl bg-[#202020] flex flex-col justify-center items-center gap-3">
                <RiNextjsFill className="text-8xl text-black"/>
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">NEXT.JS</span>
              <span className="w-[220px] h-[160px] text-center">Framework React focado em performance e SEO. 
                    Possui renderização híbrida e suporte a API Routes.
                    Possuo amplo domínio.</span>
            </div>

            <div className="w-[320px] h-[380px] p-3 rounded-xl bg-[#202020] flex flex-col justify-center items-center gap-3">
                <RiTailwindCssFill className="text-8xl text-[#00BCFF]"/>
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">TAILWIND.CSS</span>
              <span className="w-[220px] h-[160px] text-center">Framework CSS utilitário para estilização rápida e responsiva.
                    Flexível, moderno e altamente customizável. Possuo amplo domínio.</span>
            </div>
          </div>
        </div>

        <div ref={projetoRef} className="w-[1100px] flex flex-col justify-center items-center gap-8 mt-10 sm:mt-0">

          <h1 className="text-3xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] border-b-2">Projetos</h1>
          
          <div className="w-[1000px] sm:h-[250px] h-[500px] flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0">
            <div className=" relative w-[320px] sm:w-[500px] h-[250px]">
              <Image src="/imagens/site_clone.png" alt="Projeto 1" fill className="rounded-lg transform transition hover:scale-110"/>
            </div>

            <div className="flex flex-col gap-3 items-center sm:items-start justify-center w-[400px] sm:w-[500px] h-[250px] p-8">
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Site Clone Senac MG</span>
              <span className="w-[320px] sm:w-[450px] h-[200px] text-justify sm:text-base">Replica fiel da interface do site oficial do Senac MG, desenvolvida sem back-end.
                    Utilizei Next.js e Tailwind CSS para recriar o design responsivo e otimizado, garantindo fidelidade visual e usabilidade.</span>
            </div>
          </div>
         
          <div className="bg-white rounded h-[3px] w-[300px] flex items-center sm:hidden"></div>

          <div className="w-[1000px] h-[500px] sm:h-[250px] flex flex-col-reverse sm:flex-row justify-start items-center gap-5 sm:gap-0">
            
            <div className="flex flex-col gap-3 items-center sm:items-end justify-center w-[450px] sm:w-[500px] h-[250px] p-8 ">
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] ">Landing Page para Oficina</span>
              <spa className="w-[320px] sm:w-[450px] h-[200px] text-justify sm:text-end">Desenvolvi uma landing page moderna para uma oficina mecânica, focada em responsividade e design intuitivo.
                    O projeto foi construído utilizando Next.js e Tailwind CSS, garantindo carregamento rápido e uma experiência otimizada para os usuários.</spa>
            </div>

            <div className=" relative w-[320px] sm:w-[500px] h-[250px]">
              <Image src="/imagens/Oficina.png" alt="Projeto 1" fill className="rounded-lg transform transition hover:scale-110"/>
            </div>
            
          </div>

          <div className="bg-white rounded h-[3px] w-[300px] flex items-center sm:hidden"></div>
          
          <div className="w-[1000px] h-[500px] sm:h-[250px] flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0">
            <div className=" relative w-[320px] sm:w-[500px] h-[250px]">
              <Image src="/imagens/tempo.png" alt="Projeto 1" fill className="rounded-lg transform transition hover:scale-110"/>
            </div>

            <div className="flex flex-col gap-3 items-center sm:items-start justify-center w-[500px] h-[250px] p-8">
              <span className="text-2xl font-semibold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Site de Previsão do Tempo</span>
              <spa className="w-[320px] text-justify sm:w-[450px] h-[200px] ">Criei um site estático para exibir informações sobre o clima, com um layout moderno e totalmente responsivo. 
                    O design se adapta perfeitamente a diferentes dispositivos, desde celulares até desktops. 
                    Desenvolvido utilizando Next.js e Tailwind CSS, garantindo carregamento rápido e uma experiência fluida para o usuário.</spa>
            </div>
            
          </div>

        </div>

        <div ref={contatoRef} className="w-[1100px] h-[550px] flex flex-col justify-center items-center gap-8">

          <h1 className="text-3xl font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] border-b-2">Entre em Contato</h1>

          <div className="flex justify-center items-center flex-col gap-3">

            <input className=" rounded-lg w-[320px] sm:w-[600px] h-[55px] bg-[#202020] text-[#8F8F8F] outline-none p-3" placeholder="Seu Nome" ></input>

            <input className=" rounded-lg w-[320px] sm:w-[600px] h-[55px] bg-[#202020] text-[#8F8F8F] outline-none p-3" placeholder="Seu E-mail" ></input>

            <textarea className=" rounded-lg w-[320px] sm:w-[600px] h-[110px] bg-[#202020] text-[#8F8F8F] outline-none p-3 text-start items-star pt-2" placeholder="Seu Nome" ></textarea>
          </div>

          <button className="w-[320px] sm:w-[600px] h-[55px] bg-black text-white rounded-lg text-2xl font-semibold hover:bg-[#8F8F8F] transform transition hover:scale-110">Enviar</button>

        </div>

        <div className="w-full h-[80px] bg-black p-5 flex justify-between items-center">

          <div className="flex gap-3">
            <button className="transform transition hover:scale-110"> <MdEmail className="text-2xl text-[#C1C1C1]"/> </button>
            <button className="transform transition hover:scale-110"> <FaLinkedin className="text-2xl text-[#C1C1C1]"/> </button>
            <button className="transform transition hover:scale-110"> <IoLogoWhatsapp className="text-2xl text-[#C1C1C1]"/> </button>
          </div>

          <span className="text-[#C1C1C1">Copyright 2025</span>
        </div>
                      
    </div>
  );
}
