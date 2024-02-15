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

//0. feladat - Objektum létrehozása későbbi feladatok megoldásához

function AdatFeldolgozo(vizsgaltTomb) {
    let fifaTomb = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let ideiglenesTomb = vizsgaltTomb[i].split(";");
        let orszagAdatai = {
            nev: ideiglenesTomb[0],
            helyezes: Number(ideiglenesTomb[1]),
            valtozas: Number(ideiglenesTomb[2]),
            pontszam: Number(ideiglenesTomb[3])
        }
        fifaTomb.push(orszagAdatai);
    }
    return fifaTomb;
}

let fifaAdatok = AdatFeldolgozo(csapatAdat);

//1. feladat - Hány csapat szerepel a világranglistán?

//Adat feldolgozás
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}

//Adat kiírás
function CsapatokSzamaKiir(csapatSzam) {
    document.querySelector("#f1").innerHTML = `A FIFA ranglistán ${csapatSzam} db csapat szerepel.`;
}

CsapatokSzamaKiir(CsapatokSzama(fifaAdatok));

//2. feladat - Mennyi a résztvevő csapatok átlagpontszáma?

function AtlagPontszam(vizsgaltTomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pontszam;
    }
    let atlag = Math.round(osszeg / vizsgaltTomb.length);
    return atlag;
}

function AtlagPontszamKiir(pontszam) {
    document.querySelector("#f2").innerHTML = `A FIFA ranglistán szereplő csapatok átlagpontszáma ${pontszam} egység.`;
}

AtlagPontszamKiir(AtlagPontszam(fifaAdatok));

//3. feladat - Átlagfeletti pontszámmal rendelkező csapatok listája

function AtlagFelettiek(vizsgaltTomb) {
    let atlag = AtlagPontszam(vizsgaltTomb);
    let tulteljesitoCsapatok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pontszam > atlag) {
            tulteljesitoCsapatok.push(vizsgaltTomb[i].nev);
        }

    }
    return tulteljesitoCsapatok;
}


function AtlagFelettiekTablazat() {
    let atlagFelettiCsapatok = AtlagFelettiek(fifaAdatok).reverse();
    let table = document.querySelector("#f3");
    for (let i = 0; i < atlagFelettiCsapatok.length; i++) {
        let adatSor = table.insertRow(1);
        let orszag = adatSor.insertCell(0);

        orszag.innerHTML = atlagFelettiCsapatok[i];

    }
}



let f3eventGomb = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", AtlagFelettiekTablazat);

//4. feladat - Legtöbbet javitó csapat adatai

function LegtobbetJavito(vizsgaltTomb) {
    let maxValtozasIndex = 0;
    let maxValtozas = vizsgaltTomb[0].valtozas;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (maxValtozas < vizsgaltTomb[i].valtozas) {
            maxValtozasIndex = i;
            maxValtozas = vizsgaltTomb[i].valtozas;
        }
    }
    return maxValtozasIndex;
}
function LegtobbetJavitoKiir() {
    let legnagyobbValtozas = LegtobbetJavito(fifaAdatok);
    let orszag = fifaAdatok[legnagyobbValtozas].nev;
    let helyezes = fifaAdatok[legnagyobbValtozas].helyezes;
    let valtozas = fifaAdatok[legnagyobbValtozas].valtozas;
    let pontszam = fifaAdatok[legnagyobbValtozas].pontszam;
    document.querySelector("#f4").innerHTML = `A legtöbbet javító csapat ${orszag}, melynek helyezése: ${helyezes}. hely, ${valtozas} helyezést lépett előre, pontszáma: ${pontszam}`;
}

f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", LegtobbetJavitoKiir);

//5. feladat - Adott ország szerpel-e a listán? Igen/Nem

function OrszagKiolvaso() {
    let keresettOrszag = document.querySelector("#orszagNeve").value;
    return keresettOrszag;
}

function OrszagKereso(vizsgaltTomb, vizsgaltOrszag) {
    let szerepelE = false;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == vizsgaltOrszag) {
            szerepelE = true;
        }
    }
    return szerepelE;
}

function OrszagKeresoKiir() {
    let keresettCsapat = OrszagKiolvaso();
    let listaTagjaE = OrszagKereso(fifaAdatok, keresettCsapat);
    if (listaTagjaE) {
        document.querySelector("#f5").innerHTML = `${keresettCsapat} szerepel a listán!`;
    } else {
        document.querySelector("#f5").innerHTML = `${keresettCsapat} nem szerepel a listán!`;
    }
}

f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", OrszagKeresoKiir);


//6. feladat - Statisztika
function ValtozasTipusok(vizsgaltTomb) {
    let valtozasTipusok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE = false;
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    console.log(valtozasTipusok);
    return valtozasTipusok;
}

function ValtozasokMennyisege(vizsgaltTomb, valtozasTipusok) {
    let valtozasokMennyisege = [];
    for (let i = 0; i < valtozasTipusok.length; i++) {
        valtozasokMennyisege.push(0);
    }
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasokMennyisege[j]++;
            }
        }
    }
    console.log(valtozasokMennyisege);
    return valtozasokMennyisege;
}

function StatisztikaTablazatGenerator() {
    let valtozasTipusok = ValtozasTipusok(fifaAdatok);
    let valtozasMennyisegek = ValtozasokMennyisege(fifaAdatok, valtozasTipusok);
    var table = document.querySelector("#f6");
    for (let i = 0; i < valtozasTipusok.length; i++) {
        if (valtozasMennyisegek[i] > 1) {
            var adatSor = table.insertRow(1);
            var tipus = adatSor.insertCell(0);
            var mennyiseg = adatSor.insertCell(1);
            tipus.innerHTML = valtozasTipusok[i];
            mennyiseg.innerHTML = valtozasMennyisegek[i];
        }

    }
}

let f6eventGomb = document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", StatisztikaTablazatGenerator);