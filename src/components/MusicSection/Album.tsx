import Image from "next/image";
import { AlbumItem } from "../MusicPlayer";

export default function Album({
  info,
  play,
}: {
  info: AlbumItem;
  play: (uri: string) => Promise<void>;
}) {
  return (
    <div className="flex bg-secondary bg-opacity-70 border-2 border-accent">
      <Image
        src={info.album?.images[0]?.url ?? " "}
        alt="Album Cover"
        width={1000}
        height={1000}
        className="w-1/4"
        onClick={() => play(info.album.uri)}
      />
      <div className="p-4">
        <p className="font-bold text-lg">{info.album.name}</p>
        <p className="">{info.album.artists[0].name}</p>
      </div>
    </div>
  );
}
