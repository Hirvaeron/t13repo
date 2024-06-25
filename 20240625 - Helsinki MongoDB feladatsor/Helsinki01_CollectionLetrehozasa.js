const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/"

async function KollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Helsinki");
        console.log("A Helsinki kollekció a T13 adatbázisban létrejött.")
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kollekció létrehozása során: ", err);
    }
}
KollekcioLetrehozas();
