// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Fake terminal on the desktop preview
const P = '<span class="p">fhcl@freedomhat</span>:~$ ';
const lines = [
  [P, "apt install steam"],
  ["", "🦅 apt is disabled on FHCL. Use 'eagle' instead."],
  [P, "eagle install steam"],
  ['<span class="ok">✔</span> ', "steam installed."],
  [P, "liberty update"],
  ['<span class="ok">✔</span> ', "System and Flatpaks up to date."],
  [P, ""],
];
const term = document.getElementById("terminal-text");
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

async function typeTerminal() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  while (true) {
    term.innerHTML = "";
    for (const [prefix, text] of lines) {
      term.innerHTML += prefix;
      const typed = prefix.includes("$");
      if (typed) {
        for (const ch of text) {
          term.innerHTML += escape(ch);
          await sleep(45);
        }
        await sleep(300);
      } else {
        term.innerHTML += escape(text);
        await sleep(120);
      }
      if (text) term.innerHTML += "\n";
    }
    await sleep(4000);
  }
}
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  term.innerHTML = lines.map(([p, t]) => p + escape(t)).join("\n");
} else {
  typeTerminal();
}

// Taskbar clock
const clock = document.getElementById("clock");
const tick = () =>
  (clock.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
tick();
setInterval(tick, 15000);

// Download placeholder until the ISO is hosted
const dlNote = document.getElementById("dl-note");
document.querySelectorAll("[data-dl]").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    dlNote.hidden = false;
  })
);
