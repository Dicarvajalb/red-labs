"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [closed, setClosed] = useState(true)

  return (
    <div className="flex flex-row h-[3rem]">
      <div className="grow flex  flex-row items-center justify-center gap-4">
      <Image src={"/icons/rltp.svg"} width={"30"} height={"30"}></Image>
        <h3 className="text-3xl text-lightPurple">RLTP</h3>
      </div>
      <div className="flex-col  gap-4 w-[0]  lg:w-[auto] lg:grow-[2] overflow-hidden flex lg:flex-row items-center justify-around">
        <Link href={"/"} className="text-2xl text-lightPurple font-bold">Página Principal</Link>
        <Link href={"/amazonas"} className="text-2xl text-lightPurple font-bold">Amazonía</Link>
        <Link href={"/lapaz"} className="text-2xl text-lightPurple font-bold">La Paz</Link>
        <Link href={"/nosotros"} className="text-2xl text-lightPurple font-bold">Quienes somos</Link>
      </div>
      <div className="relative grow  flex flex-row justify-center">
        <Image className="cursor-pointer lg:cursor-auto" onClick={() => setClosed(!closed)} src={"/icons/burgerMenu.svg"} width={"30"} height={"30"}></Image>
        {!closed && <div className="text-xs md:text-lg absolute top-[100%] z-40 p-[1rem] lg:p-0 flex-col gap-4 bg-light w-auto lg:w-[0] lg:grow-[2] overflow-hidden flex lg:flex-row items-start justify-around">
        <Link href={"/"} className=" text-lightPurple font-bold">Página Principal</Link>
        <Link href={"/amazonas"} className="text-lightPurple font-bold">Amazonía</Link>
        <Link href={"/lapaz"} className="text-lightPurple font-bold">La Paz</Link>
        <Link href={"/nosotros"} className="text-lightPurple font-bold">Quienes somos</Link>
        </div>}
      </div>
    </div>
  )
}
