'use strict';


var mongoose = require('mongoose'),
PullUps = mongoose.model('PullUps');

exports.list_all_PullUps = function(req, res) {
  PullUps.find({}, function(err, data) {
    if (err)
      res.send(err);
  	console.log(data);
    res.json(data);
  });
};


// exports.create_a_pullUp = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, data) {
//     if (err)
//       res.send(err);
//     res.json(data);
//   });
// };


// exports.read_a_PullUp = function(req, res) {
//   PullUps.findById(req.params.taskId, function(err, data) {
//     if (err)
//       res.send(err);
//     res.json(data);
//   });
// };


// exports.update_a_PullUp = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, data) {
//     if (err)
//       res.send(err);
//     res.json(data);
//   });
// };


// exports.delete_a_PullUp = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, data) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };