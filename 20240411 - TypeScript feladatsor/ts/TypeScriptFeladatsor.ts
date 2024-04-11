function PrimEljaras(): void {
    let oszto: number = 0;
    let bekertSzam: number = Number(prompt("#1. Adj meg egy számot!"));
    for (let i: number = 1; i <= bekertSzam; i++) {
        if (bekertSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        console.log(`#1. feladat: ${bekertSzam} prím szám!`);
    } else {
        console.log(`#1. feladat: ${bekertSzam} nem prím szám!`);
    }
}
PrimEljaras();

let xErtek: number = Number(prompt("#2. Add meg X értékét!"));
let yErtek: number = Number(prompt("#2. Add meg X értékét!"));
function Koordinata(x: number, y: number) {
    if (x > 0 && y > 0) {
        console.log("#2. feladat: 1. síknegyed")
    } else if (x < 0 && y > 0) {
        console.log("#2. feladat: 2. síknegyed")
    } else if (x < 0 && y < 0) {
        console.log("#2. feladat: 3. síknegyed")
    } else if (x > 0 && y < 0) {
        console.log("#2. feladat: 4. síknegyed")
    } else if (x == 0 && y != 0) {
        console.log("#2. feladat: Az Y tengelyen van");
    } else if (x != 0 && y == 0) {
        console.log("#2. feladat: Az X tengelyen van");
    } else {
        console.log("#2. feladat: Az origóban van")
    }
}
Koordinata(xErtek, yErtek);

let szamEgy: number = Number(prompt("#3. Add meg az első számot!"));
let szamKetto: number = Number(prompt("#3. Add meg a második számot!"));
let szamHarom: number = Number(prompt("#3 Add meg a harmadik számot"));
function MelyikANagyobb(szamEgy: number, szamKetto: number, szamHarom: number): number {
    if (szamEgy > szamKetto && szamEgy > szamHarom) {
        return szamEgy;
    } else if (szamKetto > szamEgy && szamKetto > szamHarom) {
        return szamKetto;
    } else {
        return szamHarom;
    }
}
console.log(`#3. feladat: ${MelyikANagyobb(szamEgy, szamKetto, szamHarom)}`);

let jegy: number = Number(prompt("#4. Add meg a szorgalomra kapott jegyed!"));
function SzorgalomSzovegesErtekeles(jegy: number): string {
    if (jegy == 5) {
        return "Példás";
    } else if (jegy == 4) {
        return "Jó";
    } else if (jegy == 3) {
        return "Változó";
    } else if (jegy == 2) {
        return "Hanyag";
    } else {
        return "Hibás érték";
    }
}
console.log(`#4. feladat: ${SzorgalomSzovegesErtekeles(jegy)}`);

let kor: number = Number(prompt("#5. Add meg a korod!"));
function TizennyolcPlusz(kor: number): boolean {
    if (kor < 18) {
        return false;
    } else {
        return true;
    }
}
console.log(`#5. feladat: ${TizennyolcPlusz(kor)}`);

let LNKOszamEgy: number = Number(prompt("#6. Add meg az első számot!"));
let LNKOszamKetto: number = Number(prompt("#6. Add meg a második számot!"));
function LNKO(szamEgy: number, szamKetto: number): number {
    let lnko = 1;
    for (let i: number = 2; i <= szamKetto; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    return lnko;
}
console.log(`#6. feladat: ${LNKO(LNKOszamEgy, LNKOszamKetto)}`);

let elsoElem: number = Number(prompt("#7. Add meg az első elemet!"));
let kulonbseg: number = Number(prompt("#7. Add meg a különbséget!"));
let elemSzam: number = Number(prompt("#7. Add meg az elemszámot!"));
function SzamtaniSorozatGenerator(elsoElem: number, kulonbseg: number, elemSzam: number): void {
    document.write("#7. feladat:")
    for (let i: number = 0; i < elemSzam; i++) {
        document.write(elsoElem + ",");
        elsoElem = elsoElem + kulonbseg;
    }
}
SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam);

let primE: number = Number(prompt("#8. Add meg vizsgált számot!"));
function PrimFuggveny(vizsgaltSzam: number): boolean {
    let oszto: number = 0;
    for (let i: number = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        return true;
    } else {
        return false;
    }
}
console.log(`#8. feladat: ${primE} prím szám? ${PrimFuggveny(primE)}`);

let also: number = Number(prompt("#9. Add meg az alsóhatárt!"));
let felso: number = Number(prompt("#9. Add meg a felsőhatárt!"));
function ParosGenerator(alsoHatar: number, felsoHatar: number): number {
    let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    if (generaltSzam % 2 == 0) {
        return generaltSzam;
    } else if (generaltSzam != felsoHatar) {
        return generaltSzam + 1;
    } else {
        return generaltSzam - 1;
    }
}
console.log(`#9. feladat: ${ParosGenerator(also, felso)}`);

let elemszamKettoHatvanyai: number = Number(prompt("#10. Add meg az elemszámot!"));
document.write("<br>#10. feladat: ");
function KettoHatvanyai(elemSzam: number): void {
    for (let i: number = 0; i <= elemSzam; i++) {
        document.write(2 ** i + ",");
    }
}
KettoHatvanyai(10);

let haromszogA: number = Number(prompt("#11. Add meg az A oldalt!"));
let haromszogB: number = Number(prompt("#11. Add meg a B oldalt!"));
let haromszogC: number = Number(prompt("#11. Add meg a C oldalt!"));
function SzerkeszthetoHaromszog(aOldal: number, bOldal: number, cOldal: number): boolean {
    if (aOldal + bOldal > cOldal && bOldal + cOldal > aOldal && aOldal + cOldal > bOldal) {
        return true;
    } else {
        return false;
    }
}
console.log(`#11. feladat: ${SzerkeszthetoHaromszog(3, 4, 5)}`);

function NegyzetKerulet(aOldal: number): number {
    return aOldal * 4;
}

function NegyzetTerulet(aOldal: number): number {
    return aOldal * aOldal;
}

function EredmenyKiirato(): void {
    let a: number = Number(prompt("Add meg a négyzet oldalának méretét!"));
    let kerulet: number = NegyzetKerulet(a);
    let terulet: number = NegyzetTerulet(a);
    document.write(`<br>#12. feladat: Az ${a} oldalú négyzet kerülete: ${kerulet}, területe: ${terulet}!`)
}

EredmenyKiirato();