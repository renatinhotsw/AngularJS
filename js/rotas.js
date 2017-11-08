angular.module('pokedexApp')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/pokedex:pokeNumber',{
			templateUrl:'templates/pokeInfoView.html',
			controller: 'PokeInfoController as vm'
		})

		.when('/pokedex',{
			templateUrl:'templates/pokedexView.html',
			controller: 'PokedexController as vm'
		})
		.otherwise({ // caso o usuario digite uma URL inexistente, me manda para a página inicial
				redirectTo:'/pokedex'
		})
}]);