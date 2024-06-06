"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BtnExternal from "./BtnExternal";
import { useState } from "react";

export default function Links({
  href,
  className,
  children,
  leftIcon,
  sede,
  rightIcon,
}) {
  const router = useRouter();
  const [closed, setClosed] = useState(true);
  return (
    <div
      className="z-10 container__links w-full h-[fit] max-h-[100vh] flex flex-col items-center
    lg:w-4/12"
    >
      <div
        className={`flex flex-col items-center w-[90%] ${
          closed ? "h-[90px]" : "h-fit"
        }  max-h-[100%] overflow-hidden bg-white p-[2rem] rounded-2xl gap-2 
             lg:mt-[2rem] lg:h-fit lg:bg-ligthAlt3`}
      >
        <h3 className="text-xl lg:text-4xl font-bold text-lightPurple mb-[2rem]">
          Conoce nuestros laboratorios
        </h3>

        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Amazonía"}
          href="../laboratorio/ecologia"
        >
          Ecología y Conservación de la Flora y Fauna Silvestre
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Bogotá"}
          href="../laboratorio/fotografia"
        >
          Fotografía
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Bogotá"}
          href="../laboratorio/fundicion"
        >
          Fundición y Pulvimetalurgia
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Bogotá"}
          href="../laboratorio/imagen_digital"
        >
          Imagen Digital
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Bogotá"}
          href="../laboratorio/lab101"
        >
          LAB101
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Amazonía"}
          href="../laboratorio/fisica_quimica_biologia"
        >
          Laboratorio de Física, Química y Biología
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Amazonía"}
          href="../laboratorio/humedales"
        >
          Manejo y Gestión de Humedales
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede Bogotá"}
          href="../laboratorio/neurociencia"
        >
          Neurociencia cognitiva y comunicación
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={"d"}
          sede={"Sede La Paz"}
          href="../laboratorio/paz"
        >
          {" "}
          Paz Territorial
        </BtnExternal>
      </div>
      <Image
        src="/svg/HomeArrow.svg"
        width={50}
        height={50}
        className={`w-[50px] cursor-pointer overflow-hidden lg:w-[0] mt-[-25px] z-10 ${
          closed && "rotate-180"
        }`}
        onClick={() => setClosed(!closed)}
      />
    </div>
  );
}
