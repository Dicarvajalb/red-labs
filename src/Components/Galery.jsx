"use client"
import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";
import { galeryData } from "@/staticData/galery";
import { useState } from "react";

export default function Galery() {
  const [selected, setSelected] = useState(1)
  
  const router = useRouter()

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function changeSelected (number) {
    setSelected(mod(selected + number, galeryData.length))
  }
  return (
    <div className={"container__galery flex flex-nowrap flex-col-reverse items-center justify-start w-[0] h-[0] opacity-0 " +
    " lg:w-[0] lg:flex-row"}>
      <div className='text-white bg-lightPurple w-fit lg:w-[30%] text-2xl flex flex-col justify-start items-center'>
        <div className="w-[70%] mt-[2rem] lg:mt-[10rem]">
        {galeryData[selected].description}
        </div>
      </div>
      <div style={{backgroundImage: `url(${galeryData[selected].imgUrl})`}} className={
                    "bg-cover bg-center bg-no-repeat text-white bg-lightPurple w-[100vw] h-[40rem] text-2xl d relative"+
                    ' text-white bg-lightPurple lg:w-[70%] lg:h-[70rem] text-2xl relative'}>

        <div className="container__points flex flex-row absolute left-[50%] translate-x-[-50%] bottom-0">
          {
            galeryData.map((photo, index) =>
              <div className={`bg-${selected==index? "lightPurple": "white"} w-[1rem] h-[1rem] rounded-[50%]`}></div>
            )
          }
        </div>
        <div className="container__controls flex flex-row justify-between absolute top-[50%] left-[50%] w-[100%] translate-x-[-50%] translate-y-[-50%] bottom-0">
              <Image onClick={() => changeSelected(-1)} className="cursor-pointer ms-4"  src={"/svg/galeryArrow.svg"} width={"50"} height={"50"}/>
              <Image onClick={() => changeSelected(1)} className="rotate-180  me-4 cursor-pointer" src={"/svg/galeryArrow.svg"} width={"50"} height={"50"}/>
        </div>
      </div>
    </div>
  )
}
