# Gold Trading AI — XAUUSD

A responsive black-and-gold trading-planning interface. **The static site includes a working manual TP/SL calculator** and can be hosted on GitHub Pages. Screenshot vision is deliberately not faked: it needs a server-side AI provider configuration.

## Features
- Upload chart images from iPhone Photos / desktop file picker and preview them.
- Manual BUY/SELL entry, SL, TP1, TP2, TP3 calculation.
- English, French, Arabic, and Moroccan Darija UI labels.
- Mobile-first Safari layout.
- No live quote feed and no guaranteed profit claims.
- No API secret in frontend files.

## Calculation logic
Given entry `E`, risk distance `D`, and reward multiplier `R`:
- BUY: SL = E − D; targets = E + D×R, E + D×1.5R, E + D×2R.
- SELL: SL = E + D; targets = E − D×R, E − D×1.5R, E − D×2R.

These are price-distance arithmetic levels, not lot-size or account-risk sizing.

## Publish the static calculator on GitHub Pages
1. Download and unzip the project.
2. Create a GitHub repository (for example `gold-trading-ai`).
3. Upload **the contents** of this folder. Ensure `index.html` is in the repository root, not inside another nested folder.
4. In repository Settings → Pages, choose deploy from branch, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish. Open the Pages URL in Safari.

## AI vision integration (optional; requires backend)
GitHub Pages is static and cannot safely store API secrets. The included UI intentionally does not call an AI service or invent a signal. To add actual vision analysis:
- Deploy a small backend (e.g. Node service) to a server host, configure the provider API key as a server environment variable, and implement an authenticated `/analyze` endpoint.
- Send screenshot data and user notes to the backend. The backend should call a vision-capable model, validate the returned JSON, and return a clearly labeled *possible scenario* plus uncertainty.
- Add rate limiting, upload size limits, authentication, and usage-cost controls. Do not place provider keys in `script.js`, HTML, or public GitHub repository.
- The UI’s Analyze button currently clearly reports that AI is not configured. This is by design, not a fake “working” AI.

## Test
Run in browser or use Node:
```sh
node test-calculator.js
```
Expected: BUY and SELL calculations pass. No third-party dependencies needed.

## Risk notice
For education and planning only; not financial advice. Gold and leveraged trading can cause substantial losses. Confirm any price with your broker’s live quote. No output can guarantee profit.
