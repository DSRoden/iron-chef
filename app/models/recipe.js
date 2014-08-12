'use strict';

function Recipe(o){
 this.name = o.name;
 this.photo = o.photo;
 this.ingredients = [];
 this.instructions = o.instructions;

}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.all = function(cb){
  Recipe.collection.find().toArray(cb);
};

module.exports = Recipe;

