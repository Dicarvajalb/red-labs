import { useRouter } from "next/navigation";
import Map from "./Map";
import Menu from "./Menu";

export default function UbicationBtn({url, className}) {
  const router = useRouter()
  return (
    <svg className={'hover:cursor-pointer absolute top-[-100px] '+className} onClick={() => router.push(url)} width="86" height="104" viewBox="0 0 86 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.50008 42.9133C1.50008 20.0411 20.0416 1.49984 42.9137 1.49984C65.7859 1.49985 84.3274 20.0412 84.3274 42.9133C84.3274 54.2067 78.1758 64.5842 69.4115 74.4356C62.9297 81.7213 55.1741 88.5583 47.6709 95.1727C45.3871 97.186 43.1268 99.1787 40.9328 101.157C39.1147 99.3564 37.2141 97.516 35.2709 95.6343C28.6537 89.2266 21.543 82.341 15.5173 74.9219C7.39848 64.9255 1.50008 54.2441 1.50008 42.9133Z" fill="#C0A95E" stroke="#504558" stroke-width="3"/>
            <circle cx="42.5937" cy="40.1921" r="19.6696" fill="#FFFBEF" stroke="#504558" stroke-width="3"/>
    </svg>
  )
}
