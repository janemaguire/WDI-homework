const router = require('express').Router();
const birdsController = require('../controllers/birds');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook);

router.route('/birds')
  .get(birdsController.index)
  .post(secureRoute, birdsController.create);

router.route('/birds/:id')
  .get(birdsController.show)
  .put(secureRoute, birdsController.update)
  .delete(secureRoute, birdsController.delete);

module.exports = router;
