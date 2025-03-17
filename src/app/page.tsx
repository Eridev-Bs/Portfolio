"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const categories = [
  " Experiencia Laboral",
  " Proyectos y Tecnologías",
  " Más sobre mí",
];

export default function Home() {
  const [isfrontVisible, setIsfrontVisible] = useState(false);
  const [isbackVisible, setIsbackVisible] = useState(false);
  const [isfullVisible, setIsfullVisible] = useState(false);
  const [isdbVisible, setIsdbVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [istrVisible, setIstrvisible] = useState(false);
  const [isasVisible, setIsasVisible] = useState(false);
  const [ispeVisible, setIspeVisible] = useState(false);
  const [isbenVisible, setIsbenVisible] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const currentText = categories[activeIndex];
      if (charIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        charIndex++;
        timeout = setTimeout(typeText, 80);
      } else {
        // Termina de escribir, espera y comienza a borrar
        timeout = setTimeout(deleteText, 1500);
      }
    };

    const deleteText = () => {
      if (charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        charIndex--;
        timeout = setTimeout(deleteText, 50);
      } else {
        // Una vez borrado por completo, cambia a la siguiente categoría
        setActiveIndex((prev) => (prev + 1) % categories.length);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const handleScroll = (percentage: number) => {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    window.scrollTo({
      top: scrollHeight * percentage,
      behavior: "smooth",
    });
  };

  const handleResponsiveScroll = (
    desktopPercentage: number,
    mobilePercentage: number
  ) => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const percentage = isMobile ? mobilePercentage : desktopPercentage;
    handleScroll(percentage);
  };

  return (
    <>
      <video autoPlay loop muted playsInline>
        <source src="/backlive.mp4" type="video/mp4" />
      </video>
      <div>
        <nav className="fixed z-50 top-0 left-0 w-full flex justify-center mt-5">
          <div className="navbar-container backdrop-blur">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#experiencia"
                  className="text-white shadow-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                  onClick={() => handleResponsiveScroll(0.32, 0.28)}
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-white shadow-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                  onClick={() => handleResponsiveScroll(0.65, 0.59)}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="text-white shadow-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                  onClick={() => handleResponsiveScroll(1, 0.88)}
                >
                  Sobre mí
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full"></div>

        <div
          className="relative z-10 w-[80%] max-w-xl p-6 pt-12 bg-white/30 border-2 border-white rounded-lg 
                        shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="w-20 h-20 rounded-full ring-4 ring-white"
              src="/perfil.jpg"
              alt="Bordered avatar"
              width={80}
              height={80}
            />
          </div>

          <div>
            <h5 className="mt-5 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              Benjamin Sequeida
            </h5>
          </div>
          <h5 className="text-xl mb-10 text-white dark:text-gray-300">
            Soy desarrollador web full-stack y analista programador con
            experiencia en la creación y optimización de aplicaciones. Me
            apasiona resolver problemas, optimizar procesos y crear soluciones
            eficientes. 🚀
          </h5>
          <a
            href="https://bento-seven-ashen.vercel.app/"
            className="inline-block p-2 text-lg font-semibold text-white bg-slate-950 rounded-lg shadow-md focus:outline-none hover:bg-slate-800"
          >
            Contactame
          </a>
        </div>
      </div>

      <div className="w-full h-full text-3xl text-center -mt-32 -mb-52">
        <div className="flex items-center justify-center">
          {/* Flecha izquierda */}
          <img
            src="/flecha.svg"
            alt="Flecha izquierda"
            className="w-10 h-10 invert hidden md:block"
          />

          {/* Texto animado */}
          <span className="mx-4 transition-opacity duration-500 text-white glow">
            {displayText}
          </span>

          {/* Flecha derecha */}
          <img
            src="/flecha.svg"
            alt="Flecha derecha"
            className="w-10 h-10 invert hidden md:block"
          />
        </div>
      </div>

      <div className="mb-40">
        <div className="relative -mb-96 w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full"></div>
          <div
            className="relative z-10 w-[90%] md:w-[60%] p-6 bg-white/30 border-2 border-white rounded-lg 
                  shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            <h2 className="flex items-center justify-center gap-4 text-white text-2xl">
              <img
                src="/corbata.svg"
                alt="Corbata"
                className="w-10 h-10 invert hidden md:block"
              />
              Experiencia Laboral
              <img
                src="/corbata.svg"
                alt="Corbata"
                className="w-10 h-10 invert hidden md:block"
              />
            </h2>
          </div>
        </div>
        <img
          src="/line.svg"
          alt="Job Icon"
          className="w-20 h-20 mx-auto invert hidden md:block"
        />
        <div
          className="flex z-10 w-[80%] max-w-xl p-6 bg-white/30 border-2 border-white rounded-lg 
             shadow-lg backdrop-blur-md dark:bg-gray-800/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]
             mx-auto md:my-0 my-10"
        >
          {/* Columna izquierda: título, imagen y fecha */}
          <div className="flex flex-col items-start gap-2">
            <img
              src="/job.svg"
              alt="Job Icon"
              className="w-10 h-10 invert hidden md:block"
            />
            <h4 className="text-xl font-bold text-white">2025</h4>
          </div>

          {/* Columna derecha: información */}
          <div className="ml-6 text-gray-300">
            <h4 className="text-xl font-bold text-center mr-6 text-white">
              Cencosud
            </h4>
            <p>
              Trabajo como{" "}
              <span className="text-white">analista programador</span> y{" "}
              <span className="text-white">analista de datos</span> para poder
              corregir diferentes errores que existían en los códigos, me
              encargué de <span className="text-white">corregir</span> y{" "}
              <span className="text-white">crear funciones</span> para un
              sistema de venta de tickets mediante uso QR.
            </p>
          </div>
        </div>

        <img
          src="/line.svg"
          alt="Job Icon"
          className="w-20 h-20 mx-auto invert hidden md:block"
        />

        <div
          className="flex z-10 w-[80%] max-w-xl p-6 bg-white/30 border-2 border-white rounded-lg 
             shadow-lg backdrop-blur-md dark:bg-gray-800/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]
             mx-auto md:my-0 my-5"
        >
          {/* Columna izquierda: título, imagen y fecha */}
          <div className="flex flex-col items-start gap-2 ">
            <img
              src="/job.svg"
              alt="Job Icon"
              className="w-10 h-10 invert hidden md:block"
            />
            <h4 className="text-xl font-bold text-white">2025</h4>
          </div>

          {/* Columna derecha: información */}
          <div className="ml-6 text-gray-300">
            <h4 className="text-xl font-bold text-center mr-6 text-white">
              RPA
            </h4>
            <p>
              Trabajo como{" "}
              <span className="text-white">analista programador</span> y{" "}
              <span className="text-white">analista de datos</span> para crear
              una <span className="text-white">RPA</span> que permita la gestion
              de usuarios, ventas y gestion de stock para una serie de bares de{" "}
              <span className="text-white">corregir</span> y{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full -mb-20 md:-mb-0">
        <div
          className="relative z-10 w-[90%] md:w-[60%] p-6 bg-white/30 border-2 border-white rounded-lg 
              shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
              drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <h2 className="flex items-center justify-center md:gap-4 text-white text-2xl">
            <img
              src="/flecha.svg"
              alt="Corbata"
              className="w-10 h-10 invert hidden md:block"
            />
            Tecnologias y Proyectos
            <img
              src="/flecha.svg"
              alt="Corbata"
              className="w-10 h-10 invert hidden md:block"
            />
          </h2>
        </div>
      </div>

      <img
        src="/line.svg"
        alt="Job Icon"
        className="w-20 h-20 mx-auto invert -mb-28 hidden md:block"
      />

      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div
          className="w-[85%] h-[75%] relative z-10 p-6 bg-white/30 border-2  border-white rounded-lg 
                        shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <div className="md:flex ">
            <ul className="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400  m-2">
              <li>
                <button
                  onClick={() => {
                    setIsfrontVisible(!isfrontVisible);
                    setIsbackVisible(false);
                    setIsfullVisible(false);
                    setIsdbVisible(false);
                  }}
                  className="inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-black hover:text-white bg-white hover:bg-black md:w-32 dark:bg-slate-950 dark:hover:bg-gray-700 dark:hover:text-white dark:text-white"
                >
                  <img
                    src="/front.svg"
                    alt="Frontend Icon"
                    className="w-4 h-4 me-2 invert-0 dark:invert"
                  />
                  <p>Frontend</p>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsfrontVisible(false);
                    setIsbackVisible(!isbackVisible);
                    setIsfullVisible(false);
                    setIsdbVisible(false);
                  }}
                  className="inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-black hover:text-white bg-white hover:bg-black md:w-32 dark:bg-slate-950 dark:hover:bg-gray-700 dark:hover:text-white dark:text-white"
                >
                  <img
                    src="/Back.svg"
                    alt="Backend Icon"
                    className="w-4 h-4 me-2 invert-0 dark:invert"
                  />
                  Backend
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsfrontVisible(false);
                    setIsbackVisible(false);
                    setIsfullVisible(!isfullVisible);
                    setIsdbVisible(false);
                  }}
                  className="inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-black hover:text-white bg-white hover:bg-black md:w-32 dark:bg-slate-950 dark:hover:bg-gray-700 dark:hover:text-white dark:text-white"
                >
                  <img
                    src="/Fullstack.svg"
                    alt="Fullstack Icon"
                    className="w-4 h-4 me-2 invert-0 dark:invert"
                  />
                  Fullstack
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsfrontVisible(false);
                    setIsbackVisible(false);
                    setIsfullVisible(false);
                    setIsdbVisible(!isdbVisible);
                  }}
                  className="inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-black hover:text-white bg-white hover:bg-black md:w-32 dark:bg-slate-950 dark:hover:bg-gray-700 dark:hover:text-white dark:text-white"
                >
                  <img
                    src="/DB.svg"
                    alt="DB Icon"
                    className="w-4 h-4 me-2 invert-0 dark:invert"
                  />
                  DB
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://github.com/Eridev-Bs", "_blank")
                  }
                  className="inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-black hover:text-white bg-white hover:bg-black md:w-32 dark:bg-slate-950 dark:hover:bg-gray-700 dark:hover:text-white dark:text-white"
                >
                  <img
                    src="/github.svg"
                    alt="GitHub Icon"
                    className="w-4 h-4 me-2 invert-0 dark:invert"
                  />
                  GitHub
                </button>
              </li>
            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-white dark:bg-slate-950 rounded-lg w-full h-auto mt-2 md:mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Proyectos
              </h3>
              <p className="mb-2 text-black dark:text-white hidden md:block">
                Aquí podrás visualizar los proyectos que he realizado en base a
                su tipo de proyecto.
              </p>
              <p className="mb-2 text-black dark:text-white block md:hidden"></p>
              {isfrontVisible && (
                <div className="flex flex-wrap gap-2 w-full h-auto items-center justify-center Frontend">
                  <a
                    href="https://github.com/Eridev-Bs/bento"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Bento
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIsbenVisible(!isbenVisible);
                      setIspeVisible(false);
                      setIstrvisible(false);
                      setIsasVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Bento
                  </button>
                  <a
                    href="https://github.com/Dxnale/Proyecto-Pinguino"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Proyect Pinguino
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIspeVisible(!ispeVisible);
                      setIsbenVisible(false);
                      setIstrvisible(false);
                      setIsasVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Proyect Pinguino
                  </button>
                  <a
                    href="https://github.com/Eridev-Bs/Astra"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Astra
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIsasVisible(!isasVisible);
                      setIsbenVisible(false);
                      setIstrvisible(false);
                      setIspeVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Astra
                  </button>
                  <a
                    href="https://github.com/Eridev-Bs/TetrisJs"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      TetrisJs
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIstrvisible(!istrVisible);
                      setIsasVisible(false);
                      setIspeVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    TetrisJs
                  </button>
                </div>
              )}
              {isbackVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center Backend">
                  <a
                    href="https://github.com/Eridev-Bs/Astra"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Astra
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIsasVisible(!isasVisible);
                      setIstrvisible(false);
                      setIspeVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Astra
                  </button>
                  <a
                    href="https://github.com/Dxnale/Proyecto-Pinguino"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Proyect Pinguino
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIspeVisible(!ispeVisible);
                      setIstrvisible(false);
                      setIsasVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Proyect Pinguino
                  </button>
                </div>
              )}
              {isfullVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center Fullstack">
                  <a
                    href="https://github.com/Dxnale/Proyecto-Pinguino"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Proyect Pinguino
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIspeVisible(!ispeVisible);
                      setIstrvisible(false);
                      setIsasVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Proyect Pinguino
                  </button>
                </div>
              )}
              {isdbVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center DB">
                  <a
                    href="https://github.com/Dxnale/Proyecto-Pinguino"
                    className="block md:hidden"
                  >
                    <button className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black flex items-center justify-center transition-all">
                      Proyect Pinguino
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      setIspeVisible(!ispeVisible);
                      setIstrvisible(false);
                      setIsasVisible(false);
                    }}
                    className="w-20 h-20 bg-black text-white rounded-lg shadow-md border hover:bg-white hover:text-black items-center justify-center transition-all hidden md:block"
                  >
                    Proyect Pinguino
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="cardbt mb-2 hidden md:block">
            <div className="flex interior w-[100%] flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-slate-950">
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                {istrVisible && (
                  <div className="flex flex-col md:flex-row justify-between p-4 leading-normal w-full">
                    <div className="md:w-1/2">
                      <h3 className="font-semibold text-black dark:text-white">
                        TetrisJs
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Es una aplicación desarrollada basada en el juego
                        Tetris, programada con HTML, CSS y JavaScript. Este
                        proyecto demuestra habilidades en la creación de
                        interfaces de usuario interactivas y la implementación
                        de lógica de juego.
                      </p>
                      <h3 className="font-semibold text-black dark:text-white mt-4">
                        Tecnologias
                      </h3>
                      <div className="flex justify-center items-center gap-5 mt-4">
                        <img
                          src="/html.svg"
                          alt="HTML logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/css.svg"
                          alt="CSS logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/javascript.svg"
                          alt="JavaScript logo"
                          className="w-10 h-auto object-contain  dark:invert"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                      <img
                        src="/tetris.png"
                        alt="Tetris"
                        className="w-[70%] rounded-md h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
                {isasVisible && (
                  <div className="flex flex-col md:flex-row justify-between p-4 leading-normal w-full">
                    <div className="md:w-1/2">
                      <h3 className="font-semibold text-black dark:text-white">
                        Astra
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Esta es una aplicacion web la cual consume una API con
                        comentarios de usuarios y las convierte en
                        constelaciones, tambien puedes crear tu constelacion y
                        tus comentarios, esta aplicacion fue basada en Html, Css
                        y Javascript con consumo de API con Jquery
                      </p>
                      <h3 className="font-semibold text-black dark:text-white mt-4">
                        Tecnologias
                      </h3>
                      <div className="flex justify-center items-center gap-5 mt-4">
                        <img
                          src="/html.svg"
                          alt="HTML logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/css.svg"
                          alt="CSS logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/javascript.svg"
                          alt="JavaScript logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                      <img
                        src="/astra.png"
                        alt="Tetris"
                        className="w-[70%] rounded-md h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
                {ispeVisible && (
                  <div className="flex flex-col md:flex-row justify-between p-4 leading-normal w-full">
                    <div className="md:w-1/2">
                      <h3 className="font-semibold text-black dark:text-white">
                        Proyecto Pinguino
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Esta es una RPA creada y diseñada para una serie de
                        Bares, la cual se encarga de gestionar los usuarios,
                        ventas y el stock de los productos, para permitir el
                        orden y funcionamiento en venta e inventarios. Esta RPA
                        es creada en C#, con Asp.net, Html, Css, Javascript y
                        Bootstrap. Contiene servicios de envíos de mail,
                        recuperación de claves y automatizaciones de bases de
                        datos con Entity Framework.
                      </p>
                      <h3 className="font-semibold text-black dark:text-white mt-4">
                        Tecnologías
                      </h3>
                      <div className="flex justify-center items-center gap-5 mt-4">
                        <img
                          src="/csharp.svg"
                          alt="C# logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/DB.svg"
                          alt="Database logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/html.svg"
                          alt="HTML logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/css.svg"
                          alt="CSS logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/javascript.svg"
                          alt="JavaScript logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                      <img
                        src="/pinguino.png"
                        alt="Proyecto Pinguino"
                        className="w-[70%] rounded-md h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
                {isbenVisible && (
                  <div className="flex flex-col md:flex-row justify-between p-4 leading-normal w-full">
                    <div className="md:w-1/2">
                      <h3 className="font-semibold text-black dark:text-white">
                        Bento
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Esta es una app web creada y diseñada por mi mismo,
                        basandome en los linktree y acumuladores de contacto, me
                        encarge de usar tecnologias actuales y veloces para
                        permitir el dinamismo ademas del diseño.
                      </p>
                      <h3 className="font-semibold text-black dark:text-white mt-4">
                        Tecnologías
                      </h3>
                      <div className="flex justify-center items-center gap-5 mt-4">
                        <img
                          src="/nextjs.svg"
                          alt="nexts logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/html.svg"
                          alt="HTML logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/css.svg"
                          alt="CSS logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/node.svg"
                          alt="node logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/tailwind.svg"
                          alt="tailwind logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                        <img
                          src="/react.svg"
                          alt="react logo"
                          className="w-10 h-auto object-contain dark:invert"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                      <img
                        src="/bento.png"
                        alt="Proyecto Pinguino"
                        className="w-[70%] rounded-md h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full -mb-2 md:-mb-0">
        <div
          className="relative z-10 w-[90%] p-6 bg-white/30 border-2 border-white rounded-lg 
              shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
              drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <h2 className="flex items-center justify-center gap-4 text-white text-2xl">
            <img
              src="/flecha.svg"
              alt="Corbata"
              className="w-10 h-10 invert hidden md:block"
            />
            Sobre mí
            <img
              src="/flecha.svg"
              alt="Corbata"
              className="w-10 h-10 invert hidden md:block"
            />
          </h2>
        </div>
      </div>

      <img
        src="/line.svg"
        alt="Job Icon"
        className="w-20 h-20 mx-auto invert -mb-72 hidden md:block"
      />

      <div className="relative mt-8 md:mt-12 w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full"></div>

        <div
          className="relative z-10 w-[85%] h-[90%] max-w-4xl p-6 bg-white/30 border-2 border-white rounded-lg 
               shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center 
               drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mb-10 md:-mb-2"
        >
          {/* Contenido principal con dos columnas */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Información a la izquierda */}
            <div className="flex-1 text-left p-4">
              <h5 className="mb-3 text-xl font-bold text-center tracking-tight text-white dark:text-white">
                Benjamin Sequeida
              </h5>
              <p className="text-lg text-center text-white dark:text-gray-300">
                Soy un desarrollador web full-stack con experiencia en crear
                aplicaciones eficientes. Me especializo en interfaces dinámicas
                y sistemas robustos, combinando frontend y backend. He trabajado
                en gestión de usuarios, ventas e inventario, y en la
                optimización de sistemas en Cencosud. Mi enfoque está en
                resolver problemas, mejorar el rendimiento y crear experiencias
                intuitivas.
              </p>
              <div className="shadow-inner bg-slate-950 dark:bg-slate-950 hover:bg-slate-800 dark:hover:bg-slate-800 rounded-lg mt-4 transition-colors duration-300">
                <p className="py-4 text-2xl text-center text-white dark:text-white">
                  <a
                    href="mailto:benjaminsequeida95@gmail.com"
                    className="hover:shadow-white"
                  >
                    Contacta me{" "}
                    <img
                      src="/mail.svg"
                      alt="mail Icon"
                      className="w-5 h-5 mx-auto dark:invert"
                    />
                  </a>
                </p>
              </div>
            </div>

            {/* Imagen a la derecha, sobresaliendo sin aplastarse */}
            <div className="relative flex-shrink-0 p-4">
              <img
                src="/yo.jpg"
                alt="Mi Foto"
                className="w-full max-w-[240px] rounded-lg border-4 border-white shadow-lg 
                     relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
