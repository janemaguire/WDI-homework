const router = require('express').Router();
const songsController = require ('../controllers/songs');

router.route('/songs')
  .get(songsController.index)
  .post(songsController.create);

router.route('/songs/:id')
  .get(songsController.show)
  .put(songsController.update)
  .delete(songsController.delete);
  
module.exports = router;
