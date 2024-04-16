function KorKeruletEljaras(): void {
    let sugarE: number = Number(prompt("Add meg a kör sugarát (Eljáráshoz)!"));
    console.log(`#1. feladat (Eljárásként): ${2 * sugarE * Math.PI}`);
}
KorKeruletEljaras();

let sugarF: number = Number(prompt("Add meg a kör sugarát (Függvényhez)!"));
function KorKeruletFuggveny(r: number): number {
    return 2 * r * Math.PI;
}
console.log(`#1. feladat (Függvényként) ${KorKeruletFuggveny(sugarF)}`);

function HonapokEljaras(): void {
    let honapSorszamE: number = Number(prompt("Add meg a hónap sorszámát (Eljáráshoz)!"));
    if (honapSorszamE == 1) {
        console.log("#2. feladat (Eljárás): Január");
    } else if (honapSorszamE == 2) {
        console.log("#2. feladat (Eljárás): Február");
    } else if (honapSorszamE == 3) {
        console.log("#2. feladat (Eljárás): Március");
    } else if (honapSorszamE == 4) {
        console.log("#2. feladat (Eljárás) Április");
    } else if (honapSorszamE == 5) {
        console.log("#2. feladat (Eljárás): Május");
    } else if (honapSorszamE == 6) {
        console.log("#2. feladat (Eljárás): Június");
    } else if (honapSorszamE == 7) {
        console.log("#2. feladat (Eljárás): Július");
    } else if (honapSorszamE == 8) {
        console.log("#2. feladat (Eljárás): Augusztus");
    } else if (honapSorszamE == 9) {
        console.log("#2. feladat (Eljárás): Szeptember");
    } else if (honapSorszamE == 10) {
        console.log("#2. feladat: Október");
    } else if (honapSorszamE == 11) {
        console.log("#2. feladat (Eljárás): November");
    } else if (honapSorszamE == 12) {
        console.log("#2. feladat (Eljárás): December");
    } else {
        console.log("#2. feladat (Eljárás): Hibás érték! [1-12]");
    }
}
HonapokEljaras();

let honapSorszamF: number = Number(prompt("Add meg a hónap sorszámát (Eljáráshoz)!"));
function HonapokFuggveny(honapSorszam: number): string {
    if (honapSorszam == 1) {
        return "#2. feladat (Függvény): Január";
    } else if (honapSorszam == 2) {
        return "#2. feladat (Függvény): Február";
    } else if (honapSorszam == 3) {
        return "#2. feladat (Függvény): Március";
    } else if (honapSorszam == 4) {
        return "#2. feladat (Függvény): Április";
    } else if (honapSorszam == 5) {
        return "#2. feladat (Függvény): Május";
    } else if (honapSorszam == 6) {
        return "#2. feladat (Függvény): Június";
    } else if (honapSorszam == 7) {
        return "#2. feladat (Függvény): Július";
    } else if (honapSorszam == 8) {
        return "#2. feladat (Függvény): Augusztus";
    } else if (honapSorszam == 9) {
        return "#2. feladat (Függvény): Szeptember";
    } else if (honapSorszam == 10) {
        return "#2. feladat (Függvény): Október";
    } else if (honapSorszam == 11) {
        return "#2. feladat (Függvény): November";
    } else if (honapSorszam == 12) {
        return "#2. feladat (Függvény): December";
    } else {
        return "#2. feladat (Függvény): Hibás érték! [1-12]";
    }
}
console.log(HonapokFuggveny(honapSorszamF));

function ParosSzamokIntervallumbanEljaras(): void {
    let also: number = Number(prompt("Add meg az alsóhatárt az eljáráshoz!"));
    let felso: number = Number(prompt("Add meg az felsőhatárt az eljáráshoz!"));
    let parosTomb: number[] = [];
    for (let i: number = also; i <= felso; i++) {
        if (i % 2 == 0) {
            parosTomb.push(i);
        }
    }
    console.log("#3. feladat (Eljárás):" + parosTomb);
}
ParosSzamokIntervallumbanEljaras();

let alsoHatarF: number = Number(prompt("Add meg az alsóhatárt a függvényhez!"));
let felsoHatarF: number = Number(prompt("Add meg az felsőhatárt a függvényhez!"));
function ParosSzamokIntervallumbanFuggveny(also: number, felso: number): number[] {
    let parosTomb: number[] = [];
    for (let i: number = also; i <= felso; i++) {
        if (i % 2 == 0) {
            parosTomb.push(i);
        }
    }
    return parosTomb;
}
console.log(`#3. feladat (Függvény): ${ParosSzamokIntervallumbanFuggveny(alsoHatarF, felsoHatarF)}`);

function ParatlanEEljaras(): void {
    let vizsgaltSzamE: number = Number(prompt("Add meg a vizsgált számot az eljáráshoz!"));
    if (vizsgaltSzamE % 2 != 0) {
        console.log(`#4. feladat (Eljárás): ${vizsgaltSzamE} páratlan szám!`);
    } else {
        console.log(`#4. feladat (Eljárás): ${vizsgaltSzamE} páros szám!`);
    }
}
ParatlanEEljaras();

let vizsgaltSzamF: number = Number(prompt("Add meg a vizsgált számot a függvényhez!"));
function ParatlanEFuggveny(vizsgalandoSzam: number): string {
    if (vizsgalandoSzam % 2 != 0) {
        return `#4. feladat (Függvény): ${vizsgalandoSzam} páratlan szám!`;
    } else {
        return `#4. feladat (Függvény): ${vizsgalandoSzam} páros szám!`;
    }
}
console.log(ParatlanEFuggveny(vizsgaltSzamF));