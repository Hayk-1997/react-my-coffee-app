const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

// 2
module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL);
    return {Links: db.collection('links')};
}