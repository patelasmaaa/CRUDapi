let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let users = require('../models/user');

//Insert:
exports.add = function(req, res){
	let newUser = new users(req.body);
	newUser.save(function(err, data){
		if(err) res.send(err);
		console.log("Added in db");
		res.send(data);
	});
}

//Search:
exports.usersAll = function(req, res){
	users.find({}, function(err, data){
		if(err) res.send(err);
		console.log("Fetch all users");
		res.send(data);
	});
};

//Delete:
exports.delete = function(req, res){
	/*let id = mongoose.Types.ObjectId();
	console.log("Deleting " + id);*/

	users.deleteOne({
		/*firstname: req.query.firstname,
		lastname: req.query.lastname*/
		_id : req.params.userId
	}, function(err, product){
		if(err) res.send(err);
		console.log("Delete from db");
		res.send({message: 'Deleted'});
	});
};

//Find:
exports.fetch = function(req, res){
	let Uid = req.query.userId;
	users.findById(mongoose.Types.ObjectId(Uid), function(err, data){
		if(err) res.send(err);
		console.log("Search in db");
		res.send(data);
	});
};

//Update:
exports.update = function(req, res){
	//let id = mongoose.Types.ObjectId(req.query.userId);
	console.log("Update Id: " + req.params.userId);
	console.log("Update Id (body): " + req.body.userId);
	console.log("Update firstname: " + req.body.firstname);
	console.log("Update lastname: " + req.body.lastname);
	users.findOneAndUpdate({
		_id: req.body.userId,
	},
	{
		_id: req.body.userId,
		firstname: req.body.firstname,
		lastname: req.body.lastname
	},
	{new:true}, function(err, data){
		if(err) res.send(err);
		console.log("Updated");
		res.send(data);
	});
};
