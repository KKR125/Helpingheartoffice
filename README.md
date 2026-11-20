# HelpingHeart Office

HelpingHeart Office is a React + TypeScript productivity workspace deployed on Vercel.

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown.
4. Run `npm run build` to run the TypeScript check and create the production build.

## Phase 1 — Workspace foundation
- Responsive dashboard and application launcher.
- Create, search, rename, star and delete workspace files.
- Browser-local persistence using localStorage.

## Phase 2 — Core editors (current)
- **Writer:** rich-text editing (headings, bold, italic, underline, lists and tables), browser autosave, Word-readable `.doc` export and print-to-PDF.
- **Calc:** editable spreadsheet grid, multiple sheets, basic arithmetic and SUM formulas, XLSX import and export.
- **Impress:** create and edit slides, add/delete/reorder slides, and export PowerPoint `.pptx`.

## Important current limitations
- Files are stored in the current browser only. They do not yet sync between devices or accounts.
- Writer exports Word-readable HTML in a `.doc` file; full DOCX round-trip compatibility is not implemented yet.
- Calc currently supports a limited formula set; it is not yet a complete Excel/LibreOffice formula engine.
- Impress currently provides text-based slide layouts; themes, images, transitions, animations and full PowerPoint import are still future work.
- Draw and PDF Studio are launcher placeholders and are not yet full editors.
- Firebase authentication, Firestore, Storage, collaboration and Windows packaging are not yet implemented.

## Roadmap
3. Draw, PDF tools and additional applications.
4. Firebase cloud files, collaboration, AI, version history and offline sync.
5. Tauri 2 Windows desktop packaging, testing and release.

Do not store sensitive or important documents here until cloud security, backup and access controls are implemented and tested.
