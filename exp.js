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

//initialization des10 mots
let listeMots = mots;
dixMots = listeMots[0];
listeMots.shift();
for (let i = 0; i < 8; i++) {
  //while pour ne pas avoir le meme mot 2 fois dans la liste
  do {
    aleatoire = entierAleatoire(0, 9);
  } while (aleatoire == 0);

  dixMots.push(mots[aleatoire]);
}

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

  dixMots = listeMots[0];
  listeMots.shift();
  for (let i = 0; i < 8; i++) {
    //while pour ne pas avoir le meme mot 2 fois dans la liste
    do {
      aleatoire = entierAleatoire(0, 9);
    } while (aleatoire == counterMots + 1);

    dixMots.push(mots[aleatoire]);
  }

  //if (counterMots% 2 == 0){
  id1: if (clickedElement.value == "Start") {
    // pour changer l'ordre des elements dans la page, deprecated since we can delete them with the next while

    // divIntro = document.getElementsByClassName("intro")[0];
    // divContent = document.getElementsByClassName("content")[0];
    // container = divIntro.parentNode;
    // container.appendChild(divContent);
    // container.appendChild(divIntro);

    var age =
      (Date.now() - new Date(document.getElementById("naiss").value)) /
      31557600000;
    if (age < 18) {
      if (document.getElementById("plus18")){
        break id1;
      }
      let g = document.createElement("div");
      let plus18 = document.createTextNode(
        "Vous devez avoir plus de 18 ans pour participer à cette expérience"
      );
      g.appendChild(plus18);

      g.id = "plus18";

      document
        .getElementById("naiss")
        .parentNode.insertBefore(g, document.getElementById("naiss"));

      document.getElementById("plus18").style.color = "red";
      break id1;
    }

    if (document.getElementById("checkbox").checked == false) {
      document.getElementsByClassName(
        "formbuilder-checkbox-group-label"
      )[0].textContent =
        "S'il vous plaît cocher cette case pour accepter de participer à notre expérience.";
      document.getElementsByClassName(
        "formbuilder-checkbox-group-label"
      )[0].style.color = "red";
      break id1;
    }

    data.push(
      document.getElementById("nomPrenom").value,
      document.getElementById("email").value,
      document.getElementById("naiss").value,
      document.getElementById("Sexe-0").checked,
      document.getElementById("Sexe-1").checked,
      document.getElementById("Sexe-2").checked,
      document.getElementById("checkbox").value
    );

    let element = document.getElementById("intro");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    //divIntro = document.getElementsByClassName("intro")[0].style.visibility = "hidden";

    // test visible
    divContent = document.getElementsByClassName(
      "content"
    )[0].style.visibility = "visible";

    //creer le test avec document.write???
  } else if (clickedElement.value == "Go") {
    start = Date.now();
    motATrouver = dixMots[0];
    dixMots = arrayShuffle(dixMots);

    for (let i = 0; i < 10; i++) {
      document.getElementById(i).value = dixMots[i];
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
      "Clickez sur le button Go pour continuer";
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
      "L'expérience est fini, merci de votre participation";

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
