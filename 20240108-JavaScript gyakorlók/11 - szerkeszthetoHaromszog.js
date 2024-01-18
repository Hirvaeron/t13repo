function SzerkeszthetoHaromszog(aOldal, bOldal, cOldal) {
    if (aOldal + bOldal > cOldal && aOldal + cOldal > bOldal && bOldal + cOldal > aOldal) {
        return true;
    } else {
        return false;
    }
}

let a = Number(prompt("A háromszög első oldala:"));
let b = Number(prompt("A háromszög második oldala:"));
let c = Number(prompt("A háromszög harmadik oldala:"));
let szerkeszthetoE = SzerkeszthetoHaromszog(a, b, c);

if (szerkeszthetoE == true) {
    document.write(`A ${a},${b},${c} oldalú háromszög szerkeszthető!`);
} else {
    document.write(`A ${a},${b},${c} oldalú háromszög nem szerkeszthető!`);
}