import { Pause, Play, ShuffleIcon, SkipBack, SkipForward } from "lucide-react";
import useControls from "../MusicPlayer/useControls";

export default function PlayBar() {
  const { next, prev, play, loading, paused, toggleShuffle, shuffle } =
    useControls();

  if (loading) {
    return <p>Loading</p>;
  }

  console.log(paused);
  const color = shuffle ? "#59ff00" : "#ffffff";
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 p-4">
        <SkipBack
          size={42}
          onClick={() => {
            prev();
          }}
          className="hover:cursor-pointer hover:scale-105 transition-all "
        />
        {!paused && (
          <Pause
            size={42}
            onClick={() => {
              play();
            }}
            className="hover:cursor-pointer hover:scale-105 transition-all "
          />
        )}
        {paused && (
          <Play
            size={42}
            onClick={() => {
              play();
            }}
            className="hover:cursor-pointer hover:scale-105 transition-all "
          />
        )}
        <SkipForward
          size={42}
          onClick={() => next()}
          className="hover:cursor-pointer hover:scale-105 transition-all "
        />
      </div>
      <div className="w-full flex items-end justify-end">
        <ShuffleIcon
          size={22}
          onClick={() => toggleShuffle()}
          color={color}
          className="hover:cursor-pointer hover:scale-105 transition-all "
        />
      </div>
    </div>
  );
}
