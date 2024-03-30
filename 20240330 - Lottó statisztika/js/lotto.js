//Hatodik verzió
//Univerzális lottószám generátor


//Extra funkciók:
/*
- Aktuálisan kihúzott számokat vizuálisan megjeleníteni ("golyókkal") [megvan]
- Melyik számot hányszor húzták ki, valamilyen táblázatos vagy lista formával. [megvan] Esetleg lottó típust választani..
- Melyik volt a leggyakoribb és a legritkább  kihúzott szám [megvan]
- Melyik volt a legkisebb és a legnagyobb kihúzott szám, és a terjedelem a számok között(legkisebb és legnagyobb érték közötti különbség) [megvan]
- Aktuálisan a legkisebb és a legnagyobb kihúzott szám, és a terjedelem a számok között(legkisebb és legnagyobb érték közötti különbség) [megvan]
- Táblázatos forma esetén, az aktuálisan kihúzott számokat más színnel jelölje meg.
- Találat számláló, a te számaid közül mennyi szerepel, és mennyi volt az eddigi összes találatod (akár lebontva 1-5 találatra)

 */

let eddigiSzamok = {};
function UniverzalisLottoszamGenerator(szamokMennyisege, maxKihuzhatoSzam) {
    if (szamokMennyisege <= maxKihuzhatoSzam) {
        let lottoSzamok = [];
        while (lottoSzamok.length < szamokMennyisege) {
            let generaltSzam = Math.round(Math.random() * maxKihuzhatoSzam - 1) + 1;
            if (!lottoSzamok.includes(generaltSzam)) {
                lottoSzamok.push(generaltSzam);
            }
        }
        for (const szam of lottoSzamok) {
            if (eddigiSzamok[szam]) {
                eddigiSzamok[szam]++;
            } else {
                eddigiSzamok[szam] = 1;
            }
        }
        return lottoSzamok;
    } else {
        return "Nem megfelelő a függvény paraméterezése!";
    }
}

function UjSzamHuzas() {
    const kihuzottSzamok = UniverzalisLottoszamGenerator(5, 90);
    const golyoKontener = document.querySelector("#nyeroSzamok");

    golyoKontener.innerHTML = "";

    kihuzottSzamok.forEach(szam => {
        const ujGolyo = document.createElement("div");
        ujGolyo.classList.add("golyo");
        ujGolyo.classList.add("bg-danger");
        ujGolyo.textContent = szam;
        golyoKontener.appendChild(ujGolyo);
    });
    console.log(eddigiSzamok);
    return kihuzottSzamok;
}
let szamokTablaTest = document.querySelector("#lottoSzamok");
function TablazatFrissites() {
    szamokTablaTest.innerHTML = "";
    for (const szam in eddigiSzamok) {
        const sor = document.createElement("tr");
        const szamCella = document.createElement("td");
        const elofordulasCella = document.createElement("td");
        szamCella.textContent = szam;
        elofordulasCella.textContent = eddigiSzamok[szam];
        sor.appendChild(szamCella);
        sor.appendChild(elofordulasCella);
        szamokTablaTest.appendChild(sor);
    }
}

ujSzamokGomb.addEventListener("click", () => {
    let aktHuzas = UjSzamHuzas();
    TablazatFrissites();
    LegtobbszorKihuzottSzam(eddigiSzamok);
    LegkevesebbszerKihuzottSzam(eddigiSzamok);
    LegkisebbKihuzottSzam();
    LegnagyobbKihuzottSzam();
    Terjedelem();
    AktualisLegkisebbKihuzottSzam(aktHuzas);
    AktualisLegnagyobbKihuzottSzam(aktHuzas);
    AktualisTerjedelem(aktHuzas)
});

function LegtobbszorKihuzottSzam(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribb").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzam(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabb").textContent = legritkabb;
}

function LegkisebbKihuzottSzam() {
    let legkisebb = null;
    for (const szam in eddigiSzamok) {
        if (legkisebb === null || parseInt(szam) < legkisebb) {
            legkisebb = parseInt(szam);
        }
    }
    document.querySelector("#legkisebb").textContent = legkisebb;
}

function LegnagyobbKihuzottSzam() {
    let legnagyobb = null;
    for (const szam in eddigiSzamok) {
        if (legnagyobb === null || parseInt(szam) > legnagyobb) {
            legnagyobb = parseInt(szam);
        }
    }
    document.querySelector("#legnagyobb").textContent = legnagyobb;
}

function Terjedelem() {
    let legkisebb = null;
    let legnagyobb = null;
    for (const szam in eddigiSzamok) {
        if (legkisebb === null || parseInt(szam) < legkisebb) {
            legkisebb = parseInt(szam);
        }
        if (legnagyobb === null || parseInt(szam) > legnagyobb) {
            legnagyobb = parseInt(szam);
        }
    }
    let terjedelem = legnagyobb - legkisebb;
    document.querySelector("#terjedelem").textContent = terjedelem;
}

function AktualisLegkisebbKihuzottSzam(lottoSzamok) {
    let legkisebb = null;
    for (const huzas of lottoSzamok) {
        if (legkisebb === null || huzas < legkisebb) {
            legkisebb = huzas;
        }
    }
    document.querySelector("#aktLegkisebb").textContent = legkisebb !== null ? legkisebb : "Nincs kihúzott szám";
}

function AktualisLegnagyobbKihuzottSzam(lottoSzamok) {
    let legnagyobb = null;
    for (const huzas of lottoSzamok) {
        if (legnagyobb === null || huzas > legnagyobb) {
            legnagyobb = huzas;
        }
    }
    document.querySelector("#aktLegnagyobb").textContent = legnagyobb !== null ? legnagyobb : "Nincs kihúzott szám";
}

function AktualisTerjedelem(lottoSzamok) {
    let legkisebb = null;
    let legnagyobb = null;
    for (const huzas of lottoSzamok) {
        if (legkisebb === null || huzas < legkisebb) {
            legkisebb = huzas;
        }
        if (legnagyobb === null || huzas > legnagyobb) {
            legnagyobb = huzas;
        }
    }
    let terjedelem = legnagyobb !== null && legkisebb !== null ? legnagyobb - legkisebb : 0;
    document.querySelector("#aktTerjedelem").textContent = terjedelem;
}