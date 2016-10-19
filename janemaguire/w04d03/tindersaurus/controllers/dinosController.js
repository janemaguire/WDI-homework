const Dino = require('../models/dinos');

// INDEX
function dinosIndex(req, res) {
    Dino.find({}, (err, dinos) => {
        if(err) return res.status(500).send("500: Server Error");
        res.render('dinos/index', { dinos });
    });
}

// NEW
function dinosNew(req, res) {
    res.render('dinos/new');
}

// CREATE
function dinosCreate(req, res) {
    Dino.create(req.body.dino, (err, dino) => {
        if(err) return res.status(500).send("500: Server Error");
        res.redirect(301, '/dinos');
    });
}

// SHOW
function dinosShow(req, res) {
  Dino.findById(req.params.id, (err, dino) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('dinos/show', { dino });
  });
}

// EDIT
function dinosEdit(req, res) {
  Dino.findById(req.params.id, (err, dino) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('dinos/edit', { dino });
  });
}


module.exports = {
    index: dinosIndex,
    new: dinosNew,
    create: dinosCreate,
    show: dinosShow,
    edit: dinosEdit
};
