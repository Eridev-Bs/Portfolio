"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const [isfrontVisible, setIsfrontVisible] = useState(false);
  const [isbackVisible, setIsbackVisible] = useState(false);
  const [isfullVisible, setIsfullVisible] = useState(false);
  const [isdbVisible, setIsdbVisible] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div
          className="relative z-10 w-full max-w-xl p-6 pt-12 bg-white/30 border-2 border-white rounded-lg 
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
            <h5 className="mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Benjamin Sequeida
            </h5>
          </div>
          <p className="font-normal mb-10 text-gray-700 dark:text-gray-300">
            Soy desarrollador web full-stack y analista programador con
            experiencia en la creación y optimización de aplicaciones. Me
            apasiona resolver problemas, optimizar procesos y crear soluciones
            eficientes. 🚀
          </p>
        </div>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div
          className="base relative z-10 p-6 bg-white/30 border-2 border-white rounded-lg 
                        shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <div>
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tecnologías / Proyectos
            </h5>
          </div>
          <div className="md:flex">
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
              <li>
                <button
                  onClick={() => {
                    setIsfrontVisible(!isfrontVisible);
                    setIsbackVisible(false);
                    setIsfullVisible(false);
                    setIsdbVisible(false);
                  }}
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    src="/front.svg"
                    alt="Frontend Icon"
                    className="w-4 h-4 me-2 invert"
                  />
                  Frontend
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
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    src="/Back.svg"
                    alt="Backend Icon"
                    className="w-4 h-4 me-2 invert"
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
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    src="/Fullstack.svg"
                    alt="Fullstack Icon"
                    className="w-4 h-4 me-2 invert"
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
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    src="/DB.svg"
                    alt="DB Icon"
                    className="w-4 h-4 me-2 invert"
                  />
                  DB
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://github.com/Eridev-Bs", "_blank")
                  }
                  className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    src="/github.svg"
                    alt="GitHub Icon"
                    className="w-4 h-4 me-2 invert"
                  />
                  GitHub
                </button>
              </li>
            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-auto">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Proyectos
              </h3>
              <p className="mb-1">
                Aquí podrás visualizar los proyectos que he realizado en base a
                su tipo de proyecto.
              </p>
              <p className="mb-5">
                Una vez selecciones el proyecto, podrás visualizarlo en la
                ventana inferior.
              </p>
              {isfrontVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center Frontend">
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    TetrisJs
                  </button>
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Astra
                  </button>
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Proyect Pinguino
                  </button>
                </div>
              )}
              {isbackVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center Backend">
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Astra
                  </button>
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Proyect Pinguino
                  </button>
                </div>
              )}
              {isfullVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center Fullstack">
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Proyect Pinguino
                  </button>
                </div>
              )}
              {isdbVisible && (
                <div className="flex space-x-2 w-full h-auto items-center justify-center DB">
                  <button className="w-20 h-20 bg-blue-600 text-white rounded-lg shadow-md border border-blue-700 hover:bg-blue-500 flex items-center justify-center transition-all">
                    Proyect Pinguino
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Iframe dinámico */}
          {iframeSrc && (
            <iframe
              src={iframeSrc}
              width="100%"
              height="300px"
              className="mt-4 border-none rounded-lg"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
