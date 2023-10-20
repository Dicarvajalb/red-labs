"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import UbicationBtn from '@/Components/UbicationBtn'
import { galeryData } from '@/staticData/galery'
import { initialAnim as initialPrevAnim, moveMarker } from '@/app/amazonas/page'
import Photograph from '@/Components/Photograph'

export function initialState(params, router){
  const tMap = initialPrevAnim(params, router)
  tMap.duration(0)
  tMap.play()
}

export function onResize (){
  var pos = document.getElementsByClassName("amazonas_svg")[0]?.getClientRects()[0]
  var pos2 = document.getElementsByClassName(galeryData[0].className)[0]?.getClientRects()[0]
  console.log("[marcador] resize", pos)
  gsap.to(".button_amazonia", {top:pos?.top + pos?.height/2 - pos2?.height, duration: 1})
  gsap.to(".button_amazonia", {left:pos?.left + pos?.width/2 - pos2?.width/2, duration: 1})
}

export function initialAnim(params, router){
  window.addEventListener("resize", onResize)

  

  const tMap = gsap.timeline({
    paused: true,
    onReverseComplete: () => router.push("/amazonas?forward=0"),
  })
  
  tMap.add(gsap.to(".amazonia_svg", {scale:5,  transformOrigin:"150% 100%", zIndex:10, duration: 1}),0)
  
  //tMap.add(gsap.to(".map_container", {width:"100%", duration: 1}), 0)
  tMap.add(() => moveMarker(), "+=0")

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
    <GlobalLayout PrevButton={<PreviusPageButton handleBack={handleBack}/>} children={<Photograph/>}/>
    {
      galeryData.map(photo =>
        <UbicationBtn url={photo.url} className={photo.className}/>
      )
    }
    
    </>
  )
}
