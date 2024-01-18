function KettoHatvanyai(elemSzam) {
    for (let i = 1; i <= elemSzam; i++) {
        document.write(2 ** i + ",");
    }
}

let n = Number(prompt("Kettő hanyadik hatványáig szeretnéd látni a számokat?"));
KettoHatvanyai(n);