'use strict';

var Mongo = require('mongodb');

function Recipe(o){

  this.name = (!(o.name.trim().length))     ? 'no name' : o.name;
  this.photo = (!o.photo)                   ? 'http://ruon.tv/wp-content/uploads/2014/02/default-image.png' : o.photo;
  this.ingredients = o.ingredients          || 'cream, spice, salt';
  this.ingredients = this.ingredients.split(',').map(function(i){return i.trim();});
  this.instructions = (!o.instructions)     ? 'no instructions' : o.instructions;
  this.created = new Date();
  this.category =                             o.category;

}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.create = function(o, cb){
  var r = new Recipe(o);
  Recipe.collection.save(r, cb);
};

Recipe.all = function(cb){
  Recipe.collection.find().sort({created: -1}).toArray(cb);

};

Recipe.removeById = function(id, cb){
  id = (typeof id ==='string') ?  Mongo.ObjectID(id) : id;
  console.log(id);
  Recipe.collection.findAndRemove({_id:id},cb);
};


module.exports = Recipe;

