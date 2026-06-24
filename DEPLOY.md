# Deployment Documentation (DEPLOY.md)

This guide documents the deployment instructions for the Maison de Chine de Val d'Yerres website.

## GitHub Setup
To host the codebase and set up continuous integration, link the local git repository to your GitHub remote repository:

1. Create a new repository on GitHub (e.g., `maison-chine-yerres-website`).
2. Add the remote origin to your local repository:
   ```bash
   git remote add origin https://github.com/USERNAME/maison-chine-yerres-website.git
   ```
3. Set the default branch name to `main`:
   ```bash
   git branch -M main
   ```
4. Push the code to GitHub:
   ```bash
   git push -u origin main
   ```

## Vercel Deployment
Since the application compiles into a single, self-contained `index.html` file inside the `dist/` directory, Vercel can easily host it as a static website.

### Method 1: Continuous Deployment via GitHub (Recommended)
1. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** -> **Project**.
2. Import your GitHub repository (`maison-chine-yerres-website`).
3. In the **Configure Project** settings:
   - **Framework Preset**: Select **Vite** or **Other**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will automatically build and deploy your site on every push to the `main` branch.

### Method 2: Deployment via Vercel CLI
If you want to deploy directly from the command line without GitHub:

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Deploy the project from the root folder:
   ```bash
   vercel
   ```
4. For production deployment, run:
   ```bash
   vercel --prod
   ```

Since Vite bundles all styling, components, and premium assets into a single static file inside `dist/index.html`, it is served instantly and loaded with optimal performance.
