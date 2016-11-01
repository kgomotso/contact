var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
//var Schema = mongoose.Schema; 

//mongoose.connection.once('connected', function(){
	//console.log("connected to database")
//});


db.on('error',console.error);

mongoose.connect('mongodb://localhost/contactlist');
var clschema = mongoose.Schema({name:String, email:String, number:String},
	{collection:'contactlist'});
	var Contactlist = mongoose.model('Contactlist',clschema);
	//module.exports = Contactlist;


app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/contactlist/', function (req, res) {
	console.log("I recieved a GET request");

// db.contactlist.find(function(err,doc){
 //	if (err) throw err;
	//console.log(doc );
	//res.json(doc);
//});

Contactlist.find(function(err,contact){
	if (err) throw err;
	res.json(contact);
	//console.log(docs);
	//res.jason(docs);
});
});
/*
//Contactlist.save(function(err){
//	if (err) throw err;
//});
app.post('/contactlist/',function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});
app.delete('/contactlist/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongoose.objectId(id)}, function(err, doc) {
		res.json(doc);
	})
});
app.get('/contactlist/:id', function(req, res ,next) {
	Contactlist.findById(req.params.id, function(err, post){
		if (err) return next(err);

	//console.log(id);
	//db.contactlist.findOne({_id: mongoose.objectId(id)}, function(err,doc) {
		res.json(post);
	})
});

app.put('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(reg.body.name);
	db.contactlist.findAndModify({query: {_id: mongoose.objectId(id)},
	update: { $set: {name:req.body.name, email:req.body.email, number:req.body.number}},
	new:true}, function(err, doc) {
			res.json(doc);
	});
	
	});*/

 app.listen(27017);
 console.log("server running on port 27017");
