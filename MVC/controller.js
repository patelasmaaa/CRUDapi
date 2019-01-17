let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let users = require('../models/user');

//insert
exports.add = function(req, res){
	let newUser = new users(req.body);
	newUser.save(function(err, data){
		if(err) res.send(err);

		res.json(data);
	});
}

//Search:
exports.usersAll = function(req, res){
	users.find({}, function(err, data){
		if(err) res.send(err);

		res.json(data);
	});
};

//Delete:
exports.delete = function(req, res){
	let id = mongoose.Types.ObjectId(req.query.userId);

	users.remove({
		_id: id
	}, function(err, product){
		if(err) res.send(err);

		res.json({message: 'Deleted'});
	});
};

//Find:
exports.fetch = function(req, res){
	let Uid = req.query.userId;
	users.findById(mongoose.Types.ObjectId(Uid), function(err, data){
		if(err) res.send(err);

		res.json(data);
	});
};

//Update:
exports.update = function(req, res){
	let id = mongoose.Types.ObjectId(req.query.userId);
	users.findOneAndUpdate({_id: id}, req.body, {new:true}, function(err, data){
		if(err) res.send(err);

		res.json(data);
	});
};

