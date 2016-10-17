const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('../views/index'));
router.get('/clinton', (req, res) => res.render('../views/clinton'));
router.get('/trump', (req, res) => res.render('../views/trump'));

module.exports = router;
