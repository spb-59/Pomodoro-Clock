// app/callback/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { createContext } from "react";

import {
  SPOTIFY_API_TOKEN_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
  TOKEN_COOKIE_NAME,
} from "../common/env-config";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import Player from "@/components/MusicSection/Player";
import Homepage from "@/components/Homepage";

async function fetchToken(code: string) {
  const token = cookies().get(TOKEN_COOKIE_NAME)?.value;
  return token;
}

export default async function CallbackPage() {
  const cookie = cookies();
  const stateFromCookies = cookie.get("state")?.value as string;

  const code = cookie.get("code")?.value;
  

  if (stateFromCookies && code) {
    try {
      const response = await fetchToken(code);

      if (response) {
        return (
          <div>
            {/* Render the token or any other component */}
            {/* <Player token={JSON.parse(response).access_token} />
            Token: {JSON.parse(response).access_token} */}
            <Homepage />

          </div>
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}
