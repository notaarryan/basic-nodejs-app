# Basic Node.js App

A simple Node.js web application that serves static HTML pages using Node's built-in `http` module.

## 🚀 Live Demo

Hosted on Render:  
[Basic Node.js App on Render](https://basic-nodejs-app-e23h.onrender.com)

## 📋 Description

This app serves a few static pages (`/`, `/about`, `/contact-me`) and a fallback 404 page. It uses Tailwind CSS via CDN for styling and does not require a build step.

## 🛠️ Technology Stack

- Node.js (native `http` and `fs`)
- HTML (70.7%)
- JavaScript (29.3%)
- Tailwind CSS via CDN

## ✨ Routes

- `/` → `index.html`
- `/about` → `about.html`
- `/contact-me` → `contact-me.html`
- Any other path → `404.html`

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/notaarryan/basic-nodejs-app.git
   cd basic-nodejs-app
   ```

2. Install dependencies (optional; used for Tailwind packages in `package.json`):
   ```bash
   npm install
   ```

## ▶️ Running Locally

Start the server:
```bash
node index.js
```

Then open:
```
http://localhost:8080
```

Note: The server listens on port `8080` as defined in `index.js`.

## 📁 Project Structure

```
basic-nodejs-app/
├── .gitignore
├── 404.html
├── about.html
├── contact-me.html
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## 👤 Author

- GitHub: [@notaarryan](https://github.com/notaarryan)
