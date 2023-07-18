prenom = prompt("Comment vous vous nommez ?");
var psg = prompt("Quel note donneriez vous cette saison pour le psg ?");

alert(
  "Vous vous appelez  " + prenom + " et vous avez donné comme note : " + psg
);

if (psg > 0 && psg < 5) {
  alert("Catastrophique");
} else psg > 5 && psg < 10;
{
  alert("Très moyen");
}
if (psg === 10) {
  alert("trÃ¨s juste");
} else if (psg > 10 && psg < 15) {
  alert("bon");
} else if (psg > 15 && psg < 17) {
  alert("trÃ¨s bien");
} else if (psg > 17 && psg < 20) {
  alert("Excellent");
}
// Surtout pour faire prompt le mieux est de faire 'var ' au lieur de 'let'
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");
const sliders = document.querySelector(".slider");
let etape = 0;
let counter = 0;

let nbr__img = slides.length;

let precedent = document.querySelector(".arrowg");
let suivant = document.querySelector(".arrowd");

function enleverAcitveImages() {
  for (let i = 0; i < nbr__img; i++) {
    slides[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr__img) {
    etape = 0;
  }
  enleverAcitveImages();
  slides[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr__img - 1;
  }
  enleverAcitveImages();
  slides[etape].classList.add("active");
});
var sliderNar = function (manual) {
  bullets.forEach((bulle) => {
    bulle.classList.remove("active");
  });
  slides.forEach((slider) => {
    slider.classList.remove("active");
  });
  bullets[manual].classList.add("active");
  slides[manual].classList.add("active");
};
bullets.forEach((bulle, i) => {
  bulle.addEventListener("click", () => {
    sliderNar(i);
  });
});
let lastscroll = 0;
// formule pour faire descendre navbar
const tete = document.querySelector(".entete");
const titre = document.querySelector(".titre");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastscroll) {
    tete.style.background = "black";
    tete.style.height = "65px";
    titre.style.background = "";
  } else {
    tete.style.background = "black";
    tete.style.height = "65px";
  }

  lastscroll = window.scrollY;

  // Pour savoir nombre de pixel que fais le site internet en height il suffit de faire "console.log(document.body.offsetHeight)""
  let scrollvalue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //image

  //Popup
  if (scrollvalue > 0.89) {
    abonner.style.opacity = 1;
    abonner.style.transform = "translateX(600px)";
  }
});
const abonner = document.querySelector(".abonner");
