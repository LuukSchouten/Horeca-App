const frisprijs = 2;
const bierprijs = 3;
const wijnprijs = 4;
const snack8prijs = 5;
const snack16prijs = 8;

var frisaantal = 0;
var bieraantal = 0;
var wijnaantal = 0;
var snack8aantal = 0;
var snack16aantal = 0;

var fristotaal = 0;
var biertotaal = 0;
var wijntotaal = 0;
var snack8totaal = 0;
var snack16totaal = 0;


function vragen(){
    while(bestelling != "stop"){
        var bestelling = prompt("Wat wil je bestellen?");
        bestelling = bestelling.toLowerCase();
        if(bestelling == "fris"){
            var frisaantalnieuw = prompt("Hoeveel fris wil je bestellen?");
            if(isNaN(frisaantalnieuw)){
                alert("voer een getal in");
            }
            frisaantal = frisaantalnieuw;
            parseInt(frisaantal);
        }else if(bestelling == "bier"){
            var bieraantalnieuw = prompt("Hoeveel bier wil je bestellen?");
            if(isNaN(bieraantalnieuw)){
                alert("voer een getal in");
            }
            bieraantal = bieraantalnieuw;
            parseInt(bieraantal);
        }else if(bestelling == "wijn"){
            var wijnaantalnieuw = prompt("Hoeveel wijn wil je bestellen?");
            if(isNaN(wijnaantalnieuw)){
                alert("voer een getal in");
            }
            wijnaantal = wijnaantalnieuw;
            parseInt(wijnaantalnieuw);
        }else if(bestelling == "snack" || bestelling == "snacks"){
            var snackaantalnieuw = prompt("Hoeveel bitterballen wil je hebben? (Alleen keuzen uit 8 of 16)")
            if(isNaN(snackaantalnieuw)){
                alert("voer een getal in");
            }
            if(snackaantalnieuw == "8"){
                snack8aantal += 1;
            }
            if(snackaantalnieuw == "16"){
                snack16aantal += 1;
            }else if(snackaantalnieuw != "8" && snackaantalnieuw != "16"){
                alert("Je kunt allen kiezen uit 8 of 16 bitterballen");
            }
            parseInt(snackaantalnieuw);
        }else if(bestelling != "fris" && bestelling != "bier" && bestelling != "bier" && bestelling != "stop" && bestelling != "snack" && bestelling != "snacks"){
            alert("dit staat niet op het menu, kies iets anders.")
        }
    }
}

function optellen(){
    fristotaal = frisaantal*frisprijs;

    biertotaal = bieraantal*bierprijs;

    wijntotaal = wijnaantal*wijnprijs;

    snack8totaal = snack8aantal*snack8prijs;

    snack16totaal = snack16aantal*snack16prijs;
}

function bon(){
    document.write(`fris prijs: ${frisprijs} euro`);
    document.write("</br>");
    document.write(`bier prijs: ${bierprijs} euro`);
    document.write("</br>");
    document.write(`wijn prijs: ${wijnprijs} euro`);
    document.write("</br>");
    document.write(`8 bitterballen prijs: ${snack8prijs} euro`);
    document.write("</br>");
    document.write(`16 bitterballen prijs: ${snack16prijs} euro`);
    document.write("</br>");
    document.write("</br>");
    if(frisaantal > 0){
    document.write(`Hoeveelheid fris besteld: ${frisaantal}`);
    }
    document.write("</br>");
    if(bieraantal > 0){
    document.write(`Hoeveelheid bier besteld: ${bieraantal}`);
    document.write("</br>");
    }
    if(wijnaantal > 0){
    document.write(`Hoeveelheid wijn besteld: ${wijnaantal}`);
    }
    if(snack8aantal > 0){
        document.write(`Hoeveelheid bitterballen van 8 besteld: ${snack8aantal}`);
        }
    document.write("</br>");
    if(snack16aantal > 0){
        document.write(`Hoeveelheid bitterballen van 16 besteld: ${snack16aantal}`);
        }
    document.write("</br>");
    document.write("</br>");
    
    var totaalprijs = fristotaal + biertotaal + wijntotaal + snack8totaal + snack16totaal;
    document.write(`Totaal: ${totaalprijs} euro`);
}

vragen();
optellen();
bon();






