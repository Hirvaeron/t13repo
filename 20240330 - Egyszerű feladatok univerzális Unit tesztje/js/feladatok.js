function Koordinata(x, y) {
    if (x > 0 && y > 0) {
        return "1. síknegyed";
    } else if (x < 0 && y > 0) {
        return "2. síknegyed";
    } else if (x < 0 && y < 0) {
        return "3. síknegyed";
    } else if (x > 0 && y < 0) {
        return "4. síknegyed";
    } else if (x == 0 && y != 0) {
        return "Az Y tengelyen van";
    } else if (x != 0 && y == 0) {
        return "Az X tengelyen van";
    } else {
        return "Az origóban van";
    }
}

function TizennyolcPlusz(kor) {
    if (kor < 18) {
        return false;
    } else {
        return true;
    }
}

function NegyzetKerulet(aOldal) {
    return aOldal * 4;
}

function SzorgalomSzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return "Szorgalom: példás";
    } else if (jegy == 4) {
        return "Szorgalom: jó";
    } else if (jegy == 3) {
        return "Szorgalom: változó";
    } else if (jegy == 2) {
        return "Szorgalom: hanyag";
    } else {
        return "Hibás érték!";
    }
}

function KarakterMennyiseg(vizsgaltSzoveg, keresettBetu) {
    let db = 0;
    for (let i = 0; i <= vizsgaltSzoveg.length; i++) {
        if (vizsgaltSzoveg[i] == keresettBetu) {
            db++;
        }
    }
    return (`A válaszott betű (${keresettBetu}) ${db} alkalommal szerepelt a "${vizsgaltSzoveg}" szövegben!`);
}
