angular.module('pokedexApp')
.controller('PokedexController',PokedexController);

PokedexController.$inject= ['PokeApiFactory'];

function PokedexController (PokeApiFactory) {
	var vm = this;
	vm.searchText = '';
	
	//	vm.pkmList = PokeApiFactory.pkmList;
	
	/* - Tirei os dados fixos daqui, e coloquei 
	na factory PokeApiFactory, depois tirei da factory e busquei do servidor  https://pokeapi.co/api/v1/

	vm.pkmList = [
					{name: 'bulbasaur', number: '001'},
					{name: 'pikachu', number: '025'},
					{name: 'charizard', number: '006'},
					{name: 'pidgeot', number: '018'},
					{name: 'cranildos', number: '408'}

				];
	*/
	
	vm.pkmList = [];

	if(PokeApiFactory.pkmList.length){
		vm.pkmList = PokeApiFactory.pkmList;
	}else{
		PokeApiFactory.listAll()
		.then(pkmList => {
			vm.pkmList = pkmList; //pega a lista retornada pela promise
								// e salva na variavel do controller
		})
	}


}