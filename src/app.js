/* global document:true */
define('app', ['game','renderer'], function(game, renderer) {
	var start = function() {
		game.start();
		renderer.renderGame(game);
		registerAttackListener();
	};
	var registerStartButtonListener = function() {
		var button = document.getElementById('startGame');
		button.addEventListener('click', function() {
			button.disabled = true;
			start();
		});
	};
	var registerAttackListener = function() {
		var grid = document.querySelector('#grid table');
		grid.addEventListener('click', function(e) {
			e.target.classList.add('miss');
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