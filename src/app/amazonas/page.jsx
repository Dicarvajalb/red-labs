"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import UbicationBtn from '@/Components/UbicationBtn'

export function initialState(){

}
export function moveMarker(){
  var targetPos = document.getElementsByClassName("amazonia_svg")[0].getClientRects()[0]

  var tMoveMarker = gsap.timeline()
  
  //btns

  return tMoveMarker
}


export function initialAnim(params, router){

  

  const tMap = gsap.timeline({
    paused: true,
    onReverseComplete: () => router.push("/"),
  })
  
  tMap.add(gsap.set(".svg__map", {height:"50rem", duration: 1}), 0)
  //containers
  tMap.add(gsap.set(".container__map", {width:"#100%", duration: 1}), 0)
  tMap.add(gsap.to(".container__map", {width:"100%", duration: 1}), 0)

  tMap.add(gsap.to(".container__links", {width:"0%", zIndex:10, duration: 1}),0)
  tMap.add(gsap.to(".container__links", {display:"none", duration: 0}),"+=0")
  
  tMap.add(gsap.to(".container__description", {width:"50rem", duration: 1}),0)

  

  tMap.add(gsap.set(".amazonia_svg", {fill:"#2baa92", duration: 1}), 0)
  tMap.add(gsap.to(".amazonia_svg", {scale:3, zIndex:10, duration: 1}),0)
  tMap.add(gsap.to(".amazonia_svg", {transformOrigin:"70% 120%", duration: 1}),0)


 
  
  
  tMap.add(gsap.to(".links_container", {width:"0%", duration: 1}), 0)
  tMap.add(gsap.to(".button_back", {display:"unset", duration: 0}), 0)
tMap.add(gsap.to([".map_svg>:not(.amazonia_svg)"], {position:"absolute", scale:0, duration: 0.5}), 0)

  tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)
  
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
    
    const tMap = initialAnim(params, router)
    tMap.play()
    setTimeline(tMap)

  }, [])

  return (
    <>
    <GlobalLayout PrevButton={<PreviusPageButton handleBack={handleBack}/>}>
      <div className='container__description'>
        gi
      </div>
    </GlobalLayout>
    
    </>
  )
}
