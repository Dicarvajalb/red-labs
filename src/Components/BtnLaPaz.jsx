import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";
import Image from "next/image";

export default function BtnLaPaz({url, className}) {
  const router = useRouter()
  return (
      <Image className="btn__lapaz z-10 absolute" width={400} height={400} src={"/svg/lapazBtn.svg"}/>
  )
}
