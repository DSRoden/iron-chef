'use strict';

function Recipe(){
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.all = function(cb){
  Recipe.collection.find().toArray(cb);
};

module.exports = Recipe;

