define(['game', 'grid', 'ship'], function(Game, Grid, Ship) {
	describe('Game constructor function', function() {
		it('should be a function', function() {
			expect(typeof Game).toBe('function');
		});

		var shipExtractor = function(ships) {
			var result = [], ship;
			for (ship in ships) {
				if (ships.hasOwnProperty(ship)) {
					result.push(ships[ship]);
				}
			}
			return result;
		};

		it('should be constructed with a Grid and a set of Ships', function() {
			var game = new Game();
			expect(game.constructor).toBe(Game);

			expect(game.grid).toBeDefined();
			expect(game.grid instanceof Grid).toBe(true);

			expect(game.ships).toBeDefined();
			expect(typeof game.ships).toBe('object');
			var ships = shipExtractor(game.ships);
			expect(ships.length).toBe(5);
			ships.forEach(function(ship) {
				expect(ship instanceof Ship).toBe(true);
			});

		});
	});
});