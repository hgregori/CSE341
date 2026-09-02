const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => { 
 if(_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }
  mongodb.connect(process.env.MONGO_URI)
  .then((client) => {
  _db = client.db();

  console.log("Connected to MongoDB");
  console.log("Database:", _db.databaseName);

  callback(null, _db);
})
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      callback(err, null);
    });
};

const getDb = () => {
    if (!_db) {
        throw new Error("Database not initialized. Call initDb first.");
    } else {
        return _db;
    }
};

module.exports = { 
    initDb, 
    getDb 
    };