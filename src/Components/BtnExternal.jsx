import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";
import { baseURL } from "@/variables/env";

export default function BtnExternal({
  href,
  className,
  children,
  leftIcon,
  sede,
  rightIcon,
}) {
  const router = useRouter();
  return (
    <a
      className={
        "z-10 flex flex-row items-center justify-between w-[100%] h-fit py-2 px-4 text-sm lg:text-lg rounded-2xl cursor-pointer" +
        " " +
        className
      }
      target="_blank"
      href={href}
    >
      <div className="flex flex-row items-center gap-3">
        {leftIcon && <Image width={"50"} height={"50"} src={leftIcon}></Image>}
        <div>
          <p>{sede}</p>
          <p>{children}</p>
        </div>
      </div>
      {
        <Image
          alt="ícono derecho"
          width={"30"}
          height={"30"}
          src={rightIcon || baseURL + "/icons/external.svg"}
        ></Image>
      }
    </a>
  );
}
