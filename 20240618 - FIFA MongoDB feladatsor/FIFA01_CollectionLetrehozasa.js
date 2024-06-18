var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13Alex:JFOZahZTEvi30CYL@cluster0.wyjp93e.mongodb.net/"

async function kollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Fifa");
        console.log("A Fifa kollekció a T13 adatbázisban létrejött.")
        client.close();
    }
    catch (err) {
        console.error("Hiba történt a kollekció létrehozása során:", err);
    }
}

kollekcioLetrehozas();