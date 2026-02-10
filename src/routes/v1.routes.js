const express = require('express');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'NexCart API is healthy',
    data: {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
    meta: {},
  });
});

module.exports = router;
