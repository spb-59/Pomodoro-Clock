/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import usePlayer from "./usePlayer";
import { Playlist, Image } from ".";

export default function usePlaylists() {
  const { token, loading, play } = usePlayer();
  const [data, setData] = useState<Playlist[]>();

  useEffect(() => {
    const fetchPlaylists = () => {
      fetch(`https://api.spotify.com/v1/me/playlists`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 429) {
            const retryAfter: number = Number(res.headers.get("Retry-After"));
            console.error(
              `Rate limit exceeded. Retry after ${retryAfter} seconds.`,
            );
          } else if (!res.ok) {
            throw new Error("Failed to fetch playlists");
          }
          return res.json();
        })
        .then((data) => {
          setData(data.items); // Set your playlists
        })
        .catch((error) => {
          console.error("Fetch error: ", error);
        });
    };
    if (!loading) fetchPlaylists();
  }, [loading]);

  return {
    data,
    play,
    loading
  };
}
