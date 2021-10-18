const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Iteration 1

router.post('/', function (req, res) {
  res.redirect('/iteration-1/claimant-details');
});

router.post('/iteration-1/claimant-details', function (req, res) {
  res.redirect('/iteration-1/dates');
});

router.post('/iteration-1/dates', function (req, res) {
  res.redirect('/iteration-1/confirmation');
});

// Iteration 2

router.post('/', function (req, res) {
  res.redirect('/iteration-2/claimant-details');
});

router.post('/iteration-2/claimant-details', function (req, res) {
  res.redirect('/iteration-2/dates');
});

router.post('/iteration-2/dates', function (req, res) {
  res.redirect('/iteration-2/confirmation');
});

module.exports = router
