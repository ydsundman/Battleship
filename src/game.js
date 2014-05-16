define('game', ['grid', 'ship'], function(Grid, Ship) {
	return function() {
		this.grid = new Grid();
		this.ships = {'ship1':new Ship(1), 'ship2':new Ship(2), 'ship3':new Ship(3), 'ship4':new Ship(4), 'ship5':new Ship(5)};
	};
});