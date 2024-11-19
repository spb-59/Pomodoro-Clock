import { useState } from "react";
import type { Playlist } from "../MusicPlayer";
import Image from "next/image";

export default function Playlist({
  info,
  play,
}: {
  info: Playlist;
  play: (uri: string) => Promise<void>;
}) {
  const [viewTracks, setView] = useState();

  return (
    <div className="flex bg-secondary bg-opacity-70 border-2 border-accent">
      <Image
        src={info.images[0]?.url ?? " "}
        alt="Album Cover"
        width={1000}
        height={1000}
        className="w-1/4"
        onClick={() => play(info.uri)}
      />
      <div className="p-4">
        <p className="font-bold text-lg">{info.name}</p>
      </div>
    </div>
  );
}
