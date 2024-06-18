const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/";

async function Top3() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");

        const rendezesBeallitasai = { Helyezes: 1 };

        const eredmeny = await collection.find().sort(rendezesBeallitasai).limit(3).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a művelet feldolgozása során ", err);
    }
}
Top3();