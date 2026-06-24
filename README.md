# Itera Customer Test Site

This repository is a disposable customer website for testing Itera AI with real GitHub authorization, pull requests, CI checks, and deployment hooks.

It is intentionally small:

- `index.html` is the customer website page.
- `styles.css` controls the visible layout.
- `main.js` adds a tiny interactive cart behavior.
- `scripts/check-site.js` is the CI check.
- `.github/workflows/ci.yml` runs the check on every push and pull request.
- `vercel.json` and `netlify.toml` allow quick static deployment.

## Local Check

```bash
npm run check
```

## How To Use With Itera AI

1. Install the Itera AI GitHub App on this repository.
2. In Itera AI, sync authorized repositories.
3. Connect this repository to the test project.
4. Submit feedback.
5. Approve the task and start evolution.
6. Confirm that Itera AI opens a real pull request.
7. Confirm that GitHub Actions runs `npm run check`.
8. Merge the pull request.
9. Trigger a Vercel, Netlify, or custom deployment hook.

Expected result: the website files change in a pull request, CI passes, and the deployed customer site updates after merge/deploy.
