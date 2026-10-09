# Worldport Express Logistics — Tracking Demo

This repository is a small Node.js website with a tracking lookup API and a sample timeline.

## Important: sample data only
The tracking code `GEL-MEXNY-061026-8Q2K` is seeded as a **simulated test record**. Its airport events and customs status are not independently verified and must not be presented as proof of a real shipment. Replace the demo record only with accurate, authorized shipment data.

## Run locally
1. Install Node.js 18 or newer.
2. In this folder, run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## API
- `GET /api/health` — confirms the demo server is running.
- `GET /api/track/GEL-MEXNY-061026-8Q2K` — returns the sample record.
- Any unknown code returns a 404 response.

## Hosting
GitHub Pages only hosts static files and cannot run this Node/Express API. Deploy this project to a Node-compatible host to make the included lookup work online. If you host only `public/index.html` on GitHub Pages, the `/api/track` endpoint will not exist.

This starter does not yet include a database, real carrier integrations, user accounts, or an admin dashboard. Those should be added before using it for actual shipment operations.
