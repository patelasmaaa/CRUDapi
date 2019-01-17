let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let userModel = require('./models/user');

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/dbtry');
let routes = require('./MVC/VO');

routes(app);
app.use(function(req, res){
	res.status(404).send({url: req.originalUrl + 'not found'})
})

app.listen(3001);

//let user = require('User');

/*app.listen(3000, function(){
	console.log('app listen');
});

app.post('/insert', function(req, res){
	let userObj = new userModel(req.body);

	let result = {};
	userObj.save(function(err){
		if(err){
			result.status = 0;
			result.message = err.message;
		}
		else{
			result.status = 1;
			result.message = "Added";
		}

		let jsonStr = JSON.stringify(result);
		res.json(jsonStr);
	});
});
*/
