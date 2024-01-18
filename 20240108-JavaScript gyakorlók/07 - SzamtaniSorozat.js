function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam) {
    for (let i = 0; i < elemSzam; i++) {
        document.write(elsoElem + ",");
        elsoElem = elsoElem + kulonbseg;
    }
}

let elsoElem = Number(prompt("Add meg a sorozat első elemének értékét:"));
let kulonbseg = Number(prompt("Add meg a sorozat elemei közti különbséget:"));
let elemSzam = Number(prompt("Add meg hány elemű legyen a sorozat:"));
SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam);