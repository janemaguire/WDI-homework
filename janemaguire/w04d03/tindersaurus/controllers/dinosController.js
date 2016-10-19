const Dino = require('../models/dinos');

function dinosIndex(req, res) {
    Dino.find({}, (err, dinos) => {
        if(err) return res.status(500).send("500: Server Error");
        res.render('dinos/index', { dinos });
    });
}

module.exports = {
    index: dinosIndex
};
