
module.exports = router => {

// Add your routes here - above the module.exports line

///////// (Used Alpha Iteration 10)
// Iteration 1 - Scenario 1

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/');
});

router.post('/beta-private/iteration-1/scenario-1/', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/claimant-details');
});

router.post('/beta-private/iteration-1/scenario-1/claimant-details', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/claim-date');
});

router.post('/beta-private/iteration-1/scenario-1/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/about-the-baby');
});

router.post('/beta-private/iteration-1/scenario-1/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-1/scenario-1/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/scenario-1/date-last-worked');
  }
});

router.post('/beta-private/iteration-1/scenario-1/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/date-last-worked');
});

router.post('/beta-private/iteration-1/scenario-1/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-1/scenario-1/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-1/scenario-1/summary');
    }
    else {
      res.redirect('/beta-private/iteration-1/scenario-1/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-1/scenario-1/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-1/scenario-1/summary');
  }
  else {
    res.redirect('/beta-private/iteration-1/scenario-1/chosen-map-date');
  }
});

router.post('/beta-private/iteration-1/scenario-1/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-1/scenario-1/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/scenario-1/chosen-map-date');
  }
});

router.post('/beta-private/iteration-1/scenario-1/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/chosen-map-date');
});

router.post('/beta-private/iteration-1/scenario-1/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-1/scenario-1/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/scenario-1/summary');
  }
});

router.post('/beta-private/iteration-1/scenario-1/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-1/summary');
});

// Iteration 1 - Scenario 2

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-2/');
});

router.post('/beta-private/iteration-1/scenario-2/', function (req, res) {
  res.redirect('/beta-private/iteration-1/scenario-2/summary');
});

// Alt

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-alt/');
});

router.post('/beta-private/iteration-alt/', function (req, res) {
  res.redirect('/beta-private/iteration-alt/dates');
});

router.post('/beta-private/iteration-alt/dates', function (req, res) {
  res.redirect('/beta-private/iteration-alt/award-decision');
});


// Tabs

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-alt-tabs/');
});

router.post('/beta-private/iteration-alt-tabs/', function (req, res) {
  res.redirect('/beta-private/iteration-alt-tabs/dates');
});

router.post('/beta-private/iteration-alt-tabs/dates', function (req, res) {
  res.redirect('/beta-private/iteration-alt-tabs/award-decision');
});

}
