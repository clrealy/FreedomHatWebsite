# Freedom Hat Consumer Linux

Website for Freedom Hat Consumer Linux (FHCL) 1.0 “Patriotism”.

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`), no build step.

## Hosting

Served by **GitHub Pages** from the repo root (no build step). `CNAME` sets the custom domain `getfreedomhat.org`, and `.nojekyll` makes Pages serve the files as-is.

1. Repo **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, pick the site branch and `/ (root)`.
2. DNS is at GoDaddy (default GoDaddy nameservers). Records:
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `clrealy.github.io`
3. Back in **Settings → Pages**, turn on **Enforce HTTPS** once the certificate is issued.

## Downloads

The ISO will be shared by torrent only, from `downloads/` (served by GitHub Pages). It's not published yet: there's no torrent file or download button right now. A torrent without a web seed only downloads while someone is seeding, so keep the ISO seeding in qBittorrent once it's up.

To make a torrent for a new ISO, use qBittorrent's **Tools → Torrent Creator** with these trackers, then replace the file in `downloads/` and update the SHA256 in `index.html`:

```
udp://tracker.opentrackr.org:1337/announce
udp://open.stealth.si:80/announce
udp://tracker.torrent.eu.org:451/announce
```
