'use strict';
module.exports = function(app) {
  var pullUpsList = require('../controllers/pullUpsController');

  // pullUpsList Routes
  app.route('/PullUps')
    .get(pullUpsList.list_all_PullUps)
  	.post(pullUpsList.submit_PullUps)
  	.put(pullUpsList.update_PullUps)
    //.post(pullUpsList.create_a_task);


  // app.route('/PullUps/:PullUpsId')
  //   .get(pullUpsList.read_a_task)
  //   .put(pullUpsList.update_a_task)
  //   .delete(pullUpsList.delete_a_task);
};