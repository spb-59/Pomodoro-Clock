import { useEffect, useState } from "react";
import usePlayer from "./usePlayer";
import { SearchData } from ".";

export default function useSearch() {
  const { token } = usePlayer();

  const search = async (query: string) => {
    if (!token) {
      throw new Error("Error in Authorization");
    }

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track%2Calbum`;
    let data: SearchData | null = null;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 429) {
        const retryAfter: number = Number(res.headers.get("Retry-After"));
        console.error(
          `Rate limit exceeded. Retry after ${retryAfter} seconds.`,
        );
      } else if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      data = await res.json();
    } catch (error) {
      console.error("Fetch error: ", error);
    }
    console.log(data);
    return data;
  };
  const play = async (uri: string) => {
    fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        context_uri: uri,
      }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to play");
      }
    });
  };
  return {
    search,
    play,
  };
}
