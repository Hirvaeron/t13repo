function LNKO(szamEgy, szamKetto) {
    let lnko = 1;
    for (let i = 2; i <= szamKetto; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    return lnko;
}

let elsoSzam = Number(prompt("Add meg az első számot:"));
let masodikSzam = Number(prompt("Add meg a második számot:"));
let legnagyobbKozosOszto = LNKO(elsoSzam, masodikSzam);

document.write(`${elsoSzam} és ${masodikSzam} legnagyobb közös osztója: ${legnagyobbKozosOszto}`);
