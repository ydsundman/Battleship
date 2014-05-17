define('game', ['grid', 'ship'], function(Grid, Ship) {

	var game = {
		grid: new Grid(),
		ship: new Ship(5),
		start: function() {
			game.inProgress = true;
			game.ship.location = ['a1', 'a2', 'a3', 'a4', 'a5'];
		},
		reset: function() {
			game.inProgress = false;
			game.ship.location = undefined;
		},
		inProgress: false
	};

	return game;
});