// --- Theme toggle (persist in localStorage) ---
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const stored = localStorage.getItem("theme");
if (stored) document.body.classList.add(stored);
toggleBtn?.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  if (!isLight) document.body.classList.add("dark");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// --- Footer year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Your data (edit this) ---
const PROJECTS = [
  {
    title: "Keen Audio – Product Slider",
    description: "Responsive product carousel with keyboard & touch controls.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "", // put /assets/keen-audio.png if you add one
    links: { demo: "https://your-demo-link.com", code: "https://github.com/your-username/keen-audio" }
  },
  {
    title: "Bite Delight – Restaurant Site",
    description: "Modern landing page with image slider and CMS-ready structure.",
    stack: ["Node.js", "Express", "Tailwind"],
    image: "",
    links: { demo: "https://your-demo-link.com", code: "https://github.com/your-username/bite-delight" }
  },
  {
    title: "Spare Parts Store",
    description: "Catalog + invoice generator prototype for car spare parts.",
    stack: ["HTML", "CSS", "Vanilla JS"],
    image: "",
    links: { demo: "https://your-demo-link.com", code: "https://github.com/your-username/spare-parts" }
  }
];

const SKILLS = [
  "JavaScript", "Node.js", "HTML", "CSS", "Git/GitHub",
  "Responsive Design", "APIs", "SQL/NoSQL", "Problem Solving"
];

// --- Render Projects ---
function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="card">
      <div class="thumb">${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:12px">` : p.title}</div>
      <div class="title">${p.title}</div>
      <p class="desc">${p.description}</p>
      <div class="badges">
        ${p.stack.map(s => `<span class="badge">${s}</span>`).join("")}
      </div>
      <div class="links">
        ${p.links?.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener">Live Demo</a>` : ""}
        ${p.links?.code ? `<a href="${p.links.code}" target="_blank" rel="noopener">Source Code</a>` : ""}
      </div>
    </article>
  `).join("");
}

// --- Render Skills ---
function renderSkills() {
  const list = document.getElementById("skills-list");
  list.innerHTML = SKILLS.map(s => `<li>${s}</li>`).join("");
}

// --- Smooth scroll for internal links ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    }
  });
});

// Init
renderProjects();
renderSkills();
