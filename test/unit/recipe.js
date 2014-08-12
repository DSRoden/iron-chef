/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Recipe   = require('../../app/models/recipe'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'iron-chef-test';

describe('Recipe', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Person object', function(){
      var r = new Recipe();
      expect(r).to.be.instanceof(Recipe);
    });
  });

  describe('.all', function(){
    it('should get all recipes', function(done){
      Recipe.all(function(err, recipes){
        expect(recipes).to.have.length(3);
        done();
      });
    });
  });
});

