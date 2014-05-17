define('game', ['grid', 'ship'], function(Grid, Ship) {

	var game = {
		grid: new Grid(),
		ship: new Ship(5),
		startGame: function() {
			game.inProgress = true;
			game.ship.location = ['a1', 'a2', 'a3', 'a4', 'a5'];
		},
		inProgress: false
	};

	return game;
});