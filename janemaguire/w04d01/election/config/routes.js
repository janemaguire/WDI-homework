const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/clinton', (req, res) => res.render('clinton'));
router.get('/trump', (req, res) => res.render('trump'));

module.exports = router;
