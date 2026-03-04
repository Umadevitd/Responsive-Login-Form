## Cursor Cloud specific instructions

This is a static HTML/CSS/JS project (animated login form) with no build system, package manager, linter, or test framework.

### Running the app

Serve the project root with any static file server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser. The page loads `index.html` which references `css/style.css`, `js/main.js`, two SVG images in `img/`, and CDN-hosted Google Fonts + Font Awesome.

### Notes

- There is no build step, no linter, and no automated tests.
- `img/wave.png` is referenced in `index.html` but does not exist in the repo; this causes a missing background image (non-blocking).
- The form's `action` is `index.html`, so clicking Login simply reloads the page.
