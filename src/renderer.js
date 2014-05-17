/* global document:true */
define('renderer', function() {

	var renderGame = function(game){
		var ships = document.getElementById('ships');
		if (!game.inProgress) {
			ships.innerHTML = renderShip(game.ship);
		} else {
			ships.innerHTML = '';
		}
		var grid = document.getElementById('grid');
		grid.innerHTML = renderGrid(game.grid);
	};
	var renderShip = function(ship){
		var shipString = '<table><tr>';
		for(var shipLength = 0; shipLength < ship.size; shipLength++){
			shipString +='<td class="ship"></td>';
		}
		shipString += '</tr></table>';
		return shipString;
	};
	var renderGrid = function(grid){
		var gridString = '<table>';
		for(var row = 0; row < grid.rowCount; row++){
			gridString += '<tr>';
			for(var col = 0; col < grid.columnCount; col++){
				gridString +='<td></td>';
			}
			gridString += '</tr>';
		}
		gridString += '</table>';
		return gridString;
	};
	return {
		renderGame: renderGame
	};
});