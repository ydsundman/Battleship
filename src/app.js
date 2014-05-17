/* global document:true */
define('app', ['game','renderer'], function(game, renderer) {
	var init = function() {
		var ships = document.getElementById('ships');
		ships.innerHTML = renderer.renderShip(game.ship);
		var grid = document.getElementById('grid');
		grid.innerHTML = renderer.renderGrid(game.grid);
	};
	return {init: init};
});