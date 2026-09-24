# Samee Reale Estates & House Brokers — Official Website

A luxury, high-converting real estate consultant website for **Samee Reale Estates & House Brokers**, Madurai, Tamil Nadu.

---

## 🚀 How to Push to GitHub & Deploy to Netlify

### Step 1: Push Code to GitHub

Open your terminal in the project folder and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all project files
git add .

# 3. Commit the changes
git commit -m "Initial commit: Premium Samee Reale Estates website"

# 4. Rename main branch
git branch -M main

# 5. Connect your GitHub repository (replace with your actual GitHub repo URL)
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 2: Deploy to Netlify

#### Option A: Connect via Netlify Dashboard (Recommended - Auto Deploy on Push)
1. Go to [Netlify](https://app.netlify.com/) and sign in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** and select your repository (`<YOUR-REPO-NAME>`).
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.
6. Within ~60 seconds, your site is live with a free SSL certificate! You can also connect your custom domain (e.g. `sameerealeestates.com`).

#### Option B: Deploy using Netlify CLI (Quick Manual Deploy)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the production files
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 🛠️ Project Stack & Configuration

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 + Cormorant Garamond & Plus Jakarta Sans
- **Configuration Files:**
  - `netlify.toml`: Preconfigured build command and SPA 200 rewrite rule.
  - `public/_redirects`: Netlify SPA fallback routing.
  - `vite.config.ts`: Configured with base path `/`.
