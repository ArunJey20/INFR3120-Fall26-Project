var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET add shift page. */
router.get('/add-shift', function(req, res, next) {
  res.render('add-shift', { title: 'Add Shift' });
});


/* handles the submitted add shift form */
router.post('/add-shift', function(req, res, next) {

  // gets the information entered in the form
  var shiftDate = req.body.shiftDate;
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  var hourlyWage = req.body.hourlyWage;

  // displays the submitted information in the terminal
  console.log(shiftDate, startTime, endTime, hourlyWage);

  // returns to the add shift page
  res.redirect('/add-shift');

});


module.exports = router;
