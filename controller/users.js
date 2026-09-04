const mongodb = require('../routes/data/db.js');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const users = await mongodb
            .getDb()
            .collection('users')
            .find({})
            .toArray();

        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const getSingle = async (req, res) => {
    try {
        const userId = new objectId(req.params.id);
        const result = await mongodb.getDb().collection('users').find({ _id: userId }).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = { getAll, getSingle };