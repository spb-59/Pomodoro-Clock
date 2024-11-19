import Image from "next/image";
import usePlayer from "../MusicPlayer/usePlayer";

export default function AlbumCover() {
  const { track, loading } = usePlayer();
  const url: string = track?.album.images[0].url as string;
  console.log(url);
  if (loading) return <>Loading</>;
  if (!url) return <></>;
  return (
    <div className="aspect-square w-3/4">
      <Image
        src={url ?? " "}
        alt="Current Album Cover Image"
        width={1000}
        height={1000}
        className="    "
      />
    </div>
  );
}
