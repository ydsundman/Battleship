define(['game', 'grid', 'ship'], function(game, Grid, Ship) {
	describe('game', function() {
		it('is an object', function() {
			expect(typeof game).toBe('object');
		});

		it('should be constructed with a Grid and a Ship', function() {
			expect(game.grid).toBeDefined();
			expect(game.grid instanceof Grid).toBe(true);

			expect(game.ship).toBeDefined();
			expect(game.ship instanceof Ship).toBe(true);
			expect(game.ship.size).toBe(5);
		});

		it('startGame should start game', function() {
			expect(typeof game.startGame).toBe('function');
			game.startGame();
			expect(game.inProgress).toBe(true);
		});

		it('startGame should place ship in top left corner which means it covers the first five grid cells', function() {
			game.startGame();
			expect(['a1', 'a2', 'a3', 'a4', 'a5']).toEqual(game.ship.location);
		});

	});
});