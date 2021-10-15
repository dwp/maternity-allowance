const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/', function (req, res) {
  res.redirect('claimant-details');
});

router.post('/claimant-details', function (req, res) {
  res.redirect('dates');
});

router.post('/dates', function (req, res) {
  res.redirect('confirmation');
});

module.exports = router
