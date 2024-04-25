let helsinki = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
]

interface HelsinkiAdatok {
    helyezes: number;
    sportoloSzama: number;
    sportag: string;
    versenyszam: string;
}

function ObjektumFeltolto(feltoltendoElem: string[]): HelsinkiAdatok[] {
    let beolvasottAdatok: HelsinkiAdatok[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(" ");
        let olimpiaiPontszerzok: HelsinkiAdatok = {
            helyezes: Number(daraboltAdatok[0]),
            sportoloSzama: Number(daraboltAdatok[1]),
            sportag: daraboltAdatok[2],
            versenyszam: daraboltAdatok[3]
        }
        beolvasottAdatok.push(olimpiaiPontszerzok);
    }
    return beolvasottAdatok;
}

let helsinkiObjektum = ObjektumFeltolto(helsinki);
console.log(helsinkiObjektum);

function PontszerzoHelyezesek(vizsgaltTomb: HelsinkiAdatok[]): number {
    return vizsgaltTomb.length;
}

function PontszerzoHelyezesekKiir(eredmeny: number): void {
    document.write("3. feladat:<br>");
    document.write("Pontszerző helyezések száma: " + eredmeny);
}

PontszerzoHelyezesekKiir(PontszerzoHelyezesek(helsinkiObjektum));

function MegszerzettErmekSzama(vizsgaltTomb: HelsinkiAdatok[]): [number, number, number] {
    let arany: number = 0;
    let ezust: number = 0;
    let bronz: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            arany++;
        }
        if (vizsgaltTomb[i].helyezes == 2) {
            ezust++;
        }
        if (vizsgaltTomb[i].helyezes == 3) {
            bronz++;
        }
    }
    return [arany, ezust, bronz];
}
function MegszerzettErmekSzamaOsszesen(ermek: [number, number, number]): number {
    return ermek[0] + ermek[1] + ermek[2];
}

function ErmeAdatokKiir(ermeKategoriak: [number, number, number], osszesErem: number): void {
    document.write("<br>4. feladat:<br>");
    document.write("Arany: " + ermeKategoriak[0] + "<br>");
    document.write("Ezüst: " + ermeKategoriak[1] + "<br>");
    document.write("Bronz: " + ermeKategoriak[2] + "<br>");
    document.write("Összesen: " + osszesErem + "<br>");
}

const ermeAdatok = MegszerzettErmekSzama(helsinkiObjektum);

ErmeAdatokKiir(ermeAdatok, MegszerzettErmekSzamaOsszesen(ermeAdatok));

function OlimpiaiPontokSzama(vizsgaltTomb: HelsinkiAdatok[]): number {
    let osszpontszam: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        switch (vizsgaltTomb[i].helyezes) {
            case 1:
                osszpontszam += 7;
                break;
            case 2:
                osszpontszam += 5;
                break;
            case 3:
                osszpontszam += 4;
                break;
            case 4:
                osszpontszam += 3;
                break;
            case 5:
                osszpontszam += 2;
                break;
            case 6:
                osszpontszam += 1;
                break;
        }
    }
    return osszpontszam;
}

function OlimpiaiPontokSzamaKiir(eredmeny: number): void {
    document.write("5. feladat:<br>");
    document.write("Olimpiai pontok száma: " + eredmeny);
}

OlimpiaiPontokSzamaKiir(OlimpiaiPontokSzama(helsinkiObjektum));

function UszasEsTornaSzama(vizsgaltTomb: HelsinkiAdatok[]): [number, number] {
    let uszas = 0;
    let torna = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportag == "uszas") {
            uszas++;
        }
        if (vizsgaltTomb[i].sportag == "torna") {
            torna++;
        }
    }
    return [uszas, torna];
}

function UszasEsTornaVizsgalat(ermekSzama: [number, number]): string {
    let uszasErmekSzama = ermekSzama[0];
    let tornaErmekSzama = ermekSzama[1];
    if (uszasErmekSzama > tornaErmekSzama) {
        return "Úszás sportágban szereztek több érmet";
    } else if (uszasErmekSzama == tornaErmekSzama) {
        return "Egyenlő volt az érmek száma";
    } else {
        return "Torna sportágban szereztek több érmet";
    }
}

function UszasEsTornaVizsgalatKiir(vizsgalatEredmenye: string): void {
    document.write("<br>6. feladat: <br>");
    document.write(vizsgalatEredmenye);
}

const uszasEsTornaErmekSzama = UszasEsTornaSzama(helsinkiObjektum);
UszasEsTornaVizsgalatKiir(UszasEsTornaVizsgalat(uszasEsTornaErmekSzama));

function TypoJavitas(vizsgaltTomb: HelsinkiAdatok[]): HelsinkiAdatok[] {
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportag == "kajakkenu") {
            vizsgaltTomb[i].sportag = "kajak-kenu";
        }
    }
    return vizsgaltTomb;
}

function TombGeneralo(vizsgaltTomb: HelsinkiAdatok[]): string[] {
    let helsinki2: string[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        const { helyezes, sportoloSzama, sportag, versenyszam } = vizsgaltTomb[i];
        const row = `${helyezes} ${sportoloSzama} ${sportag} ${versenyszam}`;
        helsinki2.push(row);
    }
    return helsinki2;
}

console.log(TombGeneralo(TypoJavitas(helsinkiObjektum)))


function LegtobbSportolo(vizsgaltTomb: HelsinkiAdatok[]): [number, string, string, number] {
    let legtobbSportoloSzam: number = vizsgaltTomb[0].sportoloSzama;
    let maxIndex = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportoloSzama > legtobbSportoloSzam) {
            legtobbSportoloSzam = vizsgaltTomb[i].sportoloSzama;
            maxIndex = i;
        }
    }
    return [vizsgaltTomb[maxIndex].helyezes, vizsgaltTomb[maxIndex].sportag, vizsgaltTomb[maxIndex].versenyszam, vizsgaltTomb[maxIndex].sportoloSzama];
}

function LegtobbSportoloKiir(kiirandoAdatok: [number, string, string, number]): void {
    document.write("<br>8.feladat<br>");
    document.write("Helyezés: " + kiirandoAdatok[0] + "<br>");
    document.write("Sportág: " + kiirandoAdatok[1] + "<br>");
    document.write("Versenyszám: " + kiirandoAdatok[2] + "<br>");
    document.write("Sportolók száma: " + kiirandoAdatok[3] + "<br>");
}

LegtobbSportoloKiir(LegtobbSportolo(helsinkiObjektum));