# Personal Portfolio Desktop Interface

A modern, interactive React-based desktop interface showcasing a portfolio with draggable windows and a macOS-inspired design. This project creates an engaging portfolio experience with multiple interactive applications accessible through a dock-based navigation system.

## Features

- macOS-inspired Dock - Easy navigation to different portfolio applications
- Draggable & Resizable Windows - Interactive window management using `react-rnd`
- Multiple Applications:
  - GitHub - Display GitHub repositories and profile information
  - Notes - Create and view notes
  - Resume - Display resume/CV
  - Spotify - Spotify integration
  - CLI - Terminal-like command emulator
- Responsive Design - Built with SASS for styling flexibility
- External Integrations:
  - Google Calendar
  - Email (mailto)
  - LinkedIn
- Syntax Highlighting - Code display with `react-syntax-highlighter`
- Markdown Support - Rich text rendering with `react-markdown`

## Tech Stack

- Frontend Framework: React 19.2.4
- Build Tool: Vite
- Styling: SCSS
-mac-OS-UI-replica:
  - `react-rnd` - Draggable and resizable components
  - `react-console-emulator` - Terminal emulation
  - `react-markdown` - Markdown rendering
  - `react-syntax-highlighter` - Code syntax highlighting

## Project Structure


src/
├── App.jsx                 # Main application component
├── App.scss               # Root styles
├── main.jsx               # Entry point
├── components/
│   ├── DateTime.jsx       # Date/time display component
│   ├── Dock.jsx           # Dock navigation component
│   ├── Dock.scss
│   ├── Nav.jsx            # Navigation component
│   └── Nav.scss
└── windows/
    ├── Cli.jsx            # CLI/Terminal window
    ├── Github.jsx         # GitHub portfolio window
    ├── MacWindow.jsx      # Reusable window component
    ├── Note.jsx           # Notes window
    ├── Resume.jsx         # Resume display window
    ├── Spotify.jsx        # Spotify integration window
    └── [component].scss   # Individual component styles


## Installation

1. Clone the repository:
git clone [git@github.com:AbhishekNSingh/mac-OS-UI-replica.git](https://github.com/AbhishekNSingh/mac-OS-UI-replica.git)
cd "React Project"

2. Install dependencies:
npm install

3. Run 
npm run dev

## Usage

- Click icons in the Dock to open different applications
- Drag windows around the screen to reposition them
- Resize windows by dragging the edges or corners
- Click external icons to open Google Calendar, email, or LinkedIn
- Use the CLI window to interact with terminal commands
- View your portfolio through the interactive interface

### Customization
- Modify dock icons in `src/components/Dock.jsx`
- Update window contents in the `src/windows/` directory
- Customize styling using SASS files in the project



## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |






Created with React & Vite⚛️
