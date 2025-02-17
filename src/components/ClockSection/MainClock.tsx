"use client";

import { Rnd } from "react-rnd";
import React, { useState, useEffect } from "react";

export default function MainClock() {
  return (
    <Rnd minWidth={'30vw'} minHeight={'20vh'} > 
    <div className="flex w-full h-full lg:min-h-[20vh] sm:w-[40vw] items-center justify-center ">
      <div className="w-[90%] h-3/4 bg-primary rounded-[110%] min-h-[10vh] lg:min-h-[20vh] flex items-center justify-center ">
        <span
          className="text-text  font-bold  text-[4vw] "
          suppressHydrationWarning
        >
          <Time />
        </span>
      </div>
    </div>
    </Rnd>
  );
}


const Time = () => {
  var [time, setTime] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </>
  );
};
