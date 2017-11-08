angular.module('pokedexApp')
.directive('rolOnScroll', function(){

	return{
		restrict: 'A',
		link: function(scope,elem, attrs){
			window.onscroll = function(){
				var rotation = 'translateY(-50%) rotate(${window.scrollY / 15}deg)';
				elem[0].style.transform = rotation;
			}
		}
	}


});