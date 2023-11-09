"use client"
import { gsap } from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../../../helpers/isomorphicEffect'
import GlobalLayout from '@/Components/GlobalLayout'
import PreviusPageButton from '@/Components/PreviusPageButton'
import UbicationBtn from '@/Components/UbicationBtn'
import BtnExternal from '@/Components/BtnExternal'
import BtnInternal from '@/Components/BtnInternal'
import Image from 'next/image'
import Menu from '@/Components/Menu'
import BtnIcons from '@/Components/BtnIcons'
import Note from '@/Components/Note'

export function initialState(){

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

  tMap.add(gsap.to(".links_container", {width:"0%", duration: 1}), 0)


  tMap.add(gsap.to(".cesar_svg", {transformOrigin:"70% 10%", duration: 1}),0)

  tMap.add(gsap.to(".cesar_svg", {scale:4,strokeWidth: "1px",  zIndex:10, duration: 1}),0)

  
  tMap.add(gsap.to(".button_back", {display:"unset", duration: 0}), 0)
  tMap.add(gsap.to([".map_svg>:not(.cesar_svg)"], {position:"absolute", scale:0, duration: 0.5}), 0)

  tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)
  tMap.add(gsap.to(".button_amazonia", {display:"absolute", top:"-100px", duration: 0}), 0)

  

  if(params.get("forward") == 0){
    tMap.duration(0)
  }
  
  return tMap 
  
}

