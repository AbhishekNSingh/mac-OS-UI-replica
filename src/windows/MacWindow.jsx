import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({children,width='40vw',height='60vh',windowName,setwindowsState}) => {
  return(
     <Rnd
     default={{
        width:width,
        height:height,
        x:300,
        y:50
     }}
     >
        <div className="window">
            <div className="nav">


                <div className="dots">
                    <div onClick={() => setwindowsState(state => ({...state,[windowName] : false}))} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title"><p>A N Singh - zsh</p></div>


            </div>
            <div className="main-content">{children}</div>
        </div>
    </Rnd>)
}

export default MacWindow