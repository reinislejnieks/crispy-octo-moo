var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users');

module.exports = function(app){
// express allows to pass 2 functions, if the first one does not pass, the second one won't
// be called
// app.get('/api/users', function(req, res, next){
// 	if(!req.isAuthenticated()){
// 		res.status(403);
// 		res.end();
// 	}else{
// 		next();
// 	}
// }, function(req, res){
// 	User.find({}).exec(function(err, collection){
// 		res.send(collection);
// 	});
// });

/* !!!!!!!!!!!!
  Use auth.requiresRole('admin') to use login
  or auth.giveAccess to bypass login or just remove auth part altogether

*/
/*
app.put('/api/finanses', auth.requiresRole('admin'), freights.updateDebitors);
app.get('/api/finanses', auth.requiresRole('admin'), freights.getDebitors);
app.get('/api/finanses/:from/:to', auth.requiresRole('admin'), freights.getProfits);

// app.get('/api/parvadajumi', auth.giveAccess, freights.getFreights);
app.get('/api/parvadajumi', auth.giveAccess, freights.sendJson);

app.get('/api/parvadajumi/:id', auth.giveAccess, freights.getFreightById);
app.delete('/api/parvadajumi', auth.giveAccess, freights.deleteFreightById);
app.get('/api/parvadajumi/:from/:to',  freights.getFreightByMonth);

app.put('/api/parvadajumi', auth.requiresRole('admin'), freights.updateFreight);
app.post('/api/parvadajumi', freights.createFreight);
*/
app.get('/api/users',  users.getUsers);
app.get('/api/users/:action',  users.logoutAll);
app.post('/api/users', users.createUser);
app.put('/api/users', users.updateUser);


/*
app.get('/api/courses', courses.getCourses);
app.get('/api/courses/:id', courses.getCourseById);
*/


app.get('/partials/*',function(req, res){
	/* from view directory defined in app.set */
	res.render('../../public/app/' + req.params);
});

app.post('/login', auth.authenticate);

app.post('/logout', function(req, res){
	// logout function by passport
	console.log('THE LOGOUT REQUEST -----------------------------------------------------------------------!',req);
	req.logout();
	res.end();
});

app.all('/api/*', function(req, res){
	res.send(404);
});

app.get('*', function(req, res){
	res.render('index', {
		bootstrappedUser: req.user
		// mongoMessage: mongoMessage
	})
});

}
