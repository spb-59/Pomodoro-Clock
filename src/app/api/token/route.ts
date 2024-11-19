import { NextRequest, NextResponse } from "next/server";
import { URLSearchParams } from "url";
import {
  SPOTIFY_API_TOKEN_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  TOKEN_COOKIE_NAME,
} from "../../../common/env-config";
import { stringify } from "querystring";
import { cookies } from "next/headers";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const cookie = req.cookies;

  const refreshToken = JSON.parse(cookie.get(TOKEN_COOKIE_NAME)?.value ?? " ");
  console.log("HERE TOKEN............\n", refreshToken);

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken.refresh_token ?? " ",
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: SPOTIFY_CLIENT_SECRET,
  });

  const tokenResponse = await fetch(SPOTIFY_API_TOKEN_URL, {
    method: "POST",
    body: params,
  });
  console.log("\nHERE............\n", tokenResponse.ok);
  if (!tokenResponse.ok)
    console.log("\n", "papram...........\n", params, "\n\n");
  if (tokenResponse.ok) {
    const response = await tokenResponse.json();
    console.log(response);

    refreshToken.access_token = response.access_token;

    const res = NextResponse.json(response);
    res.cookies.set(TOKEN_COOKIE_NAME, JSON.stringify(refreshToken), {
      httpOnly: true,
      path: "/",
    });

    return res;
  } else {
    const res = NextResponse.json({ error: "Forbidden" }, { status: 403 });
    res.cookies.set(TOKEN_COOKIE_NAME, "", {
      maxAge: 0,
      path: "/",
      httpOnly: true,
    });

    return res;
  }
}
