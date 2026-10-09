const root = document.documentElement;
const links = document.getElementById("links");
const menu = document.getElementById("menu");

try {
  const saved = localStorage.getItem("theme");
  root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) {}

document.getElementById("theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
};

menu.onclick = () => menu.setAttribute("aria-expanded", links.classList.toggle("open"));
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
});
