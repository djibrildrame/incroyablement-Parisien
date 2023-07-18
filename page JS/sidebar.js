// formule pour faire descendre navbar
document.addEventListener("scroll", () => {
  const tete = document.querySelector(".head");
  if (window.scrollY > 50) {
  } else {
  }
});
// faire une sidebar(c'est à dire faire aparraitre un à partir d'un côté)

let btn = document.querySelector(".btn");
let sidebar = document.querySelector("#sidebar");
const parisien = document.querySelector(".titre");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
