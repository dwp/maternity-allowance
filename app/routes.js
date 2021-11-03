const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Iteration 1

router.post('/', function (req, res) {
  res.redirect('/iteration-1/');
});

router.post('/iteration-1/', function (req, res) {
  res.redirect('/iteration-1/dates');
});

router.post('/iteration-1/dates', function (req, res) {
  res.redirect('/iteration-1/claim-summary');
});

// Iteration 2

router.post('/', function (req, res) {
  res.redirect('/iteration-2/');
});

router.post('/iteration-2/', function (req, res) {
  res.redirect('/iteration-2/dates');
});

router.post('/iteration-2/dates', function (req, res) {
  res.redirect('/iteration-2/claim-summary');
});

// Iteration 3

router.post('/', function (req, res) {
  res.redirect('/iteration-3/');
});

router.post('/iteration-3/', function (req, res) {
  res.redirect('/iteration-3/claim-date');
});

router.post('/iteration-3/claim-date', function (req, res) {
  res.redirect('/iteration-3/dates');
});

router.post('/iteration-3/dates', function (req, res) {
  res.redirect('/iteration-3/chosen-map-date');
});

router.post('/iteration-3/chosen-map-date', function (req, res) {
  res.redirect('/iteration-3/claim-summary');
});

// Iteration 4

router.post('/', function (req, res) {
  res.redirect('/iteration-4/');
});

router.post('/iteration-4/', function (req, res) {
  res.redirect('/iteration-4/claim-date');
});

router.post('/iteration-4/claim-date', function (req, res) {
  res.redirect('/iteration-4/dates');
});

router.post('/iteration-4/dates', function (req, res) {
  res.redirect('/iteration-4/chosen-map-date');
});

router.post('/iteration-4/chosen-map-date', function (req, res) {
  res.redirect('/iteration-4/claim-summary');
});


// Alt

router.post('/', function (req, res) {
  res.redirect('/iteration-alt/');
});

router.post('/iteration-alt/', function (req, res) {
  res.redirect('/iteration-alt/dates');
});

router.post('/iteration-alt/dates', function (req, res) {
  res.redirect('/iteration-alt/award-decision');
});


// Tabs

router.post('/', function (req, res) {
  res.redirect('/iteration-alt-tabs/');
});

router.post('/iteration-alt-tabs/', function (req, res) {
  res.redirect('/iteration-alt-tabs/dates');
});

router.post('/iteration-alt-tabs/dates', function (req, res) {
  res.redirect('/iteration-alt-tabs/award-decision');
});

module.exports = router
