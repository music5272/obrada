function add(art) {
    let el = `<p>${art}</p>`;
    document.querySelector(".toppings").innerHTML += el;
    document.getElementById(`${art}`).remove();
}


// Schokoladengehalt

const chocolateProzent = ['Vollmilch', '70%', '75%', '80%', '85%', '90%', '95%'];
const chocolateProzentLength = chocolateProzent.length; // 7
let chocolatePos = 0;
document.querySelector("#chocolate-color").innerHTML = chocolateProzent[chocolatePos];


// Änderung des Fotos

const ordner = 'bearbeitet_schokolade/';
const endung = '.png';
let datei = ordner + chocolatePos + endung;

function chocolateswipe(menge) {
    chocolatePos += menge;
    if (chocolatePos < 0) {
        chocolatePos = 6;
    } else if (chocolatePos == chocolateProzentLength) {
        chocolatePos = 0;
    }
    document.querySelector("#chocolate-color").innerHTML = chocolateProzent[chocolatePos];
    
    datei = ordner + chocolatePos + endung;
    document.querySelector("#tafel").src = datei;
    console.log(datei);
}


// PopUp Bestellen

function bestellen() {
    console.log('bestellen wurde ausgeführt');
    document.querySelector("#bestellt-ausblenden").id = "bestellt-popup";
}