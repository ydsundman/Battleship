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
	});

	describe('start', function() {
		it('should start game', function() {
			expect(typeof game.start).toBe('function');
			game.start();
			expect(game.inProgress).toBe(true);
		});

		it('should place ship in top left corner which means it covers the first five grid cells', function() {
			game.start();
			expect([[0,0], [0,1], [0,2], [0,3], [0,4]]).toEqual(game.ship.location);
		});
	});

	describe('reset', function() {
		it('should set game progress to false', function() {
			expect(typeof game.reset).toBe('function');
			game.reset();
			expect(game.inProgress).toBe(false);
		});

		it('should reset ship location', function() {
			game.reset();
			expect(game.ship.location).toBeUndefined();
		});

	});

});