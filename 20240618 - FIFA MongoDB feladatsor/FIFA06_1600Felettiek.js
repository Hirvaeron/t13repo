var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/"

async function NagyobbMint1600() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");

        const eredmeny = await collection.find({ Pontszam: { $gt: 1600 } }, { projection: { _id: 0, Csapat: 1, Pontszam: 1 } }).toArray();
        console.log(eredmeny);
        client.close();
    } catch (err) {
        console.error("Hiba történt a művelet feldolgozása során ", err);
    }
}
NagyobbMint1600();