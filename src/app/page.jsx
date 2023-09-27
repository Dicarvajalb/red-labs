"use client"
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import Map from '@/Components/Map'

export default function Home() {
  const amazonasRef = useRef()
  const noInteractiveRef = useRef()
  const mapBgRef = useRef()
  const mapSVGRef = useRef()
  const cesarRef = useRef()
  const router = useRouter()
  const menuRef = useRef()

  function initialAnim(){

  }

  useIsomorphicLayoutEffect(() => {
      
      initialAnim()
      

  }, [])

  return (
    <>
    <GlobalLayout Map={<Map amazonasRef={amazonasRef} noInteractiveRef={noInteractiveRef} cesarRef={cesarRef} mapSVGRef={mapSVGRef}/>} />
    </>
  )
}
