'use client'
import { VFC, useState, useEffect } from "react";

type Props = {
  token: string;
};

  const Player: VFC<Props> = ({ token }) => {
  const [is_paused, setPaused] = useState<boolean>(false);
  const [is_active, setActive] = useState<boolean>(false);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [current_track, setTrack] = useState<Spotify.Track | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://sdk.scdn.co/spotify-player.js";
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
        console.log("Ready with Device ID", device_id);
        fetch(`https://api.spotify.com/v1/me/player`, {
            method: "PUT",
            body: JSON.stringify({ device_ids: [device_id], play: false }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener('player_state_changed', ((state) => {
        player.getCurrentState().then((state) => {
            (!state)? setActive(false) : setActive(true)
            });
        if(!state){
            return;
        }    
        console.log('state changed');
        console.log('track:');
        console.log(state.track_window.current_track);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        
     
        }));

      player.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
    };


  },[token]);




  if (!player) {
    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <b>Spotify Player is null</b>
          </div>
        </div>
      </>
    );
  } else if (!is_active) {

    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <b>
              Instance not active. Transfer your playback using your Spotify app
            </b>


            <button className="flex w-10 h-10 bg-primary" onClick={()=>{player.togglePlay().then(() => {
  console.log('Toggled playback!');
});}} />
            <button
                className="flex w-10 h-10 bg-primary"
                onClick={() => {
                  player.nextTrack();
                }}
              >kkkkk</button>

          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <div className=""></div>
            {current_track && current_track.album.images[0].url ? (
              <img
                src={current_track.album.images[0].url}
                className="now-playing__cover"
                alt=""
              />
            ) : null}
<button className="flex w-10 h-10 bg-primary" onClick={()=>{player.togglePlay().then(() => {
  console.log('Toggled playback!');
});}} />
            <div className="now-playing__side">
              <div className="now-playing__name">{current_track?.name}</div>
              <div className="now-playing__artist">
                {current_track?.artists[0].name}
              </div>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.previousTrack();
                }}
              >
                &lt;&lt;
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.togglePlay();
                }}
              >
                {is_paused ? "PLAY" : "PAUSE"}
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.nextTrack();
                }}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Player;