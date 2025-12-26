# Basic Node.js App

A simple Node.js web application built with **Express.js** that serves static HTML pages and provides a downloadable resume.

## 🚀 Live Demo

Hosted on Render:  
[Basic Node.js App on Render](https://basic-nodejs-app-e23h.onrender.com)

## 📋 Description

This app serves a few static pages (`/`, `/about`, `/contact-me`) and provides a **resume download link** on the `/contact-me` page. Any unknown route will show a **404 page**. Tailwind CSS is used via CDN for styling, and no build step is required.

## 🛠️ Technology Stack

- Node.js  
- Express.js  
- HTML (70.7%)  
- JavaScript (29.3%)  
- Tailwind CSS via CDN

## ✨ Routes

- `/` → `index.html`  
- `/about` → `about.html`  
- `/contact-me` → `contact-me.html`  
  - Includes a button/link to download **Aryan Parmar’s resume**  
- `/resume` → Downloads resume PDF from the configured URL in `.env`  
- Any other path → `404.html`

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/notaarryan/basic-nodejs-app.git
   cd basic-nodejs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and set your resume URL:
   ```env
   RESUME_URL=https://www.dropbox.com/s/your_resume_link.pdf?dl=1
   ```

## ▶️ Running Locally

Start the server:
```bash
node index.js
```

Open in your browser:
```
http://localhost:8080
```

The server listens on port `8080` as defined in `index.js`.

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
