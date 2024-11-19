"use client";

import { useState } from "react";

import { Menu } from "lucide-react";
import { Todo } from "../ClockSection";
import { MusicMenu } from "../MusicSection";

export default function Choice() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col">
      <section className="w-full h-[40vh] flex flex-col-reverse p-2">
        <div
          className={` ${!show ? "h-[40vh]" : "h-0 opacity-0 invisible "} transition-all duration-400 w-full flex items-center justify-center`}
        >
          <Todo />
        </div>
        <div
          className={` ${show ? "h-[40vh] opacity-100 visible" : "h-0 opacity-0 invisible"} transition-all duration-400 w-full flex items-center justify-center `}
        >
          <MusicMenu />
        </div>
      </section>
      <button onClick={() => setShow(!show)} className="self-end">
        <Menu />
      </button>
    </div>
  );
}
