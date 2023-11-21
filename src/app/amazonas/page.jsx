"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import UbicationBtn from '@/Components/UbicationBtn'
import BtnIcons from '@/Components/BtnIcons'
import BtnAmazonia from '@/Components/BtnAmazonia'
import BtnLaPaz from '@/Components/BtnLaPaz'
import Image from 'next/image'
import { initialState, moveDecoration, moveMarker } from '../page'



export function initialAnim(params, router){

  

  const tMap = gsap.timeline({
    paused: true,
    onReverseComplete: () => router.push("/"),
  })
  
  
  //containers
  gsap.set([".btn__amazonia", ".btn__lapaz",], {opacity:0, duration: 0.5})

  tMap.add(gsap.to(".decoration__map", {opacity:"0", duration: 0.5}), 0)
  tMap.add(gsap.to(".decoration__map", {display:"none", duration: 0}),"+=0")


  tMap.add(gsap.to(".conatiner__buttons", {opacity:"0", duration: 0.5}), 0)
  tMap.add(gsap.to(".conatiner__buttons", {display:"none", duration: 0}),"+=0")

  tMap.add(gsap.to(".container__links", {opacity:"0", duration: 0.5}), 0)
  tMap.add(gsap.to(".container__links", {width:"0", zIndex:10, duration: 0.5}),"+=0")
  tMap.add(gsap.to(".container__links", {display:"none", duration: 0}),"+=0")
  
  tMap.add(gsap.to(".container__map", {width:"100%", duration: 1}), "+=0")
  tMap.add(gsap.to(".container__description", {width:"50rem", duration: 1}),"<")
  tMap.add(gsap.to(".container__description", {opacity:1, duration: 1}),"+=0")
  tMap.add(gsap.to(".button_back", {opacity:1, duration: 0.5}), "<")
  
  tMap.add(gsap.to(".links_container", {width:"0%", duration: 1}), 0)
  tMap.add(gsap.to(".amazonia_svg", {transformOrigin:"70% 120%", duration: 1}),0)

  tMap.add(gsap.to(".amazonia_svg", {scale:3, zIndex:10, duration: 1}),0)
  
  
  tMap.add(gsap.to([".map_svg>:not(.amazonia_svg)"], {position:"absolute", scale:0, duration: 0.5}), 0)

  tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)
  tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)

  

  if(params.get("forward") == 0){
    tMap.duration(0)
  }
  
  return tMap 
  
}

export default function Home(props) {
  useEffect(() => {
    if(props.router){
      console.log(props.router.query.name);
    }
    
}, [props.router]);

  const router = useRouter()
  const [timeline, setTimeline] = useState(null)
  const params = useSearchParams()

  

  const handleBack = () =>{

    timeline.duration(timeline.totalDuration())
    timeline.reverse()
    
    
  }

  useEffect(() => {
    initialState()
    const tMap = initialAnim(params, router)
    tMap.play()
    setTimeline(tMap)

  }, [])

  return (
    <>
    <GlobalLayout title={"Amazonía"} subtitle={"Viaje hacia la construcción de entornos pacíficos y autónomos"} PrevButton={<PreviusPageButton handleBack={handleBack}/>}>
      <div className={"container__description w-0 opacity-0 px-[1rem] lg:px-[0] max-w-[100vw] overflow-hidden flex flex-col justify-center items-center h-full " + 
                      ""}>
        <div className={"w-[100%] " + "lg:w-[50%]"}>
        <p className='text-white text-2xl mb-10'>
          <b>
          Seguridad y soberanía alimentaria 
          </b><br></br>
          Exposición virtual sobre soberanía alimentaria: Descubriendo la importancia de garantizar el derecho de las comunidades a producir, acceder y controlar sus propios alimentos de forma sostenible e inclusiva."
          Estudio Soberanía alimentaria Sede Amazonía
          Galería
        </p>
          <BtnIcons onClick={() => router.push("/amazonas/galeria")}
          rightIcon={"/icons/arrowRight.svg"}
           className={"w-[100%] bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple "+
                                  "lg:w-[15rem"}>
            Accede al visualizador de imágenes
          </BtnIcons>
        </div>
      </div>
    </GlobalLayout>
    <Image alt='decoración de mapa' className="decoration__map absolute w-[30rem] lg:w-[50rem] xl:w-[60rem] z-0" src={"/svg/decorationMap.svg"} width={500} height={500}/>

      <BtnAmazonia/>
      <BtnLaPaz/> 
    </>
  )
}
