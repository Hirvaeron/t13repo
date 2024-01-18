function PrimEljaras() {
    let oszto = 0;
    let szam = Number(prompt("Adj meg egy számot!"));
    for (let i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            oszto++;
        }
    }

    if (oszto == 2) {
        document.write(`${szam} prím!`);
    } else {
        document.write(`${szam} nem prím!`);
    }
}
PrimEljaras();