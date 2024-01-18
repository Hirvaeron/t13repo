function PrimFuggveny(vizsgaltSzam) {
    let oszto = 0;
    for (let i = 1; i <= vizsgaltSzam; i++) {
        if (szam % i == 0) {
            oszto++;
        }
    }

    if (oszto == 2) {
        return true;
    } else {
        return false;
    }
}
let szam = Number(prompt("Add meg a vizsgálandó számot:"));
let primE = PrimFuggveny(szam);
if (primE == true) {
    document.write(`${szam} prímszám!`);
} else {
    document.write(`${szam} nem prímszám!`);
}