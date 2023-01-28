const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
  phone_no: Number,
  score: Number,
  createddate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('score', scoreSchema)
