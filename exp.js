console.log("=========================");

let mots = [
  "Tableau",
  "Maladie",
  "Acceder",
  "Haricot",
  "Tension",
  "Pendule",
  "Parasol",
  "Unanime",
  "Courant",
  "Autiste",
];
let motATrouver;
/* 
let jaune = "#dddd00";
let bleu = "#0000ff";

let grisC = "#888888"; // 2.82 avec bleu, 2.42 avec bleu2 et 2.43 avec jaune
let grisF = "#b1b1b1"; // 1.71 avec bleu, 4 avec bleu2 et 1.47 avec jaune
let gris3 = ""; // bfbfbf?
//let grisCC = '#333333';
let couleurs = [jaune, bleu, grisC, grisF];
*/
NewMots = arrayShuffle(mots);
/*
CoulMots = [couleurs[0], couleurs[1]];
CoulFond = [couleurs[2], couleurs[3]];
*/
tabrep = [
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
  "bt gc-j",
  "bt gc-b",
  "bt gf-j",
  "bt gf-b",
];
//document.write(tabrep.length)
tabrep = arrayShuffle(tabrep);
let counterMots = 0;
let headdata = ["Mot a trouver", "index", "Mot cliqué", "date", , "classe"]; //dans quel ordre son les données : si index = 12 btn Go sinon mot rechercher
let data = [];
let start = 0;
let millis = 0;

function arrayShuffle(a) {
  var l = a.length,
    t,
    r;
  while (0 !== l) {
    r = Math.floor(Math.random() * l);
    l -= 1;
    t = a[l];
    a[l] = a[r];
    a[r] = t;
  }
  return a;
}

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickListener(e) {
  //console.log(counterMots);
  var clickedElement = window.event ? window.event.target : e.target,
    tags = document.getElementsByTagName(clickedElement.tagName);

  NewMots = arrayShuffle(mots);
  //if (counterMots% 2 == 0){
  if (clickedElement.value == "Go") {
    start = Date.now();
    motATrouver = NewMots[entierAleatoire(0, 9)];
    for (let i = 0; i < 10; i++) {
      document.getElementById(i).value = NewMots[i];
      document.getElementById(i).className = tabrep[counterMots];
      document.getElementById(i).style.visibility = "visible";
    }
    document.getElementById("motATrouver").textContent = motATrouver;
    document.getElementById("motATrouver").style.visibility = "visible";
    document.getElementById("texte1").textContent = "Trouvez le mot:";
    document.getElementById(12).disabled = true;
  } else {
    //document.getElementById(i).style.backgroundColor = CoulFond[entierAleatoire(0,1)];
    //document.getElementById(i).style.color = CoulMots[entierAleatoire(0,1)];
    document.getElementById("motATrouver").style.visibility = "hidden";
    document.getElementById("texte1").textContent =
      "Clickez sur le button XXXXX";
    document.getElementById(12).disabled = false;
    for (let i = 0; i < 10; i++) {
      document.getElementById(i).style.visibility = "hidden";
    }

    millis = Date.now() - start;

    // ce qu'on cherche garder dans le JSON
    console.log({
      essai: counterMots,
      motATrouver: document.getElementById("motATrouver").textContent,
      id: clickedElement.id,
      MotClicke: clickedElement.value,
      style: clickedElement.className,
      timeElapsedSeconds: millis / 1000,
    });

    data.push(
      counterMots,
      document.getElementById("motATrouver").textContent,
      clickedElement.id,
      clickedElement.value,
      clickedElement.className,
      millis / 1000
    );

    counterMots++;

    document.getElementById(11).value = Math.trunc(counterMots) + "/40";
  }

  //}

  if (counterMots >= 40) {
    document.getElementById(12).style.visibility = "hidden";
    document.getElementById("texte1").textContent =
      "<p>L'expérience est fini, merci de votre participation</p>";

    savedata(data);
  }
}

function clickedId(clickedId) {
  console.log(clickedId);
}

function savedata(data) {
  // Creating a XHR object
  let xhr = new XMLHttpRequest();
  let url = "savedata.php";

  // open a connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  // Sending data with the request
  xhr.send(JSON.stringify(data));
}
