function TizennyolcPlusz(kor) {
    if (kor < 18) {
        return false;
    } else {
        return true;
    }
}

let eletkor = Number(prompt("Add meg az életkorod:"));
let elmultE = TizennyolcPlusz(eletkor);

if (elmultE == true) {
    document.write(`18 éves, vagy idősebb!`);
} else {
    document.write(`18 év alatti!`);
}
