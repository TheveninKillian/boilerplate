let name = "Tom";

function RecoverName(nom) {
  console.log("My name is " + nom);
  return nom;
}

import("./about").then(function (page) {
  // Donne le rendu de la page
  page.render();
});

RecoverName(name);

module.exports = RecoverName;