'use client'

import { JSX, SVGProps, useState } from "react";
import { useTimer } from "react-timer-hook";


const getEndTime=(minutes:number)=>{
  const time=new Date()
  time.setSeconds(time.getSeconds()+minutes*60)
  return time
}


export default function PomodoroClock() {
  const time = getEndTime(5/60)

  return (
    <div className="flex w-full h-2/3 items-center justify-center ">
      <div className="w-3/4 h-3/4 border-primary border-2 rounded-xl flex items-center justify-end rotate-[-6.64deg] p-4">
   
        <Timer duration={time} />
      </div>
    </div>
  );
}

const times=[20,5,30,45,60,10]

const CurrentTime=({time}:{time:number})=>{
switch (time) {
  case 5:
    return <span>Short Break( 5 min )</span>
  case 10:
    return <span>Long Break( 10 min )</span>
  case 20:
    return <span>Short Session (20 min )</span>
  case 30:
    return <span>Long Session (30 min)</span>
  case 45:
     return <span> Extra Long Session (45 min)</span>
    case 60:
      return <span>James Schulz Session (60 min)</span>
  


  default:
    break;
}
}

async function playSound() {
const sound = new Audio("https://drive.google.com/file/d/1d3ynpjBfTBTaEXhtsJZXjS1NkeNuGQ-s/view?usp=sharing");
if(sound){
 return sound.play()
}
}

function Timer({duration}:{duration:any}){
  const {minutes,seconds,isRunning,start,pause,resume,restart}=useTimer({expiryTimestamp:duration, autoStart:false,onExpire
    :()=>{
playSound()
    }
  })
  const[time,setTime]=useState<number>()
  const [index,setIndex]=useState(0);
  const toggleTime=()=>{
    setTime(times[index])
    setIndex((prevIndex)=>{
      if (prevIndex==times.length){
        return 0
      }
      return prevIndex+1
    })
  }
  return(
    <div className="flex flex-col w-[90%] gap-4">
    <div className="text-text  font-bold w-3/4 text-right text-8xl mr-8 self-end">{minutes}:{seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}</div>
    <div className="flex gap-5">
        <button className="rounded-[1.5em] px-6 py-2 bg-accent w-3/4" onClick={()=>{toggleTime()}}><CurrentTime time={time??20} /></button>
        {!isRunning && <PlayButton onClick={start}/>}
        {isRunning &&<PlayButton onClick={pause} />}
   </div>
  </div>
  
  )
}




const PlayButton = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      fill="#8E3EBB"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <path
      stroke="#2C2C2C"
      strokeLinecap="round"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.167 14.5 27.833 22l-11.666 7.5v-15Z"
    />
  </svg>
)