// models/questions.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  companyId: String,
  question: String,
});

module.exports = mongoose.model('Question', questionSchema);
