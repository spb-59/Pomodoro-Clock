import { Playlist } from ".";
import { usePlaylists } from "../MusicPlayer";
import { Skeleton } from "../ui/skeleton";

export default function Playlists() {
  const { data, play, loading } = usePlaylists();

  if (loading){
    return(
      <Skeleton className="flex flex-col h-[30vh]  bg-accent" />

    )
  }
  if (!data || !play) {
    return(
      <Skeleton className="flex flex-col h-[30vh] bg-accent" />

    )
  }

  return (
    <div className="flex flex-col h-[30vh] overflow-y-scroll gap-4">
      {data.map((value, index) => (
        <Playlist key={index} info={value} play={play} />
      ))}
    </div>
  );
}
