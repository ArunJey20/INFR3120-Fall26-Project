
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Defines the information stored for each work shift
var ShiftSchema = new Schema({
    shiftDate: String,
    startTime: String,
    endTime: String,
    hourlyWage: Number
});

// Creates the Shift model for MongoDB
mongoose.model('Shift', ShiftSchema);
