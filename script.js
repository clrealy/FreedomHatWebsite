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
const lines = [
  ['<span class="p">patriot@freedomhat</span>:~$ ', "neofetch --short"],
  ["", "OS:      Freedom Hat Consumer Linux 1.0 (Patriotism)"],
  ["", "Kernel:  6.18 LTS"],
  ["", "Desktop: Liberty Desktop 1.0"],
  ["", "Theme:   Old Glory [dark]"],
  ['<span class="p">patriot@freedomhat</span>:~$ ', "sudo freedom update"],
  ['<span class="ok">✔</span> ', "System is up to date. Let freedom boot. 🦅"],
  ['<span class="p">patriot@freedomhat</span>:~$ ', ""],
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

// Copy checksum
document.querySelectorAll("[data-copy]").forEach((btn) =>
  btn.addEventListener("click", async () => {
    const text = document.querySelector(btn.dataset.copy).textContent;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied!";
    } catch {
      btn.textContent = "Copy failed";
    }
    setTimeout(() => (btn.textContent = "Copy"), 1500);
  })
);

// Download placeholder
document.querySelectorAll("[data-dl]").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🎩 Downloads open on launch day. Stay free!");
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".card, .spec, .faq details, .release > *, .download-box").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
