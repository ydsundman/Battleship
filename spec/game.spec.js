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

	describe('attack hit', function() {
		beforeEach(function() {
			game.ship.location = [[0,0], [0,1], [0,2], [0,3], [0,4]];
		});
		it('should return that true if it hits a ship', function() {
			expect(game.isAttackHit([0,0])).toBe(true);
			expect(game.isAttackHit([0,1])).toBe(true);
			expect(game.isAttackHit([0,2])).toBe(true);
			expect(game.isAttackHit([0,3])).toBe(true);
			expect(game.isAttackHit([0,4])).toBe(true);
		});
		it('should return that false if it does not hit a ship', function() {
			expect(game.isAttackHit([1,0])).toBe(false);
			expect(game.isAttackHit([1,1])).toBe(false);
			expect(game.isAttackHit([1,2])).toBe(false);
			expect(game.isAttackHit([1,3])).toBe(false);
			expect(game.isAttackHit([1,4])).toBe(false);
			expect(game.isAttackHit([2,1])).toBe(false);
			expect(game.isAttackHit([3,2])).toBe(false);
			expect(game.isAttackHit([4,3])).toBe(false);
			expect(game.isAttackHit([5,4])).toBe(false);
			expect(game.isAttackHit([0,5])).toBe(false);
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