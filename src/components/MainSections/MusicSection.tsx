"use client";
import { Menu, ReceiptRussianRuble } from "lucide-react";
import { usePlayer } from "../MusicPlayer";
import Player from "../MusicPlayer/Player";
import { PlayBar, AlbumCover, Albums, MusicMenu } from "../MusicSection";
import Playlists from "../MusicSection/Playlists";
import { Todo } from "../ClockSection";
import { useState } from "react";
import {Rnd} from 'react-rnd'
export default function MusicSection({ token }: { token: string }) {

  return (
    <Rnd minWidth={'30vw'}>

    <Player token={token}>
      
  <MusicSectionBody />
    </Player>
    </Rnd>
  );
}

const MusicSectionBody=()=>{
  const {loading,error}=usePlayer()
  if (error){
    return(
      <div className="flex w-[50%]  flex-col">
      <div className="flex h-3/5 bg-secondary items-center justify-center rounded-xl w-[90%] self-center">
        <div className="relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ">
        <button className=" p-4 h-8 bg-green-500 text-white  " onClick={()=>window.location.pathname="api/login"}>Login Spotify</button>
          <div className="absolute left-[12.5%] bg-black opacity-0  transition-opacity duration-300 cover-overlay aspect-square w-3/4"></div>
          <div className="absolute h-[30%] bg-blend-difference hidden cover-child ">

          </div>
        </div>
        </div>

      </div>
    )
  }
  return(
    <div className="flex flex-col sm:w-[42vw]  md:w-[40vw] lg:w-[30vw] ">
    <div className="flex  bg-secondary items-center justify-center rounded-xl aspect-square self-center relative">
    <Choice />
      {/* <div className="relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ">
        
        <AlbumCover />
        <div className="absolute left-[12.5%] bg-black opacity-0  transition-opacity duration-300 cover-overlay aspect-square w-3/4"></div>
        <div className="absolute h-[30%] bg-blend-difference hidden cover-child ">
          <PlayBar />
        </div>
      </div> */}
      </div>
     
    </div>
  )
}

function Choice() {
  const [show, setShow] = useState(false);
  return (
    <div className={`flex  flex-col `}>
      <section className={`flex flex-col `}>
      <div className={`relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ${!show?'flex opacity-100 visible':'hidden opacity-0 invisible'} transition-all duration-600`}>
        
        <AlbumCover />
        <div className="absolute left-[12.5%] bg-black opacity-0  transition-opacity duration-300 cover-overlay aspect-square w-3/4"></div>
        <div className="absolute h-[30%] bg-blend-difference hidden cover-child ">
          <PlayBar />
        </div>
      </div>
        <div
          className={` ${show ? "flex opacity-100 visible" : "hidden opacity-0 invisible"} transition-all duration-200 w-full flex items-center justify-center `}
        >
          <MusicMenu />
        </div>
      </section>
      <button onClick={() => setShow(!show)}  className="rounded-[100%] h-[10%] w-[10%]  absolute right-[2%] top-[2%] min-h-5 min-w-5 flex items-center justify-center"  >
        <Menu />
      </button>
    </div>
  );
}
export const MusicSectionAuth=()=>{


  return(
    <div className="flex w-[35%]  flex-col">
    <div className="flex h-3/5 bg-secondary items-center justify-center rounded-xl w-[90%] self-center">
      <div className="relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ">
        <button className=" p-4 h-8 bg-green-500 text-white  " onClick={()=>window.location.pathname="api/login"}>Login Spotify</button>
      </div>
      </div>
    </div>
  )
}