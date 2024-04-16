function KorKeruletEljaras() {
    var sugarE = Number(prompt("Add meg a kör sugarát (Eljáráshoz)!"));
    console.log("#1. feladat (Elj\u00E1r\u00E1sk\u00E9nt): ".concat(2 * sugarE * Math.PI));
}
KorKeruletEljaras();
var sugarF = Number(prompt("Add meg a kör sugarát (Függvényhez)!"));
function KorKeruletFuggveny(r) {
    return 2 * r * Math.PI;
}
console.log("#1. feladat (F\u00FCggv\u00E9nyk\u00E9nt) ".concat(KorKeruletFuggveny(sugarF)));
function HonapokEljaras() {
    var honapSorszamE = Number(prompt("Add meg a hónap sorszámát (Eljáráshoz)!"));
    if (honapSorszamE == 1) {
        console.log("#2. feladat (Eljárás): Január");
    }
    else if (honapSorszamE == 2) {
        console.log("#2. feladat (Eljárás): Február");
    }
    else if (honapSorszamE == 3) {
        console.log("#2. feladat (Eljárás): Március");
    }
    else if (honapSorszamE == 4) {
        console.log("#2. feladat (Eljárás) Április");
    }
    else if (honapSorszamE == 5) {
        console.log("#2. feladat (Eljárás): Május");
    }
    else if (honapSorszamE == 6) {
        console.log("#2. feladat (Eljárás): Június");
    }
    else if (honapSorszamE == 7) {
        console.log("#2. feladat (Eljárás): Július");
    }
    else if (honapSorszamE == 8) {
        console.log("#2. feladat (Eljárás): Augusztus");
    }
    else if (honapSorszamE == 9) {
        console.log("#2. feladat (Eljárás): Szeptember");
    }
    else if (honapSorszamE == 10) {
        console.log("#2. feladat: Október");
    }
    else if (honapSorszamE == 11) {
        console.log("#2. feladat (Eljárás): November");
    }
    else if (honapSorszamE == 12) {
        console.log("#2. feladat (Eljárás): December");
    }
    else {
        console.log("#2. feladat (Eljárás): Hibás érték! [1-12]");
    }
}
HonapokEljaras();
var honapSorszamF = Number(prompt("Add meg a hónap sorszámát (Eljáráshoz)!"));
function HonapokFuggveny(honapSorszam) {
    if (honapSorszam == 1) {
        return "#2. feladat (Függvény): Január";
    }
    else if (honapSorszam == 2) {
        return "#2. feladat (Függvény): Február";
    }
    else if (honapSorszam == 3) {
        return "#2. feladat (Függvény): Március";
    }
    else if (honapSorszam == 4) {
        return "#2. feladat (Függvény): Április";
    }
    else if (honapSorszam == 5) {
        return "#2. feladat (Függvény): Május";
    }
    else if (honapSorszam == 6) {
        return "#2. feladat (Függvény): Június";
    }
    else if (honapSorszam == 7) {
        return "#2. feladat (Függvény): Július";
    }
    else if (honapSorszam == 8) {
        return "#2. feladat (Függvény): Augusztus";
    }
    else if (honapSorszam == 9) {
        return "#2. feladat (Függvény): Szeptember";
    }
    else if (honapSorszam == 10) {
        return "#2. feladat (Függvény): Október";
    }
    else if (honapSorszam == 11) {
        return "#2. feladat (Függvény): November";
    }
    else if (honapSorszam == 12) {
        return "#2. feladat (Függvény): December";
    }
    else {
        return "#2. feladat (Függvény): Hibás érték! [1-12]";
    }
}
console.log(HonapokFuggveny(honapSorszamF));
function ParosSzamokIntervallumbanEljaras() {
    var also = Number(prompt("Add meg az alsóhatárt az eljáráshoz!"));
    var felso = Number(prompt("Add meg az felsőhatárt az eljáráshoz!"));
    var parosTomb = [];
    for (var i = also; i <= felso; i++) {
        if (i % 2 == 0) {
            parosTomb.push(i);
        }
    }
    console.log("#3. feladat (Eljárás):" + parosTomb);
}
ParosSzamokIntervallumbanEljaras();
var alsoHatarF = Number(prompt("Add meg az alsóhatárt a függvényhez!"));
var felsoHatarF = Number(prompt("Add meg az felsőhatárt a függvényhez!"));
function ParosSzamokIntervallumbanFuggveny(also, felso) {
    var parosTomb = [];
    for (var i = also; i <= felso; i++) {
        if (i % 2 == 0) {
            parosTomb.push(i);
        }
    }
    return parosTomb;
}
console.log("#3. feladat (F\u00FCggv\u00E9ny): ".concat(ParosSzamokIntervallumbanFuggveny(alsoHatarF, felsoHatarF)));
function ParatlanEEljaras() {
    var vizsgaltSzamE = Number(prompt("Add meg a vizsgált számot az eljáráshoz!"));
    if (vizsgaltSzamE % 2 != 0) {
        console.log("#4. feladat (Elj\u00E1r\u00E1s): ".concat(vizsgaltSzamE, " p\u00E1ratlan sz\u00E1m!"));
    }
    else {
        console.log("#4. feladat (Elj\u00E1r\u00E1s): ".concat(vizsgaltSzamE, " p\u00E1ros sz\u00E1m!"));
    }
}
ParatlanEEljaras();
var vizsgaltSzamF = Number(prompt("Add meg a vizsgált számot a függvényhez!"));
function ParatlanEFuggveny(vizsgalandoSzam) {
    if (vizsgalandoSzam % 2 != 0) {
        return "#4. feladat (F\u00FCggv\u00E9ny): ".concat(vizsgalandoSzam, " p\u00E1ratlan sz\u00E1m!");
    }
    else {
        return "#4. feladat (F\u00FCggv\u00E9ny): ".concat(vizsgalandoSzam, " p\u00E1ros sz\u00E1m!");
    }
}
console.log(ParatlanEFuggveny(vizsgaltSzamF));
