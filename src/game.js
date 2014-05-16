define('game', ['grid', 'ship'], function(Grid, Ship) {

	var game = {
		grid: new Grid(),
		ship: new Ship(5),
		startGame: function() {
			game.inProgress = true;
		},
		inProgress: false
	};

	return game;
});