export default function Home(props) {
  const [closed, setClosed] = useState(false)
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
    
    const tMap = initialAnim(params, router)
    tMap.play()
    setTimeline(tMap)

  }, [])

  return (
    <>
    <div className="overflow-hidden flex w-[100vw] h-full flex-col items-center relative">
    <div className='w-[100%] h-fit bg-light menu_container shadow-lg'>
      <Menu/>
    </div>
    <div className="relative flex flex-col items-center justify-center w-full  h-fit  bg-lightPurple text-white
                     ">
      <div className="z-10 flex flex-col items-center w-full gap-[2rem] mt-[2rem]  h-fit text-white
                      lg:w-[50%]">
        <h1 >Alianza por la innovación pedagógica con uso de tecnologías para la paz</h1>
        <div className={`text-xl font-normal h-fit`}>
        <p>
        La «Alianza por la innovación pedagógica con uso de tecnologías para la paz» es beneficiaria de la “Convocatoria para la conformación o el fortalecimiento de estrategias de cooperación entre laboratorios 2022-2024”, organizada por la Dirección Nacional de Investigación y Laboratorios de la Vicerrectoría de Investigación de la Universidad Nacional de Colombia. Convocatoria que tiene por objetivo apoyar el desarrollo de proyectos que busquen potenciar el Sistema Nacional de Laboratorios (SNL) a través de la conformación o fortalecimiento de estrategias de cooperación entre laboratorios de diferentes sedes, facultades o institutos.</p>
        <br/>
        { !closed &&
        <>        <p>Esta convocatoria se enmarca en el Plan Global de Desarrollo de la Universidad Nacional de Colombia 2022-2024, en su programa 6 (E3P2) «Armonización de las funciones misionales para la gestión del conocimiento» y del Proyecto Componente 607-C4 «Mejoramiento de la infraestructura de los laboratorios para el avance de la Ciencia, la Tecnología y la Innovación» del proyecto de inversión de la Vicerrectoría de Investigación 2022-2024 «Armonización, fortalecimiento y visibilidad de las funciones de investigación, extensión e innovación para una gestión del conocimiento colectiva y transformadora».</p>
        <br/>
        <p> La «Alianza por la Innovación Pedagógica con Uso de Tecnologías para la Paz» es una estrategia de colaboración diseñada para facilitar el intercambio de experiencias, conocimientos y tecnologías entre diversos laboratorios de la Universidad Nacional de Colombia. Su objetivo principal es dar visibilidad a los servicios que estos laboratorios ofrecen, así como avanzar en la digitalización de sus procesos de investigación e implementación de herramientas tecnológicas. Esta alianza se basa en la amplia experiencia en docencia, investigación y extensión de sus miembros, centrándose en la construcción y desarrollo de la paz territorial en regiones como Cesar, Amazonia y Cundinamarca. Su propósito fundamental es contribuir a la resolución de las necesidades relacionadas con la construcción de la paz en estos territorios. Entre las soluciones que se buscan implementar se incluyen la creación de contenido temático, el desarrollo de soluciones tecnológicas y estrategias de visibilización de los laboratorios participantes.
        </p>
        <br/>
        <p>
        Esta alianza se basa en la amplia experiencia en docencia, investigación y extensión de sus miembros, centrándose en la construcción y desarrollo de la paz territorial en regiones como Cesar, Amazonia y Cundinamarca. Su propósito fundamental es contribuir a la resolución de las necesidades relacionadas con la construcción de la paz en estos territorios. Entre las soluciones que se buscan implementar se incluyen la creación de contenido temático, el desarrollo de soluciones tecnológicas y estrategias de visibilización de los laboratorios participantes.
        </p>
        </>
        } 
        
        </div>
        <BtnIcons onClick={() => setClosed(!closed)} classRight={closed && "rotate-180"} className={"bg-ligthAlt3 text-lightPurple  font-bold w-fit"} rightIcon={"/icons/arrowFilled.svg"}>{closed? "Mostrar más":"Mostrar menos"}</BtnIcons>

        <div>
          <div className='flex gap-[2rem] flex-row flex-wrap h-fit mb-[2rem] justify-start'>
            <div className='flex gap-[2rem] flex-col w-[40%] grow'>
            <Note className={""}>
              <b>Sede Bogotá</b>
              <ul className='marker:text-lightPurple list-disc'>
                <li>Laboratorio de innovación, creatividad y nuevas tecnologías -LAB101 UNAL- Facultad de Ingeniería</li>
                <li>Laboratorio de Fundición y Pulvimetalurgia, Facultad de Ingeniería</li>
                <li>Laboratorio de imagen digital, Facultad de Artes</li>
                <li>Laboratorio de Fotografía, Facultad de Artes</li>
                <li>Laboratorio de Neurociencia Cognitiva y Comunicación, Facultad de Medicina</li>
              </ul>
            </Note>
            <Note className={" "}>
              <b>Sede de La Paz</b>
              <ul className='marker:text-lightPurple list-disc'>
                <li>Laboratorio de paz territorial Sede de la Paz</li>
              </ul>
              

            </Note>
            </div>
            <div className='flex gap-[2rem] flex-col w-[50%]'>
            <Note className={"basis-1/3 "}>
              <b>Sede Amazonía</b>
              <ul className='marker:text-lightPurple list-disc'>
                <li>Laboratorio de Física, Química y Biología</li>
                <li>Manejo y Gestión de Humedales</li>
                <li>Ecología y Conservación de la Flora y Fauna Silvestre</li>
              </ul>
              

            </Note>
            <Note className={"basis-1/3 "}>
              <b>Aliados</b>
              <ul className='marker:text-lightPurple list-disc'>
                <li>División Nacional Universidad Laboratorio</li>
                <li>Laboratorio de Innovación para la paz</li>
              </ul>
              


            </Note>
            <Note className={"basis-1/3 "}>
              <b>Apoya</b>
              <ul className='marker:text-lightPurple list-disc'>
                <li>Vórtico SAS - Proyecto spin off UNAL</li>
              </ul>
              

            </Note>
            </div>
          </div>
        </div>
      </div>
      <Image className='absolute left-0 top-0 opacity-20 lg:opacity-100 z-0' src={"/svg/leftDecoration.svg"} width={500} height={100}/>
      <Image className='absolute right-0 top-0 opacity-20 lg:opacity-100 z-0' src={"/svg/rightDecoration.svg"} width={350} height={100}/>
    </div>
    
    </div>
    
    </>
  )
}
