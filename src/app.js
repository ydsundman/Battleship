/* global document:true */
require(['game'], function(Game) {
	var game = new Game();
	var ships = document.getElementById('ships');
	ships.innerHTML = ('Ship size: ' + game.ship.size);
	var grid = document.getElementById('grid');
	grid.innerHTML = ('Grid dimensions: ' + game.grid.columnCount + 'x' + game.grid.rowCount);

});