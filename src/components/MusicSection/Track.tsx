import { useState } from "react";
import { usePlayer, type Track } from "../MusicPlayer";
import Image from "next/image";

export default function Track({ info }: { info: Track }) {
  const [viewTracks, setView] = useState(false);
  const { playTrack } = usePlayer();
  return (
    <div className="flex bg-secondary bg-opacity-70 border-2 border-accent">
      <Image
        src={info.album.images[0]?.url ?? " "}
        alt="Album Cover"
        width={1000}
        height={1000}
        className="w-1/4"
        onClick={() => playTrack && playTrack(info.uri)}
      />
      <div className="p-4">
        <p className="font-bold text-lg">{info.name}</p>

        <p className="">{info.album.artists[0].name}</p>
      </div>
    </div>
  );
}
