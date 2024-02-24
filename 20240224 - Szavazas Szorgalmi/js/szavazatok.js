const szavazatok = [
    { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
    { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
    { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
    { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
    { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
    { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
    { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
    { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
    { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
    { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
    { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
    { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
    { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
    { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
    { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
    { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
    { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
    { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
    { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
    { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
    { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
    { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
    { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
    { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
    { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
    { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
    { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
    { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
    { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
    { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
    { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
    { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
    { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
    { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
    { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
    { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
    { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
    { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
    { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
    { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];


function AlapTablaGenerator(szavazatokTabla) {
    var table = document.querySelector("#szavazatokTabla");

    for (let i = szavazatokTabla.length - 1; i >= 0; i--) {
        var adatSor = table.insertRow(1);
        var korzet = adatSor.insertCell(0);
        var szavazatokSzama = adatSor.insertCell(1);
        var kepviseloNeve = adatSor.insertCell(2);
        var kepviseloPartja = adatSor.insertCell(3);
        korzet.innerHTML = szavazatokTabla[i].korzet;
        szavazatokSzama.innerHTML = szavazatokTabla[i].szavazat;
        kepviseloNeve.innerHTML = szavazatokTabla[i].nev;
        kepviseloPartja.innerHTML = szavazatokTabla[i].part;
    }
}

AlapTablaGenerator(szavazatok);

function KepviselokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}

function KepviselokSzamaKiir() {
    let kepviseloSzam = KepviselokSzama(szavazatok);
    document.querySelector("#f1").innerHTML = `A helyhatósági választáson ${kepviseloSzam} képviselőjelölt indult.`;
}

let f1eventGomb = document.querySelector("#f1feladat");
f1eventGomb.addEventListener("click", KepviselokSzamaKiir);


function PartKiolvaso() {
    let partId = document.querySelector("#partValaszto").value;
    return partId;
}

function PartKepviselok(vizsgaltTomb, vizsgaltPart) {
    let db = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].part == vizsgaltPart) {
            db++
        }
    }
    return db;
}
function PartNeve(partAzonosito) {
    if (partAzonosito == "GYEP") {
        return "Gyümölcsevők Pártja";
    } else if (partAzonosito == "HEP") {
        return "Húsevők Pártja";
    } else if (partAzonosito == "TISZ") {
        return "Tejivók Szövetsége";
    } else if (partAzonosito == "ZEP") {
        return "Zöldségevők Pártja";
    } else {
        return "Független jelöltek";
    }
}

function PartKepviselokKiir() {
    let valasztottPart = PartKiolvaso();
    let kepviselokSzama = PartKepviselok(szavazatok, valasztottPart);

    if (PartNeve(valasztottPart) == "Független jelöltek") {
        document.querySelector("#f2").innerHTML = `A ${PartNeve(valasztottPart)} összesen ${kepviselokSzama} db képviselőt indítottak.`;
    } else {
        document.querySelector("#f2").innerHTML = `A ${PartNeve(valasztottPart)} összesen ${kepviselokSzama} db képviselőt indított.`;
    }

}

let f2eventGomb = document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click", PartKepviselokKiir);

function KepviseloNevTisztit(vizsgaltTomb) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let tisztitottNev = vizsgaltTomb[i].nev.trim();
        vizsgaltTomb[i].nev = tisztitottNev;
    }
    return vizsgaltTomb;
}

function KepviseloNevOsszefuz() {
    let vezetekNev = document.querySelector("#vezetekNev").value;
    let keresztNev = document.querySelector("#keresztNev").value;
    let teljesNev = vezetekNev.trim().concat(" " + keresztNev.trim());
    return teljesNev;
}

function VanEIlyenNevuKepviselo(vizsgaltTomb, teljesNev) {
    let szerepeltE = false;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == teljesNev) {
            szerepeltE = true;
        }
    }
    return szerepeltE;
}

function KepviseloInfo(vizsgaltTomb, teljesNev) {
    let szavazatok = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == teljesNev) {
            szavazatok = vizsgaltTomb[i].szavazat;
        }
    }
    return szavazatok;
}

function KepviseloInfoKiir() {
    let tisztitottAdatTabla = KepviseloNevTisztit(szavazatok);
    let keresettKepviselo = KepviseloNevOsszefuz();
    let szerepelE = VanEIlyenNevuKepviselo(tisztitottAdatTabla, keresettKepviselo);
    if (szerepelE) {
        document.querySelector("#f3").innerHTML = `${keresettKepviselo} ${KepviseloInfo(tisztitottAdatTabla, keresettKepviselo)} db szavazatot szerzett a választásokon.`;
    } else {
        document.querySelector("#f3").innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
    }
}

let f3eventGomb = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", KepviseloInfoKiir);

function OsszesSzavazat(vizsgaltTomb) {
    let osszesSzavazat = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszesSzavazat += vizsgaltTomb[i].szavazat;
    }
    return osszesSzavazat;
}

function SzavazatokAranya(osszesLeadottSzavazat) {
    const jogosultSzavazokSzama = 12345;
    let arany = ((osszesLeadottSzavazat / jogosultSzavazokSzama) * 100).toFixed(2);
    return arany;
}

function SzavazatokAranyaKiir() {
    let osszesSzavazo = OsszesSzavazat(szavazatok);
    let jogosultSzavazokAranya = SzavazatokAranya(osszesSzavazo);
    document.querySelector("#f4").innerHTML = `A választáson ${osszesSzavazo} állampolgár, a jogosultak ${jogosultSzavazokAranya}%-a vett részt.`
}

let f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", SzavazatokAranyaKiir);


function SzavazatokMennyisege(vizsgaltTomb) {
    let partSzavazatai = {};
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        const part = vizsgaltTomb[i].part;
        const szavazat = vizsgaltTomb[i].szavazat;

        if (!partSzavazatai[part]) {
            partSzavazatai[part] = 0;
        }
        partSzavazatai[part] += szavazat;
    }
    return partSzavazatai;
}

function SzavazatokMennyisegeTablazatKiir() {
    const partokSzavazatai = SzavazatokMennyisege(szavazatok);
    var table = document.querySelector("#partSzavazatokTabla");

    for (let partAzonosito in partokSzavazatai) {
        var adatSor = table.insertRow(1);
        var partNeve = adatSor.insertCell(0);
        var osszSzavazat = adatSor.insertCell(1);

        var partTeljesNeve = PartNeve(partAzonosito);
        partNeve.innerHTML = partTeljesNeve;
        osszSzavazat.innerHTML = partokSzavazatai[partAzonosito];
    }
}

let f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", SzavazatokMennyisegeTablazatKiir, { once: true });

function LegtobbSzavazat(vizsgaltTomb) {
    let legnepszerubbJeloltek = [];
    let max = vizsgaltTomb[0].szavazat;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].szavazat > max) {
            max = vizsgaltTomb[i].szavazat;
        }
    }
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].szavazat == max) {
            let nevTomb = vizsgaltTomb[i].nev.split(" ");
            let partNev = vizsgaltTomb[i].part;
            if (partNev == "-") {
                partNev = "független"
            }
            legnepszerubbJeloltek.push({
                vezetekNev: nevTomb[0],
                keresztNev: nevTomb[1],
                part: partNev
            })
        }
    }
    return legnepszerubbJeloltek;
}

function LegtobbSzavazatTablazatKiir() {
    let legnepszerubbek = LegtobbSzavazat(KepviseloNevTisztit(szavazatok));
    var table = document.querySelector("#legnepszerubbTabla");
    for (let i = 0; i < legnepszerubbek.length; i++) {
        var adatSor = table.insertRow(1);
        var jeloltVezetekNeve = adatSor.insertCell(0);
        var jeloltKeresztNeve = adatSor.insertCell(1);
        var jeloltPartja = adatSor.insertCell(2);

        jeloltVezetekNeve.innerHTML = legnepszerubbek[i].vezetekNev;
        jeloltKeresztNeve.innerHTML = legnepszerubbek[i].keresztNev;
        jeloltPartja.innerHTML = legnepszerubbek[i].part;
    }
}

let f6eventGomb = document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", LegtobbSzavazatTablazatKiir, { once: true });

function Nyertesek(vizsgaltTomb) {
    let nyertesKepviselok = {};
    for (let i = vizsgaltTomb.length - 1; i >= 0; i--) {
        const korzet = vizsgaltTomb[i].korzet;
        const [vezetek, kereszt] = vizsgaltTomb[i].nev.split(" ");
        const part = vizsgaltTomb[i].part === "-" ? "Független" : vizsgaltTomb[i].part;
        const szavazat = vizsgaltTomb[i].szavazat;
        if (!nyertesKepviselok[korzet] || szavazat > nyertesKepviselok[korzet].szavazat) {
            nyertesKepviselok[korzet] = {
                vezetekNev: vezetek,
                keresztNev: kereszt,
                part: part,
                szavazat: szavazat
            };
        }
    }
    return nyertesKepviselok;
}

function NyertesekTablazatKiir() {
    const nyertesek = Nyertesek(KepviseloNevTisztit(szavazatok));
    var table = document.querySelector("#nyertesekTabla");

    for (let korzet in nyertesek) {
        var adatSor = table.insertRow(-1);
        var korzetCella = adatSor.insertCell(0);
        var vezetekNevCella = adatSor.insertCell(1);
        var keresztNevCella = adatSor.insertCell(2);
        var partCella = adatSor.insertCell(3);
        var szavazatCella = adatSor.insertCell(4);

        korzetCella.innerHTML = korzet;
        vezetekNevCella.innerHTML = nyertesek[korzet].vezetekNev;
        keresztNevCella.innerHTML = nyertesek[korzet].keresztNev;
        partCella.innerHTML = nyertesek[korzet].part;
        szavazatCella.innerHTML = nyertesek[korzet].szavazat;
    }
}

let f7eventGomb = document.querySelector("#f7feladat");
f7eventGomb.addEventListener("click", NyertesekTablazatKiir, { once: true });

function FeladatMutat(feladatAzonosito) {
    for (let i = 0; i <= 7; i++) {
        if (i != feladatAzonosito) {
            document.querySelector(`#feladat0${i}blokk`).style.display = "none";
        }
        else {
            document.querySelector(`#feladat0${i}blokk`).style.display = "block";
        }
    }
}


function F0mutat() {
    FeladatMutat(0);
}

function F1mutat() {
    FeladatMutat(1);
}

function F2mutat() {
    FeladatMutat(2);
}
function F3mutat() {
    FeladatMutat(3);
}
function F4mutat() {
    FeladatMutat(4);
}
function F5mutat() {
    FeladatMutat(5);
}
function F6mutat() {
    FeladatMutat(6);
}
function F7mutat() {
    FeladatMutat(7);
}


let g0event = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);
let g1event = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);
let g2event = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);
let g3event = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);
let g4event = document.querySelector("#g4");
g4event.addEventListener("click", F4mutat);
let g5event = document.querySelector("#g5");
g5event.addEventListener("click", F5mutat);
let g6event = document.querySelector("#g6");
g6event.addEventListener("click", F6mutat);
let g7event = document.querySelector("#g7");
g7event.addEventListener("click", F7mutat);

var forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
// })