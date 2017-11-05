// server/api/logs.js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const logSchema = new Schema({
  // Shopping center, who changes data
  name: {
    type: String
  },
  activity: {
  	type: String,
  	index: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('logSchema', logSchema);
