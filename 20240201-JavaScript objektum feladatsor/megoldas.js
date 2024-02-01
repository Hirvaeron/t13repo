let Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

document.write("Mekkora a bértömeg?");
function Bertomeg(tomb) {
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i].fizetes;
    }
    return osszeg;
}

document.write("<br>A cég bértömege:" + Bertomeg(Dolgozok));

function LegjobbanFizetett(tomb) {
    let maxIndex = 0;
    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i].fizetes > tomb[maxIndex].fizetes) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
document.write("<hr> Ki a legjobban fizetett dolgozó?");
let legmagasabbBer = LegjobbanFizetett(Dolgozok);
document.write("<br>A legjobban fizetett dolgozó: " + Dolgozok[legmagasabbBer].nev + ",életkor: " + Dolgozok[legmagasabbBer].kor + ", fizetése: " + Dolgozok[legmagasabbBer].fizetes + " beosztása: " + Dolgozok[legmagasabbBer].beosztas);

document.write("<hr> Ki a legfiatalabb dolgozó?");
function Legfiatalabb(tomb) {
    let minIndex = 0;
    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i].kor < tomb[minIndex].kor) {
            minIndex = i;
        }
    }
    return minIndex;
}
let fiatal = Legfiatalabb(Dolgozok);
document.write("<br>A legfiatalabb dolgozó: " + Dolgozok[fiatal].nev + ",életkor: " + Dolgozok[fiatal].kor + ", fizetése: " + Dolgozok[fiatal].fizetes + " beosztása: " + Dolgozok[fiatal].beosztas);

function FiatalFizuemeles(tomb) {
    let legfiatalabbIndex = Legfiatalabb(tomb);
    return tomb[legfiatalabbIndex].fizetes += 30000;
}

FiatalFizuemeles(Dolgozok);

document.write("<hr>A legfiatalabb dolgozó fizuemelés után: " + Dolgozok[fiatal].nev + ",életkor: " + Dolgozok[fiatal].kor + ", fizetése: " + Dolgozok[fiatal].fizetes + " beosztása: " + Dolgozok[fiatal].beosztas);

document.write("<hr> Mennyi az átlagkereset?");

function Atlagber(tomb) {
    return Bertomeg(tomb) / tomb.length;
}

document.write("<br>Az átlagkereset:" + Atlagber(Dolgozok));

function AtlagAlattiakFizuemeles(tomb) {
    let atlag = Atlagber(tomb);
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i].fizetes < atlag) {
            tomb[i].fizetes *= 1.1;
        }
    }
    return Atlagber(tomb);
}
document.write("<hr> Az átlagkereset bérkompenzáció után: " + Math.round(AtlagAlattiakFizuemeles(Dolgozok)));

document.write("<hr> Ki a legidősebb dolgozó?");
function Legidosebb(tomb) {
    let maxIndex = 0;
    for (let i = 1; i < tomb.length; i++) {
        if (tomb[i].kor > tomb[maxIndex].kor) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
let idos = Legidosebb(Dolgozok);
document.write("<br>A legidősebb dolgozó: " + Dolgozok[idos].nev + ",életkor: " + Dolgozok[idos].kor + ", fizetése: " + Math.round(Dolgozok[idos].fizetes) + " beosztása: " + Dolgozok[idos].beosztas);

document.write("<hr> Mennyi év van még a nyugdíjig neki?");
function Nyugdijaskor(tomb) {
    let nyuggerKor = tomb[Legidosebb(tomb)].kor;
    return 65 - nyuggerKor;
}

document.write("<br>" + Nyugdijaskor(Dolgozok) + " éve van még hátra");
