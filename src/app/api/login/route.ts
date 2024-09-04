import type { NextApiHandler } from "next";
import { v4 as uuid } from "uuid";
import { stringify } from "querystring";
import {
  SPOTIFY_AUTHORIZE_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_SCOPES,
} from "../../../common/env-config";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET (req:NextRequest, res:NextResponse){

    const state = uuid();

    const params = stringify({
      response_type: "code",
      client_id: SPOTIFY_CLIENT_ID,
      scope: SPOTIFY_SCOPES.join(" "),
      redirect_uri: SPOTIFY_REDIRECT_URI,
      state: state,
    });

    cookies().set({
      name: 'state',
      value: state,
      httpOnly: true,
      path: '/',
    })

    // Construct the Spotify authorization URL
    const url = `${SPOTIFY_AUTHORIZE_URL}?${params}`;

    // Redirect the user to the Spotify authorization URL
    redirect(url);

};

