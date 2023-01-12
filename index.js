let leftGenerator = document.getElementById("leftbtn");
let displayleft = document.getElementById("displayleft");
let countleft = document.getElementById("counterLeft");

let generator1 = ["Fais", "Ne respect", "Ordonne"];
let generator2 = ["le mal", "les régles", "la corruption"];
let generator3 = ["toute ta vie.", "pour toujours.", "pour ton prochain."];

leftGenerator.addEventListener("click", left);
function left() {
  while (displayleft.firstChild) {
    displayleft.removeChild(displayleft.firstChild);
  }

  let myError = document.getElementById("error");
  let myInput = document.getElementById("counterLeft");
  let myRegex = /^[1-5]$/;

  if (myInput.value.trim() == "") {
    myError.innerHTML = "Le champs est reqis.";
    myError.style.color = "red";
    e.preventDefult();
  } else if (myRegex.test(myInput.value) == false) {
    myError.innerHTML = "Veuillez entrer les chiffres de 1 à 5";
    myError.style.color = "red";
    e.preventDefult();
  } else {
    myError.innerHTML = "";
  }

  for (i = 0; i < countleft.value; i++) {
    let random1 = Math.floor(Math.random() * generator1.length);
    let random2 = Math.floor(Math.random() * generator2.length);
    let random3 = Math.floor(Math.random() * generator3.length);
    let pra = document.createElement("p");
    pra.textContent =
      generator1[random1] +
      " " +
      generator2[random2] +
      " " +
      generator3[random3];
    displayleft.appendChild(pra);
  }
}

let rightGenerator = document.getElementById("rightbtn");
let displayright = document.getElementById("displayright");
let countright = document.getElementById("counterRight");

let creator1 = ["Respect", "Ordonne", "Protège"];
let creator2 = ["ton", "le bien", "autrui"];
let creator3 = ["prochain.", "toujours !", "pour la vie !"];

rightGenerator.addEventListener("click", right);
function right() {
  while (displayright.firstChild) {
    displayright.removeChild(displayright.firstChild);
  }

  let mError = document.getElementById("merror");
  let myInput = document.getElementById("counterRight");
  let myRegex = /^[1-5]$/;

  if (myInput.value.trim() == "") {
    mError.innerHTML = "Le champs est reqis.";
    mError.style.color = "red";
    e.preventDefult();
  } else if (myRegex.test(myInput.value) == false) {
    mError.innerHTML = "Veuillez entrer les chiffres de 1 à 5";
    mError.style.color = "red";
    e.preventDefult();
  } else {
    mError.innerHTML = "";
  }
  for (i = 0; i < countright.value; i++) {
    let random1 = Math.floor(Math.random() * creator1.length);
    let random2 = Math.floor(Math.random() * creator2.length);
    let random3 = Math.floor(Math.random() * creator3.length);
    let pra = document.createElement("p");
    pra.textContent =
      creator1[random1] + " " + creator2[random2] + " " + creator3[random3];
    displayright.appendChild(pra);
  }
}
