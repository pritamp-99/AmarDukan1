const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const page = document.body.dataset.page;
if (page && navLinks) {
  const activeLink = navLinks.querySelector(`[data-nav="${page}"]`);
  if (activeLink) activeLink.classList.add("active");
}
