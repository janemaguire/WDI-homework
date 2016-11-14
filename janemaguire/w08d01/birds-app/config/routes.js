const router = require('express').Router();
const birdsController = require('../controllers/birds');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/birds')
  .get(birdsController.index)
  .post(birdsController.create);

router.route('/birds/:id')
  .get(birdsController.show)
  .put(birdsController.update)
  .delete(birdsController.delete);

module.exports = router;
