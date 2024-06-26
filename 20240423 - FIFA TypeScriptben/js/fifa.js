var csapatAdat = [
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
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(";");
        var ujCsapat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        };
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
var fifaAdatObjektum = ObjektumFeltolto(csapatAdat);
console.log(fifaAdatObjektum);
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
function CsapatokSzamaKiir(kiirandoDarabszam) {
    console.log("A ranglistában szereplő csapatok száma: " + kiirandoDarabszam);
}
CsapatokSzamaKiir(CsapatokSzama(fifaAdatObjektum));
function PontszamokAtlaga(vizsgaltTomb) {
    var osszeg = 0;
    for (var _i = 0, vizsgaltTomb_1 = vizsgaltTomb; _i < vizsgaltTomb_1.length; _i++) {
        var element = vizsgaltTomb_1[_i];
        osszeg += element.pont;
    }
    return Number(Math.round(osszeg / vizsgaltTomb.length).toFixed(2));
}
function PontszamokAtlagaKiir(kiirandoAtlag) {
    console.log("A ranglistában szereplő csapatok átlagos pontszáma: " + kiirandoAtlag);
}
PontszamokAtlagaKiir(PontszamokAtlaga(fifaAdatObjektum));
function AtlagFelettiek(vizsgaltTomb) {
    var atlagPont = PontszamokAtlaga(fifaAdatObjektum);
    var atlagFelettiek = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFelettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiek;
}
console.log("Átlag feletti csapatok:" + AtlagFelettiek(fifaAdatObjektum));
function LegtobbetJavitoCsapat(vizsgaltTomb) {
    var kivalasztottCsapatObjektuma = [];
    var legtobbJavitas = vizsgaltTomb[0].valtozas;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > legtobbJavitas) {
            kivalasztottCsapatObjektuma.pop();
            kivalasztottCsapatObjektuma.push(vizsgaltTomb[i]);
            legtobbJavitas = vizsgaltTomb[i].valtozas;
        }
    }
    return kivalasztottCsapatObjektuma;
}
function LegtobbetJavitoCsapatKiir(csapatAdatok) {
    console.log("A legtöbbet javító csapat neve:" + csapatAdatok[0].nev);
    console.log("A legtöbbet javító csapat helyezése:" + csapatAdatok[0].helyezes);
    console.log("A legtöbbet javító csapat változása:" + csapatAdatok[0].valtozas);
    console.log("A legtöbbet javító csapat pontszáma:" + csapatAdatok[0].pont);
}
LegtobbetJavitoCsapatKiir(LegtobbetJavitoCsapat(fifaAdatObjektum));
function SzerepeltEMagyarorszag(vizsgaltTomb) {
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarorszag") {
            return true;
        }
    }
    return false;
}
function SzerepeltEMagyarorszagKiir(vizsgalatEredmenye) {
    if (vizsgalatEredmenye) {
        console.log("Az országok között szerepel Magyarország");
    }
    else {
        console.log("Az országok között nem szerepel Magyarország");
    }
}
SzerepeltEMagyarorszagKiir(SzerepeltEMagyarorszag(fifaAdatObjektum));
function ValtozasTipusok(vizsgaltTomb) {
    var valtozasTipusok = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < valtozasTipusok.length; j++) {
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
    var valtozasokMennyisege = [];
    for (var i = 0; i < valtozasTipusok.length; i++) {
        valtozasokMennyisege.push(0);
    }
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasokMennyisege[j]++;
            }
        }
    }
    console.log(valtozasokMennyisege);
    return valtozasokMennyisege;
}
function ValtozasokKiirTablazatba(valtozasTipusok, valtozasMennyisegek) {
    document.write("<table border=1><caption>Változások Listája");
    for (var i = 0; i < valtozasMennyisegek.length; i++) {
        if (valtozasMennyisegek[i] > 1) {
            document.write("<tr><th>" + valtozasTipusok[i] + "</th><td>" + valtozasMennyisegek[i] + "</td></tr>");
        }
    }
    document.write("</table>");
}
var valtozasSzurese = ValtozasTipusok(fifaAdatObjektum);
ValtozasokKiirTablazatba(valtozasSzurese, ValtozasokMennyisege(fifaAdatObjektum, valtozasSzurese));
