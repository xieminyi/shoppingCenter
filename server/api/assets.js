// server/api/assets.js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const assetSchema = new Schema({
  // Asset name
  name: {
    type: String,
    index: true
  },
  // Asset dimensions
  dimensions: {
    type: String
  },
  // Associated Shopping center name
  center_name: {
    type: String,
    index: true
  },
  // Asset status: "active" or "inactive"
  status: {
  	type: String,
  	index: true
  },
  location: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('assetSchema', assetSchema);
