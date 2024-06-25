const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/";

async function LegnagyobbCsapat() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const rendezesBeallitasai = { CsapatMeret: -1 };
        const keresesEredmenye = await collection.find({}, { projection: { _id: 0, Helyezes: 1, CsapatMeret: 1, Sportag: 1, Versenyszam: 1 } }).sort(rendezesBeallitasai).limit(1).toArray();
        console.log(keresesEredmenye);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kért művelet feldolgozása során: ", err);
    }
}
LegnagyobbCsapat();