
const express = require('express');
const router = express.Router();

const logController = require('../controllers/log');

router.get('/', logController.getIndex);

router.get('/logs/:id', logController.getPost);
/*

router.put('/:id', blogController.putPost);

*/
module.exports = router;
