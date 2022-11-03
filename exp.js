console.log('Hello world')

let mots = ['Tableau', 'Maladie','Acceder','Haricot','Tension','Pendule','Parasol','Unanime','Courant','Autiste'];
let jaune = '#dddd00';
let bleu = '#0000ff';

let grisC = '#888888'; // 2.82 avec bleu, 2.42 avec bleu2 et 2.43 avec jaune
let grisF = '#b1b1b1'; // 1.71 avec bleu, 4 avec bleu2 et 1.47 avec jaune
let gris3 = ''; // bfbfbf?
//let grisCC = '#333333';
let couleurs = [jaune,bleu,grisC,grisF];
        
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

NewMots = arrayShuffle(mots);
CoulMots = [couleurs[0],couleurs[1]]
CoulFond = [couleurs[2],couleurs[3]]

function clickListener(e) {   
    var clickedElement=(window.event)
        ? window.event.target
        : e.target,
        tags = document.getElementsByTagName (clickedElement.tagName);
    
    for (var i = 0; i < tags.length; ++i) {
        if (tags [i] == clickedElement) {
            //arrayWithElements.push ({tag:clickedElement.tagName,index:i}); 
            console.log({tag:clickedElement.tagName,index:i})
            console.log(tags)
        }
    }
}

function clickedId(clickedId){
    console.log(clickedId)
}