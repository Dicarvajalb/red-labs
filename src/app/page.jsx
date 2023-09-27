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

  function initialAnim(){

  }

  useIsomorphicLayoutEffect(() => {
      
      initialAnim()
      

  }, [])

  return (
    <>
    <GlobalLayout  />
    </>
  )
}
