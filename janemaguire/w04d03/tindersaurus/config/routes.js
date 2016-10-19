const express = require('express');
const router = express.Router();
const Dinos = require('../models/dinos');
const dinosController = require('../controllers/dinosController.js');

router.get('/dinos', dinosController.index);

router.get('/dinos', (req, res) => {
	Dinos.find({}, (err, dinos) => {
		if(err) return res.status(500).send("500: Server Error");
		res.render('dinos/index', { dinos });
	});
});

router.get('/dinos/new', (req, res) => res.render('dinos/new'));

router.post('/dinos', (req, res) => {
    Dino.create(req.body.dino, (err, dino) => {
        if(err) return res.status(500).send("500: Server Error");
        res.redirect(301, '/dinos');
    });
});

module.exports = router;
