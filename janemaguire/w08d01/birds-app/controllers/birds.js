const Bird = require('../models/bird');

function birdsIndex(req, res) {
  Bird.find((err, birds) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(birds);
  });
}

function birdsCreate(req, res) {
  Bird.create(req.body, (err, bird) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(bird);
  });
}

function birdsShow(req, res) {
  Bird.findById(req.params.id, (err, bird) => {
    if(err) return res.status(500).json({ error: err });
    if(!bird) return res.status(404).json({ error: 'Not found' });
    return res.json(bird);
  });
}

function birdsUpdate(req, res) {
  Bird.findById(req.params.id, (err, bird) => {
    if(err) return res.status(500).json({ error: err });
    if(!bird) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      bird[key] = req.body[key];
    }

    bird.save((err, bird) => {
      if(err) return res.status(400).json({ error: err });
      res.json(bird);
    });
  });
}

function birdsDelete(req, res) {
  Bird.findById(req.params.id, (err, bird) => {
    if(err) return res.status(500).json({ error: err });
    if(!bird) return res.status(404).json({ error: 'Not found' });

    bird.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}


module.exports = {
  index: birdsIndex,
  create: birdsCreate,
  show: birdsShow,
  update: birdsUpdate,
  delete: birdsDelete
};
