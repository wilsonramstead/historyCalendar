
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/GoalTracker");

var GoalSchema = new mongoose.Schema({
    Name: { type: String, minlength: 3, unique:true, required:true},
    Description: { type: String, minlength: 3, required:true},
    Type: { type: String, required: true },
    DaysCompleted: [],
}, {timestamps:true});

module.exports = mongoose.model("Goal", GoalSchema);