# Freedom Hat Consumer Linux

Website for Freedom Hat Consumer Linux (FHCL) 1.0 “Patriotism”.

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`), no build step.

## Hosting

Served by **GitHub Pages** from the repo root (no build step). `CNAME` sets the custom domain `getfreedomhat.org`, and `.nojekyll` makes Pages serve the files as-is.

1. Repo **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, pick the site branch and `/ (root)`.
2. DNS is on Cloudflare (domain registered at GoDaddy). Records, all **DNS only** (grey cloud):
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `clrealy.github.io`
3. Back in **Settings → Pages**, turn on **Enforce HTTPS** once the certificate is issued.

## Downloads

The ISO is too big for GitHub Pages (100 MB file limit), so it lives in a Cloudflare R2 bucket served at `dl.getfreedomhat.org`:

- `https://dl.getfreedomhat.org/FHCL-Patriotism.iso`
- `downloads/FHCL-Patriotism.iso.torrent` (in this repo, served by GitHub Pages)

The torrent lists the R2 URL as a web seed, so it downloads even when nobody else is seeding. To rebuild it for a new ISO:

```
mktorrent -l 22 \
  -a udp://tracker.opentrackr.org:1337/announce \
  -a udp://open.stealth.si:80/announce \
  -a udp://tracker.torrent.eu.org:451/announce \
  -w https://dl.getfreedomhat.org/FHCL-Patriotism.iso \
  -c "Freedom Hat Consumer Linux 1.0 Patriotism" \
  -o FHCL-Patriotism.iso.torrent FHCL-Patriotism.iso
```

Then commit the new `.torrent` to `downloads/` in this repo.

The SHA256 is published on the page itself, not as a separate file.

If you upload a new build, update the filename and the SHA256 in the download section of `index.html`.
