# 🚀 Quick Deploy Guide

## Fastest Way: Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create GitHub repository and push
git branch -M main
git remote add origin https://github.com/Geek-prince7/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

**Option A: Automatic (No Configuration Needed)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign in with GitHub
3. Click "New Project"
4. Import your `portfolio` repository
5. Click "Deploy"
6. ✅ **Done!** Your site is live!

**Your URL**: `portfolio-prince.vercel.app` (you can customize)

**Automatic Deployment**: 
- Every push to `main` → Auto-deploys
- Every PR merge → Auto-deploys
- Zero configuration needed!

---

**Option B: Using GitHub Actions**

If you want more control, use the GitHub Action:

1. Get Vercel credentials:
```bash
npm i -g vercel
vercel login
cd /Users/princedubey/projects/portfolio
vercel link
```

2. Add GitHub Secrets:
   - Go to GitHub repo → Settings → Secrets
   - Add:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

3. Push to GitHub:
```bash
git push origin main
```

4. Check Actions tab for deployment status

---

## Alternative: GitHub Pages (Free)

### Step 1: Update Configuration

Edit `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

### Step 2: Enable GitHub Pages

1. Push to GitHub
2. Go to repo → Settings → Pages
3. Source: "GitHub Actions"
4. Workflow will auto-deploy

**Your URL**: `https://geek-prince7.github.io/portfolio`

---

## 🎯 My Recommendation

**Use Vercel** because:
- ✅ Easiest setup (2 minutes)
- ✅ No configuration needed
- ✅ Auto-deploys on push (built-in)
- ✅ Free SSL certificate
- ✅ Preview deployments for PRs
- ✅ Fast global CDN
- ✅ Perfect for Next.js

---

## 📋 After Deployment Checklist

- [ ] Test your live URL
- [ ] Update domain in `app/layout.tsx`
- [ ] Update domain in `public/sitemap.xml`
- [ ] Add custom domain (optional)
- [ ] Submit to Google Search Console
- [ ] Add URL to LinkedIn profile
- [ ] Add URL to GitHub profile
- [ ] Update resume with portfolio URL

---

## 🔄 How Auto-Deployment Works

```mermaid
Push to main → GitHub detects change → Workflow runs → Build → Deploy → Live!
```

**Timeline**: 2-3 minutes from push to live

---

## 💡 Quick Commands

```bash
# Deploy new changes
git add .
git commit -m "Update content"
git push origin main
# ✅ Auto-deploys in 2-3 minutes!

# Check deployment status
# Go to: github.com/your-repo/actions
```

---

**Questions?** See `DEPLOYMENT_GUIDE.md` for detailed instructions.
