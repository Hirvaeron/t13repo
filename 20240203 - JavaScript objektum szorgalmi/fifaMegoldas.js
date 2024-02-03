//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)
const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

function Adatfeldolgozas(tomb) {
    let ujAdatszerkezet = [];
    for (let i = 0; i < tomb.length; i++) {
        let ideiglenesTomb = tomb[i].split(";");
        let ujErtek = {
            orszag: ideiglenesTomb[0].trim(),
            helyezes: Number(ideiglenesTomb[1]),
            valtozas: Number(ideiglenesTomb[2]),
            pontszam: Number(ideiglenesTomb[3])
        }
        ujAdatszerkezet.push(ujErtek);
    }
    return ujAdatszerkezet;
}


function ObjektumKiirato(tomb) {
    document.write("<table>");
    for (let i = 0; i < tomb.length; i++) {
        document.write("<tr>");
        document.write("<td>" + tomb[i].orszag + "</td>");
        document.write("<td>" + tomb[i].helyezes + "</td>");
        document.write("<td>" + tomb[i].valtozas + "</td>");
        document.write("<td>" + tomb[i].pontszam + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

let csapatAdatObjektum = Adatfeldolgozas(csapatAdat);
ObjektumKiirato(csapatAdatObjektum);

document.write("<hr>1. Hány csapat szerepel a ranglistán?");
function CsapatSzamlalo(tomb) {
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] != "") {
            db++;
        }
    }
    return db;
}
document.write("<br>A listán " + CsapatSzamlalo(csapatAdatObjektum) + "db csapat található.")

document.write("<hr>2. Mennyi a résztvevő csapatok átlagpontszáma?");
function AtlagPontszam(tomb) {
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i].pontszam;
    }
    let atlag = Math.round(osszeg / tomb.length);
    return atlag;
}
document.write("<br>A résztvevő csapatok átlagpontszáma " + AtlagPontszam(csapatAdatObjektum) + ".");

document.write("<hr>3. Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!");
function AtlagFelettiek(tomb) {
    let atlag = AtlagPontszam(tomb);
    let atlagFelettiek = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i].pontszam > atlag) {
            atlagFelettiek.push(tomb[i]);
        }
    }
    return atlagFelettiek;
}
ObjektumKiirato(AtlagFelettiek(csapatAdatObjektum));
document.write("<hr>4. Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma");
function LegtobbetJavito(tomb) {
    let maxIndex = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i].valtozas > tomb[maxIndex].valtozas) {
            maxIndex = i;
        }
    }
    document.write("<br>A legtöbbet javító csapat helyezése:" + tomb[maxIndex].helyezes);
    document.write("<br>A legtöbbet javító csapat:" + tomb[maxIndex].orszag);
    document.write("<br>A legtöbbet javító csapat pontszáma:" + tomb[maxIndex].pontszam);
}
LegtobbetJavito(csapatAdatObjektum);
document.write("<hr>5. Határozza meg szerepel-e adott ország csapata a listán?");
function szerepelE(orszag, tomb) {
    let szerepel = false;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i].orszag == orszag) {
            szerepel = true;
        }
    }
    if (szerepel == true) {
        document.write(`<br>${orszag} szerepel a listán.`)
    } else {
        document.write(`<br>${orszag} nem szerepel a listán.`)
    }
}
let keresettOrszag = String(prompt("Adja meg a keresett ország nevét!"));
szerepelE(keresettOrszag, csapatAdatObjektum);

document.write("<hr>6. Készítsen statisztikát a helyezések változása (Valtozas) alapján csoportosítva a csapatok számáról a minta szerint! Csak azok a helyezésváltozások jelenjenek meg a képernyőn, amelyek esetében a csapatok száma több mint egy volt! A megjelenő csoportok sorrendje tetszőleges.");
function Statisztika(tomb) {
    let valtozasStatisztika = {};

    for (let i = 0; i < tomb.length; i++) {
        let valtozas = tomb[i].valtozas;
        if (valtozasStatisztika[valtozas] === undefined) {
            valtozasStatisztika[valtozas] = 1;
        } else {
            valtozasStatisztika[valtozas]++;
        }
    }

    return valtozasStatisztika;
}

let valtozasStatisztika = Statisztika(csapatAdatObjektum);

function StatisztikaKiirato(objektum) {
    document.write("<table>");
    for (let i in objektum) {
        if (objektum[i] > 1) {
            document.write("<tr>");
            document.write("<th>" + i + "</th>");
            document.write("<td>" + objektum[i] + "db </td>");
            document.write("</tr>");
        }
    }
    document.write("</table>");
}

StatisztikaKiirato(valtozasStatisztika);