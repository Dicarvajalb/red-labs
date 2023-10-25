import BtnAmazonia from "./BtnAmazonia";
import BtnLaPaz from "./BtnLaPaz";
import Map from "./Map";
import Map2 from "./Map2";
import Menu from "./Menu";

export default function GlobalLayout({PrevButton,children}) {
 
  return (
    <div className="flex min-h-screen w-[100vw] h-full flex-col items-center relative bg-gray">
    <div className='w-full h-[5vh] bg-light menu_container'>
      <Menu/>
    </div>
    <div className="flex w-full  h-fitbg-ligthAlt2 flex-col bg-lightPurple
                    md:flex-row md:bg-white md:items-center">
      <div className='w-full h-fit bg-lightPurple map_container relative flex flex-col justify-center items-center
                      md:w-8/12 md:items-start'>
        <div className='w-full h-[fit] max-h-[5rem] section_title flex flex-col justify-end items-start border-4 border-white border-solid'>
          <h3>sub-título</h3>
          <h1>Título</h1>
        </div>
        {PrevButton}
        <BtnAmazonia/>
        <BtnLaPaz/> 
        <div className="w-full  h-fit border-2 border-white border-solid flex justify-end
                        md:h-[60rem] ">
        <Map2/>
        </div>
        <div className='w-[0px] md:w-fit overflow-hidden h-fit max-h-[5%] section_buttons flex relative top-[-50px] flex-col justify-end items-start border-4 bg-white'>
          <button>Btn1</button>
          <button>Btn2</button>
        </div>
        {children}
      </div>
       <div className="w-full h-[fit] border-2 border-solid border-white flex flex-col items-center
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
