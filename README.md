# Freedom Hat Consumer Linux

Website for Freedom Hat Consumer Linux (FHCL) 1.0 “Patriotism”.

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`), no build step.

## Deploy on Netlify

1. In Netlify: **Add new project → Import an existing project → GitHub**, pick this repo.
2. Choose the branch to deploy. `netlify.toml` already sets the publish directory to the repo root with no build command.
3. Deploy. Every push to that branch redeploys the site.

The ISO is not hosted here. It's a 4.4 GB download, far past what the free Netlify plan's bandwidth allows, so link the download button (`data-dl` in `index.html`) to an external host.
