const express = require('express');
const personController = require('../controllers/person.controller');
const router = express.Router();

router.route('/')
  .get(personController.list)
  .post(personController.create);

router.route('/:id')
  .get(personController.load)
  .put(personController.update)
  .delete(personController.remove);


  module.exports = router;