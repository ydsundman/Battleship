/* global document:true */
define('app', ['game','renderer'], function(game, renderer) {


	var start = function() {
		game.start();
		renderer.renderGame(game);
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
		renderer.renderGame(game);
	};
	return {
		init: init,
		start: start,
		game: game
	};
});