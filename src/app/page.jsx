"use client"
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import Map from '@/Components/Map'
import { createPortal } from 'react-dom'

export function initialState(){

}

export function initialAnim(){

}

export default function Home() {
  const amazonasRef = useRef()
  const noInteractiveRef = useRef()

  const ref = useRef()
  
  
  var [body, setBody] = useState()
  function updateBody(){
    setBody(document.getElementById('body_id'))
    console.log(document.getElementById('body_id'))
    
  } 
  useEffect(()=>{
    if(ref.current){
      setBody(ref.current.contentDocument.getElementById('body_id'))
      console.log(ref.current.contentDocument.getElementById("body_id"))
    }
  },[ref])
  
  useIsomorphicLayoutEffect(() => {
      initialState()
      initialAnim()

  }, [])

  return (
    <>
    {console.log("ehm", process.env.rawJsFromFile)}
      <GlobalLayout/>
    </>
  )
}
