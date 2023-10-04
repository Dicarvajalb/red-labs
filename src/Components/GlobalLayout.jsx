import Map from "./Map";
import Menu from "./Menu";

export default function GlobalLayout({PrevButton,children}) {
 
  return (
    <main className="flex min-h-screen w-full h-full flex-col items-center justify-between relative bg-gray">
    <div className='w-full h-[5vh] bg-light menu_container'>
      <Menu/>
    </div>
    <div className="flex w-full h-[95vh] flex-row items-center justify-between">
      <div className='w-3/5 h-full bg-[#504558] map_container relative'>
      {PrevButton}
        <Map/>
        {children}
      </div>
      
    </div>
    </main>
  )
}
