const { MongoClient } = require("mongodb");

async function dataConnection() {
    const uri = "mongodb://demo:demo123@ac-xvu3hrn-shard-00-00.skbcv6a.mongodb.net:27017,ac-xvu3hrn-shard-00-01.skbcv6a.mongodb.net:27017,ac-xvu3hrn-shard-00-02.skbcv6a.mongodb.net:27017/?ssl=true&replicaSet=atlas-1trrzt-shard-0&authSource=admin&appName=Cluster0";

    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        await listDatabases(client);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
        console.log("MongoDB connection closed");
    }
}

function listDatabases(client) {
    const databasesList = client.db().admin().listDatabases();

    console.log(databasesList);
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

dataConnection();