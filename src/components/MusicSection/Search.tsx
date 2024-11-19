import { useState } from "react";
import useSearch from "../MusicPlayer/useSearch";
import { SearchIcon } from "lucide-react";
import { SearchData } from "../MusicPlayer";
import Album from "./Album";
import Track from "./Track";

export default function Search() {
  const { search, play } = useSearch();
  const [data, setData] = useState<SearchData | null>();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const d = await search(inputValue);
    console.log(d);
    setData(d);
  };

  return (
    <div className="h-[30vh] flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center relative h-1/6 w-full "
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter search query"
          className="rounded-xl h-3/4 w-full p-2"
        />
        <button type="submit" className="absolute right-0">
          <SearchIcon className="h-4" />
        </button>
      </form>
      <div className="h-5/6 overflow-y-scroll gap-2 flex flex-col">
        {data?.tracks.items
          .slice(0, 2)
          .map((track, index) => <Track key={index} info={track} />)}

        {data?.albums.items.map((val, index) => (
          <Album key={index} info={{ Added: " ", album: val }} play={play} />
        ))}

        {data?.tracks.items
          .slice(2)
          .map((track, index) => <Track key={index} info={track} />)}
      </div>
    </div>
  );
}
