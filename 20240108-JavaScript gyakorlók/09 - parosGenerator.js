function ParosGenerator(alsoHatar, felsoHatar) {
    let generaltSzam = Math.round(Math.random(felsoHatar - alsoHatar) + alsoHatar);
    if (generaltSzam % 2 == 0) {
        return generaltSzam;
    }
    else if (generaltSzam != felso) {
        return generaltSzam + 1;
    }
    else {
        return generaltSzam - 1;
    }
}

let also = Number(prompt("Add meg az alsó határt:"));
let felso = Number(prompt("Add meg a felső határt:"));

let szam = ParosGenerator(also, felso);

document.write(`A generált páros számunk ${also}-${felso} intervallumban: ${szam}`);