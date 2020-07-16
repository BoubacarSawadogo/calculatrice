window.addEventListener(
  "DOMContentLoaded",
  function loaded(event) {
    window.removeEventListener("DOMContentLoaded", loaded, false);

    const openButton = document.getElementById("openButton");
    const calculator = document.getElementById("calculator");
    const value1 = document.getElementById("value1");
    const value2 = document.getElementById("value2");
    const equalButton = document.getElementById("equalButton");
    const resultConteneur = document.getElementById("result");
    const message = document.getElementById("message");
    const p = document.getElementsByTagName("p");
    const closeButton = document.getElementById("closeButton");

    openButton.addEventListener("click", function (event) {
      event.target.style.display = "none";
      calculator.style.display = "block";
    });

    // message quand on approche la souris sur l'input
    value1.addEventListener("focus", function (event) {
      event.target.setAttribute("title", "Entrer la première valeur numérique");
    });
    value2.addEventListener("focus", function (event) {
      event.target.setAttribute("title", "Entrer la deuxieme valeur numérique");
    });

    value1.addEventListener("blur", function () {
      if (isNaN(value1.value)) {
        value1.setAttribute("class", "invalid");
        message.innerHTML = "Erreur, entrez seulemt des chiffres";
        message.style.backgroundColor = "red";
      }
    });
    value2.addEventListener("blur", function () {
      if (isNaN(value2.value)) {
        value2.setAttribute("class", "invalid");
        message.innerHTML = "Erreur, entrez seulemt des chiffres";
        message.style.backgroundColor = "red";
      }
    });
    equalButton.addEventListener("click", function () {
      let resultat = parseInt(value1.value) + parseInt(value2.value);
      if (isNaN(resultat)) {
      } else {
        resultConteneur.setAttribute("value", resultat);
        message.style.backgroundColor = "white";
        message.innerHTML = "";
      }
    });

    closeButton.addEventListener("click", function (event) {
      calculator.style.display = "none";
      openButton.style.display = "block";
      value1.value = "";
      value2.value = "";
      resultConteneur.setAttribute("value", "");
      p.setAttribute("value", "");
    });
  },
  false
);
