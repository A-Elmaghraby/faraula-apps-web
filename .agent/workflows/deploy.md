---
description: How to deploy the Faraula Apps portfolio website to Vercel
---

# Deploy Faraula Apps Portfolio to Vercel

## Prerequisites
- A Vercel account (https://vercel.com)
- The Vercel CLI installed (`npm i -g vercel`) — OR use the Vercel Dashboard (recommended)
- Git repository connected (GitHub/GitLab/Bitbucket)

---

## Option A: Vercel Dashboard (Recommended)

1. Push the code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Faraula Apps Portfolio"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

2. Go to https://vercel.com/new
3. Import the GitHub repository
4. Vercel will auto-detect the **Vite** framework
5. Accept the defaults:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**

The `vercel.json` in the project root handles:
- SPA routing (all paths → `index.html`)
- Cache headers for static assets 

---

## Option B: Vercel CLI

// turbo
1. Build first:
```bash
npm run build
```

2. Deploy:
```bash
vercel --prod
```

---

## Domain Setup

The site will be available at: `https://faraula-apps.vercel.app`

To use a custom domain:
1. Go to **Project Settings → Domains** in Vercel
2. Add `faraulaapps.com` (or your domain)
3. Update DNS as instructed

---

## Environment Notes

- No environment variables needed for this static portfolio
- The site is a fully static SPA — no server-side rendering
- All game data is in `src/constants.ts` — easy to update

---

## Adding a New Game

1. Open `src/constants.ts`
2. Add a new entry to the `GAMES` array following the existing pattern
3. Add a corresponding `.game-cover-<id>` gradient class in `src/index.css`
4. Commit and push — Vercel auto-deploys on push to main
