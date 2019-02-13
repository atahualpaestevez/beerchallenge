angular.module('BeerApp')
	.config(['$routeProvider',
		function config($routeProvider){
			$routeProvider
				.when('/home',{
					template: '<beer-challenge-content></beer-challenge-content>'
				}).
				when('/favourite',{
					template:'<favorite-beer></favorite-beer>'
				}).
				when('/search',{
					template:'<advance-search></advance-search>'
				}).
				otherwise('/home');
			}
		]);