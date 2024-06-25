const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/";

async function DobogosVersenyszamok() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const keresesEredmenye = await collection.find({
            $or: [{
                Helyezes: 1
            }, {
                Helyezes: 2
            },
            {
                Helyezes: 3
            }]
        },
            { projection: { _id: 0, VersenySzam: 1, Helyezes: 1 } }).toArray();
        console.log(keresesEredmenye);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kért művelet feldolgozása során: ", err);
    }
}
DobogosVersenyszamok();