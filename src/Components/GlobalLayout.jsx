import Image from "next/image";
import BtnAmazonia from "./BtnAmazonia";
import BtnExternal from "./BtnExternal";
import BtnLaPaz from "./BtnLaPaz";
import Map from "./Map";
import Map2 from "./Map2";
import Menu from "./Menu";
import Links from "./Links";
import { baseURL } from "@/variables/env";

export default function GlobalLayout({
  PrevButton,
  children,
  title,
  subtitle,
}) {
  return (
    <div className="flex min-h-screen overflow-hidden w-[100vw] h-full flex-col items-center relative bg-gray">
      <div className="w-[100%] h-fit bg-light menu_container ">
        <Menu />
      </div>
      <div
        className="flex w-full  h-fit flex-col bg-lightPurple gap-10 
                    lg:flex-row lg:bg-white lg:items-start lg:gap-0"
      >
        <div
          className="w-full h-fit  bg-lightPurple container__map relative flex flex-col justify-start items-center
                      lg:w-8/12 lg:items-start lg:min-h-[100vh] lg:max-h-fit lg:pe-[4rem]"
        >
          <div className="container__title w-full h-[fit] ms-[1rem] lg:m-[2rem]  section_title flex flex-col justify-end items-start">
            <h1 className="text-white text-2xl">{subtitle || ""}</h1>
            <h3 className="z-10 text-white text-xl lg:text-4xl font-bold mb-10 lg:mb-0">
              {title || "titulo"}
            </h3>
          </div>

          <div
            className="container__map--parent w-[100%] h-[fit] flex flex-row justify-center lg:justify-end z-10 flex-wrap 
                        lg:flex-nowrap"
          >
            <Map2 />

            <div className="w-[0px] h-[0px] lg:ms-10 lg:w-[20rem] overflow-hidden lg:h-fit conatiner__buttons flex absolute bottom-[5rem] left-0 flex-col justify-end items-start gap-4 z-20">
              <>
                <BtnExternal
                  href={
                    "https://sites.google.com/unal.edu.co/findeter-innovacion-abierta/inicio?authuser=0"
                  }
                  rightIcon={baseURL + "/svg/externalFilled.svg"}
                  className={
                    "bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"
                  }
                >
                  Convenio de innovación abierta
                </BtnExternal>
              </>
            </div>
            <div className="w-fit">{children}</div>
          </div>
          <div className="w-full px-[1rem] mt-[2rem] lg:m-0">{PrevButton}</div>
        </div>
        <Links />

        <div className="w-full mb-[10rem]  lg:w-[0px] bg-lightPurple overflow-hidden h-fit max-h-[5%] conatiner__buttons flex flex-col justify-end items-center border-4">
          <div className="w-[90%]">
            <BtnExternal
              href={
                "https://sites.google.com/unal.edu.co/findeter-innovacion-abierta/inicio?authuser=0"
              }
              rightIcon={baseURL + "/svg/externalFilled.svg"}
              className={
                "bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"
              }
            >
              Convenio de innovación abierta
            </BtnExternal>
          </div>
        </div>
      </div>
    </div>
  );
}
