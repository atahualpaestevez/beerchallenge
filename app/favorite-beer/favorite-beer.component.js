angular.module('FavoriteBeer')
	.component('favoriteBeer',{
			templateUrl: 'favorite-beer/favorite-beer.template.html',
			controller: ['Holder', function FavoriteBeerController(Holder){
				var self = this;
				self.beers = Holder.context.beers;
				 self.removeFromFavourite = function(beer){
				    	 var index = self.beers.indexOf(beer);
				    	 console.log(  self.beers[index].name+ ' removed from favorite' );
				    	 self.beers.splice(index,1);
				    
				    }

				    self.isFavourite = function(beer){
				    	return self.beers.indexOf(beer) > -1;
				    }
			}]
	});