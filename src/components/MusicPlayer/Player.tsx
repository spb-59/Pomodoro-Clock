/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, ReactNode } from "react";
import { playerContext } from "./playerContext";

const Player = ({
  token,
  children,
}: {
  token: string;
  children: ReactNode;
}) => {
  const [is_paused, setPaused] = useState<boolean>(false);
  const [is_active, setActive] = useState<boolean>(false);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [state, setState] = useState<Spotify.PlaybackState | null>(null);
  const [current_track, setTrack] = useState<Spotify.Track | null>(null);
  const [deviceID, setID] = useState<string | null>(null);
  const [shuffle, setShuffle] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    //adding the spotify API script
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });
      setPlayer(player);
      player.addListener("ready", ({ device_id }) => {
        setID(device_id);
        console.log("DEVICE ID");
        if (token) {
          fetch(`https://api.spotify.com/v1/me/player`, {
            method: "PUT",
            body: JSON.stringify({ device_ids: [device_id], play: false }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        }
        console.log("DEVICE READY");
        setError(false);
      });

      player.addListener("not_ready", ({ device_id }) => {
        setID(null);
      });

      player.addListener("player_state_changed", (state) => {
        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
        if (!state) {
          setState(null);
          return;
        }
        console.log("state changed");
        setState(state);
        console.log("track:");
        console.log(state.track_window.current_track);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        setShuffle(state.shuffle);
      });

      player.connect().then((success) => {
        if (!success) {
          setError(true);
        }
      });
    };
  }, [token]);

  if (!player) {
    return (
      <playerContext.Provider value={undefined}>
        {children}
      </playerContext.Provider>
    );
  }

  return (
    <playerContext.Provider
      value={{
        player: player,
        paused: is_paused,
        active: is_active,
        track: current_track,
        state: state,
        deviceID: deviceID,
        token: token,
        error: error,
        shuffle: shuffle,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default Player;
