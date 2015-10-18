var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
/*var cookieParser = require('cookie-parser')*/
var session = require('express-session')
var morgan = require('morgan');

module.exports = function(app, config){

	/*app.configure(function(){*/
		app.set('views', config.rootPath + '/server/views');
		app.set('view engine', 'jade');
		// app.use(express.logger('dev'));
		app.use(morgan('dev'));
		/*app.use(cookieParser());*/
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(session({
      secret:'this is my big app secret 1234@#3234.,',
      resave:false,
      saveUninitialized:false
    }));
		app.use(passport.initialize());
		app.use(passport.session());
		app.use(express.static(config.rootPath + '/public'));
	/*});*/
}
