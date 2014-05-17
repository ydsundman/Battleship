define('game', ['grid', 'ship'], function(Grid, Ship) {

	var game = {
		grid: new Grid(),
		ship: new Ship(5),
		start: function() {
			game.inProgress = true;
			game.ship.location = [[0,0], [0,1], [0,2], [0,3], [0,4]];
		},
		reset: function() {
			game.inProgress = false;
			game.ship.location = undefined;
		},
		inProgress: false
	};

	return game;
});