/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { JSX, SVGProps, useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { useTimer } from "react-timer-hook";


const getEndTime=(minutes:number)=>{
  const time=new Date()
  time.setSeconds(time.getSeconds()+minutes*60)
  return time
}


export default function PomodoroClock() {
  const time = getEndTime(20)

  return (
    <Rnd minWidth={'45vw'} minHeight={'35vh'} >

   
      <div className="w-[95%] sm:w-[45vw] h-3/4 border-primary border-2 rounded-xl flex items-center justify-end lg:min-h-[35vh] p-2">
   
        <Timer duration={time} />
      </div>
  
    </Rnd>
  );
}

const times=[20,5,30,45,59+59/60,10]

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
    case 59+59/60:
      return <span>James Schulz Session (60 min)</span>
  
  default:
    break;
}
}

async function playSound() {
const sound = new Audio("https://raw.githubusercontent.com/spb-59/Pomodoro-Clock/main/public/alarm.mp3");
sound.currentTime = 1.5
            sound.volume = 0.5
if(sound){
  sound.play()
  setTimeout(() => {
    sound.pause();
  }, 7000);
}
return
}

function Timer({duration}:{duration:any}){
  const[time,setTime]=useState<number>(20)
  const [index,setIndex]=useState(0)
  const [prevTime,setPrev]=useState(-1)
  const [started,setStart]=useState(false)

  const toggleTime = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === times.length - 1 ? 0 : prevIndex + 1;
      setTime(times[newIndex]); 
      return newIndex;
    });
  };
  useEffect(() => {
    restart(getEndTime(time), started);
  }, [time]);
const switchToBreak=()=>{
  setStart(true)
  if (prevTime!==-1){
    setTime(times[prevTime])
    setIndex(prevTime)
    setPrev(-1)
    return
  }

  if(time>30){
    setTime(times[5])
    setIndex((prev)=>{
      setPrev(prev)
      return 5
    })
    return
  }
  if(time<=30){
    setTime(times[1])
    setIndex((prev)=>{
      setPrev(prev)
      return 1
    })
    return
  }
  }



  const {minutes,seconds,isRunning,start,pause,resume,restart}=useTimer({expiryTimestamp:duration, autoStart:false,onExpire
    :()=>{
playSound()
switchToBreak()
    }
  })
 
  useEffect(() => {
    restart(getEndTime(time), false);
  }, [])

  return(
    <div className="flex flex-col w-[90%] gap-4">
    <div className="text-text  font-bold w-3/4 text-right text-[8vw] mr-8 self-end">{minutes}:{seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}</div>
    <div className="flex gap-5">
        <button className="rounded-[1.5em] lg:px-6 lg:py-2 px-3 py-1 bg-accent text-[2vw] w-3/4" onClick={()=>{toggleTime();setStart(false)}}><CurrentTime time={times[index]} /></button>
        {!isRunning && <PlayButton onClick={start}/>}
        {isRunning &&<PauseButton onClick={pause} />}
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

const PauseButton= (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
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
      d="M20.333 15.333H17v13.334h3.333V15.333ZM27 15.333h-3.333v13.334H27V15.333Z"
    />
  </svg>
)
