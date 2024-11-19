import { createContext } from "react";

export interface playerContextProps {
  player?: Spotify.Player | null;
  track?: Spotify.Track | null;
  paused?: boolean;
  active?: boolean;
  state?: Spotify.PlaybackState | null;
  deviceID?: string | null;
  token?: string | null;
  error?: boolean | null;
  shuffle?: boolean | null;
}
export const playerContext = createContext<playerContextProps | undefined>(
  undefined,
);
