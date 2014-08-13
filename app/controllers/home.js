'use strict';


var Recipe = require('../models/recipe');


exports.all = function(req, res){
  Recipe.all(function(err, recipes){
    res.render('home/index', {recipes:recipes});
  });
};

exports.create = function(req, res){
  Recipe.create(req.body, function(err, recipe){
    res.render('home/recipe', {recipe:recipe});
  });
};

exports.remove = function(req, res){
    //console.log(req.params.id);
  Recipe.removeById(req.params.id, function(err){
    res.send({id:req.params.id});
     //res.redirect('/');
  });
};


//exports.remove = function(req, res){
  //Recipe.removeById({_id: req.params.id}, function(err){
    //if(!err){
      //console.log('notifacation!');
      //res.status(200);
    //} else {
      //console.log('error in the remove function');
      //res.status(400);
    //}
    //res.redirect('/');
  //});
//};
//exports.remove = function(req, res){
  //Recipe.removeById({_id: req.params.id}, function(){
    //res.redirect('/');
  //});
//};
