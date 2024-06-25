const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/";

async function TornaVagyUszas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const lekerdezesEredmenyei = await collection.find({
            $or: [{
                Sportag: "torna"
            },
            {
                Sportag: "uszas"
            }]
        }, {
            projection: { _id: 0, Sportag: 1, VersenySzam: 1 }
        }).toArray();
        console.log(lekerdezesEredmenyei);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kért művelet feldolgozása során: ", err);
    }
}
TornaVagyUszas();