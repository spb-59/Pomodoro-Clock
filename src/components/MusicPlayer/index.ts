import { playerContext } from "./playerContext";
import usePlayer from "./usePlayer";
import usePlaylists from "./usePlaylists";
import useControls from "./useControls";

type Image = {
  url: string;
};

type Playlist = {
  name: string;
  images: Image[];
  trackURL: string;
  uri: string;
};
type AlbumItem = {
  Added: string;
  album: Album;
};
type Album = {
  images: Image[];
  name: string;
  release_date: string;
  uri: string;
  tracks: TrackItem[];
  artists: Artist[];
};

type Artist = {
  name: string;
};
type TrackItem = {
  next?: string;
  previous?: string;
  total: number;
  items: Track[];
};

type Track = {
  name: string;
  uri: string;
  album: Album;
};
type SearchData = {
  tracks: { items: Track[] };
  albums: { items: Album[] };
};
export { usePlayer, usePlaylists, useControls };

export type { Image, Playlist, Track, Album, TrackItem, AlbumItem, SearchData };
