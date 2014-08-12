'use strict';

var Recipe = require('../model/recipe');
exports.index = function(req, res){
  res.render('home/index');
};

exports.all = function(req, res){
  Recipe.all(function(err, recipes){
    res.render('home/index', {recipes:recipes});
  });
};

