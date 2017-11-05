// server/api/stores.js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const centerSchema = new Schema({
  // Shopping center name
  name: {
    type: String
  },
  // Shopping center address
  address: {
    type: String
  },
  // Associated assets id
  assets_id: {
    type: [String]
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('centerSchema', centerSchema);
