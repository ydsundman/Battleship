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
	var markAttack = function(cell){
		var attackCoordinate = extractCoordinate(cell);
		if (game.isAttackHit(attackCoordinate)) {
			cell.classList.add('hit');
		} else {
			cell.classList.add('miss');
		}
	};
	var registerAttackListener = function() {
		var grid = document.querySelector('#grid table');
		grid.addEventListener('click', function(e) {
			markAttack(e.target);
		});
	};
	var init = function() {
		registerStartButtonListener();
		game.reset();
		renderer.renderGame(game);
	};
	var extractCoordinate = function(cell) {
		var getAsInt = function(attribute) {
			return parseInt(cell.getAttribute(attribute), 10);
		};
		var row = getAsInt('data-row');
		var col = getAsInt('data-col');
		return [row, col];
	};
	return {
		init: init,
		start: start,
		game: game,
		_markAttack: markAttack
	};
});