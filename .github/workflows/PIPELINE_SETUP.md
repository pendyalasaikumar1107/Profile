# Firebase CI/CD Pipeline Setup

## Overview
This repository is now configured with GitHub Actions workflows that automatically deploy your application to Firebase Hosting when code is pushed or merged to the `main` branch.

## Workflows

### 1. Production Deployment (`firebase-hosting-merge.yml`)
- **Trigger**: Push to `main` branch
- **Action**: Builds and deploys to live Firebase Hosting
- **URL**: https://saikumar-pendyala.web.app

### 2. Preview Deployment (`firebase-hosting-pull-request.yml`)
- **Trigger**: Pull Request creation/update
- **Action**: Builds and deploys to a preview channel
- **URL**: Temporary preview URL provided in PR comments

## Required Secrets

Your repository needs the following GitHub secrets to be configured:

### FIREBASE_SERVICE_ACCOUNT_SAIKUMAR_PENDYALA
This secret should contain the Firebase service account JSON key.

**To set this up:**

1. Go to [Firebase Console](https://console.firebase.google.com/project/saikumar-pendyala/settings/serviceaccounts/adminsdk)
2. Click "Generate new private key"
3. Download the JSON file
4. Go to your GitHub repository settings
5. Navigate to Settings > Secrets and variables > Actions
6. Click "New repository secret"
7. Name: `FIREBASE_SERVICE_ACCOUNT_SAIKUMAR_PENDYALA`
8. Value: Paste the entire contents of the downloaded JSON file
9. Click "Add secret"

## Workflow Features

- ✅ **Node.js 18**: Uses latest stable Node.js version
- ✅ **Dependency Caching**: NPM dependencies are cached for faster builds
- ✅ **Error Handling**: Clear step names and error reporting
- ✅ **Preview Channels**: PR deployments create preview URLs
- ✅ **Automatic Cleanup**: Preview channels are automatically cleaned up

## How It Works

1. **On Push to Main**:
   - GitHub Actions runner checks out your code
   - Sets up Node.js environment with caching
   - Installs dependencies (`npm ci`)
   - Builds the application (`npm run build`)
   - Deploys to Firebase Hosting live channel

2. **On Pull Request**:
   - Same build process as above
   - Deploys to a temporary preview channel
   - Adds a comment to the PR with the preview URL

## Testing the Pipeline

To test your pipeline:

1. Make a small change to any file
2. Commit and push to main:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```
3. Check the "Actions" tab in your GitHub repository
4. Watch the deployment process
5. Verify the live site updates

## Troubleshooting

- **Build fails**: Check the build logs in GitHub Actions
- **Permission errors**: Ensure the Firebase service account secret is correctly set
- **Deploy fails**: Verify the Firebase project ID matches in the workflow files

## Manual Deployment

You can still deploy manually using:
```bash
npm run build
firebase deploy
```
