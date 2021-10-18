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
  res.redirect('/iteration-1/claim-summary');
});

// Iteration 2

router.post('/', function (req, res) {
  res.redirect('/iteration-2/claimant-details');
});

router.post('/iteration-2/claimant-details', function (req, res) {
  res.redirect('/iteration-2/dates');
});

router.post('/iteration-2/dates', function (req, res) {
  res.redirect('/iteration-2/claim-summary');
});


// Alt

router.post('/', function (req, res) {
  res.redirect('/iteration-alt/claimant-details');
});

router.post('/iteration-alt/claimant-details', function (req, res) {
  res.redirect('/iteration-alt/dates');
});

router.post('/iteration-alt/dates', function (req, res) {
  res.redirect('/iteration-alt/claim-summary');
});

module.exports = router
