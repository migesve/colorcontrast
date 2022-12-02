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
// newTabrep = new Array();
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
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
  ["gc-j", "gc-b", "gf-j", "gf-b"],
];
let newTabrep = new Array();
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 4; j++) {
    newTabrep.push(tabrep[i][j] + "." + i);
  }
}

console.log(newTabrep);
newTabrep = [
  "gc-j.0",
  "gc-b.0",
  "gf-j.0",
  "gf-b.0",
  "gc-j.1",
  "gc-b.1",
  "gf-j.1",
  "gf-b.1",
  "gc-j.2",
  "gc-b.2",
  "gf-j.2",
  "gf-b.2",
  "gc-j.3",
  "gc-b.3",
  "gf-j.3",
  "gf-b.3",
  "gc-j.4",
  "gc-b.4",
  "gf-j.4",
  "gf-b.4",
  "gc-j.5",
  "gc-b.5",
  "gf-j.5",
  "gf-b.5",
  "gc-j.6",
  "gc-b.6",
  "gf-j.6",
  "gf-b.6",
  "gc-j.7",
  "gc-b.7",
  "gf-j.7",
  "gf-b.7",
  "gc-j.8",
  "gc-b.8",
  "gf-j.8",
  "gf-b.8",
  "gc-j.9",
  "gc-b.9",
  "gf-j.9",
  "gf-b.9",
];

//document.write(newTabrep.length)
arrayShuffle(newTabrep);
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

    var age = 2022 - document.getElementById("naiss").value;
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
    console.log(age);
    // else if (age >= 18) {
    //   document.getElementById("plus18").style.visibility = "hidden";
    // }

    if (
      document.getElementById("checkbox").checked == false &&
      document.getElementById("naiss").textContent == "" &&
      document.getElementById("Sexe").textContent == ""
    ) {
      document.getElementsByClassName(
        "formbuilder-checkbox-group-label"
      )[0].textContent =
        "S'il vous plaît cocher cette case pour accepter de participer à notre expérience.";
      document.getElementsByClassName(
        "formbuilder-checkbox-group-label"
      )[0].style.color = "red";
      break id1;
    }

    data.push({
      AnneeNaissance : document.getElementById("naiss").value,
      Sexe: document.getElementById("Sexe-0").checked,
      Sexe : document.getElementById("Sexe-1").checked,
      Sexe : document.getElementById("Sexe-2").checked,
      Agreement : document.getElementById("checkbox").value,
      tailleEcran : ny + "x" + nx, 
      //TmpAttente: latence,
      OsVersion : infos
    }
      
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
    //splits modalite et lieu de mot a trouver
    let str = String(newTabrep[counterMots]);
    let splitTabreb = str.split(".");

    //console.log(dixMots);
    let latence = entierAleatoire(300, 900);
    //document.getElementById(i).value = splitTabreb[1];

    document.getElementById(12).disabled = true;
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        if (i == splitTabreb[1] && dixMots[i] != motATrouver) {
          if (dixMots.indexOf(motATrouver) - splitTabreb[1] < 0) {
            document.getElementById(dixMots.indexOf(motATrouver)).value =
              dixMots[i];
            document.getElementById(i).value = motATrouver;

            document.getElementById(i).className = splitTabreb[0];
            document.getElementById(i).style.visibility = "visible";
            
            continue;
          } /* */ else if (
            dixMots.indexOf(motATrouver) - splitTabreb[1] - splitTabreb[1] >
            0
          ) {
            document.getElementById(i).value = motATrouver;
            dixMots[dixMots.indexOf(motATrouver)] = dixMots[i];

            document.getElementById(i).className = splitTabreb[0];
            document.getElementById(i).style.visibility = "visible";
            
            continue;
          }
        }
        document.getElementById(i).value = dixMots[i];
        //console.log(dixMots[i]);
        document.getElementById(i).className = splitTabreb[0];
        document.getElementById(i).style.visibility = "visible";

      }

      document.getElementById("motATrouver").textContent = motATrouver;
      document.getElementById("motATrouver").style.visibility = "visible";
      document.getElementById("texte1").textContent = "Trouvez le mot:";

      dixMots = new Array();
      dixMots.push(listeMots[0]);
      motATrouver = dixMots[0];
      listeMots.shift();
      //console.log(listeMots, motATrouver, dixMots[0]);
      for (let i = 0; i < 9; i++) {
        //while pour ne pas repeter le meme mot
        do {
          aleatoire = entierAleatoire(0, mots.length - 1);
        } while (dixMots.includes(mots[aleatoire]));
        dixMots.push(mots[aleatoire]);
      }
    }, latence);
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

    if (document.getElementById(clickedElement.id).className.substr(3,2) == "gc"){
      bgc = "#888888"
    }
    else {
      bgc = "#333333"
    }
    if (document.getElementById(clickedElement.id).className.substr(6) == "j"){
      tc = "#777700"
    }
    else {
      tc = "#0000ee"
    }

    console.log({
      essai: counterMots,
      motATrouver: document.getElementById("motATrouver").textContent,
      id: clickedElement.id,
      MotClicke: clickedElement.value,
      ClassName: document.getElementById(clickedElement.id).className,
      backgroundColor : document.getElementById(clickedElement.id).className.substr(3,2),
      BGC : bgc,
      TC : tc,
      textColor :document.getElementById(clickedElement.id).className.substr(6),
      timeElapsedSeconds: millis / 1000,
      tailleEcran : ny + "x" + nx, 
      OsVersion : infos
    });
   
    
    data.push({
      motATrouver: document.getElementById("motATrouver").textContent,
      id: clickedElement.id,
      motClicke: clickedElement.value,
      ClassName: document.getElementById(clickedElement.id).className,
      backgroundColor: document.getElementById(clickedElement.id).className.substr(3,2),
      textColor: document.getElementById(clickedElement.id).className.substr(6),
      BGC : bgc,
      TC : tc,
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
