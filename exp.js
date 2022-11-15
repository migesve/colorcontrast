console.log('=========================')

let mots = ['Tableau', 'Maladie','Acceder','Haricot','Tension','Pendule','Parasol','Unanime','Courant','Autiste'];
let jaune = '#dddd00';
let bleu = '#0000ff';

let grisC = '#888888'; // 2.82 avec bleu, 2.42 avec bleu2 et 2.43 avec jaune
let grisF = '#b1b1b1'; // 1.71 avec bleu, 4 avec bleu2 et 1.47 avec jaune
let gris3 = ''; // bfbfbf?
//let grisCC = '#333333';
let couleurs = [jaune,bleu,grisC,grisF];
NewMots = arrayShuffle(mots);
CoulMots = [couleurs[0],couleurs[1]];
CoulFond = [couleurs[2],couleurs[3]];
tabrep = ['bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b','bt gc-j','bt gc-b','bt gf-j','bt gf-b'];
//document.write(tabrep.length)
tabrep = arrayShuffle(tabrep);
let counterMots = 0;
let headdata = ["Mot a trouver","index","Mot cliqué","date"]; //dans quel ordre son les données : si index = 12 btn Go sinon mot rechercher
let data =[];

function arrayShuffle(a) {
    var l = a.length, t, r;
    while (0 !== l) {
        r = Math.floor(Math.random() * l);
        l -= 1;
        t = a[l];
        a[l] = a[r];
        a[r] = t;
    }
    return a;
}

function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function enregistrerexp(){
    var clickedElement=(window.event)
    ? window.event.target
    : e.target,
    tags = document.getElementsByTagName (clickedElement.tagName);

    for (let k =0; k<80;k++){
        let xp = [];
        let time=Date.now();
        let wordFind =  document.getElementById("motATrouver").textContent;
        let wordClic = document.getElementsByTagName(clickedElement.tagName).textContent;
        let ind =  document.getElementsByTagName(clickedElement.tagName)
        xp=["Atrouver: "+wordFind,"clique: "+wordClic,"index: "+ind,"temps: "+time]
        data[k]=xp
    }
    
}

function clickListener(e) {  
    

    //console.log(counterMots);
    var clickedElement=(window.event)
        ? window.event.target
        : e.target,
        tags = document.getElementsByTagName (clickedElement.tagName);
    
    for (var i = 0; i < tags.length; ++i) {
        if (tags [i] == clickedElement) {
            //arrayWithElements.push ({tag:clickedElement.tagName,index:i}); 
            //console.log({tag:clickedElement.tagName,index:i})
            //console.log(tags)
            
            let time = Date.now();
            
            //savedata ({tag:clickedElement.tagName,index:i,time});

        }
    }
    enregistrerexp()

    NewMots = arrayShuffle(mots);
    document.getElementById(11).value = Math.trunc((counterMots+1)/2)+"/40";
    if (counterMots% 2 == 0){
        for(let i = 0; i < 10; i++){
            //document.getElementById(i).style.backgroundColor = CoulFond[entierAleatoire(0,1)];
            //document.getElementById(i).style.color = CoulMots[entierAleatoire(0,1)];
            document.getElementById(i).value = NewMots[i];
            document.getElementById("motATrouver").textContent = NewMots[entierAleatoire(0,9)];
            document.getElementById(i).className = tabrep[(counterMots/2)+1];
            
        }
    }
   
    
    counterMots++;
    if (counterMots >= 80){
        document.write("<p class=''> L'expérience est fini, merci de votre participation  </p>")
    }
}

function clickedId(clickedId){
    console.log(clickedId);
    
}

function savedata (data) {

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "savedata.php";

    // open a connection
    xhr.open ("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader ("Content-Type", "application/json");

    // Sending data with the request
    xhr.send (JSON.stringify (data));
}
console.log(data)