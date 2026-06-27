import React,{useEffect,useState} from 'react'
import Markdown from 'react-markdown'
import "./Note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow';

const Note = ({windowName,setwindowsState}) => {

  const [markdown, setmarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then(res => res.text())
      .then(text => setmarkdown(text))
  },[])


  return (
   <MacWindow  windowName={windowName} setwindowsState={setwindowsState}>
      <div className="note-window">
      {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>LOADING.......</p>}
      </div>
   </MacWindow>
  )
}

export default Note