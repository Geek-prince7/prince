# Deployment Guide - Automatic GitHub Deployment

## 🚀 Choose Your Deployment Platform

I've created 3 GitHub Actions workflows for automatic deployment. Choose one based on your preference:

---

## Option 1: Vercel (Recommended) ⭐

**Best for**: Next.js apps, zero configuration, fastest setup

### Setup Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Your Repository**
   - Click "New Project"
   - Select your portfolio repository
   - Click "Import"
   - Click "Deploy"

3. **Get Tokens for GitHub Actions** (Optional - Vercel auto-deploys from GitHub)
   
   If you want to use the GitHub Action:
   
   a. Get Vercel Token:
      - Go to Vercel Settings → Tokens
      - Create new token
      - Copy the token

   b. Get Project IDs:
   ```bash
   npm i -g vercel
   vercel login
   cd /Users/princedubey/projects/portfolio
   vercel link
   ```
   This creates `.vercel/project.json` with your IDs

   c. Add Secrets to GitHub:
      - Go to your GitHub repo → Settings → Secrets and variables → Actions
      - Add these secrets:
        - `VERCEL_TOKEN` - Your token
        - `VERCEL_ORG_ID` - From `.vercel/project.json`
        - `VERCEL_PROJECT_ID` - From `.vercel/project.json`

4. **Enable Workflow**
   - Keep `.github/workflows/deploy.yml`
   - Delete other workflow files
   - Push to GitHub
   - Auto-deploys on every push/PR merge!

**Your URL**: `your-portfolio.vercel.app` (can add custom domain)

---

## Option 2: GitHub Pages (Free Hosting)

**Best for**: Free hosting on GitHub, simple static sites

### Setup Steps:

1. **Update next.config.ts** for static export:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
   }
   ```

2. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: "GitHub Actions"

3. **Enable Workflow**
   - Keep `.github/workflows/github-pages.yml`
   - Delete other workflow files
   - Push to GitHub
   - Auto-deploys on every push/PR merge!

4. **Access Your Site**
   - URL: `https://yourusername.github.io/portfolio`
   - Or set up custom domain in Settings → Pages

**Your URL**: `https://geek-prince7.github.io/portfolio`

---

## Option 3: Netlify

**Best for**: Easy custom domains, built-in forms, great DX

### Setup Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository** (Auto-Deploy - No GitHub Action Needed)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

   OR use GitHub Action:

3. **Get Tokens for GitHub Action**
   
   a. Get Netlify Auth Token:
      - Netlify → User Settings → Applications → Personal access tokens
      - Create new token

   b. Get Site ID:
      - Your site → Site settings → General → Site information
      - Copy API ID

   c. Add Secrets to GitHub:
      - `NETLIFY_AUTH_TOKEN` - Your auth token
      - `NETLIFY_SITE_ID` - Your site ID

4. **Enable Workflow**
   - Keep `.github/workflows/netlify.yml`
   - Delete other workflow files
   - Push to GitHub

**Your URL**: `your-site.netlify.app` (can add custom domain)

---

## 🔧 Quick Setup (Recommended: Vercel)

### Easiest Way - Just Connect GitHub to Vercel:

```bash
# 1. Push your code to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 2. Go to vercel.com
# 3. Click "Import Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"
# ✅ Done! Auto-deploys on every push
```

**No GitHub Actions needed** - Vercel automatically detects pushes!

---

## 📝 Workflow Files Included

I've created 3 workflow files in `.github/workflows/`:

1. **deploy.yml** - Vercel deployment
2. **github-pages.yml** - GitHub Pages deployment
3. **netlify.yml** - Netlify deployment

**Choose ONE** and delete the others, or just use the platform's native GitHub integration (recommended).

---

## 🎯 What Triggers Deployment

All workflows trigger on:
- ✅ Direct push to `main` branch
- ✅ PR merged into `main` branch

Example:
```bash
# This will trigger deployment
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 🔐 Adding Secrets to GitHub

For workflows that need secrets:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add required secrets (depends on platform)

---

## ✅ Recommended Setup

**I recommend Vercel** because:
- ✅ Built by Next.js creators
- ✅ Zero configuration
- ✅ Automatic GitHub integration (no Actions needed)
- ✅ Free SSL
- ✅ Automatic preview deployments for PRs
- ✅ Edge network (fast globally)
- ✅ Free custom domain

**Just connect your GitHub repo to Vercel and you're done!**

---

## 🚀 After Deployment

Once deployed, update these:

1. **Update domain in SEO files**
   - `app/layout.tsx` - Change `princedubey.com` to your actual URL
   - `public/sitemap.xml` - Update all URLs
   - `public/robots.txt` - Update sitemap URL

2. **Submit to search engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Update your profiles**
   - Add portfolio URL to LinkedIn
   - Add to GitHub profile
   - Add to resume

---

## 📊 Deployment Status

After pushing to GitHub, check:
- **Actions tab** in your GitHub repo
- See build logs and deployment status
- Green checkmark = successful deployment

---

**Need help?** Contact: princedby729@gmail.com
