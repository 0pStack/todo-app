# Todo App (Inköpslista)

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
[![Stars](https://img.shields.io/github/stars/0pFlow/todo-app?style=flat)](https://github.com/0pFlow/todo-app/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/0pFlow/todo-app)](https://github.com/0pFlow/todo-app/commits/main)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A simple, lightweight shopping list / todo application built with vanilla HTML, CSS, and JavaScript. Items are persisted in the browser via `localStorage`, so your list survives page reloads.

This project was developed as part of a JavaScript course at Medieinstitutet with a focus on **data persistence**, **error handling**, and **refactoring**.

## Features

- **Add items** to your shopping list with a single click or `Enter` keypress.
- **Edit items** inline by clicking on any item in the list.
- **Delete individual items** using the trash icon next to each entry.
- **Clear the entire list** with the "Töm allt" button (only visible when the list contains items).
- **Filter / search** items in real time using the search field.
- **Persistent storage** via `localStorage` — your list is restored automatically on page reload.
- **Validation & error handling**:
  - Empty submissions trigger a modal warning.
  - Duplicate entries are rejected with a clear message.
- **Auto-cleanup** of the `localStorage` key when the list becomes empty.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom styling in `site.css`
- **Vanilla JavaScript (ES6+)** — no frameworks or build tools
- **localStorage API** — client-side persistence
- **Ionicons** — icon set loaded via CDN

## Project Structure

```
todo-app/
├── index.html      # Markup and script loading
├── site.css        # Styles
├── app.js          # App logic, event handlers, init
├── dom.js          # DOM element creation helpers
├── storage.js      # localStorage read/write utilities
└── images/         # Logos used in the header
```

## Getting Started

No build step or dependencies required.

### Option 1: Open directly

Clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/0pFlow/todo-app.git
cd todo-app
```

Then double-click `index.html` or open it via your browser's File menu.

### Option 2: Run a local server (recommended)

Some browsers restrict `localStorage` and module loading on `file://` URLs. Serving the files over HTTP avoids these issues.

Using Python:

```bash
python -m http.server 8000
```

Using Node.js (`npx`):

```bash
npx serve .
```

Then open <http://localhost:8000> in your browser.

## Live Demo

_Coming soon._ <!-- Add your deployed URL here (GitHub Pages, Netlify, Vercel, etc.) -->

## License

This project was created for educational purposes as part of a course assignment.
