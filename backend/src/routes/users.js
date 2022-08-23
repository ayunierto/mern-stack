const { Router } = require('express');
const router = Router();

const { getUsers, storeUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(storeUser);

router.route('/:id')
    .delete(deleteUser);

module.exports = router;