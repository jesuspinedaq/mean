const mongoose = require('mongoose');

const app = require('./server/config/express');


const mongodbUrl = 'mongodb://localhost/example';
mongoose.connect(mongodbUrl);
mongoose.connection.on('err', function(err){
  console.log(err);
});

// mongoose.set('debug',function(collectionName, method, query, doc){
//   console.log(`${collectionName}.${method}`);
//   console.log(query, doc);
// })

app.listen(8000, function(){
  console.log('Server running in port', 8000);
});

module.exports = app;