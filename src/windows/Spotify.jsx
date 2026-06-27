import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({windowName,setwindowsState}) => {
  return (
    <MacWindow width='28vw'  windowName={windowName} setwindowsState={setwindowsState}>
        <div className="spotify-window">

        <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/4CUP6CiKiucwaYPC3z0RQR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify


