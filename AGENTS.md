## Cursor Cloud specific instructions

This is a static HTML/CSS/JS project (animated login form) with no build tools, package manager, linter, or tests.

### Running the application

Serve the project root with any static file server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser. The form action points to `index.html` itself — there is no backend.

### Key notes

- No `package.json`, no dependencies to install, no build step.
- External resources (Google Fonts, Font Awesome) load via CDN.
- The JS in `js/main.js` handles input focus/blur label animations only.
