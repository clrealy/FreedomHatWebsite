# Freedom Hat Consumer Linux

Website for Freedom Hat Consumer Linux (FHCL) 1.0 “Patriotism”.

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`), no build step.

## Deploy on Netlify

1. In Netlify: **Add new project → Import an existing project → GitHub**, pick this repo.
2. Choose the branch to deploy. `netlify.toml` already sets the publish directory to the repo root with no build command.
3. Deploy. Every push to that branch redeploys the site.

Site domain: `getfreedomhat.org` (registered at GoDaddy, DNS on Cloudflare, `@` and `www` CNAME to the Netlify site, DNS only).

## Downloads

The ISO is too big for Netlify's free bandwidth, so it lives in a Cloudflare R2 bucket served at `dl.getfreedomhat.org`:

- `https://dl.getfreedomhat.org/FHCL-Patriotism.iso`

The SHA256 is published on the page itself, not as a separate file.

If you upload a new build, update the filename and the SHA256 in the download section of `index.html`.

## License

Website content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0). See [`LICENSE`](LICENSE). Credit “The Freedom Hat Project” and share changes under the same license.

Linux, KDE, Plasma and Debian are trademarks of their respective owners and are not covered by this license.
