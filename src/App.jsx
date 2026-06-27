import { useState } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
import Github from './windows/Github'
import Note from './windows/Note'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'
import { resume } from 'react-dom/server'


function App() {

  const [windowsState, setwindowsState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,

  })




  return (
    <main>
      <Dock windowsState ={windowsState} setwindowsState ={setwindowsState} />
      <Nav />

      {windowsState.github && <Github windowName="github" setwindowsState ={setwindowsState} />}
      {windowsState.note && <Note windowName="note" setwindowsState ={setwindowsState}/>}
      {windowsState.resume && <Resume windowName="resume" setwindowsState ={setwindowsState}/>}
      {windowsState.spotify && <Spotify  windowName="spotify" setwindowsState ={setwindowsState}/>}
      {windowsState.cli && <Cli windowName="cli" setwindowsState ={setwindowsState}/>}
    </main>
  )
}

export default App
