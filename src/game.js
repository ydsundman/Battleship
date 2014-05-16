define('game', ['grid', 'ship'], function(Grid, Ship) {
	return function() {
		this.grid = new Grid();
		this.ship = new Ship(5);
	};
});