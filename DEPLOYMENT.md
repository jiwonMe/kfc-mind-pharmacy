# Firebase Deployment Guide

## Prerequisites
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Create a Firebase project at https://console.firebase.google.com
3. Login to Firebase: `firebase login`

## Setup Instructions

1. **Initialize Firebase in this project:**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Use `dist` as the public directory
   - Configure as a single-page app: Yes
   - Don't overwrite existing files

2. **Update .firebaserc with your project ID:**
   ```json
   {
     "projects": {
       "default": "your-actual-project-id"
     }
   }
   ```

3. **Build the application:**
   ```bash
   pnpm run build
   ```

4. **Deploy to Firebase:**
   ```bash
   pnpm run deploy
   ```
   Or directly:
   ```bash
   firebase deploy --only hosting
   ```

## Available Scripts

- `pnpm run build` - Build the application for production
- `pnpm run deploy` - Deploy to Firebase Hosting
- `pnpm run build:deploy` - Build and deploy in one command

## Firebase Configuration

The app is configured with:
- Single-page application routing (all routes redirect to index.html)
- Optimized caching headers for static assets
- Clean URLs without .html extensions

## Troubleshooting

If you encounter deployment issues:
1. Ensure you're logged in: `firebase login`
2. Check your project exists: `firebase projects:list`
3. Verify the project ID in `.firebaserc`
4. Make sure the build completed successfully before deploying