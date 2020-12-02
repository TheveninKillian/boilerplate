import "../sass/main.scss";

let name = "Alain";

function RecoverName(nom) {
  console.log("My name is " + nom);
  return nom;
}

import("./about").then(function (page) {
  // Donne le rendu de la page
  page.render();
});

RecoverName(name);
