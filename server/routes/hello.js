const express = require('express');

const router = express.Router();

router.route('/')
  .get(function(req, res){
    res.send('hello from routes');
  });

  module.exports = router;