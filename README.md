# HelpingHeart Office

A React + TypeScript productivity workspace foundation for web and Windows (Tauri planned).

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown.
4. Run `npm run build` to verify the production build.

## Current implementation
- Responsive workspace dashboard and app launcher.
- Create, edit, rename, star, search, export and delete basic text documents.
- Browser-local persistence (localStorage).
- Basic editor modes are currently a shared text editor; this is not yet DOCX/XLSX/PPTX-compatible.

## Roadmap
1. Firebase Auth, Firestore metadata, Storage and secure rules.
2. Integrate dedicated document, spreadsheet and presentation engines with real format support.
3. Add drawing, PDF tools and remaining productivity apps.
4. Add collaboration, AI, version history and offline sync.
5. Package with Tauri 2 for Windows and test release builds.

Do not deploy with production user data until Firebase security rules and server-side authorization are configured and tested.
