/* global document:true */
define('app', ['game','renderer'], function(game, renderer) {


	var start = function() {
		game.start();
	};
	var registerStartButtonListener = function() {
		var button = document.getElementById('startGame');
		button.addEventListener('click', function() {
			start();
		});
	};
	var init = function() {
		registerStartButtonListener();
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