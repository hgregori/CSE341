const express = require('express');
const router = express.Router();

const usersController = require('../controller/users.js');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createUser);

router.put('/:id', usersController.updateUsers);

router.delete('/:id', usersController.deleteUsers);

module.exports = router;