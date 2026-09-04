const express = require('express');
const mongodb = require('./routes/data/db.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use('/', require('./routes/index.js'));

mongodb.initDb((err) => {
    if(err) {
        console.error("Error initializing MongoDB connection:", err);
    } else {
        app.listen(PORT, () => {
            console.log(`Database is initialized and server is running on port ${PORT}`);
        });
    }
});