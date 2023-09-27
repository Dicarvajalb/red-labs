"use client"
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import Menu from '@/Components/Menu'

export default function Recorrido() {
  const amazonasRef = useRef()
  const noCesarRef = useRef()
  const mapBgRef = useRef()
  const mapSVGRef = useRef()
  const cesarRef = useRef()
  const router = useRouter()
  const menuRef = useRef()
  const backRef = useRef()
  
  const [timeline, setTimeline] = useState(null)
  const handleBack = () =>{
    //moveMarker().reverse()
    timeline.reverse()
    
  }

  function initialAnim(){
    const timeline = gsap.timeline({paused: true, onReverseComplete: () => router.push("/")})
    timeline.add(gsap.set(".cesar_svg", {zIndex:4}),0)
    timeline.add(gsap.set(".map_svg>:not(.cesar_svg)", {zIndex:0}),0)
    timeline.add(gsap.to(".cesar_svg", {scale:4, x:0, y:0, transformOrigin: "350% -10%", duration: 1}),0)

    timeline.add(gsap.to(".map_container", {width:"100%", duration: 1}), 0)
    timeline.add(gsap.to(".button_back", {display:"unset", duration: 0}), 0)
    timeline.add(gsap.to(".map_svg>:not(.cesar_svg)", {scale:0, duration: 1}), 0)

    timeline.play()
    setTimeline(timeline)
  }

  useIsomorphicLayoutEffect(() => {
      
      initialAnim()
      
  }, [])

  return (
    <>
    <GlobalLayout PrevButton={<PreviusPageButton handleBack={handleBack}/>}/>
    
    </>
  )
}
