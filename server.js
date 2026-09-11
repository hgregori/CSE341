const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./routes/data/db.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'POST, GET, PUT, OPTIONS, DELETE'
    );
    next();
});

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.error("Error initializing MongoDB connection:", err);
    } else {
        app.listen(PORT, () => {
            console.log(`Database is initialized and server is running on port ${PORT}`);
        });
    }
});