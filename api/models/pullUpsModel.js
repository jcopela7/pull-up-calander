'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PullUpsSchema = new Schema({

    date:Date,
    jon:Number,
    brandon:Number,
    paul:Number

});

module.exports = mongoose.model('PullUps', PullUpsSchema);