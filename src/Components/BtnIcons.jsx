import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";


export default function BtnIcons({href, className, children, leftIcon, sede, rightIcon, onClick, classRight, classLeft}) {
  const router = useRouter()
  return (
      <a className={"flex flex-row items-center justify-between w-[100%] h-fit bg-lightPurple p-4 text-lg rounded-2xl cursor-pointer"
      +" "+className} 
      target="_blank"
      onClick={onClick}>
        {leftIcon && <Image className={classLeft} width={"50"} height={"50"} src={leftIcon}></Image>}
          <div className="flex flex-row items-center gap-3">
          
          <div>
          <p>
          {sede}
          </p>
          <p >
          {children}
          </p>
          </div>
          </div>
        {<Image className={"ms-2 "+classRight} width={"40"} height={"40"} src={rightIcon || "/icons/external.svg"}></Image>}
        
      </a>
  )
}
