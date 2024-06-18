var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/"

async function PontszamSzerintRendezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");

        const rendezesBeallitasai = { Pontszam: -1 };

        const eredmeny = await collection.find({}, { projection: { _id: 0, Csapat: 1, Helyezes: 1 } }).sort(rendezesBeallitasai).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a művelet feldolgozása során ", err);
    }
}
PontszamSzerintRendezes();