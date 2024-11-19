import { useContext } from "react";
import { playerContext } from "./playerContext";

export default function usePlayer() {
  const context = useContext(playerContext);

  if (!context) {
    return {
      error: true,
      player: undefined,
      track: undefined,
      paused: false,
      active: false,
      state: undefined,
      deviceID: undefined,
      token: undefined,
      play: undefined,
      shuffle: undefined,
    };
  }
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
  const playTrack = async (uri: string) => {
    fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        uris: [uri],
      }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to play");
      }
    });
  };
  const {
    player,
    track,
    paused,
    active,
    state,
    deviceID,
    token,
    error,
    shuffle,
  } = context;

  const loading = deviceID ? false : true;

  return {
    player,
    track,
    paused,
    active,
    state,
    deviceID,
    loading,
    token,
    play,
    playTrack,
    shuffle,
    error,
  };
}
