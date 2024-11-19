"use client";
import { ReceiptRussianRuble } from "lucide-react";
import { usePlayer } from "../MusicPlayer";
import Player from "../MusicPlayer/Player";
import { PlayBar, AlbumCover, Albums } from "../MusicSection";
import Playlists from "../MusicSection/Playlists";
import { Todo } from "../ClockSection";
import {Choice} from ".";
export default function MusicSection({ token }: { token: string }) {

  return (
    <Player token={token}>
  <MusicSectionBody />
    </Player>
  );
}

const MusicSectionBody=()=>{
  const {loading,error}=usePlayer()
  if (error){
    return(
      <div className="flex w-[50%]  flex-col">
      <div className="flex h-3/5 bg-secondary items-center justify-center rounded-xl w-[90%] self-center">
        <div className="relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ">
   Sign In Bro
          <div className="absolute left-[12.5%] bg-black opacity-0  transition-opacity duration-300 cover-overlay aspect-square w-3/4"></div>
          <div className="absolute h-[30%] bg-blend-difference hidden cover-child ">

          </div>
        </div>
        </div>

      </div>
    )
  }
  return(
    <div className="flex w-[50%] flex-col">
    <div className="flex w-[60%] bg-secondary items-center justify-center rounded-xl aspect-square self-center">
      <div className="relative flex flex-col items-center justify-center cover drop-shadow-xl shadow-primary ">
        <AlbumCover />
        <div className="absolute left-[12.5%] bg-black opacity-0  transition-opacity duration-300 cover-overlay aspect-square w-3/4"></div>
        <div className="absolute h-[30%] bg-blend-difference hidden cover-child ">
          <PlayBar />
        </div>
      </div>
      </div>
     <Choice />
    </div>
  )
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