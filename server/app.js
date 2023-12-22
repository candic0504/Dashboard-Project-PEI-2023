import { MongoClient } from 'mongodb'

// Assurez-vous que `client` est défini à ce niveau
const uri = 'mongodb+srv://candice:identifier2023@dashboardproject.pqclvmy.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


//const data = await mongoClient.db().collection('DashboardProject').find({}).toArray();
//console.log("!!!", data);

async function run() {
    try {
        await client.connect();
        console.log("Connecté à MongoDB");

        // Ici, vous pouvez appeler les fonctions pour interagir avec votre base de données
        await listDatabases(client);
    
        await getData(client, 'DashboardProject', 'users', { "location" : "greece" })

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Bases de données:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function findAllDocuments(mongoClient, dbName, collectionName) {
    const collection = mongoClient.db(dbName).collection(collectionName);
    const documents = await collection.find({}).toArray();

    console.log(`Documents dans ${collectionName}:`);
    documents.forEach(doc => console.log(doc));
}

async function getData (mongoClient, dbName, collectionName, condition){

    const collection = mongoClient.db(dbName).collection(collectionName);
    const documents = await collection.find(condition).toArray();

    console.log(`Documents dans ${collectionName}:`);
    documents.forEach(doc => console.log(doc));
}


run().catch(console.error);
