angular.module('BeerChallengeContent')
	.component('beerChallengeContent',{
		templateUrl:'beer-challenge-content/beer-challenge-content.template.html',
		controller: ['$http','Holder',
		function beerChallengeContent($http,Holder){
			//Auto Adjust windows height for infinity scroll
			document.getElementById('fixed').style.height = window.innerHeight + 'px';
			var self = this;
			self.beers = []; 
			self.favoriteBeers = [];
			self.randomBeers = [];
			
			Holder.set('beers',self.favoriteBeers);
			Holder.set('advanceSearch',self.beers);

			self.getBeers = function(){
				var req = {
					 method: 'GET',
					 url: 'https://api.punkapi.com/v2/beers',
					 headers: {
					   'Content-Type': "application/json"
					 }
				};
				$http(req).then(
					function(response){console.log(response);   response.data.map( x=>  self.beers.push(x) )  }, 
					function(err){console.log('error'); console.log(err);}
				  );
			}
			self.getBeers();

		    self.loadMore = function() {
		     	console.log('getting more beers');
		     	self.getBeers();   
		    };

		    self.addToFavourite = function(index){
		    	self.favoriteBeers.push(  self.beers[index] );
		    	console.log(  self.beers[index].name+ ' added to favorite' );
		    	console.log( self.favoriteBeers);
		    }

		    self.removeFromFavourite = function(beer){
		    	console.log(beer);
		    	 var index = self.favoriteBeers.indexOf(beer);
		    	 console.log(index);
		    	 console.log(  self.beers[index].name+ ' removed from favorite' );
		    	 self.favoriteBeers.splice(index,1);
		    
		    }

		    self.isFavourite = function(beer){
		    	return self.favoriteBeers.indexOf(beer) > -1;
		    }

		    self.setSelectedBeer = function(beer){
		    	self.selectedBeer = beer;
		    	getRandomBeer();
		    }

		    function getRandomBeer(){
		    	self.randomBeers = [];
		    	for( var i =0; i <3; i++){
		    		self.randomBeers.push(  self.beers[ Math.floor(Math.random() * self.beers.length)]  );
		    	} 
		    }

		}
]}).directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
        	
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});

