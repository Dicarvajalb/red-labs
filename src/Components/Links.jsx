"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BtnExternal from "./BtnExternal";
import { useState } from "react";
import { baseURL } from "@/variables/env";

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
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <div
      className="z-10 container__links w-full h-[fit] flex flex-col items-center
    lg:w-4/12"
    >
      <div
        className={`flex flex-col items-center w-[90%] ${
          closed ? "h-[90px]" : "h-[fit-content]"
        }  flex flex-col max-h-[100%] overflow-hidden bg-white p-[2rem] rounded-2xl gap-2
             lg:mt-[2rem] lg:h-fit lg:bg-ligthAlt3`}
      >
        <h3 className="text-xl lg:text-4xl font-bold text-lightPurple mb-[2rem]">
          Conoce nuestros laboratorios
        </h3>

        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/compost.svg"}
          sede={"Sede Amazonía"}
          href={baseURL + "/laboratorio/ecologia"}
        >
          Ecología y Conservación de la Flora y Fauna Silvestre
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/add_a_photo.svg"}
          sede={"Sede Bogotá"}
          href={baseURL + "/laboratorio/fotografia"}
        >
          Fotografía
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/3d_rotation.svg"}
          sede={"Sede Bogotá"}
          href={baseURL + "/laboratorio/fundicion"}
        >
          Fundición y Pulvimetalurgia
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/animation.svg"}
          sede={"Sede Bogotá"}
          href={baseURL + "/laboratorio/imagen_digital"}
        >
          Imagen Digital
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/memory.svg"}
          sede={"Sede Bogotá"}
          href={baseURL + "/laboratorio/lab101"}
        >
          LAB101
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/biotech.svg"}
          sede={"Sede Amazonía"}
          href={baseURL + "/laboratorio/fisica_quimica_biologia"}
        >
          Laboratorio de Física, Química y Biología
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/waves.svg"}
          sede={"Sede Amazonía"}
          href={baseURL + "/laboratorio/humedales"}
        >
          Manejo y Gestión de Humedales
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/neurology.svg"}
          sede={"Sede Bogotá"}
          href={baseURL + "/laboratorio/neurociencia"}
        >
          Neurociencia cognitiva y comunicación
        </BtnExternal>
        <BtnExternal
          className={"text-white font-bold hover:text-white bg-lightPurple"}
          leftIcon={baseURL + "/icons/peace.svg"}
          sede={"Sede La Paz"}
          href={baseURL + "/laboratorio/paz"}
        >
          {" "}
          Paz Territorial
        </BtnExternal>
      </div>
      <Image
        alt="ícono"
        src={baseURL + "/svg/HomeArrow.svg"}
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
