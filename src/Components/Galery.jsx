"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { galeryData } from "@/staticData/galery";
import { useState } from "react";
import PreviusPageButton from "./PreviusPageButton";
import { baseURL } from "@/variables/env";

export default function Galery() {
  const [selected, setSelected] = useState(1);

  const router = useRouter();

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function changeSelected(number) {
    setSelected(mod(selected + number, galeryData.length));
  }
  return (
    <div
      className={
        "container__galery flex flex-nowrap flex-col-reverse items-start  w-[100vw] h-fit" +
        " lg:flex-row"
      }
    >
      <div className="text-white w-fit lg:w-[30%] h-full text-2xl flex flex-col justify-start items-center  border-black z-10">
        <div className="w-[80%] mt-[2rem]  flex flex-col gap-3">
          <div>
            <h2>{galeryData[selected].title}</h2>
            <h3>{galeryData[selected].subtitle}</h3>
            <p className="whitespace-pre-wrap">
              {galeryData[selected].description}
            </p>
          </div>
          <div
            onClick={() => router.back()}
            className="flex mt-10 flex-row items-center gap-4 button_back"
          >
            <svg
              className={"hover:cursor-pointer z-10 w-[5rem] lg:w-auto"}
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.0001 0.628906C22.7471 0.628906 0.628662 22.7473 0.628662 50.0003C0.628662 77.2533 22.7471 99.3717 50.0001 99.3717C77.2531 99.3717 99.3715 77.2533 99.3715 50.0003C99.3715 22.7473 77.2531 0.628906 50.0001 0.628906ZM67.2801 53.7032H41.6563L50.1482 62.1951C51.58 63.6268 51.58 65.9967 50.1482 67.4284C49.4076 68.169 48.4696 68.5146 47.5315 68.5146C46.5935 68.5146 45.6554 68.169 44.9148 67.4284L30.1034 52.617C28.6716 51.1852 28.6716 48.8154 30.1034 47.3836L44.9148 32.5722C46.3466 31.1404 48.7164 31.1404 50.1482 32.5722C51.58 34.004 51.58 36.3738 50.1482 37.8056L41.6563 46.2975H67.2801C69.3043 46.2975 70.9829 47.9761 70.9829 50.0003C70.9829 52.0246 69.3043 53.7032 67.2801 53.7032Z"
                fill="#F7F0DA"
              />
            </svg>
            <h2 className="text-white text-2xl lg:text-4xl">Atrás</h2>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${baseURL + galeryData[selected].image})`,
        }}
        className={
          "bg-cover bg-center bg-no-repeat text-white bg-lightPurple w-[100vw] h-[40rem] text-2xl d relative" +
          " text-white bg-lightPurple lg:w-[70%] lg:h-[70rem] text-2xl relative"
        }
      >
        <div className="container__points flex flex-row absolute left-[50%] translate-x-[-50%] bottom-2 gap-[0.2vw]">
          {galeryData.map((photo, index) => (
            <div
              className={`bg-${
                selected == index ? "lightPurple" : "white"
              } w-[0.5vw] h-[0.5vw] rounded-[50%]`}
            ></div>
          ))}
        </div>
        <div className="container__controls flex flex-row justify-between absolute top-[50%] left-[50%] w-[100%] translate-x-[-50%] translate-y-[-50%] bottom-0">
          <Image
            alt="ícono"
            onClick={() => changeSelected(-1)}
            className="cursor-pointer ms-5"
            src={baseURL + "/svg/galeryArrow.svg"}
            width={"50"}
            height={"50"}
          />
          <Image
            alt="ícono"
            onClick={() => changeSelected(1)}
            className="rotate-180  me-8 cursor-pointer"
            src={baseURL + "/svg/galeryArrow.svg"}
            width={"50"}
            height={"50"}
          />
        </div>
      </div>
    </div>
  );
}
