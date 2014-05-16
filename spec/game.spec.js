define(['game', 'grid', 'ship'], function(Game, Grid, Ship) {
	describe('Game constructor function', function() {
		it('should be a function', function() {
			expect(typeof Game).toBe('function');
		});

		it('should be constructed with a Grid and a Ship', function() {
			var game = new Game();
			expect(game.constructor).toBe(Game);

			expect(game.grid).toBeDefined();
			expect(game.grid instanceof Grid).toBe(true);

			expect(game.ship).toBeDefined();
			expect(game.ship instanceof Ship).toBe(true);
			expect(game.ship.size).toBe(5);
		});
	});
});