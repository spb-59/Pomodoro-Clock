import { NextApiHandler } from "next";
import { 
  SPOTIFY_API_TOKEN_URL, 
  SPOTIFY_CLIENT_ID, 
  SPOTIFY_CLIENT_SECRET, 
  SPOTIFY_REDIRECT_URI, 
  TOKEN_COOKIE_NAME 
} from "../../../common/env-config";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET (req:NextRequest, res:NextResponse){

    // Read the state cookie manually
    const stateFromCookie = req.cookies.get('state');

    // Get state from query parameters
    const stateFromQuery = req.nextUrl.searchParams.get('state');

    const code=req.nextUrl.searchParams.get('code');


    cookies().set({
      name: 'code',
      value: code??" ",
      httpOnly: true,
      path: '/',
    })



    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code ?? "",
      redirect_uri: SPOTIFY_REDIRECT_URI,
      client_id: SPOTIFY_CLIENT_ID,
      client_secret: SPOTIFY_CLIENT_SECRET,
    });
    


      const headers = await fetch(SPOTIFY_API_TOKEN_URL, {
        method: "POST",
        body: params,
      });

      if (headers.ok) {
        const response = await headers.json(); 

     
        cookies().set({
          name: TOKEN_COOKIE_NAME ,
          value: JSON.stringify(response),
          httpOnly: true,
          path: '/',
        });

        return NextResponse.redirect("http://localhost:3000",302);
      
      } else {
       return NextResponse.redirect("http://localhost:3000/error",302);
      }
   
};
