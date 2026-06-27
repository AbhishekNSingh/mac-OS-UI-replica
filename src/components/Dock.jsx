import React from 'react'
import './Dock.scss'
// import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowsState, setwindowsState}) => {
  return (
    <div className='dock'>
        <div
        onClick={() => {setwindowsState(state => ({...state,github:true}))}}
        className="icon github"><img src="/public/doc-icons/github.svg" alt="" /></div>
        <div
                onClick={() => {setwindowsState(state => ({...state,note:true}))}}
        className="icon note"><img src="/public/doc-icons/note.svg" alt="" /></div>
        <div
         onClick={() => {setwindowsState(state => ({...state,resume:true}))}}
          className="icon pdf"><img src="/public/doc-icons/pdf.svg" alt="" /></div>
        <div
        onClick={() => {window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")}}
        className="icon calender"><img src="public/doc-icons/calender.svg" alt="" /></div>
        <div
         onClick={() => {setwindowsState(state => ({...state,spotify:true}))}}
        className="icon spotify"><img src="/public/doc-icons/spotify.svg" alt="" /></div>
        <div
        onClick={() => {window.open("mailto:asingh3089@gmail.com","_blank")}}
        className="icon mail"><img src="/public/doc-icons/mail.svg" alt="" /></div>
        <div
        onClick={() => {window.open("https://www.linkedin.com/in/ansinghhere/","_blank")}}
        className="icon link"><img src="/public/doc-icons/link.svg" alt="" /></div>
        <div
         onClick={() => {setwindowsState(state => ({...state,cli:true}))}}
        className="icon cli"><img src="/public/doc-icons/cli.svg" alt="" /></div>
    </div>
  )
}

export default Dock