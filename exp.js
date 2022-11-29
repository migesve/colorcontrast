console.log("*****");

let mots = [
  "tableau",
  "maladie",
  "acceder",
  "haricot",
  "tension",
  "pendule",
  "parasol",
  "unanime",
  "courant",
  "autiste",
  "chambre",
  "travail",
  "horizon",
  "famille",
  "service",
  "voiture",
  "pouvoir",
  "hauteur",
  "journal",
  "docteur",
  "semaine",
  "musique",
  "justice",
  "passage",
  "dernier",
  "fatigue",
  "chaleur",
  "seconde",
  "victime",
  "cabinet",
  "morceau",
  "demande",
  "terrain",
  "cuisine",
  "respect",
  "branche",
  "machine",
  "cerveau",
  "secours",
  "planche",
];

let motATrouver;
// listeMots = new Array();
// tabrep = new Array();
//copier liste mots dans une nouvelle reference

arrayShuffle(mots);
listeMots = mots.slice();

// console.log(listeMots);

// console.log(listeMots);

//initialization des10 mots
let dixMots = new Array();
// arrayShuffle(listeMots); <---------- Mistery
dixMots.push(listeMots[0]);
motATrouver = listeMots[0];

//console.log(listeMots);
listeMots.shift();

//console.log(listeMots);
for (let i = 0; i < 9; i++) {
  //while pour ne pas repeter le meme mot
  do {
    aleatoire = entierAleatoire(0, mots.length - 1);
  } while (dixMots.includes(mots[aleatoire]));
  dixMots.push(mots[aleatoire]);
}

//console.log(listeMots);
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
arrayShuffle(tabrep);
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

  //if (counterMots% 2 == 0){

  id1: if (clickedElement.value == "Start") {
    // pour changer l'ordre des elements dans la page, deprecated since we can delete them with the next while

    // divIntro = document.getElementsByClassName("intro")[0];
    // divContent = document.getElementsByClassName("content")[0];
    // container = divIntro.parentNode;
    // container.appendChild(divContent);
    // container.appendChild(divIntro);

    var age =
      (2022 - document.getElementById("naiss").value);
    if (age < 18) {
      if (document.getElementById("plus18")) {
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
    console.log(age)
    // else if (age >= 18) {
    //   document.getElementById("plus18").style.visibility = "hidden";
    // }

    if (document.getElementById("checkbox").checked == false
    && document.getElementById("naiss").textContent == "" &&
    document.getElementById("Sexe").textContent == "") {
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
    //console.log("Go");
    start = Date.now();
    //console.log(dixMots, dixMots[0]);
    dixMots = arrayShuffle(dixMots);
    //console.log(dixMots);
    let latence = entierAleatoire(500,1300)
    setTimeout(() => {  
    
    for (let i = 0; i < 10; i++) {
      document.getElementById(i).value = dixMots[i];
      //console.log(dixMots[i]);
      document.getElementById(i).className = tabrep[counterMots];
      document.getElementById(i).style.visibility = "visible";
    }
 
    document.getElementById("motATrouver").textContent = motATrouver;
    document.getElementById("motATrouver").style.visibility = "visible";
    document.getElementById("texte1").textContent = "Trouvez le mot:";
    document.getElementById(12).disabled = true;

    dixMots = new Array();
    dixMots.push(listeMots[0]);
    motATrouver = dixMots[0];
    //console.log(listeMots, motATrouver, dixMots[0]);
    listeMots.shift();
    //console.log(listeMots, motATrouver, dixMots[0]);
    for (let i = 0; i < 9; i++) {
      //while pour ne pas repeter le meme mot
      do {
        aleatoire = entierAleatoire(0, mots.length - 1);
      } while (dixMots.includes(mots[aleatoire]));
      dixMots.push(mots[aleatoire]);
    }
  }, latence)
    //console.log(listeMots, motATrouver, dixMots[0]);
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
      backgroundColor: document.getElementById(clickedElement.id)
        .style.backgroundColor,
      textColor: document.getElementById(clickedElement.id).style
        .color,
      timeElapsedSeconds: millis / 1000,
    });

    data.push({
      motATrouver: document.getElementById("motATrouver").textContent,
      id: clickedElement.id,
      motClicke: clickedElement.value,
      backgroundColor: document.getElementById(clickedElement.id)
        .style.backgroundColor,
      textColor: document.getElementById(clickedElement.id).style
        .color,
      tempsDeReponse: millis / 1000,
    });

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
  //console.log(clickedId);
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
