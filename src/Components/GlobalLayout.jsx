import BtnAmazonia from "./BtnAmazonia";
import BtnLaPaz from "./BtnLaPaz";
import Map from "./Map";
import Map2 from "./Map2";
import Menu from "./Menu";

export default function GlobalLayout({PrevButton,children , title, subtitle}) {
 
  return (
    <div className="flex min-h-screen w-[100vw] h-full flex-col items-center relative bg-gray">
    <div className='w-full h-[5vh] bg-light menu_container'>
      <Menu/>
    </div>
    <div className="flex w-full  h-fitbg-ligthAlt2 flex-col bg-lightPurple
                    md:flex-row md:bg-white md:items-center">
      <div className='w-full h-fit bg-lightPurple map_container relative flex flex-col justify-center items-center
                      md:w-8/12 md:items-start'>
        <div className='w-full h-[fit] max-h-[5rem] m-[2rem]  section_title flex flex-col justify-end items-start'>
          <h1 className="text-white text-2xl">{subtitle || ""}</h1>
          <h3 className="text-white text-3xl">{title || "titulo"}</h3>
          
        </div>
        {PrevButton}
        
        <div className="w-full  h-fit flex justify-center md:justify-end 
                        md:h-fit ">
        <Map2/>
        </div>
        <div className='w-[0px] md:w-fit ps-[2rem] overflow-hidden h-fit max-h-[5%] section_buttons flex relative top-[-50px] flex-col justify-end items-start'>
          <button>Btn1</button>
          <button>Btn2</button>
        </div>
        {children}
      </div>
       <div className="w-full h-[fit] flex flex-col items-center
                       md:w-4/12">
        <h3>Conoce nuestros laboratorios</h3>
        <button>Sede Amazonía 
Ecología y Conservación de la Flora y Fauna Silvestre</button>
        <button>Sede Bogotá
Fotografía</button>
        <button>Sede Bogotá
Fundición y Pulvimetalurgia</button>
       </div>
       <div className='w-[fit] md:w-[0px] overflow-hidden h-fit max-h-[5%] section_buttons flex flex-col justify-end items-start border-4 bg-white'>
          <button>Btn1</button>
          <button>Btn2</button>
        </div>
    </div>
    
    </div>
  )
}
