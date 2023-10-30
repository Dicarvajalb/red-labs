import BtnAmazonia from "./BtnAmazonia";
import BtnExternal from "./BtnExternal";
import BtnLaPaz from "./BtnLaPaz";
import Map from "./Map";
import Map2 from "./Map2";
import Menu from "./Menu";

export default function GlobalLayout({PrevButton,children , title, subtitle}) {
 
  return (
    <div className="flex min-h-screen w-[100vw] h-full flex-col items-center relative bg-gray">
    <div className='w-[100%] h-[5vh] bg-light menu_container'>
      <Menu/>
    </div>
    <div className="flex w-full  h-fit flex-col bg-lightPurple
                    lg:flex-row lg:bg-white lg:items-start">
      <div className='w-full h-fit  bg-lightPurple container__map relative flex flex-col justify-start items-center
                      lg:w-8/12 lg:items-start lg:min-h-[100vh] lg:max-h-fit lg:pe-[4rem]'>
        <div className='w-full h-[fit] max-h-[5rem] m-[2rem]  section_title flex flex-col justify-end items-start'>
          <h1 className="text-white text-2xl">{subtitle || ""}</h1>
          <h3 className="text-white text-3xl">{title || "titulo"}</h3>
          
        </div>
        {PrevButton}

        <div className="w-[100%] h-[fit] flex flex-row justify-center lg:justify-end z-0 flex-wrap 
                        lg:flex-nowrap">
      
        <Map2/>

        <div className='w-[0px] h-[0px] lg:w-[25rem] overflow-hidden lg:h-fit section_buttons flex absolute bottom-[5rem] left-0 flex-col justify-end items-start gap-4 z-10'>
          <BtnExternal className={"bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"}>Aprende sobre Metodología de proyectos y Design Thinking</BtnExternal>

          <BtnExternal className={"bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"}>Aprende sobre los Índices de Madurez Digital</BtnExternal>
        </div>
        <div className='w-fit'>
          {children}
        </div>
        
        </div>
      </div>
       <div className="container__links w-full h-[fit] max-h-[100vh] flex flex-col items-center
                       lg:w-4/12 ">
        <div className="w-[90%] h-[fit] max-h-[100%] overflow-hidden bg-ligthAlt3 flex flex-col items-center p-[2rem] rounded-2xl gap-2">
        <h3 className="text-4xl">Conoce nuestros laboratorios</h3>
        <BtnExternal leftIcon={"d"} sede={"Sede Amazonía"}>Ecología y Conservación de la Flora y Fauna Silvestre</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Bogotá"}>Fotografía</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Bogotá"}>Fundición y Pulvimetalurgia</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Bogotá"}>Imagen Digital</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Bogotá"}>LAB101</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Amazonía"}>Laboratorio de Física, Química y Biología</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Amazonía"}>Manejo y Gestión de Humedales</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede Bogotá"}>Neurociencia cognitiva y comunicación</BtnExternal>
        <BtnExternal leftIcon={"d"} sede={"Sede La Paz"}> Paz Territorial</BtnExternal>
        </div>
        </div>
        
       <div className='w-[fit] lg:w-[0px] overflow-hidden h-fit max-h-[5%] section_buttons flex flex-col justify-end items-start border-4 bg-white'>
       <BtnExternal className={"bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"}>Aprende sobre Metodología de proyectos y Design Thinking</BtnExternal>

<BtnExternal className={"bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple"}>Aprende sobre los Índices de Madurez Digital</BtnExternal>
        </div>
    </div>
    
    </div>
  )
}
