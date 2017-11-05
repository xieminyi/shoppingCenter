// server/api/auth.js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authSchema = new Schema({
  // auth hash
  hash: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('authSchema', authSchema);
