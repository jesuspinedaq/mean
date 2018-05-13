const express = require('express');
const router = express.Router();

const helloRoutes = require('./hello');
const personRoutes = require('./person.route');

router.get('/', function(req, res){
  res.send('hello from this');
});

router.use('/hello',helloRoutes);
router.use('/person', personRoutes);

module.exports = router;