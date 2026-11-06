# The Parker Collective

Local JavaScript Next.js App Router project with Tailwind CSS 4.

## Run

Use Node.js 22 LTS or newer compatible LTS. From this folder:

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production output run `npm run build`.
Preview that output with `npm run preview` (serve prints its local URL).

## Files

- `app`: homepage, layout, global styles and 404.
- `components`: reusable sections/components as layouts are approved.
- `lib`: shared helpers and future integration settings.
- `assets/fonts`: add licensed Akzidenz-Grotesk and Roca Two webfont files here.
- `public/images/portraits`: the six supplied photographs.
- `public/images/backgrounds`: supplied background texture.
- `public/images/portfolio`: additional client work.
- `public/images/brand`: logo and other brand graphics.
- `public/videos`: future video assets.

Public files use URLs without the public prefix, e.g. `/images/portraits/headshot1.jpeg`.
Original image names and bytes are preserved. Large portraits are source assets;
create optimized delivery variants once crops and sections are approved.

## Brand

Black #000000, white #FFFFFF, accent #E8FF8C are available as Tailwind
`brand-black`, `brand-white`, and `brand-accent` colors.
Font fallbacks are temporary: licensed brand font files have not been supplied.
The design-note tracking value -83 must be translated from its original tool;
do not apply -83px in CSS.

## Deployment preparation

Static export is configured for Cloudflare Pages or another static host.
Build command: `npm run build`. Output directory: `out`.
There is no runtime image optimizer; optimize images before launch.
Use `npm run preview`, not `next start`, to preview the exported site.
No hosting account, repository, domain or live deployment is connected yet.

## Pending

- Section references, approved layouts and copy.
- Brand font files, logo and remaining content.
- Policy page after the site's data collection and provider choices are confirmed.
- EmailJS, Instagram feed provider and Google Analytics setup.
- Build the homepage and remove the noindex metadata before launch.

Do not put private keys or account credentials in public files or browser code.


## Imported Drive media

The November 5 Drive batch was inspected and organized without re-encoding:
- `assets/originals/images/portraits`: four HEIC portraits.
- `assets/originals/videos/behind-the-scenes`: filming, editing, and camera review.
- `assets/originals/videos/b-roll`: city, studio, and detail footage.
- `assets/originals/videos/portfolio`: aesthetics treatment footage and reel.
- `public/images/brand`: white-background and transparent PNG logos.
- `assets/media-index.json`: original filenames, new paths, sizes, and SHA-256 checksums.

These source photos/videos keep their original formats and quality. Create browser-ready copies in `public` when requested; the original videos include a 205 MB clip. No media conversion has been performed.
