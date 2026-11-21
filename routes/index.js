var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Gets the Shift model to save work shifts
var Shift = mongoose.model('Shift');

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

  // Creates a new shift using the information from the form
var newShift = new Shift({
    shiftDate: shiftDate,
    startTime: startTime,
    endTime: endTime,
    hourlyWage: hourlyWage
});

// Saves the shift to MongoDB
newShift.save()
    .then(function() {
        console.log('Shift saved successfully');
        res.redirect('/add-shift');
    })
    .catch(function(err) {
        console.log('Error saving shift:', err);
        next(err);
    });

});

/* GET shift history page. */
router.get('/shift-history', function(req, res, next) {

  // Retrieves all saved shifts from MongoDB
  Shift.find({})
    .then(function(shifts) {

      // Passes the saved shifts to the shift history page
      res.render('shift-history', {
        title: 'Shift History',
        shifts: shifts
      });
    })
    .catch(function(err) {
      next(err);
    });
});

module.exports = router;
