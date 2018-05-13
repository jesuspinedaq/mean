const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
  firstName : {
    type: String
  },
  lastName: {
    type: String
  }
});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
