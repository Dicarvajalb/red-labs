import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";


export default function BtnInternal({href, className, children, leftIcon, sede, rightIcon}) {
  const router = useRouter()
  return (
      <Link className={"flex flex-row items-center justify-between w-[100%] h-fit bg-lightPurple py-2 px-4 text-lg text-light hover:text-white rounded-2xl cursor-pointer"
      +" "+className} 
      href={href}
      >
          <div className="flex flex-row items-center gap-3">
          {leftIcon && <Image width={"50"} height={"50"} src={"/icons/ecologia.svg"}></Image>}
          <div>
          <p>
          {sede}
          </p>
          <p >
          {children}
          </p>
          </div>
          </div>
        {<Image width={"30"} height={"30"} src={rightIcon || "/icons/external.svg"}></Image>}
        
      </Link>
  )
}
