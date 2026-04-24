# Failure First Builder

Failure First Builder is a concept project for an AI Codex challenge. Instead of helping users build faster by default, it helps them avoid building the wrong thing.

The app takes a startup or product idea, identifies likely failure points, assigns a failure risk score, and proposes a tighter MVP with clearer positioning.

## Why this concept stands out

- It flips the usual AI-builder story from optimism to honest strategic critique.
- The before-and-after demo is immediate and easy to understand.
- The UI is intentionally designed to feel more editorial and product-forward than a generic chatbot shell.

## Current MVP

- Marketing-style landing page
- Interactive idea input and preset examples
- Client-side failure analysis engine
- Risk cards across audience, scope, differentiation, retention, and go-to-market
- Rebuilt MVP recommendation with a tighter launch direction

## Project structure

- `index.html` - app shell and content
- `package.json` - lightweight local scripts
- `src/styles.css` - visual design and responsive layout
- `src/app.js` - analysis logic and rendering

## Run locally

You can open `index.html` directly in a browser, or serve the folder with a simple static server:

```bash
npm run start
```

Then visit `http://localhost:8000`.

## Next upgrades

- Add an LLM-backed analysis mode using the OpenAI API
- Save idea histories and compare rebuilds
- Export a one-page product memo for submissions or investor review
- Add demo-mode transitions and richer scoring explanations
