import { Album } from ".";
import useAlbums from "../MusicPlayer/useAlbums";
import { Skeleton } from "../ui/skeleton";

export default function Albums() {
  const { data, play, loading } = useAlbums();
  if (loading){
    return(
      <Skeleton className="flex flex-col h-[30vh] overflow-y-scroll gap-4 w-[60%] bg-accent" />
   
    )
  }
  if (!data || !play) {
    return(
      <Skeleton className="flex flex-col h-[30vh] overflow-y-scroll gap-4 w-[60%] bg-accent" />

    )
  }
  return (
    <div className="flex flex-col h-[30vh] overflow-y-scroll gap-4">
      {data?.map((value) => (
        <>
          <Album info={value} play={play} />
        </>
      ))}
    </div>
  );
}
