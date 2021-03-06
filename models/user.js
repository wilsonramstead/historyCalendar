
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/GoalTracker");

var UserSchema = new mongoose.Schema({

    FirstName: { type: String, minlength: 2, required: true },
    LastName: { type: String, minlength: 2, required: true },

    // Email: { type: Email, minlength: 4, required: true },

    // CurrentMonth: { type: Array, required: true},
    // MonthTracker: [],
    // Goals: [],

}, {timestamps:true});

module.exports = mongoose.model("User", UserSchema);