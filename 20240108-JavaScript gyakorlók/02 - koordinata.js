function Koordinata(x, y) {
    if (x > 0 && y > 0) {
        document.write("1. síknegyed")
    } else if (x < 0 && y > 0) {
        document.write("2. síknegyed")
    } else if (x < 0 && y < 0) {
        document.write("3. síknegyed")
    } else if (x > 0 && y < 0) {
        document.write("4. síknegyed")
    } else if (x == 0 && y != 0) {
        document.write("Az Y tengelyen van");
    } else if (x != 0 && y == 0) {
        document.write("Az X tengelyen van");
    } else {
        document.write("Az origóban van")
    }
}

let elsoKoordinata = Number(prompt("Add meg az első koordinátát:"));
let masodikKoordinata = Number(prompt("Add meg a második koordinátát:"));

Koordinata(elsoKoordinata, masodikKoordinata);