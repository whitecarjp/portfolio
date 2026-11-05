# Jana Poticar — Engineering Portfolio

Modern multi-page portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **React Router**, and **Lucide React**.

## Start locally

Install Node.js 20.19+ (or 22.12+) and run:

```bash
npm install
npm run dev
```

Open the localhost URL shown in your terminal (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The generated site is in `dist/`.

## Customize

- `src/data.js`: name, introduction, social links, skills, and project descriptions.
- `src/main.jsx`: pages, navigation, layouts, and animations.
- `src/style.css`: typography, backgrounds, component styles.
- `public/portrait.jpg`: optional photo; update the About component to use `<img src="/portrait.jpg" alt="Portrait of Jana" />`.
- `public/resume.pdf`: your résumé; the contact page links to this path.

**Important:** Replace placeholder email, LinkedIn and GitHub URLs before publishing. Add the résumé file before enabling the download link. Verify project claims and remove confidential client details.

## Deploy

For Vercel: import the GitHub repository, choose Vite, build command `npm run build`, output directory `dist`.

For Netlify: build command `npm run build`, publish directory `dist`. For direct navigation to nested routes, add a rewrite to `/index.html` (included in `public/_redirects`).

## Routes

`/` · `/projects` · `/projects/:id` · `/experience` · `/about` · `/contact`
