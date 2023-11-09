"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import { initialAnim as initialPrevAnim } from '@/app/amazonas/page'
import BtnExternal from '@/Components/BtnExternal'
import Galery from '@/Components/Galery'

export function initialState(params, router){
  const tMap = initialPrevAnim(params, router)
  tMap.duration(0)
  tMap.play()
}



export function initialAnim(params, router){

  

  const tMap = gsap.timeline({
    paused: true,
    onReverseComplete: () => router.push("/amazonas?forward=0"),
  })

  tMap.add(gsap.to(".svg__map", {opacity:0, duration: 0.5}),0)
  tMap.add(gsap.to(".svg__map", {width:0, height: 0, display: "none", duration: 0}),"+=0")
  tMap.add(gsap.to(".container__description", {opacity:0, duration: 0.5}),0)
  tMap.add(gsap.to(".container__description", {width:0, height: 0, display: "none", duration: 0}),"+=0")
  tMap.add(gsap.to(".container__title", {opacity:0, duration: 0.5}),0)
  tMap.add(gsap.to(".container__title", {width:0, height: 0, display: "none", duration: 0}),"+=0")

  tMap.add(gsap.to(".container__galery", {width:0, height: 0, duration: 0}),0)
  tMap.add(gsap.to(".container__galery", {width:"100%", height: "auto",  duration: 0}),0)
  tMap.add(gsap.to(".container__galery", {opacity:1, duration: 1}),0)

  tMap.add(gsap.to(".container__map", {padding:0, duration: 1}),0)
  

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

  useIsomorphicLayoutEffect(() => {
    initialState(params, router)
    const tMap = initialAnim(params, router)
    
    tMap.play()
    setTimeline(tMap)
    

  }, [])

  return (
    <>
    <GlobalLayout title={"Amazonía"} subtitle={"Viaje hacia la construcción de entornos pacíficos y autónomos"} PrevButton={<PreviusPageButton handleBack={handleBack}/>}>
      <div className={"container__description w-[0rem] max-w-[100vw] overflow-hidden flex flex-col justify-center items-center h-full " + 
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
          <BtnExternal className={"w-[100%] bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple "+
                                  "lg:w-[15rem"}>
            Accede al visualizador de imágenes
          </BtnExternal>
        </div>
        
      </div>
      <Galery/>
    </GlobalLayout>
    </>
  )
}
