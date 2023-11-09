import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";

export default function Note({className, children}) {
  const router = useRouter()
  return (
    <div className={className + " bg-ligthAlt3 text-lightPurple rounded-lg p-[1rem] text-2xl "}>
      {children}
    </div>
  )
}
