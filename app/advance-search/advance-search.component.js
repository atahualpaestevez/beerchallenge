angular.module('AdvanceSearch')
	.component('advanceSearch',{
			templateUrl: 'advance-search/advance-search.template.html',
			controller: ['$http','Holder', function AdvanceSearchController($http,Holder){
				var self = this;
				self.beers =[];
				
				self.getBeers = function(filter,value){
				var req = {
					 method: 'GET',
					 url: 'https://api.punkapi.com/v2/beers?'+filter+'='+value,
					 headers: {
					   'Content-Type': "application/json"
					 }
				};

				if (filter != null && value != null) {
					$http(req).then(
					function(response){console.log(response); self.beers=   response.data    }, 
					function(err){console.log('error'); console.log(err);}
				  );
				}
				else{
					alert('Please select a filter option and a value');
				}
				
			}

			}]
	});