## AMPHIBIOUX

A deliberately bare site: the name, a photo, and a description, with a photos page and a
videos page behind it. Built with [Astro](https://astro.build) — it compiles to plain
HTML you can host anywhere.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve dist/ locally
```

### Editing

Text lives in **`src/site.ts`** — the description, the lineup, the links. Images live in
**`src/images/`** and are imported by the page that shows them.

| I want to change… | Edit |
| --- | --- |
| Description, lineup, links | `src/site.ts` |
| Colours, type, spacing | `src/styles/global.css` — the tokens at the top |
| Page layout | `src/pages/index.astro`, `photos.astro`, `videos.astro` |

Type is `"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif`. Geist loads from
Google Fonts in `src/layouts/Base.astro`; drop that `<link>` and the stack falls back to
Helvetica with no other change.

The palette is pale sage with dark green ink. To invert it to a dark site, swap the four
values named in the comment at the top of `global.css` — nothing else needs to move.

### Adding a photo

Put the file in `src/images/`, then in `src/pages/photos.astro` import it at the top and
add a line to the `photos` array with its alt text. Astro resizes and converts it at
build time, so drop in the full-size original — the 2MB files in there are served as
~90KB WebP. Don't put photos in `public/`; files there are served untouched.

### Adding a video

Add an entry to the `videos` list at the top of `src/pages/videos.astro` with the
YouTube id (the part after `?v=`), a title, and a line of context. They embed through
youtube-nocookie, so nothing loads from Google until someone presses play.

### The domain

The site is served by GitHub Pages at `amphibioux.com`, deployed by
`.github/workflows/deploy.yml` on every push to `main`.

`public/CNAME` holds the custom domain. GitHub reads it from the published build, so it
is the record of the domain rather than the setting in Settings → Pages — if you ever
change domains, change it here. DNS lives at Squarespace: four A records on `@` pointing
at GitHub's Pages IPs, and a `www` CNAME to `kyirong6.github.io`.

`site.url` in `src/site.ts` and `site` in `astro.config.mjs` must match the domain; both
are already set. There's no contact address on the site — Instagram is the way in.

### Deploying

`npm run build` writes a static site to `dist/`. Drag that folder onto Netlify, or
connect the repo to Netlify/Vercel/Cloudflare Pages with build command `npm run build`
and output directory `dist`.
