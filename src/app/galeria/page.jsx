"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'

export default function Home(props) {
  useEffect(() => {
    if(props.router){
      console.log(props.router.query.name);
    }
    
}, [props.router]);

  const router = useRouter()
  const [timeline, setTimeline] = useState(null)

  const params = useSearchParams()

  console.log("[params]" , params.get("forward") == 1)
  const handleBack = () =>{
    moveMarker().reverse()
    timeline.reverse()
    
    
  }

  const moveMarker = () =>{
    var pos = document.getElementsByClassName("amazonia_svg")[0].getClientRects()[0]
    
    var pos2 = document.getElementsByClassName("button_amazonia")[0].getClientRects()[0]
    //console.log("[marcador]", pos)

    var tMoveMarker = gsap.timeline({paused: true})
    .add(gsap.set(".button_amazonia", {scale:0, duration: 1}), 0)
    .add(gsap.set(".button_amazonia", {top:pos.top + pos.height/2 - pos2.height, duration: 1}), 0)
    .add(gsap.set(".button_amazonia", {left:pos.left + pos.width/2 - pos2.width/2, duration: 1}),0)
    .add(gsap.to(".button_amazonia", {scale:1, duration: 1}), 0)

    return tMoveMarker
  }


  const onResize = () =>{
    var pos = document.getElementsByClassName("amazonas_svg")[0]?.getClientRects()[0]
    var pos2 = document.getElementsByClassName("button_amazonia")[0]?.getClientRects()[0]
    console.log("[marcador] resize", pos)
    gsap.to(".button_amazonia", {top:pos?.top + pos?.height/2 - pos2?.height, duration: 1})
    gsap.to(".button_amazonia", {left:pos?.left + pos?.width/2 - pos2?.width/2, duration: 1})
  }
  

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", onResize)

    

    const tMap = gsap.timeline({
      paused: true,
      onReverseComplete: () => router.push("/"),
      onComplete: () => moveMarker().play(),
    })
    
    tMap.add(gsap.set(".amazonia_svg", {fill:"#2baa92", duration: 1}), 0)
    tMap.add(gsap.to(".amazonia_svg", {scale:3,  transformOrigin:"150% 125%", zIndex:10, duration: 1}),0)
    
    tMap.add(gsap.to(".map_container", {width:"100%", duration: 1}), 0)
    tMap.add(gsap.to(".button_back", {display:"unset", duration: 0}), 0)
    tMap.add(gsap.to([".map_svg>:not(.amazonia_svg)"], {position:"absolute", scale:0, duration: 0.5}), 0)

    tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)
    


    if(params.get("forward") == 0){
      tMap.duration(0)
    }
    
    tMap.play()
    setTimeline(tMap)
    

  }, [])

  return (
    <>
    <GlobalLayout PrevButton={<PreviusPageButton handleBack={handleBack}/>}/>
    <svg className='hover:cursor-pointer absolute top-[-100px] button_amazonia' onClick={() => router.push("/galeria/1")} width="86" height="104" viewBox="0 0 86 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.50008 42.9133C1.50008 20.0411 20.0416 1.49984 42.9137 1.49984C65.7859 1.49985 84.3274 20.0412 84.3274 42.9133C84.3274 54.2067 78.1758 64.5842 69.4115 74.4356C62.9297 81.7213 55.1741 88.5583 47.6709 95.1727C45.3871 97.186 43.1268 99.1787 40.9328 101.157C39.1147 99.3564 37.2141 97.516 35.2709 95.6343C28.6537 89.2266 21.543 82.341 15.5173 74.9219C7.39848 64.9255 1.50008 54.2441 1.50008 42.9133Z" fill="#C0A95E" stroke="#504558" stroke-width="3"/>
            <circle cx="42.5937" cy="40.1921" r="19.6696" fill="#FFFBEF" stroke="#504558" stroke-width="3"/>
    </svg>
    </>
  )
}
