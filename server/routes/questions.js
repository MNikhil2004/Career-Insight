// routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/questions/:companyId', async (req, res) => {
  try {
    const questions = await Question.find({ companyId: req.params.companyId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

