'use strict';

angular.module('BeerApp', [
	'ngRoute',
	'BeerChallengeContent',
	'FavoriteBeer',
	'AdvanceSearch'
	]).factory('Holder', function() {
  		var context = {};
  		function get(propertyName){
  			return context[propertyName];
  		}

  		function set(propertyName,value){
  			context[propertyName] = value;
  		}
  return {
    get:get,
    set:set,
    context:context
  };

});

