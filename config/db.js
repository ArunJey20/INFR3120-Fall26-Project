
var mongoose = require('mongoose');
// Loads the Shift model for the database
require('../models/shift');
// Connects the application to the ShiftTrack MongoDB database
function connectDB() {
  mongoose.connect(process.env.MONGODB_URI)
    .then(function() {
      console.log('MongoDB connected successfully');
    })
    .catch(function(err) {
      console.log('MongoDB connection error:', err.message);
    });
}

// Allows app.js to use this connection function
module.exports = connectDB;
