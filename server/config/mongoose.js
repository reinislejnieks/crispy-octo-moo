var mongoose = require('mongoose'),
  userModel = require('../models/User');
/*  courseModel = require('../models/Course'),
  customerModel = require('../models/Customer'),
  freightModel = require('../models/Freight');*/

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('db opened');
  });

  userModel.createDefaultUsers();
/*  courseModel.createDefaultCourses();
  customerModel.createDefaultCustomers();
  freightModel.createDefaultFreights();*/

};
