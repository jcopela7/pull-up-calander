'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PullUpsSchema = new Schema({
    date: Date,
    jon: Number,
    brandon: Number,
    paul: Number
},
    {
        collection: 'Data'
    });

module.exports = mongoose.model('PullUps', PullUpsSchema);