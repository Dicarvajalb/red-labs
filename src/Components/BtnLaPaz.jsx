import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";

export default function BtnLaPaz({url, className}) {
  const router = useRouter()
  return (
<div className="z-10 btn__lapaz absolute w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] text-xs lg:text-2xl">
      <div className="text-lightPurple absolute bottom-0 lg:bottom-auto lg:top-0 w-[140%] lg:w-[200%] h-fit mt-[12.5%] ms-[60%] lg:ms-[50%] bg-ligthAlt3 rounded-[16px] lg:rounded-[32px] border-4 border-solid border-lightPurple">
        <p className="w-auto m-2 ms-[25%] ">
        Conflictos ambientales, territoriales y migratorios 

        <b> La Paz</b>
        </p>
      </div>
      <Image className="w-[100%] h-[100%] relative" width={400} height={400} src={"/svg/lapazBtn.svg"}/>
      
    </div>  )
}
