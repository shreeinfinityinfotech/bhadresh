const { MongoClient } = require('mongodb'); //const MongoClient = require('mongodb').MongoClient    Both Are same it is my self understand ..;
const url = 'mongodb://127.0.0.1:27017';
const databse = 'codebychirag';
const client = new MongoClient(url);


async function dbConnection() {
    let result = await client.connect();
    let db = result.db(databse);
    return collection = db.collection('nodetube');

}

module.exports = dbConnection;