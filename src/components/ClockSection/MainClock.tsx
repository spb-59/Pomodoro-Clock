'use client'
export default function MainClock() {
  return (
    <div className="flex w-full h-1/3 items-center justify-center ">
      <div className="w-3/4 h-3/4 bg-primary rounded-[110%] flex items-center justify-center rotate-[5.84deg]">
        <span className="text-text  font-bold  text-6xl mr-8">
          <Time />
        </span>
      </div>
    </div>
  );
}


import  React, { useState , useEffect } from 'react'

 const Time = () => {

    var [time,setTime] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setTime(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
        </>
    )
}

