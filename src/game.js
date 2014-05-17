define('game', ['grid', 'ship'], function(Grid, Ship) {

	var game = {
		grid: new Grid(),
		ship: new Ship(5),
		isAttackHit: function(attackCoordinate){
			var areCoordinatesEqual = function (value) {
				return value[0] === attackCoordinate[0] && value[1] === attackCoordinate[1];
			};
			return game.ship.location && game.ship.location.some(areCoordinatesEqual);
		},
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