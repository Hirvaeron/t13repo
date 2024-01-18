function SzorgalomSzovegesErtekeles(jegy) {
    if (jegy == 5) {
        document.write("Szorgalom: példás");
    } else if (jegy == 4) {
        document.write("Szorgalom: jó");
    } else if (jegy == 3) {
        document.write("Szorgalom: változó");
    } else if (jegy == 2) {
        document.write("Szorgalom: hanyag");
    } else {
        document.write("Hibás érték!")
    }
}

let ertekeles = Number(prompt("Add meg a szorgalomra kapott jegyet"));
SzorgalomSzovegesErtekeles(ertekeles);