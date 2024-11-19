/* eslint-disable react-hooks/exhaustive-deps */

import usePlayer from "./usePlayer";
import { useEffect, useState } from "react";

export default function useControls() {
  const { player, paused, loading, shuffle, token } = usePlayer();

  const next = async () => {
    if (player) {
      try {
        await player.nextTrack();
      } catch (err) {
        console.error("Error skipping to next track:", err);
      }
    }
  };

  const prev = async () => {
    if (player) {
      try {
        await player.previousTrack();
      } catch (err) {
        console.error("Error skipping to previous track:", err);
      }
    }
  };

  const play = async () => {
    if (!player) return;

    try {
      if (!paused) {
        await player.pause();
      } else {
        await player.togglePlay();
      }
    } catch (err) {
      console.error("Error toggling play/pause:", err);
    }
  };

  const toggleShuffle = async () => {
    if (!player) return;
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/shuffle?state=${!shuffle}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      ).then((response) => {
        if (!response.ok) {
          console.error("FAILED TO SHUFFLE");
        }
      });
    } catch (err) {
      console.error("Error toggling play/pause:", err);
    }
  };

  return { next, prev, play, loading, paused, toggleShuffle, shuffle };
}
