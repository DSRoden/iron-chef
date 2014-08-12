'use strict';

var Mongo = require('mongodb');

function Recipe(o){

  this.name = o.name;
  this.photo = o.photo;
  this.ingredients = o.ingredients.split(',').map(function(i){return i.trim();});
  this.instructions = o.instructions;

}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.create = function(o, cb){
  var r = new Recipe(o);
  Recipe.collection.save(r, cb);
};

Recipe.all = function(cb){
  Recipe.collection.find().toArray(cb);
};

Recipe.removeById = function(id, cb){
  id = (typeof id ==='string') ?  Mongo.ObjectID(id) : id;
  console.log(id);
  Recipe.collection.findAndRemove({_id:id},cb);
};
module.exports = Recipe;

