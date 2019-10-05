
const mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    x: {type: String},
    y: {type: String},
 });
mongoose.model('Data', dataSchema);