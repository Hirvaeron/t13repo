var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/"

function ObjektumLetrehozasa(vizsgaltTomb) {
    let ujAdatok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let ideiglenesAdat = vizsgaltTomb[i].split(";");
        let ujObjektum = {
            Csapat: ideiglenesAdat[0],
            Helyezes: Number(ideiglenesAdat[1]),
            Valtozas: Number(ideiglenesAdat[2]),
            Pontszam: Number(ideiglenesAdat[3])
        }
        ujAdatok.push(ujObjektum);
    }
    return ujAdatok;
}

async function AdatFeltoltes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");

        const fifa = [
            "Anglia;4;0;1662",
            "Argentína;10;0;1614",
            "Belgium;1;0;1752",
            "Brazília;3;-1;1719",
            "Chile;17;-3;1576",
            "Dánia;14;-1;1584",
            "Franciaország;2;1;1725",
            "Hollandia;13;3;1586",
            "Horvátország;8;-1;1625",
            "Kolumbia;9;-1;1622",
            "Mexikó;12;0;1603",
            "Németország;16;-1;1580",
            "Olaszország;15;1;1583",
            "Peru;19;0;1551",
            "Portugália;5;1;1643",
            "Spanyolország;7;2;1631",
            "Svájc;11;0;1604",
            "Svédország;18;0;1560",
            "Szenegál;20;0;1546",
            "Uruguay;6;-1;1639",
        ];
        let FifaAdatok = ObjektumLetrehozasa(fifa);
        const muveletek = await collection.insertMany(FifaAdatok);
        console.log("Sikeresen feltöltött dokumentumok száma: ", muveletek.insertedCount)
        client.close();

    }
    catch (err) {
        console.error("Hiba történt az adatfeltöltés során.", err);
    }

}
AdatFeltoltes();