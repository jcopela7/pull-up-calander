var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
  mongoose=require('mongoose'),
  PullUps=require('./api/models/pullUpsModel')
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://main:jonathan123@ds161794.mlab.com:61794/pullups'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pullUpsRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('Pull Ups RESTful API server started on: ' + port);