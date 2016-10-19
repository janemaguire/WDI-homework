const express = require('express');
const router = express.Router();
const Dinos = require('../models/dinos');
const dinosController = require('../controllers/dinosController.js');

router.get('/dinos', dinosController.index);
router.get('/dinos/new', dinosController.new);
router.post('/dinos', dinosController.create);
router.get('/dinos/:id', dinosController.show);
router.get('/dinos/:id/edit', dinosController.edit);
router.put('/dinos/:id', dinosController.update);
router.delete('/dinos/:id', dinosController.delete);

module.exports = router;
