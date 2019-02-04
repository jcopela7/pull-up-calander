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

exports.get_todays_date = function(req,res){
	var todaysDate=new Date();

	PullUps.find({'date':todaysDate}, '_id', function(err,data){
		if (err)
			res.send(err);
		console.log(data);
		res.json(data);	
		});

};

exports.submit_PullUps = function (req,res){
	var new_pullUp= new PullUps();
	console.log(req.body)
	new_pullUp.jon = req.body.jon;
	new_pullUp.paul = req.body.paul;
	new_pullUp.brandon = req.body.brandon;
	new_pullUp.date = req.body.date;
	new_pullUp.save()
		.then(item=>{
			res.send("item saved to database")
		});
};

exports.update_PullUps = function (req, res){
	console.log(req.body);
	PullUps.findByIdAndUpdate(req.params._id, req.body, { new: true }, function(err, model) {
		if (err) {
			res.json(err);
		  } else {
			res.json(model);
		  }
	})
}

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