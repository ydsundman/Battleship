/* global document:true */
define('app', ['game','renderer'], function(game, renderer) {
	var start = function() {
		game.start();
	};

	var init = function() {
		game.reset();
		var ships = document.getElementById('ships');
		ships.innerHTML = renderer.renderShip(game.ship);
		var grid = document.getElementById('grid');
		grid.innerHTML = renderer.renderGrid(game.grid);
	};
	return {
		init: init,
		start: start,
		game: game
	};
});