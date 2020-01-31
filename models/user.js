const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  batch: {
    type: String,
    require: true
  },
  dob: {
    type: String,
    require: true
  },
  blood: {
    type: String,
    require: true
  },
  injury: [
    {
      type: String,
      require: true
    }
  ],
  age: {
    type: String,
    require: true
  },
  spec: {
    type: String,
    require: true
  },
  experience: {
    type: String,
    require: true
  },
  designation: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date()
  }
});

module.exports = mongoose.model('soldiers', UserSchema);
