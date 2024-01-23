function TombGenerator(elemSzam) {
    let tomb = [];
    for (let i = 0; i < elemSzam; i++) {
        tomb.push(Math.round(Math.random() * 100));
    }
    return tomb;
}

let generaltTomb = TombGenerator(10);
document.write(generaltTomb);
document.write("<hr>");
document.write("Megszámlálás eljárás<br>");

function MegszamlalasEljaras(tomb, oszto) {
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % oszto == 0) {
            db++;
        }
    }
    document.write(`${oszto}-val/vel osztható számokból ${db} db van a tömbben`);
}
let bekertOszto = Number(prompt("Add meg a vizsgálandó osztót:"));
MegszamlalasEljaras(generaltTomb, bekertOszto);
document.write("<hr>");
document.write("Megszámlálás Függvény<br>");

function MegszamlalasFuggveny(tomb, oszto) {
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % oszto == 0) {
            db++;
        }
    }
    return db;
}
document.write(`${bekrtOszto}-val/vel osztható számokból ` + MegszamlalasFuggveny(generaltTomb, bekertOszto) + "db van a tömbben");

document.write("<hr>");
document.write("Kiválogatás Eljárás<br>");

function KivalogatasEljaras(tomb, oszto) {
    let megfelel = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % oszto == 0) {
            megfelel.push(tomb[i]);
        }
    }
    document.write(`${oszto}-val/vel osztható számok: ${megfelel}`);
}
KivalogatasEljaras(generaltTomb, bekertOszto);
document.write("<hr>");
document.write("Kiválogatás Függvény<br>");

function KivalogatasFuggveny(tomb, oszto) {
    let megfelel = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % oszto == 0) {
            megfelel.push(tomb[i]);
        }
    }
    return megfelel;
}
document.write(`${bekertOszto}-val/vel osztható számok:` + KivalogatasFuggveny(generaltTomb, bekertOszto));