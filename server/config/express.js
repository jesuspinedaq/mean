const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index');

const app = express();

app.use(express.static("/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);

app.use(function(err, req, res, next){
  res
  .status(500)
  .json({
    message: err.message,
    stack: err.stack
  })
})
module.exports = app;