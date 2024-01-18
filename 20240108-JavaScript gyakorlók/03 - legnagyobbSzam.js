function MelyikANagyobb(szamEgy, szamKetto, szamHarom) {
    let tomb = [szamEgy, szamKetto, szamHarom];
    let max = tomb[0];

    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > max) {
            max = tomb[i];
        }
    }

    return max;
}

let elsoSzam = Number(prompt("Add meg az első számot:"));
let masodikSzam = Number(prompt("Add meg a második számot:"));
let harmadikSzam = Number(prompt("Add meg a harmadik számot:"));
let legnagyobb = MelyikANagyobb(elsoSzam, masodikSzam, harmadikSzam);
document.write(`A három szám közül (${elsoSzam}, ${masodikSzam}, ${harmadikSzam}) a legnagyobb: ${legnagyobb}`);