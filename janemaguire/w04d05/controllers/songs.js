const Song = require ('../models/song');

function songsIndex(req, res) {
  Song.find((err, songs) => {
    if(err) return res.status(500).json({error: '500: Server Error'});
    res.json(songs);
  });
}

function songsCreate(req, res) {
  Song.create(req.body, (err, song) => {
    if(err) return res.status(400).json({error: '400: Invalid Data'});
    res.status(201).json(song);
  });
}

function songsShow(req, res) {
  Song.findById(req.params.id, (err, song) => {
    if(err) return res.status(500).json({error: '500: Server Error'});
    res.json(song);
  });
}

function songsUpdate(req, res) {
  Song.findByIdAndUpdate(req.params.id, req.body, { new : true }, (err, song) => {
    if(err) return res.status(400).json({error: '400: Invalid Data'});
    res.json(song);
  });
}

function songsDelete(req, res) {
  Song.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({error: '500: Server Error'});
    res.status(204).send();
  });
}

module.exports = {
  index: songsIndex,
  create: songsCreate,
  show: songsShow,
  update: songsUpdate,
  delete: songsDelete

};
