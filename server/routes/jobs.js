// // routes/jobs.js
// const express = require('express');
// const router = express.Router();
// const Job = require('../models/job'); // Ensure the correct model file is imported

// // GET job data by JobId
// router.get('/:JobId', async (req, res) => {
//   const { JobId } = req.params; // Log received JobId parameter
//   console.log('Received JobId:', JobId);

//   try {
//     const job = await Job.findOne({ JobId }); // Query the database for job with matching JobId
//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }
//     console.log('Found job:', job); // Log database query result
//     res.json(job);
//   } catch (error) {
//     console.error('Error fetching job:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
