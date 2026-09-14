const mongodb = require('../routes/data/db.js');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    // #swagger.tags = ['Users']
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
    // #swagger.tags = ['Users']
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

const createUser = async (req, res) => {
    // #swagger.tags = ['Users']
    const user = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response);
    }
}

const updateUsers = async (req, res) => {
    // #swagger.tags = ['Users']
    const userId = new objectId(req.params.id);
    const updatedUser = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().collection('users').updateOne({ _id: userId }, { $set: updatedUser });
    if (response.modifiedCount > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(response);
    }
}

const deleteUsers = async (req, res) => {
    // #swagger.tags = ['Users']
    const userId = new objectId(req.params.id);
    const response = await mongodb.getDb().collection('users').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(response);
    }
}

module.exports = { 
    getAll, 
    getSingle,
    createUser,
    updateUsers,
    deleteUsers 
};