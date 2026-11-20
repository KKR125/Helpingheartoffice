# HelpingHeart Office

HelpingHeart Office is a React + TypeScript productivity workspace for the web. It includes independent tools for documents, spreadsheets, presentations, drawing, PDF viewing, diagrams, equations and simple database tables.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env` if you want to configure Firebase.
3. Run `npm install`.
4. Run `npm run dev`.
5. Run `npm run build` before publishing.

## Phase 1 — Workspace foundation

- Responsive dashboard and application launcher.
- Create, search, rename, star and delete workspace files.
- Browser-local persistence.

## Phase 2 and 3 — Independent applications

- **Writer:** rich-text document editor with headings, lists, tables, autosave, Word-readable HTML export and browser print-to-PDF.
- **Calc:** spreadsheet grid, multiple sheets, basic arithmetic and SUM formulas, XLSX import/export.
- **Impress:** create, edit, reorder and export text-based PowerPoint slides.
- **Paint:** canvas drawing with pencil, eraser, shapes, text, undo/redo and PNG export.
- **PDF Studio:** browser PDF viewer with separate review notes.
- **Diagram:** draggable labelled shapes and SVG export.
- **Math:** LaTeX source editor with symbol insertion and .tex export.
- **Base:** editable table fields and records with CSV export.

## Phase 4 — Workspace polish and cloud foundation

- Optional Firebase email/password accounts.
- Per-user cloud file storage: file contents in Firebase Storage and metadata in Firestore.
- Browser-local saving remains available when Firebase is not configured.
- Cloud restore and automatic upload after sign-in.
- Firestore and Storage security rules scoped to the authenticated user's UID.
- PWA manifest and service worker for installability and caching of visited app assets.
- Persistent light/dark preference and JSON workspace backup export.

### Enable Firebase

1. Create or select a Firebase project.
2. Enable **Authentication → Email/Password**.
3. Create a **Cloud Firestore** database and a **Storage** bucket.
4. In Firebase project settings, create a Web App and copy its configuration.
5. Add the six `VITE_FIREBASE_*` values from `.env.example` to Vercel Project Settings → Environment Variables for Production, Preview and Development as appropriate.
6. Publish `firestore.rules` in the Firestore Rules tab and `storage.rules` in the Storage Rules tab.
7. Redeploy the Vercel project.

Without the Firebase configuration and published rules, account sign-in and cloud sync remain unavailable; local browser saving still works. Never commit private service-account keys or admin credentials to this repository.

## Known limitations — not yet a full LibreOffice replacement

- Writer currently exports Word-readable HTML in a .doc file; full DOCX round-trip compatibility, page headers/footers and advanced layout are not implemented.
- Calc has a limited formula parser and grid; it is not a complete Excel formula engine and does not yet include full charting, sorting or conditional formatting.
- Impress currently uses text-based slide layouts; image placement, rich themes, transitions, animations, presenter mode and full PPTX import remain future work.
- PDF Studio relies on the browser's PDF viewer; it does not yet modify PDF pages or embed annotations into the PDF.
- Math provides LaTeX source editing, not a rendered equation engine.
- Base is a lightweight table editor, not a relational database engine.
- Offline caching is not a guarantee of full offline editing or background cloud synchronization.
- Collaboration, version history/recovery, AI assistance, complete file-format compatibility and Windows Tauri packaging still need implementation and testing.

## Security and data

Use the local JSON backup export for important work. Cloud data is only as secure as the Firebase project configuration and deployed rules. Test with separate accounts before storing private documents.
