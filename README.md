# Daylight — To-Do & Notes App

A responsive React application for managing daily tasks and notes, built for Web Development Week 04 Minor Project.

## Features
### To-Do
- Add, edit, delete, and complete tasks
- Pending/completed status and All/Pending/Completed filters
- Optional due dates and progress indicator
- Browser Local Storage persistence

### Notes
- Create, edit, delete, and browse notes
- Search by title, content, or category
- Categories: Personal, Study, Ideas, Work
- Last-updated date and Local Storage persistence

## Technologies
React, JSX, JavaScript ES6+, Vite, CSS, Lucide icons, `useState`, `useEffect`, `useMemo`, props-ready component architecture, event handling, conditional and list rendering.

## Run locally
1. Install Node.js (LTS).
2. Extract the ZIP and open this folder in VS Code.
3. Open Terminal in the project folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Build
Run `npm run build`; output is created in `dist/`.

## Project structure
- `src/App.jsx` — application UI and React state
- `src/main.jsx` — entry point
- `src/styles.css` — responsive styling
- `index.html` — page shell

## Notes
Data is stored locally in the browser and is not synced between devices. Add your own screenshots and GitHub repository URL before submitting if your LMS requires them.
