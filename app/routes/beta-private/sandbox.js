
module.exports = router => {

// --- Sandbox ---------------------------------------------------------------------------------- //

router.post('/beta-private/sandbox/', function (req, res) {

  if (req.session.data['sandbox'] == 'add-employer') {
    
    // Claimant information
    req.session.data['claimant-name'] = 'Annika Martin';
    req.session.data['claimant-nino'] = 'XX123456X';
    req.session.data['claimant-dob'] = '18 December 1988';
    req.session.data['claimant-postcode'] = 'BR8 9WF';
    req.session.data['claimant-address'] = null;
    req.session.data['claimant-contact-number'] = '07847 171740';

    // Decision
    req.session.data['ma-decision'] = 'Allowed';
    req.session.data['ma-claim-creation-date'] = '6 December 2022';
    req.session.data['ma-claim-decision-date'] = '6 December 2022';
    req.session.data['ma-rate'] = 'Variable rate at £101.10 per week';
    req.session.data['ma-map-start'] = '23 January 2023';
    req.session.data['ma-map-end'] = '22 October 2023';

    // Test period dates
    req.session.data['ma-baby-due-date'] = '24 February 2023';
    req.session.data['ma-baby-birth-date'] = 'Baby not born yet';
    req.session.data['ma-test-period-first-day'] = '14 November 2021';
    req.session.data['ma-test-period-last-day'] = '18 February 2023';
    req.session.data['ma-test-period-week-fifteen'] = '6 November 2022';

    // Maternity Allowance period dates
    req.session.data['ma-map-claim-date-received'] = '9 January 2023';
    req.session.data['ma-map-expected-week-of-confinement'] = '19 February 2023';
    req.session.data['ma-week-eleventh'] = '4 December 2022';
    req.session.data['ma-week-fourth'] = '22 January 2023';
    req.session.data['ma-start-date-requested'] = '10 February 2023';
    req.session.data['ma-start-date-requested-status'] = 'Declined';
    req.session.data['ma-map-rule'] = 'Flexible Maternity Allowance Period';

    // Date Last Worked
    req.session.data['ma-map-claimant-stopped-work-date-last-worked'] = '9 January 2023';
    req.session.data['ma-map-claimant-stopped-work-reason'] = 'Maternity Leave';
    req.session.data['ma-map-claimant-stopped-work-pregnancy-related'] = null; //// ******
    req.session.data['ma-map-claimant-stopped-work-allowance-type'] = 'None';
    req.session.data['ma-map-claimant-stopped-work-allowance-start-date'] = null;
    req.session.data['ma-map-claimant-stopped-work-allowance-end-date'] = null;

    // Employment and earnings
    req.session.data['ma-employment-type'] = 'Employed';
    req.session.data['ma-employment-agency-test-period'] = null;
    req.session.data['ma-employment-agency-employment-start-date'] = null;
    req.session.data['ma-employment-agency-status'] = null;
    req.session.data['ma-employment-test'] = 'Met';
    req.session.data['ma-employer-1'] = 'ASDA LTD';
    req.session.data['ma-employer-2'] = 'GRAINGERS WHOLESALE LTD';
    req.session.data['ma-earnings-test'] = 'Met';
    //req.session.data['ma-average-earnings'] = '£112.31'; 

    // Highest earning weeks
    req.session.data['ma-week-1'] = '30 January 2022';
    req.session.data['ma-week-2'] = '6 February 2022';
    req.session.data['ma-week-3'] = '13 February 2022';
    req.session.data['ma-week-4'] = '20 February 2022';
    req.session.data['ma-week-5'] = '27 February 2022';
    req.session.data['ma-week-6'] = '6 March 2022';
    req.session.data['ma-week-7'] = '13 March 2022';
    req.session.data['ma-week-8'] = '20 March 2022';
    req.session.data['ma-week-9'] = '27 March 2022';
    req.session.data['ma-week-10'] = '3 April 2022';
    req.session.data['ma-week-11'] = '10 April 2022';
    req.session.data['ma-week-12'] = '17 April 2022';
    req.session.data['ma-week-13'] = '24 April 2022';

    req.session.data['ma-week-1-employer-1-amount'] = 65.00;
    req.session.data['ma-week-2-employer-1-amount'] = 65.00;
    req.session.data['ma-week-3-employer-1-amount'] = 65.00;
    req.session.data['ma-week-4-employer-1-amount'] = 65.00;
    req.session.data['ma-week-5-employer-1-amount'] = 40.00;
    req.session.data['ma-week-6-employer-1-amount'] = 65.00;
    req.session.data['ma-week-7-employer-1-amount'] = 50.00;
    req.session.data['ma-week-8-employer-1-amount'] = 50.00;
    req.session.data['ma-week-9-employer-1-amount'] = 65.00;
    req.session.data['ma-week-10-employer-1-amount'] = 65.00;
    req.session.data['ma-week-11-employer-1-amount'] = 65.00;
    req.session.data['ma-week-12-employer-1-amount'] = 50.00;
    req.session.data['ma-week-13-employer-1-amount'] = 50.00;

    req.session.data['ma-week-1-employer-2-amount'] = 52.50;
    req.session.data['ma-week-2-employer-2-amount'] = 52.50;
    req.session.data['ma-week-3-employer-2-amount'] = 52.50;
    req.session.data['ma-week-4-employer-2-amount'] = 52.50;
    req.session.data['ma-week-5-employer-2-amount'] = 60.00;
    req.session.data['ma-week-6-employer-2-amount'] = 52.50;
    req.session.data['ma-week-7-employer-2-amount'] = 55.00;
    req.session.data['ma-week-8-employer-2-amount'] = 55.00;
    req.session.data['ma-week-9-employer-2-amount'] = 52.50;
    req.session.data['ma-week-10-employer-2-amount'] = 52.50;
    req.session.data['ma-week-11-employer-2-amount'] = 52.50;
    req.session.data['ma-week-12-employer-2-amount'] = 55.00;
    req.session.data['ma-week-13-employer-2-amount'] = 55.00;

    req.session.data['ma-week-1-total-amount'] = req.session.data['ma-week-1-employer-1-amount'] + req.session.data['ma-week-1-employer-2-amount'];
    req.session.data['ma-week-2-total-amount'] = req.session.data['ma-week-2-employer-1-amount'] + req.session.data['ma-week-2-employer-2-amount'];
    req.session.data['ma-week-3-total-amount'] = req.session.data['ma-week-3-employer-1-amount'] + req.session.data['ma-week-3-employer-2-amount'];
    req.session.data['ma-week-4-total-amount'] = req.session.data['ma-week-4-employer-1-amount'] + req.session.data['ma-week-4-employer-2-amount'];
    req.session.data['ma-week-5-total-amount'] = req.session.data['ma-week-5-employer-1-amount'] + req.session.data['ma-week-5-employer-2-amount'];
    req.session.data['ma-week-6-total-amount'] = req.session.data['ma-week-6-employer-1-amount'] + req.session.data['ma-week-6-employer-2-amount'];
    req.session.data['ma-week-7-total-amount'] = req.session.data['ma-week-7-employer-1-amount'] + req.session.data['ma-week-7-employer-2-amount'];
    req.session.data['ma-week-8-total-amount'] = req.session.data['ma-week-8-employer-1-amount'] + req.session.data['ma-week-8-employer-2-amount'];
    req.session.data['ma-week-9-total-amount'] = req.session.data['ma-week-9-employer-1-amount'] + req.session.data['ma-week-9-employer-2-amount'];
    req.session.data['ma-week-10-total-amount'] = req.session.data['ma-week-10-employer-1-amount'] + req.session.data['ma-week-10-employer-2-amount'];
    req.session.data['ma-week-11-total-amount'] = req.session.data['ma-week-11-employer-1-amount'] + req.session.data['ma-week-11-employer-2-amount'];
    req.session.data['ma-week-12-total-amount'] = req.session.data['ma-week-12-employer-1-amount'] + req.session.data['ma-week-12-employer-2-amount'];
    req.session.data['ma-week-13-total-amount'] = req.session.data['ma-week-13-employer-1-amount'] + req.session.data['ma-week-13-employer-2-amount'];

    req.session.data['ma-total-earnings'] = req.session.data['ma-week-1-total-amount'] + req.session.data['ma-week-2-total-amount'] + req.session.data['ma-week-3-total-amount'] + req.session.data['ma-week-4-total-amount'] + req.session.data['ma-week-5-total-amount'] + req.session.data['ma-week-6-total-amount'] + req.session.data['ma-week-7-total-amount'] + req.session.data['ma-week-8-total-amount'] + req.session.data['ma-week-9-total-amount'] + req.session.data['ma-week-10-total-amount'] + req.session.data['ma-week-11-total-amount'] + req.session.data['ma-week-12-total-amount'] + req.session.data['ma-week-13-total-amount'];
    
    req.session.data['ma-average-earnings'] = req.session.data['ma-total-earnings'] / 13; // total earnings for E1 + E2 per week = week total - add up all weeks / 13 to get average weekly earnings

    req.session.data['ma-week-1-employer-1-source'] = 'RTI';
    req.session.data['ma-week-2-employer-1-source'] = 'RTI';
    req.session.data['ma-week-3-employer-1-source'] = 'RTI';
    req.session.data['ma-week-4-employer-1-source'] = 'RTI';
    req.session.data['ma-week-5-employer-1-source'] = 'RTI';
    req.session.data['ma-week-6-employer-1-source'] = 'RTI';
    req.session.data['ma-week-7-employer-1-source'] = 'RTI';
    req.session.data['ma-week-8-employer-1-source'] = 'RTI';
    req.session.data['ma-week-9-employer-1-source'] = 'RTI';
    req.session.data['ma-week-10-employer-1-source'] = 'RTI';
    req.session.data['ma-week-11-employer-1-source'] = 'RTI';
    req.session.data['ma-week-12-employer-1-source'] = 'RTI';
    req.session.data['ma-week-13-employer-1-source'] = 'RTI';

    req.session.data['ma-week-1-employer-2-source'] = 'RTI';
    req.session.data['ma-week-2-employer-2-source'] = 'RTI';
    req.session.data['ma-week-3-employer-2-source'] = 'RTI';
    req.session.data['ma-week-4-employer-2-source'] = 'RTI';
    req.session.data['ma-week-5-employer-2-source'] = 'RTI';
    req.session.data['ma-week-6-employer-2-source'] = 'RTI';
    req.session.data['ma-week-7-employer-2-source'] = 'RTI';
    req.session.data['ma-week-8-employer-2-source'] = 'RTI';
    req.session.data['ma-week-9-employer-2-source'] = 'RTI';
    req.session.data['ma-week-10-employer-2-source'] = 'RTI';
    req.session.data['ma-week-11-employer-2-source'] = 'RTI';
    req.session.data['ma-week-12-employer-2-source'] = 'RTI';
    req.session.data['ma-week-13-employer-2-source'] = 'RTI';

    res.redirect('/beta-private/sandbox/add-employer'); 
  } else {
    res.redirect('/beta-private/sandbox/copy-button-summary');
  }

});

router.post('/beta-private/sandbox/employers/', function (req, res) {
  res.redirect('/beta-private/sandbox/employers/summary');
});

router.post('/beta-private/sandbox/employers/summary', function (req, res) {
  if (req.session.data['add-another-employer'] == 'yes') {
    res.redirect('/beta-private/sandbox/employers/');
  }
  else {
    res.redirect('/beta-private/sandbox/add-employer');
  }
});

}