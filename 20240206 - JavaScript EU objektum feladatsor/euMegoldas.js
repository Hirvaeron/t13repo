const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

document.write("1. hány tagja van az EU-nak?");
function EUTagSzamlalo(tomb) {
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb.orszag != "") {
            db++;
        }
    }
    return db;
}
document.write("<br>Az Európai Uniónak " + EUTagSzamlalo(EuropaiUnio) + " tagországa van.");
document.write("<hr>2. hány ország csatlakozott adott évben?");

function CsatlakozasiEvVizsgalat(ev, tomb) {
    let db = 0;

    for (let i = 0; i < tomb.length; i++) {
        let csatlakozasiEv = Number(tomb[i].csatlakozas.slice(0, 4));
        if (ev == csatlakozasiEv) {
            db++;
        }
    }
    return db;
}

let vizsgaltEv = prompt("Melyik évet vizsgáljuk?");
document.write(`<br>${vizsgaltEv} során ` + CsatlakozasiEvVizsgalat(vizsgaltEv, EuropaiUnio) + ` tagország csatlakozott.`);

document.write("<hr>3. csatlakozott-e adott ország az Európai Unióhoz?");
function CsatlakozoOrszagVizsgalat(orszag, tomb) {
    let csatlakozottE = false;
    for (let i = 0; i < tomb.length; i++) {
        if (orszag == tomb[i].orszag) {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}
let vizsgaltOrszag = prompt("Melyik országot vizsgáljuk?");
if (CsatlakozoOrszagVizsgalat(vizsgaltOrszag, EuropaiUnio) == true) {
    document.write(`<br>${vizsgaltOrszag} tagja az Európai Uniónak.`);
} else {
    document.write(`<br>${vizsgaltOrszag} NEM tagja az Európai Uniónak.`);
}

document.write("<hr>4. csatlakozott-e adott hónapban ország az Európai Unióhoz?");
function CsatlakozasiHonapVizsgalat(honap, tomb) {
    let csatlakozottE = false;

    for (let i = 0; i < tomb.length; i++) {
        let csatlakozasiHonap = Number(tomb[i].csatlakozas.slice(5, 7));
        if (honap == csatlakozasiHonap) {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}
let vizsgaltHonap = prompt("Melyik hónapot vizsgáljuk?");
if (CsatlakozasiHonapVizsgalat(vizsgaltHonap, EuropaiUnio) == true) {
    document.write(`<br>${vizsgaltHonap} hónapban történt csatlakozás az Európai Unióba.`);
} else {
    document.write(`<br>${vizsgaltHonap} hónapban NEM történt csatlakozás az Európai Unióba.`);
}

document.write("<hr>5.Melyik ország csatlakozott utoljára az Európai Unióhoz?");
function UtolsoCsatlakozas(tomb) {
    let maxIndex = 0;
    let max = Date.parse(tomb[0].csatlakozas);

    for (let i = 1; i < tomb.length; i++) {
        if (max < Date.parse(tomb[i].csatlakozas)) {
            max = Date.parse(tomb[i].csatlakozas);
            maxIndex = i;
        }
    }
    return tomb[maxIndex].orszag;
}

document.write("<br>" + UtolsoCsatlakozas(EuropaiUnio) + " csatlakozott utoljára.");
document.write("<hr>6. Ország statisztika csatlakozási év alapján:");

function Statisztika(tomb) {
    const csatlakozasStatisztika = {};
    for (let i = 0; i < tomb.length; i++) {
        let csatlakozasiEv = tomb[i].csatlakozas.slice(0, 4);
        if (csatlakozasStatisztika[csatlakozasiEv]) {
            csatlakozasStatisztika[csatlakozasiEv]++
        } else {
            csatlakozasStatisztika[csatlakozasiEv] = 1;
        }
    }
    document.write("<br>")
    document.write("<table>");
    for (let ev in csatlakozasStatisztika) {
        document.write("<tr>");
        document.write("<th>" + ev + "</th>");
        document.write("<td>" + csatlakozasStatisztika[ev] + " db</td>");
        document.write("</tr>")
    }
    document.write("<table>");
}

Statisztika(EuropaiUnio);