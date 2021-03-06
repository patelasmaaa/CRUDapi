module.exports = function(app){
	let user = require('../MVC/controller');
	app.route('/users').get(user.usersAll).post(user.add);

	app.route('/users/:userId').get(user.fetch).put(user.update).delete(user.delete);
};
