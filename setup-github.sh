#!/bin/bash

echo "🚀 Setting up GitHub deployment for your portfolio..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
else
    echo "✅ Git already initialized"
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Deploy portfolio - Initial commit" || echo "Nothing to commit or commit failed"

# Ask for repository URL
echo ""
echo "🔗 GitHub Repository Setup"
echo "Your repository URL should be: https://github.com/Geek-prince7/portfolio.git"
read -p "Press Enter to use this URL, or type your custom URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    REPO_URL="https://github.com/Geek-prince7/portfolio.git"
fi

# Add remote
echo "🌐 Adding GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub!"
echo ""
echo "🚀 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your 'portfolio' repository"
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your portfolio will be live in 2-3 minutes!"
echo "🔄 Auto-deploys on every push to main!"
