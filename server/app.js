import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const uri = 'mongodb+srv://candice:identifier2023@dashboardproject.pqclvmy.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

app.use(express.json());

//   Changer avec Dashboard et user,measure,sensors
//   http://localhost:3000/api/DashboardProject/users

//CRUD : Création
app.post('/api/:dbName/:collectionName', async (req, res) => {
    try {
        const { dbName, collectionName } = req.params;
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const document = req.body;
        const result = await collection.insertOne(document);
        res.status(201).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    } finally {
        await client.close();
    }
});


//  http://localhost:3000/api/DashboardProject/users?location=greece
//CRUD : Recherche avec connexion
app.get('/api/:dbName/:collectionName', async (req, res) => {
    try {
        const { dbName, collectionName } = req.params;
        const query = req.query; // Récupération des paramètres de requête

        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        
        // Utiliser les paramètres de requête comme filtre dans find()
        const documents = await collection.find(query).toArray();
        
        res.json(documents);
    } catch (e) {
        res.status(500).json({ message: e.message });
    } finally {
        await client.close();
    }
});

//CRUD : Update
app.put('/api/:dbName/:collectionName/:id', async (req, res) => {
    try {
        const { dbName, collectionName, id } = req.params;
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );
        res.json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    } finally {
        await client.close();
    }
});

//CRUD : Delete
app.delete('/api/:dbName/:collectionName/:id', async (req, res) => {
    try {
        const { dbName, collectionName, id } = req.params;
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        res.json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    } finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


