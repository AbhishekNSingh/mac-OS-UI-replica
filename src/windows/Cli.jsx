import React from 'react'
import TerminalImport from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./Cli.scss"

const Terminal = TerminalImport?.default || TerminalImport

const Cli = ({windowName,setwindowsState}) => {
    return (
        <MacWindow  windowName={windowName} setwindowsState={setwindowsState}>
            <div className="cli-window">
                
                <Terminal
                    commands={{
                        about: {
                            description: 'Show a short portfolio introduction',
                            usage: 'about',
                            fn: () => 'I am a front-end developer building interactive portfolio experiences with React, Vite, and modern CSS.'
                        },
                        projects: {
                            description: 'List featured portfolio projects',
                            usage: 'projects',
                            fn: () => 'Projects:\n- Portfolio website\n- Dashboard UI\n- Music player UI'
                        },
                        skills: {
                            description: 'Show core technical skills',
                            usage: 'skills',
                            fn: () => 'React, JavaScript, CSS, Sass, Vite, Git, responsive design'
                        },
                        contact: {
                            description: 'Show contact information',
                            usage: 'contact',
                            fn: () => 'Email: hello@example.com | LinkedIn: linkedin.com/in/username'
                        },
                        resume: {
                            description: 'Show a quick resume summary',
                            usage: 'resume',
                            fn: () => 'Experience: UI developer, portfolio creator, component-driven apps. Ready to work on your next web project!'
                        },
                        echo: {
                            description: 'Echo text',
                            usage: 'echo <text>',
                            fn: (...args) => args.join(' ')
                        }
                    }}
                    welcomeMessage={[
                        'Welcome to the React terminal portfolio!',
                        "Type 'help' to list all available commands or try:",
                        "about : to learn about me",
                        "🔗projects:to know about my recent projects",
                        "🔗skills:to have a idea about my skills",
                        "🔗contact:to get my contact details",
                        "🔗resume:to get my resume"
                    ]}
                    promptLabel={'ANSingh:~$'}
                    promptLabelStyle={{color:'green'}}
                />
            </div>
        </MacWindow>
    )
}

export default Cli