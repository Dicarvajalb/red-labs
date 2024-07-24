"use client";
import Menu from "@/Components/Menu";
import { baseURL } from "@/variables/env";
import Image from "next/image";
import { useState } from "react";




export default function Home(props) {
  const [closed, setClosed] = useState(false);
 


  return (
    <>
      <div className="overflow-hidden flex w-[100vw] h-full flex-col items-center relative">
        <div className="w-[100%] h-fit bg-light menu_container shadow-lg">
          <Menu />
        </div>
        <div
          className="relative flex flex-col items-center justify-center w-full  h-fit  bg-lightPurple text-white
                     "
        >
          <div
            className="z-10 flex flex-col px-[1rem] items-center w-full gap-[2rem] mt-[2rem]  h-fit text-white
                      lg:w-[50%]"
          >
            <h1 className="text-4xl font-bold">
              Mapa del sitio
            </h1>
            <h2 >
              
            </h2>
            <div>
            <ul className="list-disc h-[100vh]">
              <li>
                <a href={baseURL} className="text-2xl font-bold text-white">Página principal</a>
              
              </li>
              <li><a href={baseURL+"/amazonas"} className="text-2xl font-bold text-white" >Amazonia</a>
              <ul className="list-disc">
                <li><a href={baseURL+"/amazonas/galeria"} className="text-2xl font-bold text-white" >Galería</a></li>
              </ul>
              </li>

              <li><a href={baseURL+"/lapaz"} className="text-2xl font-bold text-white" >De La Paz</a></li>

              <li><a href={baseURL+"/nosotros"} className="text-2xl font-bold text-white" >Quiénes somos</a></li>


            </ul>
            </div>
           
          </div>
          <Image
            alt="decoración izquierda"
            className="absolute left-0 top-0 opacity-20 lg:opacity-100 z-0"
            src={"svg/leftDecoration.svg"}
            width={500}
            height={100}
          />
          <Image
            alt="decoración derecha"
            className="absolute right-0 top-0 opacity-20 lg:opacity-100 z-0"
            src={"svg/rightDecoration.svg"}
            width={350}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
