var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development:{
		db: 'mongodb://localhost/soccerm',
		rootPath: rootPath,
		port: process.env.PORT || 4000
	},
	production:{
		db:  process.env.MONGOHQ_URL,
		rootPath: rootPath,
		port: process.env.PORT || 5000
	}
}
