const {MongoClient} = require('mongodb');
const express = require('express');
const app = express();
const client = new MongoClient('mongodb://localhost:27017/home/students');

async function connectToDb() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB');
    }
}

async function safeMain() {
    await connectToDb();
    const db = client.db('myDataBase');
    const student = db.collection('students');
    await student.insertOne({name: 'Sayad', age: 25, group: 'javascript'});

    
    app.get('/home/students', async function(req, res) {
        // try {
            const result = await student.findOne({name: 'Sayad'});
            res.send(result);
            console.log(result);
            console.log('Data retrieved successfully!');
        // } catch (err) {
        //     console.error('Error retrieving data:', err);
        // }
    });
}

app.listen(8081);

safeMain();