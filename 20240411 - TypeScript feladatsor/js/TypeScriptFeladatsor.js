function PrimEljaras() {
    var oszto = 0;
    var bekertSzam = Number(prompt("#1. Adj meg egy számot!"));
    for (var i = 1; i <= bekertSzam; i++) {
        if (bekertSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        console.log("#1. feladat: ".concat(bekertSzam, " pr\u00EDm sz\u00E1m!"));
    }
    else {
        console.log("#1. feladat: ".concat(bekertSzam, " nem pr\u00EDm sz\u00E1m!"));
    }
}
PrimEljaras();
var xErtek = Number(prompt("#2. Add meg X értékét!"));
var yErtek = Number(prompt("#2. Add meg X értékét!"));
function Koordinata(x, y) {
    if (x > 0 && y > 0) {
        console.log("#2. feladat: 1. síknegyed");
    }
    else if (x < 0 && y > 0) {
        console.log("#2. feladat: 2. síknegyed");
    }
    else if (x < 0 && y < 0) {
        console.log("#2. feladat: 3. síknegyed");
    }
    else if (x > 0 && y < 0) {
        console.log("#2. feladat: 4. síknegyed");
    }
    else if (x == 0 && y != 0) {
        console.log("#2. feladat: Az Y tengelyen van");
    }
    else if (x != 0 && y == 0) {
        console.log("#2. feladat: Az X tengelyen van");
    }
    else {
        console.log("#2. feladat: Az origóban van");
    }
}
Koordinata(xErtek, yErtek);
var szamEgy = Number(prompt("#3. Add meg az első számot!"));
var szamKetto = Number(prompt("#3. Add meg a második számot!"));
var szamHarom = Number(prompt("#3 Add meg a harmadik számot"));
function MelyikANagyobb(szamEgy, szamKetto, szamHarom) {
    if (szamEgy > szamKetto && szamEgy > szamHarom) {
        return szamEgy;
    }
    else if (szamKetto > szamEgy && szamKetto > szamHarom) {
        return szamKetto;
    }
    else {
        return szamHarom;
    }
}
console.log("#3. feladat: ".concat(MelyikANagyobb(szamEgy, szamKetto, szamHarom)));
var jegy = Number(prompt("#4. Add meg a szorgalomra kapott jegyed!"));
function SzorgalomSzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return "Példás";
    }
    else if (jegy == 4) {
        return "Jó";
    }
    else if (jegy == 3) {
        return "Változó";
    }
    else if (jegy == 2) {
        return "Hanyag";
    }
    else {
        return "Hibás érték";
    }
}
console.log("#4. feladat: ".concat(SzorgalomSzovegesErtekeles(jegy)));
var kor = Number(prompt("#5. Add meg a korod!"));
function TizennyolcPlusz(kor) {
    if (kor < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log("#5. feladat: ".concat(TizennyolcPlusz(kor)));
var LNKOszamEgy = Number(prompt("#6. Add meg az első számot!"));
var LNKOszamKetto = Number(prompt("#6. Add meg a második számot!"));
function LNKO(szamEgy, szamKetto) {
    var lnko = 1;
    for (var i = 2; i <= szamKetto; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    return lnko;
}
console.log("#6. feladat: ".concat(LNKO(LNKOszamEgy, LNKOszamKetto)));
var elsoElem = Number(prompt("#7. Add meg az első elemet!"));
var kulonbseg = Number(prompt("#7. Add meg a különbséget!"));
var elemSzam = Number(prompt("#7. Add meg az elemszámot!"));
function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam) {
    document.write("#7. feladat:");
    for (var i = 0; i < elemSzam; i++) {
        document.write(elsoElem + ",");
        elsoElem = elsoElem + kulonbseg;
    }
}
SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam);
var primE = Number(prompt("#8. Add meg vizsgált számot!"));
function PrimFuggveny(vizsgaltSzam) {
    var oszto = 0;
    for (var i = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log("#8. feladat: ".concat(primE, " pr\u00EDm sz\u00E1m? ").concat(PrimFuggveny(primE)));
var also = Number(prompt("#9. Add meg az alsóhatárt!"));
var felso = Number(prompt("#9. Add meg a felsőhatárt!"));
function ParosGenerator(alsoHatar, felsoHatar) {
    var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    if (generaltSzam % 2 == 0) {
        return generaltSzam;
    }
    else if (generaltSzam != felsoHatar) {
        return generaltSzam + 1;
    }
    else {
        return generaltSzam - 1;
    }
}
console.log("#9. feladat: ".concat(ParosGenerator(also, felso)));
var elemszamKettoHatvanyai = Number(prompt("#10. Add meg az elemszámot!"));
document.write("<br>#10. feladat: ");
function KettoHatvanyai(elemSzam) {
    for (var i = 0; i <= elemSzam; i++) {
        document.write(Math.pow(2, i) + ",");
    }
}
KettoHatvanyai(10);
var haromszogA = Number(prompt("#11. Add meg az A oldalt!"));
var haromszogB = Number(prompt("#11. Add meg a B oldalt!"));
var haromszogC = Number(prompt("#11. Add meg a C oldalt!"));
function SzerkeszthetoHaromszog(aOldal, bOldal, cOldal) {
    if (aOldal + bOldal > cOldal && bOldal + cOldal > aOldal && aOldal + cOldal > bOldal) {
        return true;
    }
    else {
        return false;
    }
}
console.log("#11. feladat: ".concat(SzerkeszthetoHaromszog(3, 4, 5)));
function NegyzetKerulet(aOldal) {
    return aOldal * 4;
}
function NegyzetTerulet(aOldal) {
    return aOldal * aOldal;
}
function EredmenyKiirato() {
    var a = Number(prompt("Add meg a négyzet oldalának méretét!"));
    var kerulet = NegyzetKerulet(a);
    var terulet = NegyzetTerulet(a);
    document.write("<br>#12. feladat: Az ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(kerulet, ", ter\u00FClete: ").concat(terulet, "!"));
}
EredmenyKiirato();
