const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/";

async function NincsValtozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");
        const keresesiMinta = { Valtozas: 0 }

        const eredmeny = await collection.find(keresesiMinta, { projection: { _id: 0, Csapat: 1 } }).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a művelet feldolgozása során ", err);
    }
}

NincsValtozas();