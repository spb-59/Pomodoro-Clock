import { ClockSection,SideBar,MusicSection } from "./MainSections"
 
  
 export default function Homepage(){

    return (
    <main className="flex w-full min-h-[100vh] min-w-[100vw] h-full bg-background p-10">
    <SideBar />
    <ClockSection />
    <MusicSection />
    </main>
    )

    
}